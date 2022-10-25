import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
const Providergit = new GithubAuthProvider();

const AuthProvaider = ({ children }) => {
  //user state cheated . it carrey all user information
  const [user, setUser] = useState({ name: "mamunur" });

  // Regester a new user
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login a exjesting user
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //login with google
  const loginGoogle = () => {
    return signInWithPopup(auth, Provider);
  };
  //login with github
  const loginGithub = () => {
    return signInWithPopup(auth, Providergit);
  };
  //Update a user's profile
  const updateNamePhoto = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };
  //get lognin user Data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  const value = {
    user,
    register,
    login,
    updateNamePhoto,
    loginGoogle,
    loginGithub,
  };
  return (
    <div>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvaider;
