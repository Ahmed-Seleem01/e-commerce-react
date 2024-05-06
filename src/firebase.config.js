import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbpfccgap6pQdwty84oj7NHcLaN_Fyfjo",
  authDomain: "e-commerce-1d8ff.firebaseapp.com",
  projectId: "e-commerce-1d8ff",
  storageBucket: "e-commerce-1d8ff.appspot.com",
  messagingSenderId: "107627747970",
  appId: "1:107627747970:web:df1e87a026c51db8b7f29b",
  measurementId: "G-4C5S0HBJBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize authentication
export const auth = getAuth(app);
export const analytics = getAnalytics(app);


