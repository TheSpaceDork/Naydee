import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithRedirect,
} from "firebase/auth";
import { auth, googleProvider } from "../config/firebase";

const UserContext = createContext();

 const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})

  const createUser = (username,email, password) => {
    return createUserWithEmailAndPassword(auth,username, email, password);
  };
  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)

  }
  const resetPassword = async (email) => {
    return sendPasswordResetEmail(auth,email)
  }
  const logout = () => {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser)
      setUser(currentUser)
    })
    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <UserContext.Provider value={{createUser, googleSignIn, user, logout, signIn, resetPassword}}>{children}</UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
