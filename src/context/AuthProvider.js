import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Default context object for better auto complition
const defaultContext = {
  user: {},
  isLoading: "",
  createUserHandler: () => {},
  logInHandler: () => {},
  signInWithGoogleHandler: () => {},
  signInWithGitHubHandler: () => {},
  logOutHandler: () => {},
  updateProfileHandler: () => {},
  emailVarificationHandler: () => {},
  deleteUserHander: () => {},
};
// Created context
export const AuthContext = createContext(defaultContext);

// Auth
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

// Auth Provider component function
const AuthProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Create user with email and password
  const createUserHandler = (email, password) => {
    console.log("create user");
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // User login
  const logInHandler = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // User Login with google
  const signInWithGoogleHandler = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // User login with GitHub

  const signInWithGitHubHandler = () => {
    setIsLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  // User logout
  const logOutHandler = () => {
    return signOut(auth);
  };

  // Set current user to state
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    // Cleanup function
    return () => unSubscribe();
  }, []);

  const updateProfileHandler = (displayName, photoURL) => {
    setIsLoading(true);

    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL,
    });
  };

  // Email varification

  const emailVarificationHandler = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // User deletion

  const deleteUserHander = () => {
    return deleteUser(user);
  };

  // User context value
  const userContext = {
    user,
    isLoading,
    setIsLoading,
    createUserHandler,
    logInHandler,
    signInWithGoogleHandler,
    signInWithGitHubHandler,
    logOutHandler,
    updateProfileHandler,
    emailVarificationHandler,
    deleteUserHander,
  };

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
