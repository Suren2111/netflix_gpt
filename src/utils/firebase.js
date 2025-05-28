// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEVZTw7AgAJvLwbVKHC4HzMO7a0JdHeEg",
  authDomain: "netflixgpt-48aab.firebaseapp.com",
  projectId: "netflixgpt-48aab",
  storageBucket: "netflixgpt-48aab.firebasestorage.app",
  messagingSenderId: "523079395483",
  appId: "1:523079395483:web:cb0461b26934cc404abe3e",
  measurementId: "G-JYB6ERC6LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Creating Global Auth:
export const auth = getAuth();