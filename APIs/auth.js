import { app } from "./firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const signInUserInFirebaseWithAwait = async (credentials) => {
  const { email, password } = credentials;
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export {signInUserInFirebaseWithAwait };
