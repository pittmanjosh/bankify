import getFirebase from "./firebase";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import hasher from "../utils/hash";

const app = getFirebase();
const auth = getAuth(app);


// returns auth component of app instance
export default function currentAuth() {
  return auth;
}