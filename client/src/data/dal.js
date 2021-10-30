import { loginAuth, logoutAuth, registerAuth, authState } from "../auth/fbauth";

export function login(email,password) {
  // receive unique userId from firebase
  const userId = loginAuth(email,password);
  return userId;
}

export function register(email,password,confirmed,resetForm) {
  if (password !== confirmed.value) {
    console.log("Passwords do not match");
    confirmed.clear();
    return null;
  }
  const userId = registerAuth(email,password);
  if (userId) {
    // createUser(userId,fname,lname,email,"0.00")
    resetForm();
    return userId;
  } else {
    return null;
  }
}

export function logout() {
  logoutAuth()
}

export function authenticate() {
  authState()
}