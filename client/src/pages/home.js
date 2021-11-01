import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Home({user}) {
  const userParagraph = (
    <p>Bankify is the banking solution for you! With local branches across the United States, we serve our customers with <Link to="/dashboard" className="text-decoration-none">services</Link> like:{" "}
    <Link to="/dashboard" className="text-decoration-none">withdraw</Link>,{" "}
    <Link to="/dashboard" className="text-decoration-none">deposit</Link>,{" "}
    <Link to="/dashboard" className="text-decoration-none">balances</Link>,{" "}
    and <Link to="/dashboard" className="text-decoration-none">hack the system</Link>.</p>
  );
  const nonuserParagraph = (
    <p>Bankify is the banking solution for you! With local branches across the United States, we serve our customers with services like: withdraw, deposit, balances, and hack the system.</p>
  );

  return (
    <Card style={{ maxWidth: "36rem", minWidth: "18rem" }}>
      <Container>
        <Card.Header>
          <h2>Welcome to Bankify</h2>
        </Card.Header>
        <Card.Body>
          <Card.Text>
            {user ? userParagraph : nonuserParagraph}
            <p>
              While not FDIC insured, client-side Firebase Authentication does keep you passwords safe. Not bad ehh?
            </p>
          </Card.Text>
          <div>
          <Link to="/register">
            <Button type="link">Register Now</Button>
          </Link>{"      "}
          <Link to="/login">
            <Button type="link">Login</Button>
          </Link>
          </div>
          
        </Card.Body>
      </Container>
    </Card>
  );
}
