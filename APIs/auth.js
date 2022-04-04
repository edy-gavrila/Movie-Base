import { app } from "./firebaseConfig";

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  browserLocalPersistence,
  setPersistence,
  onAuthStateChanged,
} from "firebase/auth";

const loginUserInFirebase = async ({ email, password }) => {
  await setLocalAuthPersistence();
  const auth = getAuth(app);
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

const registerUserWithFirebase = async ({ email, password }) => {
  const auth = getAuth(app);
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
  const auth = getAuth(app);
  await updateProfile(auth.currentUser, {
    displayName: username,
    photoURL: photoURL,
  });

  return auth.currentUser;
};

const logoutUser = async () => {
  const auth = getAuth(app);
  await signOut(auth);
};

const setLocalAuthPersistence = async () => {
  const auth = getAuth(app);
  await setPersistence(auth, browserLocalPersistence);
};

const getCurrentAuthenticatedUser = (
  loggedInAction,
  loggedOutAction = null
) => {
  const auth = getAuth(app);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      loggedInAction({...user});
    } else {
      if (loggedOutAction) {
        loggedOutAction();
      }
    }
  });

  return auth.currentUser;
};

export {
  loginUserInFirebase,
  registerUserWithFirebase,
  updateFirebaseProfileUserNameAndPhotoURL,
  logoutUser,
  setLocalAuthPersistence,
  getCurrentAuthenticatedUser,
};
