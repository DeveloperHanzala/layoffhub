import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from '../Images/person_3_sm.jpg';


const GroupPosts = () => {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const token = localStorage.getItem("access-token");

    const getQuestions = async () => {
        const url = 'https://api.layoffhub.ai/api/asked_questions/';
        try {
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
            });
            setData(response.data || []);
        } catch (error) {
            console.error('Error fetching content data:', error);
        }
    };

    useEffect(() => {
        getQuestions();
    }, []);

    



    return (
        <div className="container">
            <div className="row">
                {data.map((item, index) => (
                    <div className="col-12 mt-3" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={item.author_profile_image || img1}
                                            style={{ height: '10vh' }}
                                            className="profile-img rounded-circle"
                                            alt="Profile"
                                        />
                                        <div>
                                            <h5 className="card-title">{item.author_username || 'Admin'}</h5>
                                            <p className="card-text">{item.date_posted || 'July 17, 2004'}</p>
                                        </div>
                                        <button className="btn btn-sm btn-primary ms-3">
                                            {item.is_anonymous ? 'Anonymous' : 'Public'}
                                        </button>
                                    </div>
                                </div>
                                <h4 className="card-text">{item.title}</h4>
                                <p className="card-text">{item.caption}</p>
                             
                                
                            </div>
                        </div>
                    </div>
                ))}
                <div className="col-12 mt-3 pb-5">
                    <button className="btn btn-warning btn-block w-100">LOAD MORE QUESTIONS</button>
                </div>
            </div>
        </div>
    );
};

export default GroupPosts;
