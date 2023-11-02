import { initializeApp } from "firebase/app";
import firebase from "firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import getStorage from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCffDBpoqyvvSmyzfiGl6dsjW01XzsW9fo",
  authDomain: "linkedin-clone-403f2.firebaseapp.com",
  projectId: "linkedin-clone-403f2",
  storageBucket: "linkedin-clone-403f2.appspot.com",
  messagingSenderId: "251095716796",
  appId: "1:251095716796:web:05c4682436825c004a91b9",
  measurementId: "G-214FHBSGWY",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth(app);
const storage = getStorage(app);

export { auth, storage };
export default db;
