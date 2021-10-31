import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import DomRouter from "./components/DomRouter";
import { useState } from "react";
import BankContext from "./context"

export default function App() {
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <BankContext.Provider value={{ user, setUser }}>
        <DomRouter/>
      </BankContext.Provider>
    </div>
  );
}
