import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../adapters/dal";
import ctx from "../context";
import { useContext } from "react";
import useUser from "../hooks/useUser";

export default function MyNav() {
  return (
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
            <UserDependentLinks />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

function UserDependentLinks() {
  const { createAlert } = useContext(ctx);
  const user = useUser();

  const AllDataLink = () => (
    <Link to="/alldata" className="nav-link">
      All Data
    </Link>
  );

  const ApiDocs = () => (
    <Link to="/api-docs" className="nav-link">
      Api Docs
    </Link>
  );

  const MyLinks = user ? (
    <>
      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>
      <AllDataLink />
      <ApiDocs />
      <Link
        to="/"
        className="nav-link"
        onClick={() => {
          logout(createAlert);
        }}
      >
        {`Logout: ${user.displayName?.toUpperCase()}`}
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
      <AllDataLink />
      <ApiDocs />
    </>
  );

  return MyLinks;
}
