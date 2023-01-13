import { useState, useContext } from "react";
import Alert from "./Alert";
import { Form, Modal, Button } from "react-bootstrap";
import { updateBalance } from "../adapters/mongodb";
import ctx from "../context";

export default function TransactionModal(props) {
  const [amount, setAmount] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const { transaction, account, show, close, state } = props;
  const [accountState, setAccountState] = state;
  const { user, createAlert } = useContext(ctx);

  const id = `${account}-${transaction}`.toLowerCase();

  const modalAlert = (msg) => {
    setAlertMsg(msg);
  };
  const resetAlert = () => {
    setAlertMsg("");
  };
  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    const targetAccount = account.toLowerCase();

    if (isValid) {
      const isDeposit = transaction === "Deposit";
      let newTotal;
      if (isDeposit) {
        newTotal = deposit(amount);
      } else {
        newTotal = withdraw(amount);
      }
      updateBalance(user, targetAccount, newTotal);
      setAmount("");
      setAccountState(newTotal);
      createAlert("Transaction complete", "success");
      close();
    }
  };

  const validate = () => {
    var currentBalance = Number(accountState);
    var proposedAmount = Number(amount);

    if (!Number.isInteger(proposedAmount)) {
      modalAlert("Must enter a whole number");
      setAmount("");
      return false;
    }

    if (proposedAmount <= 0 || proposedAmount > 1000000) {
      modalAlert("Must be an amount between $1 and $1 million");
      setAmount("");
      return false;
    }

    if (transaction === "Deposit" || proposedAmount <= currentBalance) {
      return true;
    }

    modalAlert(`Withdraw may not exceed existing balance of $${accountState}`);
    setAmount(accountState);
    return false;
  };

  const withdraw = (amt) => {
    let result = Number(accountState) - Number(amt);
    return String(result);
  };
  const deposit = (amt) => {
    let result = Number(accountState) + Number(amt);
    return String(result);
  };

  const Input = () => {
    return (
      <>
        <Form.Label>{`${transaction} Amount`}</Form.Label>
        <div className="input-group mb-3">
          <span className="input-group-text mb-3">$</span>
          <input
            id={id}
            className="form-control mb-3"
            value={amount}
            onChange={handleChange}
            required
          />
        </div>
      </>
    );
  };

  const closeModal = () => {
    setAmount("");
    close();
    resetAlert();
  };

  return (
    <Modal show={show} onHide={closeModal} animation={false} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{`${account} ${transaction}`}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Alert msg={alertMsg} reset={resetAlert} />
          <Input />
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
