import getFirebase from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import hasher from "../utils/hash";

const app = getFirebase();
const auth = getAuth(app);

export function authState() {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log(user);
    return user;
  });

  unsubscribe();
  return null;
}

export function loginAuth(email, unhashedPwd) {
  const hashedPwd = hasher(unhashedPwd);
  let userId = undefined;

  signInWithEmailAndPassword(auth, email, hashedPwd)
    .then((result) => {userId = result.user.uid})
    .catch((e) => console.log(e.message));
  
  return userId;
}

export function logoutAuth() {
  signOut(auth).then((result) => console.log(result));
}

export function registerAuth(email, unhashedPwd) {
  const hashedPwd = hasher(unhashedPwd);

  createUserWithEmailAndPassword(auth, email, hashedPwd)
    .then((result) => console.log(result.user.accessToken, result.user.email))
    .catch((e) => console.log(e.message));
}
