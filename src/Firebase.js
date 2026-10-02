import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDwQA1wMfSXOy0AcjBpDA3h2ugf4JGeglY",
  authDomain: "cctvdemo-54541.firebaseapp.com",
  databaseURL: "https://cctvdemo-54541-default-rtdb.firebaseio.com",
  projectId: "cctvdemo-54541",
  storageBucket: "cctvdemo-54541.firebasestorage.app",
  messagingSenderId: "522176639169",
  appId: "1:522176639169:web:a687f92c2b0cd9f4ef6440",
  measurementId: "G-HLXGRWN6T5"
};

const app = initializeApp(firebaseConfig);

const firebaseAuth = getAuth(app);
const realtimeDatabase = getDatabase(app);

export const auth = firebaseAuth;
export const db = realtimeDatabase;