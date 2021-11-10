import {useContext}from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ctx from "../context";


export default function Thanks() {
  const {setNewUser} = useContext(ctx);
  return (
    <Col sm={8} lg={7} xl={6}>
    <Card >
      <Card.Header>
        <h2>Welcome to Bankify</h2>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          <p>
            Thanks for deciding to become an esteemed customer of Bankify!
          </p>
        </Card.Text>
        <Link to="/dashboard">
          <Button type="link" onClick={()=>setNewUser(false)}>Services</Button>
        </Link>
      </Card.Body>
    </Card>
    </Col>
  );
}
