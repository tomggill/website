import React, { createContext, useMemo, useState } from 'react';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')) || false);

  return (
    <AuthContext.Provider value={useMemo(() => ({
      auth, setAuth, persist, setPersist,
    }), [auth, setAuth, persist, setPersist])}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
