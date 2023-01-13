import { initializeApp } from "firebase/app";
import dotenv from "dotenv";
dotenv.config();

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

let instance;

export default function getFirebase() {
  if (typeof window !== "undefined") {
    if (instance) return instance;
    instance = initializeApp(firebaseConfig);
    return instance;
  }

  return null;
}
