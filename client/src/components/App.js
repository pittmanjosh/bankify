import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Content from "./Content";
import ctx from "../context";
import Alert from "./Alert";

export default function Bankify() {
  const { user, setUser, alertProps } = useContext(ctx);

  return (
    <Router>
      <MyNav>
        <Link to="/" className="navbar-brand nav-link">
          Bankify
        </Link>
        <UserDependentLinks user={user} setUser={setUser}/>
      </MyNav>
      <Alert {...alertProps} />
      <Content user={user} />
    </Router>
  );
}

function MyNav(props) {
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

function UserDependentLinks({user,setUser}) {
  const MyLinks = user ? (
    <>
      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>
      <AllDataLink />
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
      <AllDataLink />
      <Link to="/" className="nav-link" onClick={() => setUser("8")}>
        setUser()
      </Link>
    </>
  );

  return MyLinks
}

function AllDataLink() {
  return (
    <Link to="/alldata" className="nav-link">
      All Data
    </Link>
  );
}
