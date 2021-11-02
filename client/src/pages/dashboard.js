import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
// import { register } from "../data/dal";
// import useInput from "../hooks/useInput";
// import { useContext } from "react";
// import ctx from "../context";
// import currentAuth from "../auth/firebaseAuth";
import { BrowserRouter as Router, Redirect } from "react-router";
import useUser from "../hooks/useUser";
import { useState, useRef } from "react";
import { useSetAlert } from "../hooks/useAlert";

export default function Dashboard() {
  const [balance, setBalance] = useState(0);
  const [showDeposit,setShowDeposit] = useState(false);
  const [showWithdraw,setShowWithdraw] = useState(false);

  const user = useUser();

  const openDeposit = ()=>setShowDeposit(true)
  const closeDeposit = ()=>setShowDeposit(false)
  

  let name = user.displayName;
  let photoURL = user.photoURL;

  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(photoURL, requestOptions)
    .then(() => console.log("avatar successfully fetched"))
    .catch(() => {
      photoURL = `https://ui-avatars.com/api/?name=${name}`;
    });

  const Avatar = () => {
    return <img src={photoURL} className="avatar-img" crossOrigin />;
  };

  // Fetch User from Database
  // if loading put in bootstrap placeholder elements
  // if not found, create use with user email

  const DepositWindow = ()=>{
    return (
      <Modal show={showDeposit} onHide={closeDeposit} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Deposit heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeposit}>
            Close
          </Button>
          <Button variant="primary" onClick={closeDeposit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
  

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem" }}>
        <Card.Header>
          <Row className="align-items-center">
            <Col>
              <h2>Dashboard</h2>
            </Col>
            <Col sm="3" className="align-item-end">
              <Avatar />
            </Col>
          </Row>
        </Card.Header>
        <Card.Body className="justify-content-center align-item-center">
          <Card.Text>{`Hello ${name}`}</Card.Text>
          <Card.Title>Balance</Card.Title>
          <br />
          {console.log(user)}
          <Form>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <span className="form-control" aria-label="Amount">
                {`${balance}.00`}
              </span>
                <Button variant="outline-primary" id="deposit" onClick={openDeposit}>
                  Deposit
                </Button>
                <Button variant="outline-primary" id="withdraw">
                  Withdraw
                </Button>
            </div>
          </Form>

          <Card.Title>Deposit</Card.Title>
          <Card.Title>Withdraw</Card.Title>
        </Card.Body>
      </Card>
      <DepositWindow/>
    </Container>
  );
}
