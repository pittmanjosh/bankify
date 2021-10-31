import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { register } from "../data/dal";
import useInput from "../hooks/useInput";
import {useContext} from "react";
import ctx from "../context";

export default function Register() {
  const { setUser } = useContext(ctx);
  const fname = useInput("");
  const lname = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");

  const resetForm = () => {
    fname.clear();
    lname.clear();
    email.clear();
    password.clear();
    confirmPassword.clear();
  };

  const submitForm = (event) => {
    event.preventDefault();
    let pwdMatch = password.value === confirmPassword.value;

    if (!pwdMatch) {
      confirmPassword.clear()
      return;
    }

    let userId = register(
      email.value,
      password.value,
      confirmPassword
    );
    if (userId) {
      resetForm();
      setUser(userId)
    }
  };

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem" }}>
        <Card.Header><h2>Register Account</h2></Card.Header>
        <Form onSubmit={submitForm} className="mb-3">
          <Form.Group className="mb-3">
            <Form.Label className="mb-3">Name</Form.Label>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name"
              className="mb-3"
            >
              <input
                placeholder="First Name"
                autoComplete="given-name"
                {...fname}
                className="form-control mb-3"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Last Name"
              className="mb-3"
            >
              <input
                placeholder="Last Name"
                autoComplete="family-name"
                {...lname}
                className="form-control mb-3"
                required
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
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
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <FloatingLabel
              controlId="floatingPassword"
              label="New Password"
              className="mb-3"
            >
              <input
                type="password"
                placeholder="New Password"
                autoComplete="new-password"
                {...password}
                className="form-control mb-3"
                required
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingPassword"
              label="Confirm Password"
              className="mb-3"
            >
              <input
                type="password"
                placeholder="Confirm Password"
                autoComplete="new-password"
                {...confirmPassword}
                className="form-control mb-3"
                required
              />
            </FloatingLabel>
          </Form.Group>
          <Button type="submit">Register</Button>
        </Form>
      </Card>
    </Container>
  );
}
