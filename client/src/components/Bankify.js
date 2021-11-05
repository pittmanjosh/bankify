import { useContext, useEffect } from "react";
import ctx from "../context";
import { BrowserRouter as Router,Link } from "react-router-dom";
import Content from "./Content";
import MyNav from "./Nav";
import Alert from "./Alert";
import useAlert from "../hooks/useAlert";

export default function Bankify() {
  const { user } = useContext(ctx);
  const alertProps = useAlert()
  return (
    <>
      <MyNav/>
      <Alert {...alertProps} />
      <Content user={user} />
    </>
  );
}


