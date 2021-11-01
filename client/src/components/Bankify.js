import { useContext, useEffect } from "react";
import ctx from "../context";
import { BrowserRouter as Router,Link } from "react-router-dom";
import Content from "./Content";
import MyNav from "./Nav";
import Alert from "./Alert";
import { logout } from "../data/dal";

export default function Bankify() {
  const { user, setUser, alertProps } = useContext(ctx);

  return (
    <>
      <MyNav/>
      <Alert {...alertProps} />
      <Content user={user} />
    </>
  );
}


