import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAdQHKWbNZe_BeA4NyZmIRlhWNGXzTbCvU",
    authDomain: "mislibrzo-c29c0.firebaseapp.com",
    projectId: "mislibrzo-c29c0",
    storageBucket: "mislibrzo-c29c0.appspot.com",
    messagingSenderId: "550024395305",
    appId: "1:550024395305:web:1f19b886668544498c3a38"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {
      firebase,
  };