import { Card, Container } from "react-bootstrap";
// import { register } from "../data/dal";
// import useInput from "../hooks/useInput";
// import { useContext } from "react";
// import ctx from "../context";
// import currentAuth from "../auth/firebaseAuth";
import { BrowserRouter as Router,Redirect } from "react-router";
import useUser from "../hooks/useUser";

export default function Dashboard() {
  const user = useUser();
  if (!user) return <Redirect to="/"/>

  let uid   = user.uid
  let name  = user.displayName;
  let email = user.email;
  let photoURL = user.photoURL;
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch(photoURL, requestOptions)
    .then(()=>console.log("avatar successfully fetched"))
    .catch(()=>{photoURL = `https://ui-avatars.com/api/?name=${name}`})

  const Avatar = (url)=>{
    return <img src={url} className="avatar-img" />};
  
  // Fetch User from Database
  // if loading put in bootstrap placeholder elements
  // if not found, create use with user email

  return (
    <Container>
      <Card style={{ maxWidth: "36rem", minWidth: "18rem", }}>
        <Card.Header>
          <h2>Dashboard</h2>
        </Card.Header>
        <Card.Body className="justify-content-center align-item-center">
          <Card.Title>Balances</Card.Title>
          <Card.Text>{`Hello ${name}`}</Card.Text>
          <br/>
          {console.log(user)}
          <Avatar url={photoURL} />
          <Card.Title>Deposit</Card.Title>
          <Card.Title>Withdraw</Card.Title>
        </Card.Body>
      </Card>
    </Container>
  );
}

