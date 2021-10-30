import { Button, Card, Container, FloatingLabel, Form } from "react-bootstrap";
import { register } from "../data/dal";
import useInput from "../hooks/useInput";

export default function Register() {
  const fname = useInput("");
  const lname = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirmPassword = useInput("");

  const resetForm = () => {
    [fname, lname, email, password, confirmPassword].forEach((x) => x.clear());
  };

  const submitForm = (event) => {
    event.preventDefault();
    let pwdMatch = password.value === confirmPassword.value;
    let userId = register(
      email.value,
      password.value,
      confirmPassword,
      resetForm
    );
  };

  return (
    <Card style={{ width: "22rem" }}>
      <Container>
        <Form onSubmit={submitForm} className="mb-3">
          <h2>Register Account</h2>
          {/* <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="First" {...fname} required/>
        <Form.Control placeholder="Last" {...lname} required/>
      </Form.Group> */}

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
      </Container>
    </Card>
  );
}
