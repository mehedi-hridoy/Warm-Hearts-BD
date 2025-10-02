// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVJAUqpOnF5UynLdatcNJuIJDnWRp4ExM",
  authDomain: "warmheartbd.firebaseapp.com",
  projectId: "warmheartbd",
  storageBucket: "warmheartbd.firebasestorage.app",
  messagingSenderId: "544763858807",
  appId: "1:544763858807:web:11d5b5fc718622660fdb72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;