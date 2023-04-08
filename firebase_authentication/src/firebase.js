import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.SEVENAJJY_APP_FIREBASE_API_KEY,
  authDomain: process.env.SEVENAJJY_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.SEVENAJJY_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.SEVENAJJY_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.SEVENAJJY_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.SEVENAJJY_APP_FIREBASE_MESSAGING_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
