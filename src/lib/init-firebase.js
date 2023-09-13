// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYuQEZTonL4K77pntM_OYYt7yTtGpW798",
  authDomain: "react-map-project-fe70c.firebaseapp.com",
  projectId: "react-map-project-fe70c",
  storageBucket: "react-map-project-fe70c.appspot.com",
  messagingSenderId: "814940179787",
  appId: "1:814940179787:web:29351be915f20089f36cce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db =getFirestore(app)