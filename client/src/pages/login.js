import { Accordion, Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { loginEmailPassword, loginGoogle } from "../data/dal";
import useInput from "../hooks/useInput";
import ctx from "../context";
import { useContext, useState } from "react";
import Input from "../components/Input";

export default function Login() {
  const {createAlert} = useContext(ctx);
  const email = useInput("");
  const password = useInput("");

  const clearForm = ()=>{
    email.clear();
    password.clear();
  }
  const submitForm = (e) => {
    e.preventDefault();
    let success = loginEmailPassword(email.value, password.value,createAlert);
    if (success) {
      clearForm();
    }
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    loginGoogle(createAlert);
  };

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem" }}>
        <Card.Header>
          <h2>Login</h2>
        </Card.Header>
        <br />
        <Card.Body>
          <Card.Title>Login Methods:</Card.Title>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Email and Password</Accordion.Header>
              <Accordion.Body>
                <Form onSubmit={submitForm} className="mb-3">
                  <Form.Group>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email"
                      className="mb-3"
                    >
                      <Input label="Email" ac={email} state={email}/>
                    </FloatingLabel>
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                      className="mb-3"
                    >
                      <Input label="Password" ac="current-password" state={password}/>
                    </FloatingLabel>
                  </Form.Group>
                  <Button type="submit">Login</Button>
                </Form>
                <Card.Footer />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Button onClick={handleGoogle}>Google</Accordion.Button>
          </Accordion>
        </Card.Body>
        <Card.Footer />
      </Card>
    </Container>
  );
}
