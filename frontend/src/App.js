import React from 'react';
import useLocalStorage from 'use-local-storage'
import "./App.css";
import "./styles/styles.css";
import Navbar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import {About, Login, Annual, Teams, ReactHelper, Register, Home, Missing, Admin, Moderator, Unauthorised} from "./views/viewDirectory";
import RequireAuth from './components/Auth/RequireAuth';
import PersistLogin from './components/PersistLogin/PersistLogin';

const ROLES = {
  'User': "ROLE_USER",
  'Moderator': "ROLE_MODERATOR",
  'Admin': "ROLE_ADMIN",
}

export function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

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

        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Moderator]}/>}>
            <Route path='/moderator' element={<Moderator />} />
          </Route>

          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]}/>}>
            <Route path='/admin' element={<Admin />} />
          </Route>
        </Route>

        <Route path='*' element={<Missing />} />
        <Route path="/unauthorised" element={<Unauthorised />} />
      </Routes>
    </body>
  );
}