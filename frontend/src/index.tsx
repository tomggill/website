import React from 'react';
import { createRoot } from 'react-dom/client';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import axios from './api/axiosConfig';
import App from './App';
import { AuthProvider } from './context/AuthProvider';

const setReactDevTools = async () => {
  try {
    const response = await axios.get('/api/env/server-environment');
    const environment = response.data;
    if (environment === 'production') {
      disableReactDevTools();
    }
  } catch (error) {
    console.log('Failed getting environment variable.');
    console.log(error);
  }
};

setReactDevTools();

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
