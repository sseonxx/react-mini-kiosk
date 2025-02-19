// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0omx8mF6KYAXxd6HNv1bdUs6prVylmEc",
  authDomain: "react-mini-kiosk.firebaseapp.com",
  projectId: "react-mini-kiosk",
  storageBucket: "react-mini-kiosk.firebasestorage.app",
  messagingSenderId: "518046860512",
  appId: "1:518046860512:web:7ebae628c4de556c0b3c85",
  measurementId: "G-0KWWJNYQRC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore 및 Auth 가져오기
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
