import MyNav from "./components/Nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import { Container } from "react-bootstrap";
import Navigator from "./components/Navigator";
import { useContext, useState } from "react";
import auth from "./context";

export default function App() {
  const [user, setUser] = useState("");
  const AuthContext = useContext(auth);
  return (
    <>
        <div className="App">
          <MyNav />
          {/* import css as well */}
          <Container>
            <Navigator />
          </Container>
        </div>
    </>
  );
}
