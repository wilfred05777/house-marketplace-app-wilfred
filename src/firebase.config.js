// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfzHyrI3k7D8FUPTJ6FFjGGVbnPDKJqZ8",
  authDomain: "house-marketplace-app-52fa4.firebaseapp.com",
  projectId: "house-marketplace-app-52fa4",
  storageBucket: "house-marketplace-app-52fa4.appspot.com",
  messagingSenderId: "664783942850",
  appId: "1:664783942850:web:6928952f6ebcac69b6b75b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
