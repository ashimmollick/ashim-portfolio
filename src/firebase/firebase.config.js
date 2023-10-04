// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDv6AMP__Pqt1lE8hcufUtWYiUr-SJLUXo",
    authDomain: "ashim-km.firebaseapp.com",
    projectId: "ashim-km",
    storageBucket: "ashim-km.appspot.com",
    messagingSenderId: "397835162906",
    appId: "1:397835162906:web:650d2bc5f09db5d0bbc8a3",
    measurementId: "G-Y8BJS2DNT1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;