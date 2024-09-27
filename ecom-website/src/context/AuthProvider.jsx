import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { createContext, useState, useEffect } from "react";
import {
  auth,
  googleProvider,
  facebookProvider,
  twitterProvider,
} from "../firebase/firebase.config";

export const AuthContent = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpWithEmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const signInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  };

  const signInWithTwitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    signUpWithEmail,
    login,
    logOut,
    signInWithGoogle,
    signInWithFacebook,
    signInWithTwitter,
    loading,
    isAuthenticated,
  };

  return (
    <AuthContent.Provider value={authInfo}>{children}</AuthContent.Provider>
  );
}

export default AuthProvider;
