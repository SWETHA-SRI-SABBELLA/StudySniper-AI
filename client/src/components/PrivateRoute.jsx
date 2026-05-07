// client/src/components/PrivateRoute.jsx
// ─────────────────────────────────────────────
// Wraps any route that requires authentication.
// Redirects unauthenticated users to /login.
// ─────────────────────────────────────────────

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  console.log("User in PrivateRoute:", currentUser); // debug

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
}
