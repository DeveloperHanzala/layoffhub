import React, { useState, useEffect, Suspense, lazy } from 'react';
import axios from 'axios';
import { MdGroups } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Popular = lazy(() => import('./Popular'));
const Answer = lazy(() => import('./Answer'));

const Sidebar2 = () => {
    const [activeComponent, setActiveComponent] = useState('Popular');
    const [trendTags, setTrendTags] = useState([]);

    useEffect(() => {
        const fetchTrendTags = async () => {
            try {
                const response = await axios.get('https://api.layoffhub.ai/api/trending_tags/');
                setTrendTags(response.data || []);
            } catch (error) {
                console.error("Error fetching trending tags:", error);
            }
        };
    
        fetchTrendTags();
    }, []);

    return (
        <div>
            <div className="div-2 pt-4">
                <h4 className="pt-3 tags">
                    <FaTags color="blue" size={35} />Trending Tags
                </h4>
                <div className="container">
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
    );
}

export default Sidebar2;
