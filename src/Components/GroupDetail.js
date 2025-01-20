import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const GroupDetails = () => {
  const { id } = useParams(); 
  const [companyDetails, setCompanyDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('access-token');

  useEffect(() => {
    const fetchCompanyDetails = async () => {
      try {
        const response = await axios.get(`https://api.layoffhub.ai/api/groups/${id}/`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCompanyDetails(response.data);
      } catch (error) {
        console.error('Error fetching company details:', error);
        setError('Failed to load company details.');
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyDetails();
  }, [id, token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="group-details">
      <h1>{companyDetails.name}</h1>
      <p>{companyDetails.description}</p>
    </div>
  );
};

export default GroupDetails;
