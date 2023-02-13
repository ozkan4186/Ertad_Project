// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBrTJw-aksot4qFJXkuS6dS_QvMR67cbco",
  authDomain: "basketproject-c3bf0.firebaseapp.com",
  databaseURL: "https://basketproject-c3bf0-default-rtdb.firebaseio.com",
  projectId: "basketproject-c3bf0",
  storageBucket: "basketproject-c3bf0.appspot.com",
  messagingSenderId: "594366565156",
  appId: "1:594366565156:web:ed93cae19f72f3b10f01b1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const createUser = async (email, password, displayName, navigate) => {
  try {
    let userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("userCre", userCredential);
    let user = userCredential.user;
    console.log("user", user);
    await updateProfile(auth.currentUser, { displayName: displayName });
    console.log(user);
    navigate("/");
  } catch (error) {
    alert(error.message);
  }
};

export const signIn = async (email, password, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/basket");
  } catch (error) {
    alert(error.message);
  }
};

export const userObserver = (setCurrentUser) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(false);
    }
  });
};
export const logOut = () => {
  signOut(auth);
};
