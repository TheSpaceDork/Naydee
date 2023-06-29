// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVVCgXgzVxrzp9ZE1xAOVQsKTZfk-RdlM",
  authDomain: "naydee-bb5f3.firebaseapp.com",
  projectId: "naydee-bb5f3",
  storageBucket: "naydee-bb5f3.appspot.com",
  messagingSenderId: "872256064311",
  appId: "1:872256064311:web:e70c286321180b30d128b2",
  measurementId: "G-FCM4NNSBLF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
// export const user = auth.currentUser;
