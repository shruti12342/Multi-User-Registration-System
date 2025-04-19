import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [farmers, setFarmers] = useState([]);

  useEffect(() => {
    const fetchFarmers = async () => {
      const res = await API.get('/farmers/list');
      setFarmers(res.data);
    };
    fetchFarmers();
  }, []);

  return (
    <div className="container">
      <h2>Welcome SCP</h2>
      <Link to="/add-farmer">Register New Farmer</Link>
      <h3>Farmer List</h3>
      <ul>
        {farmers.map((farmer, i) => (
          <li key={i}>{farmer.name} - {farmer.village}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
