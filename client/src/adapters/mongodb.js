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

export function getUser(user, setter) {
  var config = {
    method: "get",
    url: "/api",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };
  (async () => {
    axios(config)
      .then((res) => res.data)
      .then(function (response) {
        setter(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  })();
}

export function updateBalance(user, account, amount) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.accessToken}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("account", account);
  urlencoded.append("amount", amount);

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("/api", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
