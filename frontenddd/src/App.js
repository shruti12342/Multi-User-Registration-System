import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SCPRegister from './pages/SCPRegister';
import SCPLogin from './pages/SCPLogin';
import Dashboard from './pages/Dashboard';
import FarmerForm from './pages/FarmerForm';
import './App.css';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/register" element={<SCPRegister />} />
    <Route path="/login" element={<SCPLogin />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/add-farmer" element={<FarmerForm />} />
  </Routes>
  
  
  );
}

export default App;
