//starting firebase
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYDfBn0tHmsulmjvorA0ojQXLumLCd2gw",
  authDomain: "ev-generator.firebaseapp.com",
  projectId: "ev-generator",
  storageBucket: "ev-generator.appspot.com",
  messagingSenderId: "605773452546",
  appId: "1:605773452546:web:562a63295a367cefeb9e1b",
  measurementId: "G-K43CH4L8WJ",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
