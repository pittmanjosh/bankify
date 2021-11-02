import {Alert} from 'react-bootstrap';
import useAlert from '../hooks/useAlert';

export default function MyAlert() {
  const {msg,type,heading,reset} = useAlert();
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
