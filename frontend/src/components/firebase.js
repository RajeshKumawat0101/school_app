
 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwh-c8GQUe56qvUyCIIvr5oq3dn0ajCyI",
  authDomain: "athotication.firebaseapp.com",
  projectId: "athotication",
  storageBucket: "athotication.appspot.com",
  messagingSenderId: "253072385651",
  appId: "1:253072385651:web:55599996055ec97ade6c06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;