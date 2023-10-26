import { useContext } from 'react';
import AuthContext, { AuthContextType } from '../context/AuthProvider';

const useAuth = () => useContext(AuthContext) as AuthContextType;

export default useAuth;
