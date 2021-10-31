import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Content from "./Content";
import ctx from "../context";
import Alert from "./Alert";

export default function Bankify() {
  const { user, setUser, alertProps } = useContext(ctx);

  const UserDependentLinks =()=>{ 
    const SetLinks = (user) ? (
    <>
      <Link to="/services" className="nav-link">
        Services
      </Link>
      <AllDataLink/>
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
      <AllDataLink/>
      <Link to="/" className="nav-link" onClick={() => setUser("8")}>
        setUser()
      </Link>
    </>
    );

    return SetLinks;
  }

  return (
    <Router>
      <MyNav>
        <UserDependentLinks/>
      </MyNav>
      <Alert {...alertProps} />
      <Content />
    </Router>
  );
}

function MyNav(props) {
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
              {props.children}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}

function AllDataLink() {
  return <Link to="/alldata" className="nav-link">All Data</Link>;
};


