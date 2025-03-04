// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-777db.firebaseapp.com",
  projectId: "ai-course-generator-777db",
  storageBucket: "ai-course-generator-777db.firebasestorage.app",
  messagingSenderId: "1067759951331",
  appId: "1:1067759951331:web:c877e47904db2e0f2ed4d6",
  measurementId: "G-7JHKNCH32G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app);