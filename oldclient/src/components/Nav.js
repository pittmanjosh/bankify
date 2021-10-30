import {useState} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import Alert from './Alert';
import logo from '../logo.svg';

export default function MyNav() {
  const [alertMsg, setAlertMsg] = useState('hi');
  const [alertType, setAlertType] = useState('danger');
  const [alertHeading, setAlertHeading] = useState('')
  
  function resetAlert() {
    setAlertMsg('');
    setAlertHeading('');
    setAlertType('danger');
  }
  function setAlert(msg,type,heading) {
    setAlertMsg(msg);
    setAlertType(type);
    setAlertHeading(heading);
  }

  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" sticky>
        <Container className="align-content-space-between">
          <a href="/" className="navbar-brand">
            BadBank
          </a>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto align-content-end">
              <a href="/api" className="nav-link">
                All Data
              </a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Alert
        msg={alertMsg}
        type={alertType}
        heading={alertHeading}
        reset={resetAlert}
      />
      <button onClick={()=>{(alertMsg)? resetAlert() : setAlert("hi","success","Good Job!")}}>Click Me!</button>
    </>
  );
}
