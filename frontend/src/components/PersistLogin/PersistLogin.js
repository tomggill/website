import { Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import useRefreshToken from '../../hooks/useRefresh';
import useAuth from '../../hooks/useAuth';

function PersistLogin() {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth, persist } = useAuth();

  useEffect(() => {
    let isMounted = true;
    const verifyRefreshToken = async () => {
      try {
        await refresh();
      } catch (error) {
        console.log(error);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    if (!auth?.accessToken) {
      verifyRefreshToken();
    } else {
      setIsLoading(false);
    }

    return () => { isMounted = false; };
  }, []);

  return (
    !persist ? <Outlet />
      : isLoading ? <p>Loading...</p>
        : <Outlet />
  );
}

export default PersistLogin;
