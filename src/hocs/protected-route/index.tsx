import { Navigate, Outlet } from "react-router";

import { useAuth } from "contexts/auth-context";

export default function ProtectedRoute() {
  const { loggedIn } = useAuth();

  if (!loggedIn) {
    return <Navigate to={"/"} />;
  }

  return <Outlet />;
}
