// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwh3NHkAMlJ5cwnFgxIxSYPUQ2EYwjnvI",
  authDomain: "react-ecommerce-657ee.firebaseapp.com",
  projectId: "react-ecommerce-657ee",
  storageBucket: "react-ecommerce-657ee.appspot.com",
  messagingSenderId: "211794540032",
  appId: "1:211794540032:web:e8116044ec6419d7b30ae5"
};

console.log(":: I am in Firebase App File ::");

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const database = getFirestore(firebaseApp);