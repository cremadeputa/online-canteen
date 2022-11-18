// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRigX2JM3fak5LAtUDt4bG3RL6txITCEM",
  authDomain: "online-canteen-b1e25.firebaseapp.com",
  projectId: "online-canteen-b1e25",
  storageBucket: "online-canteen-b1e25.appspot.com",
  messagingSenderId: "282684535307",
  appId: "1:282684535307:web:2d4d3ffaf49d73e4244d0e",
  measurementId: "G-Z4HXX78R2P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)
console.log('Hello UP CEBU!')