// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaCAGWdVk3fAeq8bY_Thy84Eus8G6QMuU",
  authDomain: "sign-in-2b380.firebaseapp.com",
  projectId: "sign-in-2b380",
  storageBucket: "sign-in-2b380.appspot.com",
  messagingSenderId: "776106098181",
  appId: "1:776106098181:web:c3ad3f99b336cd74a8266c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);