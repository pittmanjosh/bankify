import { useEffect, useState } from "react";
import Nav from "./components/Nav.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("/api", requestOptions)
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className="App">
      <Nav />
      <Container>
        <header className="App-header">
          <p>{!data ? "Loading..." : data}</p>
        </header>
      </Container>
    </div>
  );
}
