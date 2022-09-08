// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { getFirestore } from "firebase/firestore";
import "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXCMgrO62E_6mid4-JI8fb3cJ-bx3xQvU",
  authDomain: "umbalakeep.firebaseapp.com",
  projectId: "umbalakeep",
  storageBucket: "umbalakeep.appspot.com",
  messagingSenderId: "329758689676",
  appId: "1:329758689676:web:a09c9e00a07e3ad8f76ea9",
  measurementId: "G-LMYVB033X6"
};

// Initialize Firebase
let app;
let db;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
} else {
  app = firebase.app();
}

const auth = firebase.auth();
export { auth, db };
