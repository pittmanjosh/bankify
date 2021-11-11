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
    .then(res=>res.json())
    .then(result=>{
      console.log('setting');
      setChecking(result.checking);
      setSavings(result.savings);
    })
    .catch((error) => console.log("error", error));
};

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
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${user.accessToken}`);

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("/api", requestOptions)
    .then(result=>{
      let duplicate = {...result};
      let triplicate = {...result};
      console.log("json",duplicate.json());
      console.log("text",triplicate.text());
      return result;
    })
    .then((result) => {
      currentUser = result;
      console.log("findUser", result);
    })
    .catch((error) => console.error(error));

  return currentUser;
}
