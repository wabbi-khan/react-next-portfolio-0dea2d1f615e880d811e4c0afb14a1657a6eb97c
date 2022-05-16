import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAflfjRtmOHxHVDhyuQaPZxNzcQIDLCq2k",
  authDomain: "fyp-project-cbf8c.firebaseapp.com",
  projectId: "fyp-project-cbf8c",
  storageBucket: "fyp-project-cbf8c.appspot.com",
  messagingSenderId: "714662555295",
  appId: "1:714662555295:web:b0a52d9cdd43abcaccfcaa",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
