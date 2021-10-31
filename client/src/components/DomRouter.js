import { Container, Navbar, Nav } from "react-bootstrap";
import { useContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import Services from "../pages/services";
import ctx from "../context";
import Greeting from "../pages/greeting";
import Alert from "./Alert";

export default function DomRouter() {
  const { user, setUser, alertProps } = useContext(ctx);

  return (
    <Router>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky>
        <Container className="justify-content-space-between">
          <Link to="/" className="navbar-brand nav-link">
            Bankify
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Link to="/" className="nav-link">
                Home
              </Link>
              {user ? (
                <>
                  <Link to="/services" className="nav-link">
                    Services
                  </Link>
                  <Link to="/" className="nav-link" onClick={() => setUser("")}>
                    Logout
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => setUser("8")}
                  >
                    setUser()
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Alert {...alertProps} />
      <Switch style={{ padding: "20px" }}>
        <Container className="align-content-center">
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/">
            {user ? <Home /> : <Greeting />}
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}
