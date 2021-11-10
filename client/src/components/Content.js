import ctx from "../context";
import { useContext } from "react";
// UI elements
import { Col, Container, Row } from "react-bootstrap";
// Router components
import { Switch, Route, Redirect } from "react-router";
// Site Pages
import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import AllData from "../pages/alldata";

export default function Content() {
  const { user } = useContext(ctx);
  return (
    <Switch>
      <Container className="content-container" fluid>
        <Row className="justify-content-center">
            <Route exact path="/register">
              {user ? <Redirect to="/dashboard" /> : <Register />}
            </Route>
            <Route exact path="/login">
              {user ? <Redirect to="/dashboard" /> : <Login />}
            </Route>
            <Route exact path="/dashboard">
              {user ? <Dashboard /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/alldata">
              <AllData />
            </Route>
            <Route exact path="/">
              {user ? <Dashboard /> : <Home />}
            </Route>
        </Row>
      </Container>
    </Switch>
  );
}
