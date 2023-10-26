import React, {
  ReactNode, createContext, useMemo, useState,
} from 'react';

interface AuthDetails {
  username: string;
  accessToken: string;
}

type SetAuthFunction = (auth: AuthDetails | {} | ((prev: AuthDetails) => AuthDetails)) => void;

export type AuthContextType = {
  auth: AuthDetails;
  setAuth: SetAuthFunction;
  persist: boolean;
  setPersist: (updatePersist: (prev: boolean) => boolean) => void;
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | {}>({});
// const AuthContext = createContext({});

export function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState({});
  const [persist, setPersist] = useState(JSON.parse(localStorage.getItem('persist')!) || false);

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
