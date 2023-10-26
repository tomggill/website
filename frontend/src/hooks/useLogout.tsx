import axios from '../api/axiosConfig';
import useAuth from './useAuth';

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});
    try {
      const response = await axios.post('/api/auth/signout', {});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return logout;
};

export default useLogout;
