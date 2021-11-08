import {
  Button,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import { useState,useEffect } from "react";
import currentAuth from "../auth/firebaseAuth";
import useModal from "../hooks/useModal";
import TransactionModal from "../components/Modal";
import { getUser } from "../adapters/mongodb";


export default function Dashboard() {
  const checkingState = useState(null); //change to fetched balance
  const [checking,setChecking] = checkingState;
  const savingsState = useState(null); //change to fetched balance
  const [savings,setSavings] = savingsState;
  // const [user,setUser] = useState(null);
  const depositCheckingModal = useModal("Deposit", "Checking");
  const withdrawCheckingModal = useModal("Withdraw", "Checking");
  const depositSavingsModal = useModal("Deposit", "Savings");
  const withdrawSavingsModal = useModal("Withdraw", "Savings");

  let currentUser = currentAuth().currentUser;
  let user = await getUser(currentUser);

  useEffect(()=>{
    setSavings(user.savings)
    setChecking(user.checking)
  })
  

  let name = user?.displayName ? user.displayName.toUpperCase() : "USER";
  let photoURL = user?.photoURL || null;
  const Avatar = () => {
    if (!photoURL) photoURL = "https://react-bootstrap.github.io/logo.svg";

    return <img src={photoURL} className="avatar-img" />;
  };

  return (
    <Col sm={8} lg={7} xl={6}>
      <Card>
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
      <TransactionModal {...depositCheckingModal} state={checkingState}/>
      <TransactionModal {...withdrawCheckingModal} state={checkingState}/>
      <TransactionModal {...depositSavingsModal} state={savingsState} />
      <TransactionModal {...withdrawSavingsModal} state={savingsState}/>
    </Col>
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
    </div>
  );
}
