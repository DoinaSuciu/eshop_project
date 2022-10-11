// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDesA7LU8NRvlbeVIQU_Z51KrGyRkhng8c",
  authDomain: "eshop-myfirstproject.firebaseapp.com",
  projectId: "eshop-myfirstproject",
  storageBucket: "eshop-myfirstproject.appspot.com",
  messagingSenderId: "565514850743",
  appId: "1:565514850743:web:473f930a91eca0fea0d832",
  measurementId: "G-PM7RES7ZX5",
};

const firebaseApp = initializeApp(firebaseConfig);
// const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { serverTimestamp as timestamp };
export default getFirestore();
