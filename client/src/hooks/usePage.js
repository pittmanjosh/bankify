import { useState } from "react";
import { NavLink } from "react-bootstrap";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";

export default function PageLinkAndComponent() {
  const {user,setPage,}
  const selectedPage = Pages[chosen];

  const handleClick = (e) => {
    const selected = e.target.targetPage;
    const possible = (selected.ifUser);

    if (possible) {
      setPage(e.target.page)
    } else {
      console.log("")
    }
  };
  
  const MyLink = ()=>{
    <NavLink onClick={handleClick} targetPage={Pages[page]}>
      {}
    </NavLink>
  }

  return {
    content: Pages[page],
    link: MyLink
  };
}
