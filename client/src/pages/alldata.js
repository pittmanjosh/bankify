import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { Card, Table } from "react-bootstrap";
import ctx from "../context";

export default function AllData() {
  const [data, setData] = useState(null);
  const { createAlert } = useContext(ctx);

  useEffect(() => {
    (async () => {
      fetchData();
    })();
  }, []);

  function fetchData() {
    console.log("fetching");
    let possibleData;

    axios
      .get("/backdoor")
      .then((res) => res.data)
      .then((response) => {
        // handle success
        console.log(response);
        possibleData = response;
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
      .then(() => {
        setData(possibleData);
      });

    const alertMsg = possibleData ? "" : "Data Fetch Error";
    createAlert(alertMsg, "danger");
  }

  function DataLayout() {
    if (!data || data.length === 0) {
      return <div>loading...</div>;
    }

    return (
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>uid</th>
            <th>Checking Balance</th>
            <th>Savings Balance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user?.name || ""}</td>
                <td>{user?.email || ""}</td>
                <td>{user?.uid || ""} </td>
                <td>{user?.checking || ""}</td>
                <td>{user?.savings || ""} </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }

  return (
    <Card>
      <Card.Body>
        <DataLayout />
      </Card.Body>
    </Card>
  );
}
