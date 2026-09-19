import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyA1NIHwmOaM7hi9aMiDb9hJ5a0qp5PcD6g",
  authDomain: "alextaxiriopretosp.firebaseapp.com",
  projectId: "alextaxiriopretosp",
  storageBucket: "alextaxiriopretosp.firebasestorage.app",
  messagingSenderId: "1026691533718",
  appId: "1:1026691533718:web:6490f86be7ecbb27dfebb7",
});

export const db = getFirestore(app);
