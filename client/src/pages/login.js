import { Accordion, Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { loginEmailPassword, loginGoogle } from "../data/dal";
import useInput from "../hooks/useInput";
import ctx from "../context";
import { useContext, useState } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";

export default function Login() {
  const { setUser, createAlert} = useContext(ctx);
  const email = useInput("");
  const password = useInput("");
  const [isRedirect,setIsRedirect] = useState(false)

  const submitForm = (e) => {
    e.preventDefault();
    loginEmailPassword(email.value, password.value,/*setUser,*/createAlert);
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    loginGoogle(/*setUser,*/createAlert);
  };

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem" }}>
        <Card.Header>
          <h2>Login</h2>
        </Card.Header>
        <br />
        <Card.Body>
          {isRedirect && <Redirect to="/dashboard"/>}
          <Card.Title>Login Methods</Card.Title>
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
                      <input
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        className="form-control mb-3"
                        {...email}
                        required
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <br />
                  <Form.Group>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Password"
                      className="mb-3"
                    >
                      <input
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        {...password}
                        className="form-control mb-3"
                        required
                      />
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
