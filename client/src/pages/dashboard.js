import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { register } from "../data/dal";
import useInput from "../hooks/useInput";
import { useContext } from "react";
import ctx from "../context";
import currentAuth from "../auth/firebaseAuth";
import { BrowserRouter as Router,Redirect } from "react-router";

export default function Dashboard() {
  const { user } = useContext(ctx);
  if (!user) return <Redirect to="/"/>
  
  const uid   = user.uid
  const name  = user.displayName;
  const email = user.email;
  

  // Fetch User from Database
  // if loading put in bootstrap placeholder elements
  // if not found, create use with user email

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem", }}>
        <Card.Header>
          <h2>Dashboard</h2>
        </Card.Header>
        <Card.Body className="justify-content-center align-item-center">
          <Card.Title>Balances</Card.Title>
          {`Hello ${name}`}
          <br/>
          {console.log(user)}
          {user.photoURL && <img src={user.photoURL} style={{borderRadius: "50%"}}/>}

          <Card.Title>Deposit</Card.Title>
          <Card.Title>Withdraw</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

