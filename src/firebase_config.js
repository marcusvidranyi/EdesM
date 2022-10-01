// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApV0LL1ciSLYAvIPYiThp5PvXkKA1uN4M",
  authDomain: "edesm-be928.firebaseapp.com",
  databaseURL: "https://edesm-be928-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "edesm-be928",
  storageBucket: "edesm-be928.appspot.com",
  messagingSenderId: "697710440569",
  appId: "1:697710440569:web:0ef3efd6552e2ac52224a8",
  measurementId: "G-ZV86GZQ0JP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);