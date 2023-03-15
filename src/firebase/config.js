// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfp-fyRbvBD5aAp2DnNWTkg136YbDIg10",
  authDomain: "e-commerce-coderhose.firebaseapp.com",
  projectId: "e-commerce-coderhose",
  storageBucket: "e-commerce-coderhose.appspot.com",
  messagingSenderId: "89407859148",
  appId: "1:89407859148:web:b8e01ba10e1b5d0d0e5569",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => app;
