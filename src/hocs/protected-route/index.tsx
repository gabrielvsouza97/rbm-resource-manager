import { Navigate, Outlet, useLocation, useNavigate, useRoutes } from "react-router";

import { useAuth } from "contexts/auth-context";
import { useEffect } from "react";

export default function ProtectedRoute() {
  const { loggedIn } = useAuth();
  const location = useLocation();

  return <Outlet />;
}
