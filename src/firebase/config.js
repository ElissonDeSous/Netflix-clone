// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDqYhYpF0gND5hx8_mnydDlb7j6zLGyTuA",
  authDomain: "netflix-7c735.firebaseapp.com",
  projectId: "netflix-7c735",
  storageBucket: "netflix-7c735.appspot.com",
  messagingSenderId: "819327865586",
  appId: "1:819327865586:web:545f7e364f7b90349e366b",
  measurementId: "G-6JDC756EWR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export{db};