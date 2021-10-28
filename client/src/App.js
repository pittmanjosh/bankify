import {useEffect,useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
        <p>{process.env.REACT_APP_MONGO}</p>
      </header>
    </div>
  );
}

