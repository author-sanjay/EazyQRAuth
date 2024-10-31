import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import getStorage

const firebaseConfig = {
  apiKey: "AIzaSyARsQMmXd5QM1otCih6j4RexP7u58xJgac",
  authDomain: "eazyqrauth.firebaseapp.com",
  projectId: "eazyqrauth",
  storageBucket: "eazyqrauth.appspot.com",
  messagingSenderId: "1007245030208",
  appId: "1:1007245030208:web:60b4a0db3e97b2b9d740a5",
  measurementId: "G-WN1VQYHRBL",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORAGE = getFirestore(FIREBASE_APP); // Export storage
