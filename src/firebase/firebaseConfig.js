// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy6NhYeHz4nuaplKPzdZhMx0lOyxGPYkk",
  authDomain: "ecommerce-e4be7.firebaseapp.com",
  projectId: "ecommerce-e4be7",
  storageBucket: "ecommerce-e4be7.appspot.com",
  messagingSenderId: "537680232549",
  appId: "1:537680232549:web:479717b2013e9cce67068c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
