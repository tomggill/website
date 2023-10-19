import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

function Users() {
  const [users, setUsers] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const location = useLocation();

  const effectPostInitialRun = useRef(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUsers = async () => {
      try {
        const response = await axiosPrivate.get('/api/user/getall', {
          signal: controller.signal,
        });
        const userNames = response.data.map((user, index) => ({
          key: index,
          username: user.username,
        }));
        console.log(response.data);
        if (isMounted) {
          setUsers(userNames);
        }
      } catch (error) {
        console.log(error);
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    if (effectPostInitialRun.current) {
      getUsers();
    }

    return () => {
      isMounted = false;
      controller.abort();
      effectPostInitialRun.current = true;
    };
  }, []);

  return (
    <article>
      <h2>Users list</h2>
      {users?.length
        ? (
          <ul>
            {users.map((user) => <li key={user.key}>{user.username}</li>)}
          </ul>
        ) : <p>No users to display</p>}
    </article>
  );
}

export default Users;
