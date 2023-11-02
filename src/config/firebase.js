import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbpfupQKC8EbffXbqjNt_ian3K8baA6oI",
  authDomain: "clase1358000.firebaseapp.com",
  projectId: "clase1358000",
  storageBucket: "clase1358000.appspot.com",
  messagingSenderId: "690367236352",
  appId: "1:690367236352:web:d3410093c4f2d3860b4be5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
