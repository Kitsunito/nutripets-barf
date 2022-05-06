// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_GOOGLE_FIREBASE_API_KEY,
    authDomain: "ecommerce-nutripets.firebaseapp.com",
    projectId: "ecommerce-nutripets",
    storageBucket: "ecommerce-nutripets.appspot.com",
    messagingSenderId: "283968593090",
    appId: "1:283968593090:web:a138dab045b9fe54bd2f5b",
    measurementId: "G-J64W0M1357"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;