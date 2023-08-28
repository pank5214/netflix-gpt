// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLuwKqiVtCBilxOqDtsvbk54-ieTFujC0",
  authDomain: "netflixgpt5.firebaseapp.com",
  projectId: "netflixgpt5",
  storageBucket: "netflixgpt5.appspot.com",
  messagingSenderId: "413818664185",
  appId: "1:413818664185:web:b05205d4749c5c2691de28",
  measurementId: "G-CSFYM0ELH4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
