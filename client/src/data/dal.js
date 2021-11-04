import currentAuth from "../auth/firebaseAuth";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged, 
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup
} from "firebase/auth";
import hasher from "../utils/hash";

const auth = currentAuth();

export function loginEmailPassword(email,pwd,/*setUser,*/createAlert) {
  signInWithEmailAndPassword(auth, email, pwd)
    .then((result) => {
      // setUser(result);
      createAlert("Welcome back to Bankify","success","Successful Login!");
    })
    .catch((e) => createAlert(e.message,"danger"));
}

export function loginGoogle(/*setUser,*/createAlert) {
  var provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

  let user;

  signInWithPopup(auth,provider)
    .then((result)=>{
      // setUser(result);
      createAlert("Welcome back to Bankify","success","Successful Login!");})
    .catch(x=>createAlert(x.message,"danger"))

}

export function register(email,pwd,props) {
  let {createAlert,resetForm} = props;

  createUserWithEmailAndPassword(auth, email, pwd)
    .then(x=>{
      createAlert("You are now registered!","success");
      resetForm();})
    .catch(x => {
      createAlert(x.message,"danger","Registration Failed!");})
}
// setUser was deprecated first argument
export function logout(/*setUser,*/createAlert,) {
  // need to remove tokens
  signOut(auth)
    .then(()=>{
      if (createAlert) {
        createAlert("Come back soon!","secondary");
      } else {
        console.log("Successful Logout");
      };
      // setUser("");
    })
    .catch(x=>{
      if (createAlert) createAlert(x.message,"danger")
    })
}

export function authentication() {
  const unsubscribe = onAuthStateChanged(auth, (user)=>{return user});
  unsubscribe();
  return null;
}