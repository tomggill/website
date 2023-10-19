import React, { useLocation, Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import useAuth from '../../hooks/useAuth';

function RequireAuth({ allowedRoles }) {
  const { auth } = useAuth();
  const location = useLocation();

  const decoded = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;

  const roles = decoded?.userRoles || [];

  return (
    roles.find((role) => allowedRoles.includes(role))
      ? <Outlet />
      : auth?.username
        ? <Navigate to="/unauthorised" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
