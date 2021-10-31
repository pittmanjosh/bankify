import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function MyNav() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky>
      <Container className="justify-content-space-between">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />Services
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
