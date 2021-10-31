import getFirebase from "./firebase";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import hasher from "../utils/hash";

const app = getFirebase();
const auth = getAuth(app);

export async function authState() {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log(user);
    return user;
  });
  console.log("no current user")
  unsubscribe();
  return null;
}

export async function loginAuth(email, unhashedPwd) {
  const hashedPwd = hasher(unhashedPwd);
  let userId = undefined;

  await signInWithEmailAndPassword(auth, email, hashedPwd)
    .then((result) => {userId = result.user.uid})
    .catch((e) => console.log(e.message));
  
  return userId;
}

export async function loginGoogleAuth() {
  var provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');
  let result;  
  let error;

  await signInWithPopup(auth,provider)
    .then(x=>result = x)
    .catch(x=>error = x)
  
  return {result,error};
}

export async function logoutAuth() {
  await signOut(auth)
    .then((result) => console.log(result));
}

export function registerAuth(email, unhashedPwd) {
  const hashedPwd = hasher(unhashedPwd);

  return ()=>createUserWithEmailAndPassword(auth, email, hashedPwd)
}
