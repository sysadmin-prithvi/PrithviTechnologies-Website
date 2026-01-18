import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase Web SDK config (public)
const firebaseConfig = {
  apiKey: "AIzaSyAfc41L9zmfPdx70Nyn3_C-cAVDQSgzaqw",
  authDomain: "data-annotation-tracking-b5470.firebaseapp.com",
  projectId: "data-annotation-tracking-b5470",
  storageBucket: "data-annotation-tracking-b5470.firebasestorage.app",
  messagingSenderId: "396375579628",
  appId: "1:396375579628:web:59ab884f00b273ef34fec9",
};

function getFirebaseClientApp() {
  const existing = getApps()[0];
  if (existing) return existing;
  return initializeApp(firebaseConfig);
}

export const firebaseApp = getFirebaseClientApp();
export const firebaseAuth = getAuth(firebaseApp);
