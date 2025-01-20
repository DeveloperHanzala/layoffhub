import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from '../Images/person_3_sm.jpg';
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import AnswersGiven from './AnswersGiven';
import GiveAnswer from './GiveAnswer';
import Loader from './Loader';

const Homeslide21 = () => {
  const [pollStates, setPollStates] = useState({});
  const [pollStates1, setPollStates1] = useState({});
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(7); 
  const token = localStorage.getItem("access-token");
  const [loading, setLoading] = useState(false);
 
  const getQuestions = async () => {
    setLoading(true);
    const url = 'https://api.layoffhub.ai/api/asked_answers/';
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
    }finally {
      setLoading(false); 
  }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const toggleDropdown = (index) => {
    setPollStates(prevStates => ({
      ...prevStates,
      [index]: !prevStates[index]
    }));
  };

  const toggleDropdown1 = (index) => {
    setPollStates1(prevStates => ({
      ...prevStates,
      [index]: !prevStates[index]
    }));
  };

  const loadMore = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  return (
    <div className='container '>
         {loading ? (
                <Loader /> 
            ) : (
                <>
                   
                </>
            )}
      {data.slice(0, visibleCount).map((item, index) => (
        <div className="container pt-4" key={item.id}>
          <div className="row">
            <div className="col-12 ">
              <div className="">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <img src={item.user?.profile_image || img1} style={{ height: '10vh' }} alt="Profile" className="rounded-circle mr-2" />
                      <div>
                        <h5 className="card-title">{item.user?.username || 'Unknown User'}</h5>
                        <p className="card-text">{new Date(item.date_posted).toLocaleDateString()}</p>
                      </div>
                      <button className="btn btn-sm btn-primary m-3">{item.author_username || 'Anonymous'}</button>
                    </div>
                  </div>
                  <h4 className="card-text">{item.content}</h4>
                  
                  <div className="d-flex justify-content-between align-items-center primary p-3">
                    <div className="polls-container">
                      <div className="polls-text" onClick={() => toggleDropdown(index)}>
                        Answer
                      </div>
                    </div>
                    <button className="btn btn-sm btn-primary polls-text mt-2">
                      <FaEye size={20} /> {item.view_count} Views
                    </button>
                    <button className="btn btn-sm">
                      <IoMdArrowDropleft size={25} color='blue' /> 03 
                      <IoMdArrowDropright size={25} color='blue' />
                    </button>
                    <div className="polls-container">
                      <div className="polls-text bg-success" onClick={() => toggleDropdown1(index)}>
                        Add Answer
                      </div>
                    </div>
                  </div>
                  <div className={`polls-content ${pollStates[index] ? 'open' : ''}`}>
                    <h3 className='text-center'>
                      <AnswersGiven questionId={item.id} />
                    </h3>
                  </div>
                  <div className={`polls-content ${pollStates1[index] ? 'open' : ''}`}>
                    <h3 className='text-center'>
                      <GiveAnswer questionId={item.id} />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      ))}

      {visibleCount < data.length && (
        <div className="container">
          <div className="row">
            <div className="col-12 mt-3 pb-5">
              <button className="btn btn-warning btn-block w-100" onClick={loadMore}>
                LOAD MORE QUESTIONS
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homeslide21;
