import React from 'react';
import "./App.css";
import "./styles/styles.css";
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {About, Login, Annual, Teams, ReactHelper, Register, Home} from "./views/viewDirectory";
import useLocalStorage from 'use-local-storage'
// import api from './api/axiosConfig';

export function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  return (
    <body className="app" data-theme={theme}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/annual' element={<Annual />} />
          <Route path='/team' element={<Teams />} />
          <Route path='/react-helper' element={<ReactHelper />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Router>
    </body>
  );
}