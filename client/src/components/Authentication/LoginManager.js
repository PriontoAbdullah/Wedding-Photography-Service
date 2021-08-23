import firebase from "firebase/app";
import "firebase/auth";
import jwt_decode from "jwt-decode";
import firebaseConfig from "./firebaseConfig";

// initialize Firebase
export const initializeLoginFramework = () => {
  !firebase.apps.length && firebase.initializeApp(firebaseConfig);
};

// handle google signIn
export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => handleResponse(res));
};

// register with email and password
export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      updateUserName(name);
      return handleResponse(res);
    });
};

const updateUserName = (name) => {
  const user = firebase.auth().currentUser;
  user.updateProfile({
    displayName: name,
  });
};

// login with email and password
export const signInWithEmailAndPassword = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => handleResponse(res));
};

// set new user info
const handleResponse = (res) => {
  const { displayName, photoURL, email } = res.user;
  const signedInUser = {
    isSignedIn: true,
    name: displayName,
    email: email,
    photo: photoURL || "https://i.imgur.com/1As0akH.png",
  };
  return signedInUser;
};

// set jwt token
export const setJWTToken = () => {
  return firebase
    .auth()
    .currentUser.getIdToken(true)
    .then((idToken) => {
      localStorage.setItem("token", idToken);
    });
};

// decode jwt token
export const getDecodedUser = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return {};
  }
  const { name, picture, email } = jwt_decode(token);
  const decodedUser = {
    isSignedIn: true,
    name: name,
    email: email,
    photo: picture || "https://i.imgur.com/1As0akH.png",
  };
  return decodedUser;
};

// handle log out
export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {
      localStorage.removeItem("token");
      const signedOutUser = {
        isSignedIn: false,
        userName: "",
        email: "",
        userPhoto: "",
      };
      return signedOutUser;
    })
    .catch((error) => console.log(error.message));
};
