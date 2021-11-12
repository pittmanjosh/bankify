import { Card, Col } from "react-bootstrap";


export default function Docs() {
  

  return (
    <Col sm={8} lg={7} xl={6}>
      <Card>
        <Card.Header>
          <h2>API Documentation</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>/api</Card.Title>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Col>
  );
}
