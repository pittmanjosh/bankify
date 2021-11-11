import axios from "axios";

export function createUser(user) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.accessToken}`);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("/api", requestOptions).catch((error) => console.log("error", error));
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
      console.log("setting");
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
    .then((x) => console.log("updateBalance result:", x))
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
    .then(res=>res.data)
    .then(user=>{
      currentUser = user;
    })
    .catch(function (error) {
      console.log(error);
    });

  console.log(currentUser);
  
  return currentUser;
}
