import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDeb5FlJ6gC5V46QpsuZNlhyYhH-W_Rie0",
    authDomain: "libreriamachi.firebaseapp.com",
    projectId: "libreriamachi",
    storageBucket: "libreriamachi.appspot.com",
    messagingSenderId: "348499543195",
    appId: "1:348499543195:web:e53820c9360ba00483f23e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

