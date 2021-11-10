import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Bankify from "./components/Bankify";
import { BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import BankContext from "./context";
import { onAuthStateChanged } from "firebase/auth";
import currentAuth from "./auth/firebaseAuth";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  const [user, setUser] = useState("");
  const [newUser,setNewUser] = useState(false);
  // settings for alert
  const [msg, setMsg] = useState("");
  const [heading, setHeading] = useState("");
  const [type, setType] = useState("danger");

  let auth = currentAuth();

  onAuthStateChanged(auth, (authUser) => {
    setUser(authUser);
  });

  const createAlert = (message, variant, title) => {
    setMsg(message);
    setType(variant);
    setHeading(title);
  };

  const resetAlert = () => {
    setMsg("");
    setType("danger");
    setHeading("");
  };
  
  const alertProps = { msg, type, heading, reset: resetAlert };

  return (
    <UserProvider>
      <BankContext.Provider value={{ user, setUser, newUser, setNewUser, createAlert, alertProps }}>
        <Router>
          <Bankify />
        </Router>
      </BankContext.Provider>
    </UserProvider>
  );
}
