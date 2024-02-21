// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWbeLLLPvivA7JI0h8foD6nQgK-NQHBRk",
  authDomain: "auth-ffc0c.firebaseapp.com",
  projectId: "auth-ffc0c",
  storageBucket: "auth-ffc0c.appspot.com",
  messagingSenderId: "575560207085",
  appId: "1:575560207085:web:8894532da9c39289da5ae4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {auth,db,createUserWithEmailAndPassword,getAuth}