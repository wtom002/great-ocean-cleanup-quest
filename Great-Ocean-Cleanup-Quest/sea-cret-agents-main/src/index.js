// Import the functions you need from the SDKs you need
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter } from 'react-router-dom';

//in case we need firebase

import { initializeApp } from "firebase/app";

// import { getDatabase } from 'firebase/database';
// const db = getDatabase();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

/* 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgPRNq9PRgw8m54fwvEw41O2UOVZBb4WI",
  authDomain: "sea-cret-agents.firebaseapp.com",
  projectId: "sea-cret-agents",
  storageBucket: "sea-cret-agents.appspot.com",
  messagingSenderId: "158051820636",
  appId: "1:158051820636:web:1c6a61eb6fb5985f7af299"
};
*/


// Initialize Firebase
// const app = initializeApp(firebaseConfig);

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
)


