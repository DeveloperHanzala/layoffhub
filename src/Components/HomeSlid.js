import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HomeSlid.css';
import { FaEye } from "react-icons/fa";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import AnswersGiven from './AnswersGiven';
import GiveAnswer from './GiveAnswer';
import Loader from './Loader';
import { LiaComments } from "react-icons/lia";


const HomeSlid = () => {
  const [pollStates, setPollStates] = useState([]);
  const [pollStates1, setPollStates1] = useState([]);
  const [data, setData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(7);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("access-token");

  const getQuestions = async () => {
    const url = 'https://api.layoffhub.ai/api/asked_questions/';

    try {
      const response = await axios.get(url, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const filteredData= response.data;
      const sortedQuestions = filteredData.sort((a, b) => b.votes - a.votes);
      console.log(sortedQuestions)

      

      if (response.status === 200) {
        setData(sortedQuestions);
        setPollStates(new Array(response.data.length).fill(false));
        setPollStates1(new Array(response.data.length).fill(false));
      } else {
        console.error('Error fetching data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching content data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const formatTime = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Date(dateString).toLocaleString('en-US', options);
  };

  const toggleDropdown = (index) => {
    setPollStates(prevStates =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  const toggleDropdown1 = (index) => {
    if (token) {
      setPollStates1(prevStates =>
        prevStates.map((state, i) => (i === index ? !state : state))
      );
    } else {
      alert('Please log in to add a comment');
    }
  };

  const loadMoreQuestions = () => {
    setVisibleCount(prevCount => prevCount + 6);
  };

  const upvoteQuestion = async (questionId, index) => {
    if (!token) {
      alert('Please log in to upvote');
      return;
    }

    const url = `https://api.layoffhub.ai/api/upvote_question/${questionId}/`;

    try {
      await axios.post(url, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      // Optimistically update vote count
      setData(prevData =>
        prevData.map((item, i) =>
          i === index ? { ...item, votes: item.votes + 1 } : item
        )
      );
    } catch (error) {
      console.error('Error upvoting question:', error);
      alert("You can't upvote again");
    }
  };

  const downvoteQuestion = async (questionId, index) => {
    if (!token) {
      alert('Please log in to downvote');
      return;
    }

    const url = `https://api.layoffhub.ai/api/downvote_question/${questionId}/`;

    try {
      await axios.post(url, {}, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      // Optimistically update vote count
      setData(prevData =>
        prevData.map((item, i) =>
          i === index ? { ...item, votes: item.votes - 1 } : item
        )
      );
    } catch (error) {
      console.error('Error downvoting question:', error);
      alert("You can't downvote again");
    }
  };

  return (
    <div className="pb-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="row d-flex flex-column mdi">
            {data.slice(0, visibleCount).map((item, index) => (
              <div className="col-12 mt-3" key={item.id}>
                <div className="pb-3 card1">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <p className="card-title fw-bold  ">{item.author_username || 'Anonymous'}</p>
                          <p className="card-text">
                            <span className='text-primary'>Posted: </span>
                            {new Date(item.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) || 'July 17, 2004'}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Company Details */}
                    {item.companies && item.companies.length > 0 && (
                      <div className='mb-2' style={{ borderBottom: '1px solid grey' }}>
                        <div className='jaba'>
                          <div className='row'>
                            <div className='col-3 hnn'>
                              <img
                                src={item.companies[0].picture} // Assuming there's at least one company
                                className="img-fluid  mx-4 mt-1 mb-1 iamge1"
                                alt={item.companies.map(company => company.name).join(', ')}
                              />
                            </div>
                            <div className='col-8 mx-4 mt-2'>
                              <span style={{ fontSize: 'small' }}>
                                {item.companies.map(company => company.name).join(', ')}
                              </span>
                              <div>
                                <span style={{ fontSize: 'small' }}>
                                  {item.companies.map(company => company.sector).join(', ')}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <p className="card-text fw-bold">{item.title}</p>
                    <p className="card-text">{item.caption}</p>
                    
                    <li className="list-group-item">
                      <div className="d-flex flexi flex-wrap">
                        {item.tags && item.tags.map((tag, idx) => (
                          <button
                            className="btn1 btn-primary text-white me-2 mb-2"
                            key={idx}
                          >
                            {tag.name}
                          </button>
                        ))}
                      </div>
                    </li>

                    <div className="container-flex conma primary p-3" >
                      <div className="polls-container" style={{ gap: "10px" }}>
                        <div className="polls-text  polll" onClick={() => toggleDropdown(index)}>
                        <LiaComments size={20} />
                          Comments
                        </div>
                        <p className="polls-text1 pols  mt-3 mx-3">
                          <FaEye size={20} /> {item.view_count} Views
                        </p>
                        <div className="d-flex flex-row">
                          <button
                            className='btn border-0'
                            onClick={() => upvoteQuestion(item.id, index)}
                            
                          >
                            <TiArrowSortedUp size={25} color='green' />
                          </button>
                          <span className='mt-2'>{item.votes} </span>
                          <button
                            className='btn border-0'
                            onClick={() => downvoteQuestion(item.id, index)}
                            
                          >
                            <TiArrowSortedDown size={25} color='red' />
                          </button>
                        </div>
                        {token ? (
                          <div className="polls-text bg-success" onClick={() => toggleDropdown1(index)}>
                            Comment
                          </div>
                        ) : (
                          <div className="polls-text bg-secondary" onClick={() => alert('Please log in to add a comment')}>
                            Add Comment
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Comments Section */}
                    <div className='height1'>
                      <div className={`polls-content ${pollStates[index] ? 'open' : ''}`}>
                        <h3 className='text-center'>
                          <AnswersGiven questionId={item.id} />
                        </h3>
                      </div>
                    </div>
                    {/* Add Answer Section */}
                    <div className={`polls-content ${pollStates1[index] ? 'open' : ''}`}>
                      {token ? (
                        <h3 className='text-center'>
                          <GiveAnswer questionId={item.id} />
                        </h3>
                      ) : (
                        <p>Please log in to add an Comment.</p>
                      )}
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            ))}
            {visibleCount < data.length && (
              <div className="col-12 mt-3 pb-5">
                <button className="btn btn-warning btn-block w-100" onClick={loadMoreQuestions}>LOAD MORE QUESTIONS</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeSlid;
