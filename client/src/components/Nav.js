import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import { useContext } from "react";
import ctx from "../context";

export default function MyNav() {
  const { user, setUser } = useContext(ctx);

  return (
    <>
      {/* <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" sticky> */}
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
      {/* </Navbar> */}
    </>
  );
}
