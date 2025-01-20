import React, { useEffect, useState, Suspense, lazy } from 'react';
import axios from 'axios';
import { MdGroups } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HomeSlid from '../Components/HomeSlid';
import { Link } from 'react-router-dom';

const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));

const RecentQuestion = () => {
    const [activeComponent, setActiveComponent] = useState('Popular');
    const [trendTags, setTrendTags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const token = localStorage.getItem("access-token");

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

    const fetchSearchResults = async (query) => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/search_bar/', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: { query }
            });
            setSearchResults(response.data || []);
        } catch (error) {
            console.error("Error fetching search results:", error);
        }
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query.length > 2) { // Trigger search only if query length is greater than 2
            fetchSearchResults(query);
        } else {
            setSearchResults([]);
        }
    };

    useEffect(() => {
        fetchTrendTags();
    }, [token]);

    const handleClick = (componentName) => {
        setActiveComponent(componentName);
    };

    return (
        <>
            <Navbar />
            <div className="mx-5">
                <div className="row">
                    <div className="col-12 col-md-9 pt-4">
                        <div className="homeimg text-white pb-3">
                            <div className="text-center container pt-5">
                                <h4>Share & grow the world's knowledge!</h4>
                                <p className="container">
                                    We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge.
                                </p>
                                <input
                                    className="inp1"
                                    type="search"
                                    placeholder="Type Search Words..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <div className="search-results">
                                    {searchResults.length > 0 ? (
                                        <ul>
                                            {searchResults.map((result, index) => (
                                                <li key={index}>{typeof result === 'string' ? result : result.name}</li>
                                            ))}
                                        </ul>
                                    ) : searchQuery.length > 0 ? (
                                        <p>No results found</p>
                                    ) : null}
                                </div>
                            </div>
                        </div>
                        <div className="div1 mb-5">
                            <div>
                                <HomeSlid />
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-3 pt-4">
                        <div className="div-2 pt-4">
                            <div className='p-3'>
                                <Link to={'/askquestion'} className="btnn btn btn-warning text-white">ASK A QUESTION?</Link>
                            </div>
                            <hr />
                            <div className="cen">
                                <MdGroups size={35} color="blue" /> <span className="p-2"><b>Top Members</b></span>
                            </div>
                            <hr />
                            <div className="row p-3">
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
                </div>
            </div>
            <Footer />
        </>
    );
}

export default RecentQuestion;
