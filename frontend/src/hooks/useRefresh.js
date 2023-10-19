import axios from '../api/axiosConfig';
import useAuth from './useAuth';

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    console.log('refreshing JWT');
    const response = await axios.post('/api/auth/refreshtoken', {});
    setAuth((prev) => ({
      ...prev,
      accessToken: response.data.accessToken,
    }));
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
