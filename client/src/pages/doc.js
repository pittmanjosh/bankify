import { Button, Card, Col, FloatingLabel, Form } from "react-bootstrap";
import { register } from "../adapters/dal";
import useInput from "../hooks/useInput";
import Input from "../components/Input";
import { useContext } from "react";
import ctx from "../context";

export default function Docs() {
  

  return (
    <Col sm={8} lg={7} xl={6}>
      <Card>
        <Card.Header>
          <h2>API Documentation</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>/api</Card.Title>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Col>
  );
}
