// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC9y33YK_3b5NMfAk6dZi2jDMIi_dDXklQ",
  authDomain: "site4school-6affe.firebaseapp.com",
  projectId: "site4school-6affe",
  storageBucket: "site4school-6affe.appspot.com",
  messagingSenderId: "527337035288",
  appId: "1:527337035288:web:31056f24b22a940e90d56d",
  measurementId: "G-8Q3WC7K8HP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Auth & Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);
