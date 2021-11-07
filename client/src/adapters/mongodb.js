import currentAuth from "../auth/firebaseAuth";
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

  fetch("https://badbank-pittman.herokuapp.com/api", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
