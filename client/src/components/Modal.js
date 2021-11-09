import {useState,useContext} from "react";
import Alert from "./Alert";
import { Form, Modal,Button } from "react-bootstrap";
import { updateBalance } from "../adapters/mongodb";
import ctx from "../context";

export default function TransactionModal(props) {
  const [amount,setAmount] = useState("");
  const [alertMsg,setAlertMsg] = useState('')
  const { transaction, account, show, close, state } = props;
  const [ accountState, setAccountState ] = state;
  const {user} = useContext(ctx);

  const createAlert = (msg)=>{
    setAlertMsg(msg);
  }
  const resetAlert = ()=>{
    setAlertMsg("");
  }
  const handleChange = (e)=>{
    e.preventDefault();
    setAmount(e.target.value);
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const isValid = validate();

    if (isValid) {
      console.log("valid")
      const isDeposit = transaction === "Deposit";
      const newTotal = (isDeposit ? deposit : withdraw)(accountState);
      updateBalance(user,account,newTotal);
      setAccountState(newTotal);
      close();
    }
  }

  const validate = ()=>{
    var currentBalance = Number(accountState);
    var proposedAmount = Number(amount);

    if (!Number.isInteger(proposedAmount)) {
      createAlert("Must enter a whole number");
      setAmount('');
      return false;
    }

    if (proposedAmount <= 0 || proposedAmount > 1000000) {
      createAlert("Must be an amount between $1 and $1 million");
      setAmount('');
      return false;
    }

    if (transaction === "Deposit" || (proposedAmount <= currentBalance)) {
      return true
    }

    createAlert(`Withdraw may not exceed existing balance of $${accountState}`);
    setAmount(accountState);
    return false
  }

  const withdraw = (amt)=>(Number(accountState) - Number(amt));
  const deposit = (amt)=>(Number(accountState) + Number(amt));
  
  const Input = ()=>{
    return (
      <Form.Group className="mb-3">
        <Form.Label>{`${transaction} Amount`}</Form.Label>
          <span className="input-group-text">$</span>
          <input
            id="modal-input"
            autoComplete="off"
            className="form-control mb-3"
            value={amount}
            onChange={handleChange}
            required
          />
      </Form.Group>
    )
  }

  const closeModal = ()=>{
    setAmount("");
    close();
    resetAlert();
  }

  return (
    <Modal show={show} onHide={closeModal} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{`${transaction} into ${account}`}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Alert msg={alertMsg} reset={resetAlert}/>
          <Input/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            End Transaction
          </Button>
          <Button type="submit" variant="primary">
            {transaction}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
