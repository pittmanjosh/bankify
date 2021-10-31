import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { loginGoogleAuth } from "../auth/firebaseAuth";
import { login } from "../data/dal";
import useInput from "../hooks/useInput";
import ctx from "../context";
import { useContext } from "react";

export default function Login() {
  const {setUser} = useContext(ctx);
  const email = useInput("");
  const password = useInput("");

  const submitForm = (event) => {
    event.preventDefault();
    login(email.value, password.value);
    email.clear();
    password.clear();
  }

  const handleGoogle = async (e) => {
    e.preventDefault();
    const {result, error} = await loginGoogleAuth();

    if (result) {
      console.log(result);
      setUser(result);
    } else {
      console.log(error)
    }
  }

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem" }}>
        <Card.Header><h2>Login</h2></Card.Header>
        <br/>
        <Card.Body>
          <Button onClick={handleGoogle}>Sign in with Google</Button>
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
