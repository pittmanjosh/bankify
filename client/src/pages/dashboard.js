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
import useInput from "../hooks/useInput";
import { updateProfile } from "@firebase/auth";
import currentAuth from "../auth/firebaseAuth";
import useModal from "../hooks/useModal";
import TransactionModal from "../components/Modal";

export default function Dashboard() {
  const [checking, setChecking] = useState(0);
  const [savings, setSavings] = useState(0);
  const depositCheckingModal = useModal("Deposit", "checking");
  const withdrawCheckingModal = useModal("Withdraw", "checking");
  const depositSavingsModal = useModal("Deposit", "savings");
  const withdrawSavingsModal = useModal("Withdraw", "savings");

  const auth = currentAuth();
  const user = auth.currentUser;

  let name = user.displayName ? user.displayName.toUpperCase() : "USER";
  let photoURL = user.photoURL;
  const Avatar = () => {
    if (!photoURL) photoURL = "https://react-bootstrap.github.io/logo.svg";

    return <img src={photoURL} className="avatar-img" />;
  };

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem" }}>
        <DashboardHeader>
          <Avatar />
        </DashboardHeader>
        <Card.Body className="justify-content-center align-item-center">
          <Card.Text>{`Hello ${name}!`}</Card.Text>
          {console.log(user)}
          <DashboardPanel 
            title="Checking" 
            balance={checking} 
            openDeposit={depositCheckingModal.open} 
            openWithdraw={withdrawCheckingModal.open}  
          />
          <hr/>
          <DashboardPanel 
            title="Savings" 
            balance={savings} 
            openDeposit={depositSavingsModal.open} 
            openWithdraw={withdrawSavingsModal.open}  
          />
        </Card.Body>
      </Card>
      <TransactionModal {...depositCheckingModal} />
      <TransactionModal {...withdrawCheckingModal} />
      <TransactionModal {...depositSavingsModal} />
      <TransactionModal {...withdrawSavingsModal} />
    </Container>
  );
}

function DashboardHeader(props) {
  return (
    <Card.Header>
      <Row className="align-items-center">
        <Col>
          <h2>Dashboard</h2>
        </Col>
        <Col sm="3" className="align-item-end">
          {props.children}
        </Col>
      </Row>
    </Card.Header>
  );
}

function DashboardPanel(props) {
  const {title,balance,openDeposit,openWithdraw} = props;

  return (
    <div className={`panel-${title.toLowerCase()}`}>
      <Card.Title>{title}</Card.Title>
      <br />
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <span className="form-control" aria-label="Amount">
          {`${balance}.00`}
        </span>
        <Button
          variant="outline-primary"
          id="deposit"
          onClick={openDeposit}
        >
          Deposit
        </Button>
        <Button
          variant="outline-primary"
          id="withdraw"
          onClick={openWithdraw}
        >
          Withdraw
        </Button>
      </div>
      <hr />
    </div>
  );
}
