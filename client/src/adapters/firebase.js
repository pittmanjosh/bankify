import currentAuth from "../auth/firebaseAuth";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged, 
  signOut,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from "firebase/auth";

const auth = currentAuth();

export function loginEmailPassword(email,pwd, createAlert) {
  let success;
  signInWithEmailAndPassword(auth, email, pwd)
    .then((result) => {
      createAlert("Welcome back to Bankify","success","Successful Login!");
      success = true;
    })
    .catch((e) => createAlert(e.message,"danger"));
  
  return success;
}

export function loginGoogle(createAlert) {
  var provider = new GoogleAuthProvider();
  provider.addScope('profile');
  provider.addScope('email');

  signInWithPopup(auth,provider)
    .then(()=>{
      createAlert("Welcome back to Bankify","success","Successful Login!");})
    .catch(x=>createAlert(x.message,"danger"))
}

export function register(name,email,pwd,createAlert) {
  createUserWithEmailAndPassword(auth, email, pwd)
    .then(user=>{
      createAlert("You are now registered!","success");
      return user;
    })
    .then(()=>{
      updateProfile(auth.currentUser, {
        displayName: name,
        profileURL: `https://ui-avatars.com/api/?name=${name}`
      })
        .catch(x => createAlert(x.message,"danger","Name not filed!"))
    })
    .catch(x => createAlert(x.message,"danger","Registration Failed!"))
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