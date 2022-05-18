// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOgYaOAbd4w_GROqcZhoEDGNGd5vFD93Y",
  authDomain: "to-do-app-96e1a.firebaseapp.com",
  projectId: "to-do-app-96e1a",
  storageBucket: "to-do-app-96e1a.appspot.com",
  messagingSenderId: "579134465321",
  appId: "1:579134465321:web:cf6a3ab78d9f6dc6ec8338"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;