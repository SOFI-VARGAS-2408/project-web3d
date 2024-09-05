// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZXvhfJtNWAsctAWkOGkhNZuQWPUS9qjk",
  authDomain: "medio-ambiente-c7faa.firebaseapp.com",
  projectId: "medio-ambiente-c7faa",
  storageBucket: "medio-ambiente-c7faa.appspot.com",
  messagingSenderId: "869854758573",
  appId: "1:869854758573:web:93308884b2e19b8547a824",
  measurementId: "G-X74YDGV30K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const db = getFirestore(app)

export { auth, db};