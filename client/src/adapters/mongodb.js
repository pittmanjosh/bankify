import currentAuth from "../auth/firebaseAuth";
import axios from "axios";
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
  let result;
  (async ()=>{
    axios(config)
      .then((res) => res.data)
      .then(function (response) {
        result = response;
        console.log('fetched:',response);
      })
      .catch(function (error) {
        console.log(error);
      });
  })()

  return result;
}
