import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import Link from "./Link";

export default function MyNav() {
  return (
    <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky>
      <Container className="justify-content-space-between">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav >
            <Link name="register"/>
            <Link name="login"/>
            <Link name="home"/>
            <Link name="services"/>
            <Link name="alldata"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
