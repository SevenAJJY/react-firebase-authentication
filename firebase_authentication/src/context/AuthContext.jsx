import { useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import auth from "../firebase";
import { useEffect } from "react";
import { useContext } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);
  /**
   * To create a new account you must pass the new user's email address and password createUserWithEmailAndPassword();
   * @param email - The user's email address.
   * @param password - The user's chosen password.
   * @returns {Promise<UserCredential>}
   */
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  /**
   * Signs out the current user.
   * @returns {Promise<*>}
   */
  const logout = () => {
    return signOut(auth);
  };
  /**
   * When a user signs in to your app, pass the user's email address and password to {@link signInWithEmailAndPassword}
   * @param email - The user's email address.
   * @param password - The user's chosen password.
   * @returns {Promise<UserCredential>}
   */
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /**
   * Sends a password reset email to the given email address.
   * @param email
   * @returns {Promise<void>}
   */
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signup, logout, login, resetPassword }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
