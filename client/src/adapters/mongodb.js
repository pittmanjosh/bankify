import currentAuth from "../auth/firebaseAuth";
import axios from "axios";
const auth = currentAuth();
const currentUser = auth.currentUser;

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

export function getUser(user, setSavings, setChecking) {
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
        console.log(response);
        setChecking(response.checking);
        setSavings(response.savings);
      })
      .catch(function (error) {
        console.log(error);
      });
  })();
}

export function updateBalance(user, account, amount) {
  console.log("setting", account, "to", amount);
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

  fetch("/api", requestOptions).catch((error) => console.log("error", error));
}

export function findUser(user) {
  var user;

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.accessToken}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("/api", requestOptions)
    .then((response) => response.text())
    .then((result) => user = result)
    .catch((error) => console.log("error", error));

  console.log(user ? 'user exists' : 'user nonexistent');
  return user;
}
