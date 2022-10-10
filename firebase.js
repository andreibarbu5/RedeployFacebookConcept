// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_rPRrVBA1BlBH4IrNRD5xwEH5mZOYgq0",
  authDomain: "redofacebook-23b66.firebaseapp.com",
  projectId: "redofacebook-23b66",
  storageBucket: "redofacebook-23b66.appspot.com",
  messagingSenderId: "28000256663",
  appId: "1:28000256663:web:4aabc28de5b873379e1fd2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
