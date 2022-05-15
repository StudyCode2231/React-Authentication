// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBfSWXEK_Hpg-NhmMWVMSvTFkGZJ531YDw",
  authDomain: "react-auth-dc47e.firebaseapp.com",
  projectId: "react-auth-dc47e",
  storageBucket: "react-auth-dc47e.appspot.com",
  messagingSenderId: "434395029155",
  appId: "1:434395029155:web:a2c44da47fb39bd7a8e916",
  measurementId: "G-ZDE6GDX6W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export default app;