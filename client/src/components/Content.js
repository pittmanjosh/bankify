import ctx from "../context";
import { useContext } from "react";
// UI elements
import { Container, Row } from "react-bootstrap";
// Router components
import { Switch, Route, Redirect } from "react-router";
// Site Pages
import Register from "../pages/register";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import Thanks from "../pages/thanks";
import AllData from "../pages/alldata";

export default function Content() {
  const { user,newUser } = useContext(ctx);
  return (
    <Switch>
      <Container className="content-container" fluid>
        <Row className="justify-content-center">
            <Route exact path="/register">
              {user ? <Redirect to="/dashboard" /> : <Register />}
            </Route>
            <Route exact path="/thanks">
              {newUser ? <Thanks/> : <Redirect to="/"/>}
            </Route>
            <Route exact path="/login">
              {newUser && <Redirect to="/thanks"/>}
              {!user && <Login />}
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
