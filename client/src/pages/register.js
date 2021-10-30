import { Form, Button, FloatingLabel } from "react-bootstrap";
import { register } from "../components/dal";
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
    <Form onSubmit={submitForm}>
      <h2>Register Account</h2>
      {/* <Form.Group>
        <Form.Label>Name</Form.Label>
        <Form.Control placeholder="First" {...fname} required/>
        <Form.Control placeholder="Last" {...lname} required/>
      </Form.Group> */}

      <Form.Group>
        <FloatingLabel controlId="floatingInput" label="First Name" className="mb-3">
          <input
            placeholder="First Name"
            autoComplete="given-name"
            {...fname}
            className="form-control mb-3"
            required
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput" label="Last Name" className="mb-3">
          <input
            placeholder="Last Name"
            autoComplete="given-name"
            {...lname}
            className="form-control mb-3"
            required
          />
        </FloatingLabel>
        <br />
        <input
          placeholder="Last"
          autoComplete="family-name"
          {...lname}
          required
        />
        <br />
      </Form.Group>
      <Form.Label>Email</Form.Label>
      <Form.Group>
        <input
          type="email"
          placeholder="Your Email"
          autoComplete="email"
          {...email}
          required
        />
      </Form.Group>
      <Form.Label>Password</Form.Label>
      <Form.Group>
        <input
          placeholder="Password"
          type="password"
          autoComplete="new-password"
          {...password}
          required
        />
        <br />
        <input
          placeholder="Confirm"
          type="password"
          autoComplete="new-password"
          {...confirmPassword}
          required
        />
      </Form.Group>
      <Button type="submit">Register</Button>
    </Form>
  );
}
