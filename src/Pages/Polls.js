import React, { useState, useEffect, Suspense, lazy } from 'react';
import axios from 'axios';
import img1 from '../Images/person_3_sm.jpg';
import { MdGroups, MdGroupAdd } from 'react-icons/md';
import { FaTags, FaMessage } from 'react-icons/fa6';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './Polls.css';
import AnswersGiven from '../Components/AnswersGiven';
import {Link} from 'react-router-dom'
import NoofUSers from '../Components/NoofUSers';
import Tquestions from '../Components/Tquestions';
import Tanswers from '../Components/Tanswers';


const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));

const Polls = (questionId) => {
    const [activeComponent, setActiveComponent] = useState('Popular');
    const [pollStates, setPollStates] = useState([]); 
    const [pollCounts, setPollCounts] = useState([]); 
    const [userVotes, setUserVotes] = useState([]); 
    const [alertMessages, setAlertMessages] = useState([]); 
    const [data, setData] = useState([]);

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
            const questions = response.data || []; 

            setData(questions);
            setPollStates(Array(questions.length).fill(false));
            setPollCounts(questions.map(question => question.votes || 0));
            setUserVotes(questions.map(() => ({ up: false, down: false })));
            setAlertMessages(Array(questions.length).fill(''));

        } catch (error) {
            console.error('Error fetching content data:', error);
        }
    };

    useEffect(() => {
        getQuestions();
    }, []);

    const handleClick = (componentName) => {
        setActiveComponent(componentName);
    };

    const toggleDropdown = (index) => {
        setPollStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? !state : state))
        ); 
    };

    const vote = (index, type) => {
        const hasVotedUp = userVotes[index].up; 
        const hasVotedDown = userVotes[index].down;

        if (type === 'up') {
            if (!hasVotedUp) {
                setPollCounts((prevCounts) =>
                    prevCounts.map((count, i) => {
                        if (i === index) {
                            return count + 1 + (hasVotedDown ? 1 : 0);
                        }
                        return count;
                    })
                );
                setUserVotes((prevVotes) =>
                    prevVotes.map((vote, i) =>
                        i === index ? { ...vote, up: true, down: false } : vote
                    )
                );
                setAlertMessages((prevMessages) =>
                    prevMessages.map((message, i) => (i === index ? '' : message))
                );
            } else {
                setAlertMessages((prevMessages) =>
                    prevMessages.map((message, i) =>
                        i === index ? 'You have already voted up for this poll!' : message
                    )
                );
            }
        } else if (type === 'down') {
            if (!hasVotedDown) {
                setPollCounts((prevCounts) =>
                    prevCounts.map((count, i) => {
                        if (i === index) {
                            return count - 1 - (hasVotedUp ? 1 : 0); 
                        }
                        return count;
                    })
                );
                setUserVotes((prevVotes) =>
                    prevVotes.map((vote, i) =>
                        i === index ? { ...vote, down: true, up: false } : vote
                    )
                );
                setAlertMessages((prevMessages) =>
                    prevMessages.map((message, i) => (i === index ? '' : message))
                );
            } else {
                setAlertMessages((prevMessages) =>
                    prevMessages.map((message, i) =>
                        i === index ? 'You have already voted down for this poll!' : message
                    )
                );
            }
        }
    };

    const [pool, setPool] = useState([false, false, false]);
    const toggleDropdown1 = (index) => {
        setPool(prevStates =>
            prevStates.map((state, i) => (i === index ? !state : state))
        );
    };

    const [trendTags, setTrendTags] = useState([]);
    const fetchTrendTags = async () => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/trending_tags/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTrendTags(response.data || []);
        } catch (error) {
            console.error("Error fetching trending tags:", error);
        }
    };

    useEffect(() => {
        fetchTrendTags();
    }, [token]);

    return (
        <>
            <Navbar />
            <div className="mx-5 pb-5">
                <div className="row">
                    <div className="col-12 col-md-9 pt-4">
                        <div className="pt-4 mb-5 bgg">
                            <div>
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-5'>
                                        <h4 className="tags mx-3 d-flex display-flex-center align-item-center pt-2">
                                            <MdGroupAdd className='text-primary' size={30} />
                                            <span className='mx-2 pt-1'>Polls</span>
                                        </h4>
                                    </div>
                                    <div className='col-12 col-md-5 d-none d-md-block'></div>
                                    <div className='col-12 col-md-2'>
                                        
                                    </div>
                                </div>
                                <hr />
                                <div className='row pt-3 d-flex justify-content-center align-items-center'>
                                    <div className='col-10'>
                                        {data.map((question, index) => (
                                            <div className="col-12 mt-3" key={index}>
                                                <div className="card">
                                                    <div className="card-body">
                                                        <div className="d-flex justify-content-between align-items-center">
                                                            <div className="d-flex align-items-center">
                                                                <img 
                                                                    src={question.author_profile_image || img1} 
                                                                    style={{ height: '10vh' }} 
                                                                    className="profile-img rounded-circle" 
                                                                    alt="Profile" 
                                                                />
                                                                <div>
                                                                    <h5 className="card-title">{question.author_username || "Anonymous"}</h5>
                                                                    <p className="card-text">{new Date(question.date_posted).toLocaleDateString()}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <h4 className="card-text">{question.title}</h4>
                                                        <p className="card-text">{question.caption}</p>
                                                        <ul className="list-group">
                                                            {question.tags.map((tag, i) => (
                                                                <li key={i} className="list-group-item">{tag}</li>
                                                            ))}
                                                        </ul>
                                                        <p className="card-text">{question.content}</p>
                                                        <div className="d-flex justify-content-between align-items-center primary p-3">
    <button 
        className="btn btn-sm hhbhb btn-primary"  
        onClick={() => toggleDropdown1(index)}
    >
        <FaMessage size={20} /> Answers
    </button>
    
    <span className="d-flex align-items-center">
        <button className='bg-transparent border-0'>
            <IoMdArrowDropleft  size={25} color='blue' />
        </button> 
        <span className="mx-2">{question.votes}</span> 
        <button className='bg-transparent border-0'>
            <IoMdArrowDropright size={25} color='blue' />
        </button>
    </span>
    
    <div className="d-flex align-items-center">
        <div className="polls-container">
            <div className="polls-text" onClick={() => toggleDropdown(index)}>
                Polls
            </div>
            <div className={`polls-content ${pollStates[index] ? 'open' : ''}`}>
                <h3 className='text-center'>
                    <span className='btn' style={{ border: 'none' }} onClick={() => vote(index, 'up')}>
                        <TiArrowSortedUp size={30} className='hov' />
                    </span>
                    <span className='mx-2'>{pollCounts[index]}</span>
                    <span className='btn' style={{ border: 'none' }} onClick={() => vote(index, 'down')}>
                        <TiArrowSortedDown size={30} className='hov1' />
                    </span>
                </h3>
            </div>
        </div>
    </div>
</div>

                                                        <div className={`polls-content ${pool[index] ? 'open' : ''}`}>
                                                                <h3 className='text-center'>
                                                                    <AnswersGiven />
                                                                </h3>
                                                            </div>
                                                        {alertMessages[index] && (
                                                            <div className="alert alert-warning mt-2">
                                                                {alertMessages[index]}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                                        

                    <div className="col-12 col-md-3 pt-4">
              <div className="back4 pt-4">
              <div className='p-3'>
            <Link to={'/askquestion'} className="btnn btn btn-warning text-white">ASK A QUESTION?</Link>
            </div>                    <hr />
                  <div className=' '>
                      <div className='row '>
                          <div className='col-1 '>
                          </div>

                          <div className='col-5 bord-2 text-center'><span className='fw-bold'>QUESTIONS</span>
                              <h4 className='text-center text-primary'><Tquestions/></h4>
                          </div>
                          <div className='col-5 bord2  text-center' >
                              <span className='fw-bold'>ANSWERS</span>
                              <h4 className='text-center text-warning'><Tanswers/></h4>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-1'>
                          </div>

                          <div className='col-5 bord-1 text-center '>
                              <span className='fw-bold' style={{ fontSize: 'small' }}>BEST ANSWERS</span>
                              <h4 className=' text-success'>05</h4>


                          </div>
                          <div className='col-5 bord1   text-center' >
                              <span className='fw-bold mx-3'>USERS</span>
                              <h4 className='text-center text-primary'><NoofUSers/></h4>
                          </div>
                      </div>
                  </div>




                  <hr />
                  <div className="cen">
                      <MdGroups size={35} color="blue" /> <span className="p-2"><b>Top Members</b></span>
                  </div>
                  <hr />
                  <div className="row">
                      <div className="bt-2">
                          <button
                              type="button"
                              className="btn btn-success bt-3"
                              onClick={() => handleClick('Popular')}
                          >
                              <span className="p-1">POPULAR</span>
                          </button>
                          <button
                              type="button"
                              className="btn bt-1"
                              onClick={() => handleClick('Answer')}
                          >
                              <span className="p-1">Answers</span>
                          </button>
                      </div>
                  </div>
                  <hr />
                  <div>
                      <Suspense fallback={<div>Loading...</div>}>
                          {activeComponent === 'Popular' ? <Popular /> : <Answer />}
                      </Suspense>
                  </div>
                  <h4 className="tags"><FaTags color="blue" size={35} />Trending Tags</h4>
                  <div className="">
                                <div className="d-flex flex-column">
                                {trendTags.map(tag => (
                                    <div className='mt-2' key={tag.id}>
                                        <button className="btn border w-100 text-center">{tag.name}</button>
                                    </div>
                                ))}
                                </div>
                            </div>
              </div>
          </div>


                </div>
            </div>
            <Footer />
        </>
    );
};

export default Polls;
