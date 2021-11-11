import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Col sm={8} lg={7} xl={6}>
    <Card >
      <Card.Header>
        <h2>Welcome to Bankify</h2>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <p>
            Bankify is the banking solution for you! With local branches across
            the United States, we serve our customers with services like:
            withdraw, deposit, balances, and hack the system.
          </p>
          <p>
            While not FDIC insured, client-side Firebase Authentication does
            keep your passwords safe. Not bad ehh?
          </p>
        </Card.Text>
        <Link to="/register">
          <Button type="link">New Customers</Button>
        </Link>
        {"      "}
        <Link to="/login">
          <Button type="link">Existing Customers</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
  );
}
