import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB7GkS4xNcxWqWjGUUoVzkwJQGFAnUKLos",
  authDomain: "auth-development-f0e78.firebaseapp.com",
  projectId: "auth-development-f0e78",
  storageBucket: "auth-development-f0e78.appspot.com",
  messagingSenderId: "539901806287",
  appId: "1:539901806287:web:4f72eba43aa03ff0ea59ba",
  measurementId: "G-VQE0DDBJSR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
