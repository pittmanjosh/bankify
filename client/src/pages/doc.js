import { Card, Col, Table } from "react-bootstrap";

export default function Docs() {
  const get = {
    title: "Get",
    description:
      "Retrieves user info from MongoDB based on uid provided by Firebase Auth middleware",
    params: [
      {
        name: "uid",
        location: "req",
        description: 'index value submitted as "_id" to MongoDB',
        required: true,
      },
    ],
    responses: [
      {
        status: 200,
        description: "Success",
      },
      {
        status: 400,
        description: "Failure",
      },
    ],
  };

  const post = {
    title: "Post",
    description:
      "Creates new MongoDB user based with the name, email, uid, and photoURL provided by Firebase Auth middleware. For non-Google registration, name and photoURL are provided by req.body instead of req.",
    params: [
      {
        name: "uid",
        location: "req",
        description: 'index value submitted as "_id" to MongoDB',
        required: true,
      },
      {
        name: "name",
        location: "req or req.body",
        description: 'name of user associated with the account',
        required: false,
      },
      {
        name: "email",
        location: "req",
        description: 'email of user associated with the account',
        required: false,
      },
      {
        name: "photoURL",
        location: "req or req.body",
        description: 'photo to be associated with the account',
        required: false,
      }
    ],
    responses: [
      {
        status: 200,
        description: "Success",
      },
      {
        status: 400,
        description: "Failure",
      },
    ],
  };

  const post = {
    title: "Put",
    description:
      "Finds user based on their auth provided \"_id\" and updates the user's checking or savings balance to the provided balance",
    params: [
      {
        name: "uid",
        location: "req",
        description: 'index value submitted as "_id" to MongoDB',
        required: true,
      },
      {
        name: "account",
        location: "req.body",
        description: 'name of the account to be updated',
        required: true,
      },
      {
        name: "amount",
        location: "req.body",
        description: 'updated balance of the provided account',
        required: true,
      }
    ],
    responses: [
      {
        status: 200,
        description: "Success",
      },
      {
        status: 400,
        description: "Failure",
      },
    ],
  };

  return (
    <Col sm={8} lg={7} xl={6}>
      <Card>
        <Card.Header>
          <h2>API Documentation</h2>
        </Card.Header>
        <Card.Body>
          <Card.Title>/api</Card.Title>
          <ul style={{ listStyle: "none" }}>
            <li>
              Provides services based on data from Firebase Auth middleware
            </li>
            <br />
            <Path {...get}/>
          </ul>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Col>
  );
}

function Path(prop) {
  return (
    <>
      <li>
        <Card.Title>{prop.title}</Card.Title>
        <ul style={{ listStyle: "none" }}>
          <li>
            <strong>Description:</strong>
            <br/>
            {prop.description}
          </li>
          <br />
          <li>
            <strong>Parameters:</strong> <br />
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
                {prop.params.map((x, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <strong>{x.name}</strong>
                      </td>
                      <td>{x.location}</td>
                      <td>{x.description}</td>
                      <td>{x.required ? "✔" : "x"}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </li>
          <br />
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
                {prop.responses.map((x, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <strong>{x.status}</strong>
                      </td>
                      <td>{x.description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </li>
          <li></li>
        </ul>
      </li>
      <br/>     
    </>
  );
}
