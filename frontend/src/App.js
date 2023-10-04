import React, { useState, useEffect }  from 'react';
import "./App.css";
import "./styles/styles.css";
import Navbar from './components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {About, ToDo, Annual, Teams, ReactHelper, Register, Home} from "./views/viewDirectory";
import useLocalStorage from 'use-local-storage'
import api from './api/axiosConfig';

export function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const response = await api.get("/api/user-entries");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <body className="app" data-theme={theme}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/to-do' element={<ToDo />} />
          <Route path='/annual' element={<Annual />} />
          <Route path='/team' element={<Teams />} />
          <Route path='/react-helper' element={<ReactHelper />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </body>
  );
}