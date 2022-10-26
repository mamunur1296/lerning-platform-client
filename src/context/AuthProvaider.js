import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const Providergit = new GithubAuthProvider();

const AuthProvaider = ({ children }) => {
  //user state cheated . it carrey all user information
  const [user, setUser] = useState({});
  const [loding, setLoding] = useState(true);

  // Regester a new user
  const register = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login a exjesting user
  const login = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  //login with google
  const loginGoogle = () => {
    setLoding(true);
    return signInWithPopup(auth, Provider);
  };
  //login with github
  const loginGithub = () => {
    setLoding(true);
    return signInWithPopup(auth, Providergit);
  };
  //Update a user's profile
  const updateNamePhoto = (profile) => {
    setLoding(true);
    return updateProfile(auth.currentUser, profile);
  };
  //logout
  const logout = () => {
    setLoding(true);
    return signOut(auth);
  };
  //get lognin user Data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoding(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loding,
    register,
    login,
    updateNamePhoto,
    loginGoogle,
    loginGithub,
    logout,
    setLoding,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvaider;
