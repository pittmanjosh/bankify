import { Card, Col, Table } from "react-bootstrap";

export default function Docs() {
  return (
    <Col sm={8} lg={7} xl={6}>
      <Card>
        <Card.Header>
          <h2>API Documentation</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>/api</Card.Title>
          <p>
            Description provides services based on data from Firebase Auth
            middleware
          </p>
          <Path
            title="Get"
            description="Retrieves user info from MongoDB based on uid provided by Firebase Auth middleware"
            params={[
              {
                name: "uid",
                location: "req",
                description: 'index value submitted as "_id to MongoDB',
                required: true,
              },
            ]}
            responses={[]}
          ></Path>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Col>
  );
}

function Path({ title, description, params, responses }) {
  return (
    <>
      <Card.Title>{title}</Card.Title>
      <ul style={{ listStyle: "none" }}>
        <li>
          <strong>Description:</strong>
          {"  "}
          {description}
        </li>
        <br />
        <li>
          <strong>Parameters:</strong> <br />
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>name</th>
                <th>location</th>
                <th>description</th>
                <th>required</th>
              </tr>
            </thead>
            <tbody>
              {params.map((x, i) => {
                <tr key={i}>
                  <td>
                    <strong>{x.name}</strong>
                  </td>
                  <td>{x.location}</td>
                  <td>{x.description}</td>
                  <td>{x.required ? "✔" : "x"}</td>
                </tr>;
              })}
            </tbody>
          </Table>
        </li>
        <br/>
        <li>
          <strong>Responses:</strong>
          <br />
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Response</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {responses.map((x, i) => {
                <tr key={i}>
                  <td>
                    <strong>{x.res}</strong>
                  </td>
                  <td>{x.description}</td>
                </tr>;
              })}
            </tbody>
          </Table>
        </li>
        <li></li>
      </ul>
    </>
  );
}
