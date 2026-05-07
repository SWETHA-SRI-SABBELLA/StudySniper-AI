// client/src/context/AuthContext.jsx
// ─────────────────────────────────────────────
// Provides authentication state and methods
// (signup, login, logout) to the entire app
// via React Context API.
// ─────────────────────────────────────────────

import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../lib/firebase";

// 1. Create the context
const AuthContext = createContext();

// 2. Custom hook — lets any component easily access auth
export function useAuth() {
  return useContext(AuthContext);
}

// 3. Provider component — wraps the whole app
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // true while Firebase checks session

  // ── SIGNUP ──────────────────────────────────
  // Creates Firebase Auth user + saves profile in Firestore
  async function signup(name, email, password) {
    // Step 1: Create the auth account
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // Step 2: Store extra user info in Firestore
    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      createdAt: serverTimestamp(), // server-side timestamp
    });

    return userCredential;
  }

  // ── LOGIN ────────────────────────────────────
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // ── LOGOUT ───────────────────────────────────
  function logout() {
    return signOut(auth);
  }

  // ── LISTEN FOR AUTH STATE CHANGES ────────────
  // Fires on mount; keeps currentUser in sync automatically
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false); // done checking → app can render
    });

    // Cleanup listener when component unmounts
    return unsubscribe;
  }, []);

  // 4. Value object shared with all children
  const value = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {/* Don't render children until Firebase resolves the session */}
      {!loading && children}
    </AuthContext.Provider>
  );
}
