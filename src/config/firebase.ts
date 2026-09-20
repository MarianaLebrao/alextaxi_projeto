import { initializeApp } from "firebase/app";
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from "firebase/app-check";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyA1NIHwmOaM7hi9aMiDb9hJ5a0qp5PcD6g",
  authDomain: "alextaxiriopretosp.firebaseapp.com",
  projectId: "alextaxiriopretosp",
  storageBucket: "alextaxiriopretosp.firebasestorage.app",
  messagingSenderId: "1026691533718",
  appId: "1:1026691533718:web:6490f86be7ecbb27dfebb7",
});

if (import.meta.env.PROD && !["localhost", "127.0.0.1"].includes(window.location.hostname)) {
  initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider("6LcezsQtAAAAAFKsxecHbge1cdQBMCtJGpzazfT3"),
    isTokenAutoRefreshEnabled: true,
  });
}

export const db = getFirestore(app);
