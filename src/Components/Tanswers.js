import React, { useState, useEffect } from 'react'; 
import axios from 'axios'; 

const Tanswers = () => {
    const [totalAnswers, setTotalAnswers] = useState(0); 
    const token = localStorage.getItem("access-token"); 

    const fetchTotalAnswers = async () => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/total_answers/', {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });
            setTotalAnswers(response.data.total_answers || 0); 
        } catch (error) {
            console.error("Error fetching total answers:", error); 
        }
    };

    useEffect(() => {
        fetchTotalAnswers();
    }, []);

    return (
        <div>
            <h3> {totalAnswers}</h3> 
        </div>
    );
};

export default Tanswers;
