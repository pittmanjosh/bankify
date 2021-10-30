import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCV1S46-jZ-Xd21HVeWr10ZlfyCi78nXAw",
  authDomain: "bankify-capstone.firebaseapp.com",
  projectId: "bankify-capstone",
  storageBucket: "bankify-capstone.appspot.com",
  messagingSenderId: "676135899184",
  appId: "1:676135899184:web:c096fc5caa04eea7a15df5",
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = firebase.initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
