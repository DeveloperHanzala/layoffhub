import React, { useState, useEffect } from 'react'; 
import axios from 'axios';

const Tquestions = () => {
    const [totalQuestions, setTotalQuestions] = useState(0); 
    const token = localStorage.getItem("access-token"); 

    const fetchTotalQuestions = async () => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/total_questions/', {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            });
            setTotalQuestions(response.data.total_questions || 0);
        } catch (error) {
            console.error("Error fetching total questions:", error); 
        }
    };

    useEffect(() => {
        fetchTotalQuestions();
    }, []);

    return (
        <div>
            <h3> {totalQuestions}</h3> 
        </div>
    );
};

export default Tquestions;
