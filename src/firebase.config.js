// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB-tx22LiBqdC6kqAHcP8h6vzYkp15e998",
//   authDomain: "home-marketplace-8a786.firebaseapp.com",
//   projectId: "home-marketplace-8a786",
//   storageBucket: "home-marketplace-8a786.appspot.com",
//   messagingSenderId: "533024292292",
//   appId: "1:533024292292:web:f9340c31e924013267b891",
//   measurementId: "G-C9YYN07BGH",
// };

/// wilfred05777@gmail.com account console
const firebaseConfig = {
  apiKey: "AIzaSyDfzHyrI3k7D8FUPTJ6FFjGGVbnPDKJqZ8",
  authDomain: "house-marketplace-app-52fa4.firebaseapp.com",
  projectId: "house-marketplace-app-52fa4",
  storageBucket: "house-marketplace-app-52fa4.appspot.com",
  messagingSenderId: "664783942850",
  appId: "1:664783942850:web:6928952f6ebcac69b6b75b",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDfzHyrI3k7D8FUPTJ6FFjGGVbnPDKJqZ8",
//   authDomain: "house-marketplace-app-52fa4.firebaseapp.com",
//   projectId: "house-marketplace-app-52fa4",
//   storageBucket: "house-marketplace-app-52fa4.appspot.com",
//   messagingSenderId: "664783942850",
//   appId: "1:664783942850:web:6928952f6ebcac69b6b75b",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// const colRef = collection(db, "listings");
// getDocs(colRef).then((snapshot) => {
//   console.log(snapshot.docs);
// });

// async function getListings(db) {
//   const listingsCol = collection(db, "listings");
//   const listingSnapshot = await getDocs(listingsCol);
//   const listingList = listingSnapshot.docs.map((doc) => doc.data());
//   return listingList;
//   // console.log(listingList);
//   // console.log(getListings());
// }
// console.log(getListings());

// "firebase": "^9.4.1", brad's version
