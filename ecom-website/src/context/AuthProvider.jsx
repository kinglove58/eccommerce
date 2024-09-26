import { signInWithPopup } from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth, provider } from "../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContent = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* create user using email */
  const signUpWithEmail = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  /* user is available or not*/
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
    loading,
    isAuthenticated,
  };

  return (
    <AuthContent.Provider value={authInfo}>{children}</AuthContent.Provider>
  );
}

export default AuthProvider;
