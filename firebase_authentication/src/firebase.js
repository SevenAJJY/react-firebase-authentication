import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBmAxQrLxSJSRbh1pjO5wRCk084gvjRS54",
  authDomain: "sevenajjy-331e5.firebaseapp.com",
  projectId: "sevenajjy-331e5",
  storageBucket: "sevenajjy-331e5.appspot.com",
  messagingSenderId: "263509076913",
  appId: "1:263509076913:web:d12d2210461c8db75a2b90",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
