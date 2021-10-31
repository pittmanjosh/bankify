import MyNav from "./Nav";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useContext, useState } from "react";
import BankContext from "../context";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "../pages/register";
import Login from "../pages/login";
import Home from "../pages/home";
import ctx from "../context";

export default function DomRouter() {
  const { user, setUser} = useContext(ctx);

  return (
    <Router>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky>
        <Container className="justify-content-space-between">
          <Link to="/home" className="navbar-brand nav-link">
            Bankify
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              {!user && (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                  <Link
                    to="/home"
                    onClick={() => setUser(7)}
                    className="nav-link"
                  >
                    Set User
                  </Link>
                </>
              )}
              {user && (
                <Link
                  to="/home"
                  className="nav-link"
                  onClick={() => setUser("")}
                >
                  Logout
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <MyNav user={user} setPage={setPage} />
          // import css as well 
          <Container>
          <Register />
          <Content/>
          </Container> 
        */}
      <Switch>
        <Container className="justify-content-center">
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
}
