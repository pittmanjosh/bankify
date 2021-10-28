import {Alert} from 'react-bootstrap';

export default function MyAlert({msg,type,heading,reset}) {

  if (msg) {
    return (
      <Alert variant={type} onClose={reset} dismissible>
        {heading && <Alert.Heading>{heading}</Alert.Heading>}
        <p>{msg}</p>
      </Alert>
    );
  }
  return null;
}
