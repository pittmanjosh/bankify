import currentAuth from "../auth/firebaseAuth";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { createUser, findUser } from "./mongodb";

const auth = currentAuth();

export function loginEmailPassword(email, pwd, createAlert) {
  let success;
  signInWithEmailAndPassword(auth, email, pwd)
    .then((user) => {
      createAlert("Welcome back to Bankify", "success", "Successful Login!");
      success = true;
      console.log("email & pass",user);
      return user;
    })
    .catch((e) => createAlert(e.message, "danger"));

  return success;
}

export function loginGoogle(createAlert) {
  var provider = new GoogleAuthProvider();
  provider.addScope("profile");
  provider.addScope("email");

  signInWithPopup(auth, provider)
    .then((result) => {
      createAlert("Welcome back to Bankify", "success", "Successful Login!");
      console.log("googleResult",result)
      return result;
    })
    .then(result=>{
      let user = result.user;
      let userExists = findUser(user);

      if (!userExists) {
        createUser(user)
      }
    })
    .catch((x) => createAlert(x.message, "danger"));
}

export function register(name, email, pwd, createAlert) {
  createUserWithEmailAndPassword(auth, email, pwd)
    .then((user) => {
      createAlert("You are now registered!", "success");
      return user.user;
    })
    .then((user) => {
      updateProfile(user, {
        displayName: name,
        profileURL: `https://ui-avatars.com/api/?name=${name}`,
      })
        .then(x=>console.log(x))
        .catch((x) => createAlert(x.message, "danger", "Name not filed!"));

      createUser(user);
    })
    .catch((x) => createAlert(x.message, "danger", "Registration Failed!"));
}

export function logout(createAlert) {
  signOut(auth)
    .then(() => {
      if (createAlert) {
        createAlert("Come back soon!", "secondary");
      } 
    })
    .catch((x) => {
      if (createAlert) createAlert(x.message, "danger");
    });
}

export function authentication() {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    return user;
  });
  unsubscribe();
  return null;
}