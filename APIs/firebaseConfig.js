import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    //safe to be exposed for firebase - in general, api keys should not be exposed
  apiKey: "AIzaSyDBf9ETUeMEwEWYTFbHzAhhTzuF_gLsa3Y",
  authDomain: "movie-base-3023f.firebaseapp.com",
  projectId: "movie-base-3023f",
  storageBucket: "movie-base-3023f.appspot.com",
  messagingSenderId: "1004002022484",
  appId: "1:1004002022484:web:52639a1d58baf45a0d49c1",
  measurementId: "G-F7MQ89DW69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export { app, analytics };
