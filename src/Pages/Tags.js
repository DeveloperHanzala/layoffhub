import React, { useState, useEffect, Suspense, lazy } from 'react';
import { MdGroups } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import { IoMdPeople } from "react-icons/io";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';
import {Link} from 'react-router-dom'
import Loader from '../Components/Loader';
import Sidebar2 from '../Components/Sidebar2';

const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));

const Tags = () => {
    const [activeComponent, setActiveComponent] = useState('Popular');
    const [tags, setTags] = useState([]);
    const [trendTags, setTrendTags] = useState([]);
    const token = localStorage.getItem("access-token");
    const [loading, setLoading] = useState(false);

    const handleClick = (componentName) => {
        setActiveComponent(componentName);
    };

    const fetchTags = async () => {
        try {setLoading(true);
            const response = await axios.get('https://api.layoffhub.ai/api/tags/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTags(response.data || []);
        } catch (error) {
            console.error("Error fetching tags:", error);
        }finally {
            setLoading(false); 
        }
    };

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
        fetchTags();
        fetchTrendTags();
    }, [token]);

    const chunkTags = (arr, size) => {
        return arr.reduce((acc, _, i) => {
            if (i % size === 0) acc.push(arr.slice(i, i + size));
            return acc;
        }, []);
    };

    return (
        <>
            <Navbar />
            <div className="mx-5">
                <div className="row">
                    <div className="col-12 col-md-9 pt-4">
                        <div className="div1 pt-4 mb-5">
                            <div>
                                
                                <div className='row align-items-center'>
                                    <div className='col-12 col-md-3'>
                                        <h4 className="tags pt-2">
                                            <FaTags className='text-primary' size={30} />
                                            Tags
                                        </h4>
                                    </div>

                                    <div className='col-12 col-md-3 d-none d-md-block'></div>

                                    <div className='col-12 col-md-6'>
                                        <div className='d-flex flex-column flex-md-row align-items-md-center'>
                                            <button className="mt-2 me-2" disabled style={{ color: 'black' }}>
                                                Popular <input type='checkbox' />
                                            </button>
                                            <input 
                                                type='text' 
                                                className='form-control' 
                                                placeholder='Try to find.....' 
                                            />
                                        </div>
                                    </div>
                                </div>
                                <hr />

                              
                                <div className='container'>
                                {loading ? (
                <Loader/> 
            ) : (
                <>
                   
                </>
            )}
                                    {chunkTags(tags, 3).map((tagGroup, rowIndex) => (
                                        <div className='row mb-4' key={rowIndex}>
                                            {tagGroup.map((tag, tagIndex) => (
                                                <div className='col-12 col-md-4 mb-3' key={tagIndex}>
                                                    <p className="tags tagz p-2">
                                                        <FaTags className='text-primary' size={20} />
                                                        <span className='mx-2 fw-bold'>{tag.name}</span>
                                                        <hr />
                                                        <button className='btn btn-primary'>
                                                            <IoMdPeople color='white' size={25} />
                                                            <span className='mx-1'>{tag.followers_count} Follower{tag.followers_count !== 1 ? 's' : ''}</span>
                                                        </button>
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 pt-4">
                    <Sidebar2/>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Tags;
