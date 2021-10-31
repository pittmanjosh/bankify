import { useContext } from "react";
import ctx from "../context";
import { BrowserRouter as Router,Link } from "react-router-dom";
import Content from "./Content";
import MyNav from "./Nav";
import Alert from "./Alert";

export default function Bankify() {
  const { user, setUser, alertProps } = useContext(ctx);

  return (
    <>
      <MyNav>
        <Link to="/" className="navbar-brand nav-link">
          Bankify
        </Link>
        <UserDependentLinks user={user} setUser={setUser}/>
      </MyNav>
      <Alert {...alertProps} />
      <Content user={user} />
    </>
  );
}

function UserDependentLinks({user,setUser}) {
  const MyLinks = user ? (
    <>
      <Link to="/dashboard" className="nav-link">
        Dashboard
      </Link>
      <AllDataLink />
      <Link to="/" className="nav-link" onClick={() => setUser("")}>
        Logout
      </Link>
    </>
  ) : (
    <>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      <Link to="/register" className="nav-link">
        Register
      </Link>
      <AllDataLink />
      <Link to="/" className="nav-link" onClick={() => setUser("8")}>
        setUser()
      </Link>
    </>
  );

  return MyLinks
}

function AllDataLink() {
  return (
    <Link to="/alldata" className="nav-link">
      All Data
    </Link>
  );
}
