import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BestAnswer = () => {
    const [totalAnswers, setTotalAnswers] = useState(0); 
    const token = localStorage.getItem("access-token"); 

    const fetchTotalAnswers = async () => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/best_answers/', {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });

            // Assuming the API returns an array of objects where each object represents an answer
            const total = response.data.reduce((acc, item) => acc + (item.answers_count || 0), 0);

            setTotalAnswers(total); 
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

export default BestAnswer;
