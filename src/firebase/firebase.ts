// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlHUYJLpnob5e31dNKnXM7uRW9aoqauHU",
    authDomain: "insta-clone-2094.firebaseapp.com",
    projectId: "insta-clone-2094",
    storageBucket: "insta-clone-2094.appspot.com",
    messagingSenderId: "886099612496",
    appId: "1:886099612496:web:356ec219da8379b41b9255",
    measurementId: "G-RHDKCW6ZYF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const firestore = getFirestore(app)
const storage = getStorage(app)
// const analytics = getAnalytics(app);

export { app, auth, firestore, storage }