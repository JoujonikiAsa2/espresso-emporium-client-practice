// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMJieHXEsCszZt35MtRMVY5i9l33a3zlg",
  authDomain: "espresso-emporium-store.firebaseapp.com",
  projectId: "espresso-emporium-store",
  storageBucket: "espresso-emporium-store.appspot.com",
  messagingSenderId: "839164134263",
  appId: "1:839164134263:web:956836f0f7c46ff553d772"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth