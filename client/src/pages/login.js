import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { loginGoogleAuth } from "../auth/fbauth";
import { login } from "../data/dal";
import useInput from "../hooks/useInput";

export default function Login() {
  const email = useInput("");
  const password = useInput("");

  const submitForm = (event) => {
    event.preventDefault();
    login(email.value, password.value);
    email.clear();
    password.clear();
  };

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem" }}>
        <Card.Header><h2>Login</h2></Card.Header>
        <br/>
        <Card.Body>
          <Button onClick={loginGoogleAuth}>Sign in with Google</Button>
          <hr/>
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
            <br/>
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
        </Card.Body>
      </Card>
    </Container>
  );
}
