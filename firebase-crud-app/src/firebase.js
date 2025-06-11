// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlBdl1Gl6Drr6x_lpLtEM5u0mowZ_PlyA",
  authDomain: "deephub-49708.firebaseapp.com",
  projectId: "deephub-49708",
  storageBucket: "deephub-49708.firebasestorage.app",
  messagingSenderId: "735289523656",
  appId: "1:735289523656:web:c034a7378565b9beedd4fd",
  measurementId: "G-RTNSYCH3S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };