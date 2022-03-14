import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqGMLknFd_MO3M0l5DGAeOm4zgDig5ZKw",
  authDomain: "chatly-954eb.firebaseapp.com",
  projectId: "chatly-954eb",
  storageBucket: "chatly-954eb.appspot.com",
  messagingSenderId: "839255681487",
  appId: "1:839255681487:web:e14b512e6072dd3f0b8aba",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
