import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzVyEeOBTzz8ei66aiKglbI0AqsKdvcEI",
  authDomain: "lmcars-seguridad-del-automotor.firebaseapp.com",
  projectId: "lmcars-seguridad-del-automotor",
  storageBucket: "lmcars-seguridad-del-automotor.appspot.com",
  messagingSenderId: "566694430900",
  appId: "1:566694430900:web:c2cc2c8aa3b22f947fefe1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)