import React, { useLocation, Navigate, Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import useAuth from '../../hooks/useAuth';

type DecodedJWTType = ({
  sub: string;
  exp: number;
  iat: number;
  userRoles: Array<string>;
} | undefined);

interface RequireAuthProps {
  allowedRoles: Array<string>;
}

function RequireAuth(props: RequireAuthProps) {
  const { auth } = useAuth();
  const location = useLocation();

  const decoded: DecodedJWTType = auth?.accessToken ? jwtDecode(auth.accessToken) : undefined;
  const roles = decoded?.userRoles || [];

  return (
    roles.find((role) => props.allowedRoles.includes(role))
      ? <Outlet />
      : auth?.username
        ? <Navigate to="/unauthorised" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequireAuth;
