// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUOg1C3V5f9CUeqahoLcG9ipl0E6ChJto",
  authDomain: "netflixgpt-120a3.firebaseapp.com",
  projectId: "netflixgpt-120a3",
  storageBucket: "netflixgpt-120a3.firebasestorage.app",
  messagingSenderId: "240881602879",
  appId: "1:240881602879:web:6049435875b6b42669c38a",
  measurementId: "G-G0EN240N0K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);