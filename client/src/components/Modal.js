import {useState} from "react";
import useInput from "../hooks/useInput";
import useModal from "../hooks/useModal";
import Alert from "./Alert";
import { Form, FloatingLabel, Modal,Button } from "react-bootstrap";

export default function TransactionModal({ transaction, account, show, close }) {
  const amount = useInput(0);
  const [alertMsg,setAlertMsg] = useState("")

  const createAlert = ()=>{
    setAlertMsg("Must be a Number!");
  }
  const resetAlert = ()=>{
    setAlertMsg("");
  }

  const handleChange = (e)=>{
    const proposedAmount = Number(e.target.value);

    if (proposedAmount instanceof Number) {
      amount.onChange(e);
    } else {
      createAlert();
      amount.clear()
    }
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("submitted");
  }
  
  const Input = ()=>{
    return (
      <Form.Group className="mb-3">
        <Form.Label className="mb-3">{`${transaction} Amount`}</Form.Label>
        <FloatingLabel
          controlId="floatingInput"
          label={`${transaction} Amount`}
          className="mb-3"
        > 
          <input
            placeholder="0"
            autoComplete="off"
            className="form-control mb-3"
            value={amount.value}
            onChange={handleChange}
            required
          />
        </FloatingLabel>
      </Form.Group>
    )
  }

  const closeModal = ()=>{
    amount.clear();
    close();
    resetAlert();
  }

  return (
    <Modal show={show} onHide={closeModal} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{transaction}</Modal.Title>
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
