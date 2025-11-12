// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// DANGER--- DO NOT SHARE CONFIG IN PUBLIC
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGZuUObyaDLkNMOvQykafTil2DfEafuqo",
  authDomain: "worknex-94b7d.firebaseapp.com",
  projectId: "worknex-94b7d",
  storageBucket: "worknex-94b7d.firebasestorage.app",
  messagingSenderId: "436449658367",
  appId: "1:436449658367:web:f9524783fd35de067713ca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);