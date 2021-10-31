import { loginAuth, logoutAuth, registerAuth, authState } from "../auth/firebaseAuth";

export function login(email,password) {
  // receive unique userId from firebase
  const userId = loginAuth(email,password);
  return userId;
}

export function register(email,password,props) {
  const callback = registerAuth(email,password);
  let {createAlert,setUser,resetForm} = props;
  
  callback()
    .then(x => {
      setUser(x);
      createAlert("You are now registered!","success");
      resetForm();})
    .catch(x => {
      setUser("");
      createAlert(x.message,"danger","Registration Failed!");})
}

export function logout() {
  logoutAuth()
}

export function authenticate() {
  authState()
}

// export function registerAuth(email, unhashedPwd, props) {
//   let hashedPwd = hasher(unhashedPwd);
//   let {createAlert,setUser,resetForm} = props;

  

//   createUserWithEmailAndPassword(auth, email, hashedPwd)
//     .then(x => {
//       setUser(x);
//       createAlert("You are now registered!","success");
//       resetForm();})
//     .catch(x => {
//       setUser("");
//       createAlert(x.message,"danger","Registration Failed!");})
// }