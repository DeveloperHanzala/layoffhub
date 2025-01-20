import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Link } from 'react-router-dom'; 
import { FaTags, FaEye } from 'react-icons/fa';
import axios from 'axios';
import Tquestions from './Tquestions';
import Tanswers from './Tanswers';
import { MdGroups } from 'react-icons/md';
import NoofUSers from './NoofUSers';

const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));
const Sidebar3 = () => {
    const [activeComponent, setActiveComponent] = useState('Popular');
    const [error, setError] = useState(null);
    const [visibleAnswers, setVisibleAnswers] = useState(null); 
    const [visibleAddAnswer, setVisibleAddAnswer] = useState(null); 
    const [trendTags, setTrendTags] = useState([]);
    const token = localStorage.getItem("access-token");
    const handleClick = (componentName) => {
        setActiveComponent(componentName);
    };

    useEffect(() => {
        const fetchTrendTags = async () => {
            try {
                const response = await axios.get('https://api.layoffhub.ai/api/trending_tags/', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setTrendTags(response.data || []);
            } catch (error) {
                console.error("Error fetching trending tags:", error);
                setError('Failed to load trending tags.');
            }
        };

        fetchTrendTags();
    }, [token]);

  return (
    <div>
       <div className="div-2 pt-4">
                        <div className="pt-4">
                        <div className='p-3'>
            <Link to={'/askquestion'} className="btnn btn btn-warning text-white">ASK A QUESTION?</Link>
            </div>                             <hr />
                            <div className="cen">
                                <MdGroups size={35} color="blue" /> <span className="p-2"><b>Top Members</b></span>
                            </div>
                            <hr />
                            <div className=''>
                                <div className='row'>
                                    <div className='col-1'></div>
                                    <div className='col-5 bord-2 text-center'>
                                        <span className='fw-bold'>QUESTIONS</span>
                                        <h4 className='text-center text-primary'><Tquestions/></h4>
                                    </div>
                                    <div className='col-5 bord2 text-center'>
                                        <span className='fw-bold'>ANSWERS</span>
                                        <h4 className='text-center text-warning'><Tanswers/></h4>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-1'></div>
                                    <div className='col-5 bord-1 text-center'>
                                        <span className='fw-bold' style={{ fontSize: 'small' }}>BEST ANSWERS</span>
                                        <h4 className='text-success'>05</h4>
                                    </div>
                                    <div className='col-5 bord1 text-center'>
                                        <span className='fw-bold mx-4'>USERS</span>
                                        <h4 className='text-center text-primary'><NoofUSers/></h4>
                                    </div>
                                </div>
                            </div>
                           
                        {/*     <div className="row p-3">
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
                            </div> */}
                            <hr />
                           {/*  <div>
                                <Suspense fallback={<div>Loading...</div>}>
                                    {activeComponent === 'Popular' ? <Popular /> : <Answer />}
                                </Suspense>
                            </div> */}
                            <h4 className="tags"><FaTags color="blue" size={35} /> Trending Tags</h4>
                            <div className="container ">
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
  )
}

export default Sidebar3
