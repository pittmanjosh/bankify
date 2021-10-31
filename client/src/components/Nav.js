import { Container, Nav, Navbar } from "react-bootstrap";

export default function MyNav(props) {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky>
      <Container className="justify-content-space-between">
        {props.children[0]}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>{props.children[1]}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}