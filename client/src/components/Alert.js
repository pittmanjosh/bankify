import {Alert} from 'react-bootstrap';

export default function MyAlert({msg,type,heading,reset}) {
  if (msg) {
    setTimeout(reset,4000);
    return (
      <Alert variant={type} onClose={reset} dismissible>
        {heading && <Alert.Heading>{heading}</Alert.Heading>}
        <p>{msg}</p>
      </Alert>
    );
  }
  return null;
}
