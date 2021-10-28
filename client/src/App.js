import {useEffect,useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav.js";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("/api", requestOptions)
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch(error => console.log('error', error));
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

