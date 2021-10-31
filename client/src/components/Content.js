// UI elements
import { Container } from "react-bootstrap";
// Router components
import { Switch, Route } from "react-router";
// Site Pages
import Register from "../pages/register";
import Login from "../pages/login";
import Services from "../pages/services";
import Home from "../pages/home";
import Greeting from "../pages/greeting";
// Context
import { useContext } from "react";
import ctx from "../context";
import AllData from "../pages/alldata";

export default function Content() {
  const {user} = useContext(ctx)
  return (
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
        <Route exact path="/alldata">
          <AllData/>
        </Route>
        <Route exact path="/">
          {user ? <Home /> : <Greeting />}
        </Route>
      </Container>
    </Switch>
  );
}
