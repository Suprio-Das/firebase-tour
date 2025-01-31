import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDYezmVkgQstx726jQ0ZoCW0L1g_N4AABM",
    authDomain: "fir-tour-664c8.firebaseapp.com",
    projectId: "fir-tour-664c8",
    storageBucket: "fir-tour-664c8.firebasestorage.app",
    messagingSenderId: "302771085476",
    appId: "1:302771085476:web:be97388c9d9dbce291c631"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);