// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3AC1uQ1D8TlQn31I9yC6Uh_aOIQdYj_8",
    authDomain: "flow-shadow.firebaseapp.com",
    projectId: "flow-shadow",
    storageBucket: "flow-shadow.appspot.com",
    messagingSenderId: "637397720536",
    appId: "1:637397720536:web:abcf64d1c2083b075426ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;