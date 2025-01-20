import React, { useState, useEffect } from 'react';
import img1 from '../Images/person_3_sm.jpg'
import axios from 'axios';
import { CiClock1 } from "react-icons/ci";
import './Answer.css';
const Answer = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem("access-token");

  const getAnswer = async () => {
    const url = 'https://api.layoffhub.ai/api/most_answered_questions/';
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
    getAnswer();
  }, []);

  return (
    <div className="container pb-2">
      {data.map((item, index) => (
        <div className="row p-3" key={index} style={{borderBottom:'0.5px solid black'}}>
          <div className="col-3">
            <img src={item.image || img1} alt="Author" className="img-fluid rounded-circle iamge1" />
          </div>
          <div className="col-9">
            <span style={{ fontSize: 'medium' }}><b>{item.author_username} added an answer</b></span><br />
            <span className='caption-text' style={{ fontSize: 'small' }}>{item.caption}</span><br />
            <CiClock1 color="blue" size={15} /><span style={{ fontSize: 'x-small' }}>{item.date_posted}</span>
          </div>
       
        </div>
      ))}
    </div>
  );
}

export default Answer;
