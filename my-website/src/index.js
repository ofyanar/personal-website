import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDS2xFCkCsyl0nFOMU9grl3UXdP9xJUjbY",
  authDomain: "omeryanar-1b0a4.firebaseapp.com",
  projectId: "omeryanar-1b0a4",
  storageBucket: "omeryanar-1b0a4.appspot.com",
  messagingSenderId: "479440665135",
  appId: "1:479440665135:web:19260b9ce171dde54764da",
  measurementId: "G-PX0N1SWQ0P"

};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
