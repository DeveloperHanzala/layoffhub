import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NoofUSers = () => {
    const [totalUsers, setTotalUsers] = useState(0);
    const token = localStorage.getItem("access-token");

    const fetchTotalUsers = async () => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/user-count/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTotalUsers(response.data.total_users || 0);
        } catch (error) {
            console.error("Error fetching total users:", error);
        }
    };

    useEffect(() => {
        fetchTotalUsers();
    }, []);

    return (
        <div>
            <h3>{totalUsers}</h3>
        </div>
    );
}

export default NoofUSers;
