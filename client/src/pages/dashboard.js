import { Button, Card, Col, Row } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import useModal from "../hooks/useModal";
import TransactionModal from "../components/Modal";
import ctx from "../context";
import { getUser } from "../adapters/mongodb";

export default function Dashboard() {
  const checkingState = useState(null); //change to fetched balance
  const checking = checkingState[0];
  const setChecking = checkingState[1];
  const savingsState = useState(null); //change to fetched balance
  const savings = savingsState[0];
  const setSavings = savingsState[1];
  const depositCheckingModal = useModal("Deposit", "Checking");
  const withdrawCheckingModal = useModal("Withdraw", "Checking");
  const depositSavingsModal = useModal("Deposit", "Savings");
  const withdrawSavingsModal = useModal("Withdraw", "Savings");
  const { user } = useContext(ctx);

  useEffect(() => {
    if (user) {
      getUser(user, setSavings, setChecking);
    }
  });

  let name = user.displayName ? user.displayName.toUpperCase() : "USER";
  let photoURL = user.photoURL;

  return (
    <Col sm={8} lg={7} xl={6}>
      <Card>
        <DashboardHeader />
        <Card.Body className="justify-content-center align-item-center">
          <Card.Text>{`Hello ${name}!`}</Card.Text>
          {savings !== null && (
            <>
              <DashboardPanel
                title="Checking"
                balance={checking}
                openDeposit={depositCheckingModal.open}
                openWithdraw={withdrawCheckingModal.open}
              />
              <hr />
              <DashboardPanel
                title="Savings"
                balance={savings}
                openDeposit={depositSavingsModal.open}
                openWithdraw={withdrawSavingsModal.open}
              />
            </>
          )}
        </Card.Body>
      </Card>
      <TransactionModal {...depositCheckingModal} state={checkingState} />
      <TransactionModal {...withdrawCheckingModal} state={checkingState} />
      <TransactionModal {...depositSavingsModal} state={savingsState} />
      <TransactionModal {...withdrawSavingsModal} state={savingsState} />
    </Col>
  );
}

function DashboardHeader() {
  return (
    <Card.Header>
      <Row className="align-items-center">
        <Col>
          <h2>Dashboard</h2>
        </Col>
      </Row>
    </Card.Header>
  );
}

function DashboardPanel(props) {
  const { title, balance, openDeposit, openWithdraw } = props;

  return (
    <div className={`panel-${title.toLowerCase()}`}>
      <Card.Title>{`${title} Balance`}</Card.Title>
      <br />
      <div className="input-group mb-3">
        <span className="input-group-text">$</span>
        <span className="form-control" aria-label="Amount">
          {`${balance}.00`}
        </span>
        <Button variant="outline-primary" id="deposit" onClick={openDeposit}>
          Deposit
        </Button>
        <Button variant="outline-primary" id="withdraw" onClick={openWithdraw}>
          Withdraw
        </Button>
      </div>
    </div>
  );
}
