import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const useAuth =()=>{

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoL28eu4qeyhdi7tm1f0_bt42MOy-AG8E",
  authDomain: "furniture-web-8900a.firebaseapp.com",
  projectId: "furniture-web-8900a",
  storageBucket: "furniture-web-8900a.appspot.com",
  messagingSenderId: "921111719531",
  appId: "1:921111719531:web:3fd157a1a069f7911dcb2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
return[auth];
}

export default useAuth;