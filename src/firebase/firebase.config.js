// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH3dEtnKjwTS7dj4J5CO3rnwYgcEBpph4",
  authDomain: "bookstore-c0919.firebaseapp.com",
  projectId: "bookstore-c0919",
  storageBucket: "bookstore-c0919.appspot.com",
  messagingSenderId: "499455536841",
  appId: "1:499455536841:web:a30ad9dc37cd4959e0e718",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
