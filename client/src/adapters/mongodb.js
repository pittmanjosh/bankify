import currentAuth from "../auth/firebaseAuth";
import axios from "axios";
import qs from 'qs';
const auth = currentAuth();
const currentUser = auth.currentUser;

export function updateBalance(account, amount) {
  return 32;
}

export function createUser(user) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.accessToken}`);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("/api", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}

export function getUser(user) {
  var config = {
    method: 'get',
    url: '/api',
    headers: { 
      'Authorization': `Bearer ${user.accessToken}`
    }
  };
  
  axios(config)
  .then(function (response) {
    return JSON.stringify(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

  return null;
}
