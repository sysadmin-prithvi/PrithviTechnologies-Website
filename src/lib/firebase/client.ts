import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let _app: FirebaseApp | null = null;
let _auth: Auth | null = null;

function getFirebaseClientApp(): FirebaseApp {
  if (_app) return _app;
  const existing = getApps()[0];
  _app = existing ?? initializeApp(firebaseConfig);
  return _app;
}

export function getFirebaseAuth(): Auth {
  if (_auth) return _auth;
  _auth = getAuth(getFirebaseClientApp());
  return _auth;
}

// Keep backward-compatible lazy getters that only initialize on access in the browser.
export const firebaseApp = typeof window !== "undefined" ? getFirebaseClientApp() : (null as unknown as FirebaseApp);
export const firebaseAuth = typeof window !== "undefined" ? getFirebaseAuth() : (null as unknown as Auth);
