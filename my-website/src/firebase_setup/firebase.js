import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDS2xFCkCsyl0nFOMU9grl3UXdP9xJUjbY",
  authDomain: "omeryanar-1b0a4.firebaseapp.com",
  databaseURL: "https://omeryanar-1b0a4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "omeryanar-1b0a4",
  storageBucket: "omeryanar-1b0a4.appspot.com",
  messagingSenderId: "479440665135",
  appId: "1:479440665135:web:19260b9ce171dde54764da",
  measurementId: "G-PX0N1SWQ0P"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const firestore = getFirestore(app);