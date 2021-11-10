import axios from "axios";

export function createUser(user) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.accessToken}`);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("/api", requestOptions)
    .then((x)=>{console.log('creating user result:',x)})
    .catch((error) => console.log("error", error));
}

export const getUser = (user, setSavings, setChecking)=>{
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

  fetch("/api", requestOptions)
    .then(x=>console.log("updateBalance result:", x))
    .catch((error) => console.log("error", error));
}

export function findUser(user) {
  let currentUser = false;
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${user.accessToken}`
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("/api", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      currentUser = result;
      console.log('findUser',result);
    })
    .catch((error) => console.log("error", error));

  return currentUser;
}