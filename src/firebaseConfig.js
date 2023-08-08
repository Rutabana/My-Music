import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwTrvf9xM7r9b67PpjQBBNs6hG9IJnLl8",
  authDomain: "clone-744bc.firebaseapp.com",
  projectId: "clone-744bc",
  storageBucket: "clone-744bc.appspot.com",
  messagingSenderId: "692957193045",
  appId: "1:692957193045:web:2258a49f96c713945a05dc",
  measurementId: "G-9CW4QT9JDL"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);