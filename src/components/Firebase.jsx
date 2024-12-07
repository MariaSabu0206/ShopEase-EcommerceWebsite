// src/firebase.js

import { initializeApp } from "firebase/app"; // Import the function to initialize the Firebase app
import { getAuth } from "firebase/auth"; // Import the function to get Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import the function to get Firestore

// Replace the following with your Firebase project credentials from the Firebase console
const firebaseConfig = {
    apiKey: "AIzaSyDtIAkv2Ygx91CHttL4ZlQzxXSP5LWu9Rc", // API key for your Firebase project
    authDomain: "shopeaseauth.firebaseapp.com", // Auth domain for Firebase Authentication
    projectId: "shopeaseauth", // Project ID from your Firebase console
    storageBucket: "shopeaseauth.firebasestorage.app", // Firebase Storage bucket for file storage
    messagingSenderId: "924359990754", // Sender ID for Firebase Cloud Messaging
    appId: "1:924359990754:web:cc5cf75bde575c315eedbb", // Firebase App ID
    measurementId: "G-MGJZSS8SEW" // Google Analytics Measurement ID (optional)
};

// Initialize Firebase with the provided config object
const app = initializeApp(firebaseConfig);

// Export the Firebase Authentication and Firestore instances so they can be used elsewhere in the app
export const auth = getAuth(app); // Export auth to handle user authentication
export const db = getFirestore(app); // Export db to interact with Firestore (database)
