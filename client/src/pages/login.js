import { Form, Button } from "react-bootstrap";
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
    <Form onSubmit={submitForm}>
      <h2>Sign in</h2>
      <input type="email" placeholder="Email" {...email} /><br/>
      <input placeholder="Password" type="password" {...password} /><br/>
      <Button type="submit">Sign in</Button>
    </Form>
  );
}
