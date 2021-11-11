import {
  Accordion,
  Button,
  Card,
  Col,
  FloatingLabel,
  Form,
} from "react-bootstrap";
import { register, loginGoogle } from "../adapters/firebase";
import useInput from "../hooks/useInput";
import ctx from "../context";
import { useContext } from "react";
import Input from "../components/Input";

export default function Register() {
  const { createAlert } = useContext(ctx);
  const name = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");

  const submitForm = (e) => {
    e.preventDefault();
    let pwdMatch = password.value === confirmPassword.value;

    if (!pwdMatch) {
      confirmPassword.clear();
      createAlert("Passwords do not match!", "danger");
      return;
    }

    register(name.value, email.value, password.value, createAlert);
  };

  const handleGoogle = (e) => {
    e.preventDefault();
    loginGoogle(createAlert);
  };

  return (
    <Col sm={8} lg={7} xl={6}>
      <Card>
        <Card.Header>
          <h2>New Customers</h2>
        </Card.Header>
        <br />
        <Card.Body>
          <Card.Title>Registration Methods:</Card.Title>
          <Accordion defaultActiveKey="1">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Email and Password</Accordion.Header>
              <Accordion.Body>
                <Form onSubmit={submitForm} className="mb-3">
                  <Form.Group className="mb-3">
                    <Form.Label className="mb-3">Name</Form.Label>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Account Name"
                      className="mb-3"
                    >
                      <Input label="Account Name" ac="name" state={name} />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Email"
                      className="mb-3"
                    >
                      <Input label="Email" ac="email" state={email} />
                    </FloatingLabel>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="New Password"
                      className="mb-3"
                    >
                      <Input
                        type="password"
                        label="New Password"
                        ac="new-password"
                        state={password}
                      />
                    </FloatingLabel>
                    <FloatingLabel
                      controlId="floatingPassword"
                      label="Confirm Password"
                      className="mb-3"
                    >
                      <Input
                        type="password"
                        label="Confirm Password"
                        ac="confirm-password"
                        state={confirmPassword}
                      />
                    </FloatingLabel>
                  </Form.Group>
                  <Button type="submit">Register</Button>
                </Form>
                <Card.Footer />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header onClick={handleGoogle}>Google</Accordion.Header>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
        <Card.Footer />
      </Card>
    </Col>
  );
}
