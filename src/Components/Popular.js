import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaMessage } from "react-icons/fa6";
import img1 from '../Images/person_3_sm.jpg'; // Fallback image if needed

const Popular = () => {
  const [data, setData] = useState([]);
  const [visibleQuestions, setVisibleQuestions] = useState(5); // Initially show 5 questions
  const token = localStorage.getItem("access-token");

  const getAnswer = async () => {
    const url = 'https://api.layoffhub.ai/api/most_visited_Questions/';
    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
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

  const showMoreQuestions = () => {
    if (visibleQuestions + 2 > data.length) {
      // Avoid going beyond available questions
      setVisibleQuestions(data.length);
    } else {
      setVisibleQuestions(visibleQuestions + 2);
      setData((prevData) => prevData.slice(2)); // Remove the first two questions
    }
  };

  return (
    <div>
      {data.slice(0, visibleQuestions).map((item, index) => (
        <div className="container pb-2" key={index}>
          <div className="row p-3" style={{borderBottom:'0.5px solid black'}}>
            <div className="col-3">
              <img 
                src={item.image || img1} 
                alt="Question" 
                className="img-fluid rounded-circle iamge1" 
              />
            </div>
            <div className="col-9">
              {item.is_anonymous && <span>Anonymous</span>}<br />
              <b>{item.title}</b><br />
              <button type="button" className="btn">
                <FaMessage color="orange" size={20} />
                <span className="p-1">{item.answers?.length || 0} Answers</span> {/* Ensure answers is a number */}
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {visibleQuestions < data.length && (
        <div className="text-center mx-4 mt-3 pb-4">
          <button 
            type="button" 
            className="btn btn-primary " 
            onClick={showMoreQuestions}
          >
            Show More Questions
          </button>
        </div>
      )}
    </div>
  );
}

export default Popular;
