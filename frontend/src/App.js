import React, { useEffect } from 'react';
import { Cookies } from 'react-cookie';
import useLocalStorage from 'use-local-storage'
import "./App.css";
import "./styles/styles.css";
import Navbar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import {About, Login, Annual, Teams, ReactHelper, Register, Home, Missing, Admin, Moderator, Unauthorised} from "./views/viewDirectory";
import RequireAuth from './components/Auth/RequireAuth';
import useAuth from "./hooks/useAuth"
import axios from './api/axiosConfig';

const ROLES = {
  'User': "ROLE_USER",
  'Moderator': "ROLE_MODERATOR",
  'Admin': "ROLE_ADMIN",
}

const cookies = new Cookies();

export function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const { setAuth } = useAuth();
  useEffect(() => {

    const fetchAndSetData = async (accessToken) => {
      try {
        const response = await axios.get("api/user/restoreAuthDetails/" + accessToken);
        const roles = response?.data?.roles;
        const username = response?.data?.username;
        setAuth({username, roles, accessToken})
      } catch (error) {
        console.log(error);
      }
    }

    const accessToken = cookies.get('jwtAccessToken');
    if (accessToken) {
      fetchAndSetData(accessToken);
    }
  }, [setAuth]);

  return (
    <body className="app" data-theme={theme}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/annual' element={<Annual />} />
        <Route path='/team' element={<Teams />} />
        <Route path='/react-helper' element={<ReactHelper />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Moderator]}/>}>
          <Route path='/moderator' element={<Moderator />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
          <Route path='/admin' element={<Admin />} />
        </Route>

        <Route path='*' element={<Missing />} />
        <Route path="/unauthorised" element={<Unauthorised />} />
      </Routes>
    </body>
  );
}