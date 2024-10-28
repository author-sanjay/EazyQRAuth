import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"; // Import getStorage

const firebaseConfig = {
  apiKey: "AIzaSyARsQMmXd5QM1otCih6j4RexP7u58xJgac",
  authDomain: "eazyqrauth.firebaseapp.com",
  projectId: "eazyqrauth",
  storageBucket: "eazyqrauth.appspot.com",
  messagingSenderId: "1007245030208",
  appId: "1:1007245030208:web:60b4a0db3e97b2b9d740a5",
  measurementId: "G-WN1VQYHRBL",
};

// Initialize Firebase App
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

// Initialize Firebase Storage
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP); // Export storage
