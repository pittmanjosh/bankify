import { useContext } from "react";
import ctx from "../context";
import Content from "./Content";
import MyNav from "./Nav";
import Alert from "./Alert";

export default function Bankify() {
  const { user, alertProps } = useContext(ctx);
  return (
    <>
      <MyNav />
      <Alert {...alertProps} />
      <Content user={user} />
    </>
  );
}
