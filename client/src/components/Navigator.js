import React from "react";
import { Tab, Row, Col, Nav, Button } from "react-bootstrap";
import Login from "../pages/login";
import Register from "../pages/register";
import { logout, authenticate } from './dal';

export default function Navigator() {
  return (
    <div className="tab-navigator">
      <Tab.Container defaultActiveKey="home">
        <Row>
          <Col sm={3}>
            <Nav variant="tabs" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="home">
                  <h4>Home</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="deposit">
                  <h4>Deposit</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="withdraw">
                  <h4>Withdraw</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="register"><h4>register</h4></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="login"><h4>Login</h4></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="logout"><h4>logout</h4></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="authState"><h4>AuthState</h4></Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="home">
                <p>Home</p>
              </Tab.Pane>
              <Tab.Pane eventKey="deposit">
                <p>Deposit</p>
              </Tab.Pane>
              <Tab.Pane eventKey="withdraw">
                <p>Withdraw</p>
              </Tab.Pane>
              <Tab.Pane eventKey="register">
                <Register/>
              </Tab.Pane>
              <Tab.Pane eventKey="login">
                <Login/>
              </Tab.Pane>
              <Tab.Pane eventKey="logout">
                <Button onClick={logout}>logout</Button>
              </Tab.Pane>
              <Tab.Pane eventKey="authState">
                <Button onClick={authenticate}>authState</Button>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
