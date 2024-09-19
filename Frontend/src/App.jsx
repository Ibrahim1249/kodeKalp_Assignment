import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Register } from './components/Register';
import { Login } from './components/Login';
import {Dashboard} from "./components/Dashboard"
import Cookies from 'js-cookie';


// const ProtectedRoute = ({ children }) => {
//   const isAuthenticated = userIsAuthenticated(); 
//   console.log(isAuthenticated)
//   return isAuthenticated ? children : <Navigate to="/login" />;
// };

// const userIsAuthenticated = () => {
//   console.log(Cookies.get("token"))
//   return Cookies.get('token') !== undefined;
// };

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            //   <Dashboard/>
            // </ProtectedRoute>
             <Dashboard/>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;