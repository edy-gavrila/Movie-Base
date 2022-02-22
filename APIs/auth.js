import { app } from "./firebaseConfig";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const loginUserInFirebase = async ({ email, password }) => {
  const auth = getAuth();
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

const registerUserWithFirebase = async ({ email, password }) => {
  const auth = getAuth();
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

const updateFirebaseProfileUserNameAndPhotoURL = async ({
  username,
  photoURL,
}) => {
  const auth = getAuth();
  await updateProfile(auth.currentUser, {
    displayName: username,
    photoURL: photoURL,
  });

  return auth.currentUser;
};

const logoutUser = async () => {
  const auth = getAuth();
  await signOut(auth);
};

export {
  loginUserInFirebase,
  registerUserWithFirebase,
  updateFirebaseProfileUserNameAndPhotoURL,
  logoutUser,
};
