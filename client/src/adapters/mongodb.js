import axios from "axios";

export function createUser(user, createAlert, name, picture ) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.accessToken}`);
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("picture", picture);
  urlencoded.append("name", name);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("/api", requestOptions)
    .then((x)=>{
      createAlert("Thanks for signing up with Bankify!","success","Welcome to Bankify!");
      console.log("createUser",x);
    })
    .catch((error) => createAlert(error,"danger","User Not Created"));
}

export function getUser(user, setSavings, setChecking) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.accessToken}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("/api", requestOptions)
    .then((res) => res.json())
    .then((result) => {
      setChecking(result.checking);
      setSavings(result.savings);
    })
    .catch((error) => console.log("error", error));
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
    .catch((error) => console.log("error", error));
}

export function findUser(user) {
  let currentUser;

  var config = {
    method: "get",
    url: "/api",
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  };

  axios(config)
    .then((res) => res.data)
    .then((user) => {
      currentUser = user;
    })
    .catch(function (error) {
      console.log(error);
    });

  return currentUser;
}
