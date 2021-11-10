import { Accordion, Button, Card, Col, FloatingLabel, Form } from "react-bootstrap";
import { loginEmailPassword, loginGoogle } from "../adapters/firebase";
import useInput from "../hooks/useInput";
import ctx from "../context";
import { useContext } from "react";
import Input from "../components/Input";

export default function Login() {
  const {createAlert,setNewUser} = useContext(ctx);
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
    loginGoogle(createAlert,setNewUser);
  };

  return (
    <Col sm={8} lg={7} xl={6}>
      <Card >
        <Card.Header>
          <h2>Login</h2>
        </Card.Header>
        <br />
        <Card.Body>
          <Card.Title>Login Methods:</Card.Title>
          <Accordion defaultActiveKey="1">
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
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={handleGoogle}>
                Google
              </Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
        <Card.Footer />
      </Card>
    </Col>
  );
}
