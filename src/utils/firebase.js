// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChtSiKKMesAnczZiZ4kQ3gTBUMGXjknKs",
  authDomain: "streamflix-pankaj.firebaseapp.com",
  projectId: "streamflix-pankaj",
  storageBucket: "streamflix-pankaj.appspot.com",
  messagingSenderId: "761415346516",
  appId: "1:761415346516:web:730f13a10722c0605980c1",
  measurementId: "G-8ME24JYWPS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
