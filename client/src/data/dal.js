import getFirebase from '../auth/firebase'
import { logoutAuth, authState,currentAuth} from "../auth/firebaseAuth";
import {
  createUserWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut,
  signInWithEmailAndPassword
} from "firebase/auth";
import hasher from "../utils/hash";

const auth = currentAuth();

export function login(email,unhashedPwd) {
  const hashedPwd = hasher(unhashedPwd);
  // receive unique userId from firebase
  let user; 
  signInWithEmailAndPassword(auth, email, hashedPwd)
    .then((result) => {user = result.user.uid})
    .catch((e) => console.log(e.message));

  return user;
}

export function register(email,unhashedPwd,props) {
  let {createAlert,setUser,resetForm} = props;
  const hashedPwd = hasher(unhashedPwd);

  createUserWithEmailAndPassword(auth, email, hashedPwd)
    .then(x => {
      setUser(x);
      createAlert("You are now registered!","success");
      resetForm();})
    .catch(x => {
      setUser("");
      createAlert(x.message,"danger","Registration Failed!");})
}

export function logout() {
  // need tor remove tokens
  signOut(auth)
    .then(x=>console.log(x))
    .catch(x=>console.log(x))
}

export function authentication() {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log(user);
    return user;
  });
  console.log("no current user")
  unsubscribe();
  return null;
}