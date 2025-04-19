import React, { useState } from 'react';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';

function FarmerForm() {
  const [form, setForm] = useState({ name: '', phone: '', village: '', crop: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post('/farmers/add', form);
      alert('Farmer Registered');
      navigate('/dashboard');
    } catch (err) {
      alert('Failed to register farmer');
    }
  };

  return (
    <div className="container">
      <h2>Register Farmer</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
        <input type="text" name="village" placeholder="Village" onChange={handleChange} required />
        <input type="text" name="crop" placeholder="Crop Type" onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FarmerForm;
