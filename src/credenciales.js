// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAeUX6tYwLUnKHrrVdu8V-XwqxE8Rzcnw",
  authDomain: "wine-sense.firebaseapp.com",
  projectId: "wine-sense",
  storageBucket: "wine-sense.appspot.com",
  messagingSenderId: "658112776443",
  appId: "1:658112776443:web:fe66864006fc0019d0085e"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;