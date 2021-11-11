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
      return result.user;
    })
    .then(user=>{
      let currentUser = findUser(user);
      return {fbUser: user, currentUser};
    })
    .then(({fbUser,currentUser})=>{
      if (!currentUser) {
        createUser(fbUser)
          .then(()=>{
            createAlert("Thanks for choosing Bankify","success","Registration Complete")
          })
          .catch(()=>{
            createAlert("Welcome back to Bankify", "success", "Successful Login!");
          })
          
      } else {
        createAlert("Welcome back to Bankify", "success", "Successful Login!");
      }
    })
    .catch((x) => createAlert(x.message, "danger"));
}

export function register(name, email, pwd, createAlert) {
  const picture = `https://ui-avatars.com/api/?name=${name}`;

  createUserWithEmailAndPassword(auth, email, pwd)
    .then((user) => {
      createAlert("You are now registered!", "success");
      return user.user;
    })
    .then((user) => {
      updateProfile(user, {
        displayName: name,
        profileURL: picture,
      })
        .catch((x) => createAlert(x.message, "danger", "Name not filed!"));

      createUser(user,name,picture)
        .then(()=>{
          createAlert("Thanks for choosing Bankify!","success","BANKIFY")
        })
        .catch((x)=>{
          console.log(x);
        })
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