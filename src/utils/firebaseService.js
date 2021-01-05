// import * as firebase from "firebase/app";
import firebase from 'firebase/app'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDbIocyguzh0Z-fQ1Q46PBxzA_ZJPEDfn0",
  authDomain: "burger-builder-a7caa.firebaseapp.com",
  databaseURL: "https://burger-builder-a7caa.firebaseio.com",
  projectId: "burger-builder-a7caa",
  storageBucket: "burger-builder-a7caa.appspot.com",
  messagingSenderId: "702307844655",
  appId: "1:702307844655:web:69079900040acaae0ffcda",
  measurementId: "G-3N5DE6RCW3",
};

firebase.initializeApp(config);

export const auth = firebase.auth;

export default firebase;
