import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import {Dashboard} from "./components/Dashboard"
import Cookies from 'js-cookie';


const ProtectedRoute = ({ children }) => {
  const isAuthenticated = userIsAuthenticated(); 
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const userIsAuthenticated = () => {
  return Cookies.get('token') !== undefined;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;