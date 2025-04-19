import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [farmers, setFarmers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchFarmers = async (pageNum) => {
    try {
      const res = await API.get(`/farmers/list?page=${pageNum}&limit=5`);
      setFarmers(res.data.data);
      setTotalPages(res.data.totalPages);
      setPage(res.data.currentPage);
    } catch (err) {
      alert("Error fetching farmers");
    }
  };

  useEffect(() => {
    fetchFarmers(page);
  }, []);

  const handlePrev = () => {
    if (page > 1) fetchFarmers(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) fetchFarmers(page + 1);
  };

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

      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <button onClick={handlePrev} disabled={page === 1}>Previous</button>
        <span style={{ margin: '0 10px' }}>Page {page} of {totalPages}</span>
        <button onClick={handleNext} disabled={page === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default Dashboard;
