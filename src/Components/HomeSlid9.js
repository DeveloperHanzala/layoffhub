import React, { useEffect, useState } from 'react';
import img1 from '../Images/person_3_sm.jpg';
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import axios from 'axios';
import AnswersGiven from './AnswersGiven';
import GiveAnswer from './GiveAnswer'; 
import './Homeslide3.css'
import Loader from './Loader';
import './Answer.css'
const HomeSlid9 = () => {
    const [answers, setAnswers] = useState([]);
    const [visibleAnswers, setVisibleAnswers] = useState(null); // Manage which question's answers are visible
    const [visibleAddAnswer, setVisibleAddAnswer] = useState(null); // Manage which question's Add Answer form is visible
    const [visibleCount, setVisibleCount] = useState(7); // Initially display 7 questions
    const token = localStorage.getItem("access-token");
    const [loading, setLoading] = useState(false);
    const fetchAnswers = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://api.layoffhub.ai/api/most_visited_Questions/', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAnswers(response.data || []);
        } catch (error) {
            console.error("Error fetching answers:", error);
        }
        finally {
            setLoading(false); // Set loading to false when done
        }
    };

    useEffect(() => {
        fetchAnswers();
    }, []);

    const handleAnswerButtonClick = (id) => {
        setVisibleAnswers(visibleAnswers === id ? null : id); // Toggle the visibility of answers
    };

    const handleAddAnswerButtonClick = (id) => {
        setVisibleAddAnswer(visibleAddAnswer === id ? null : id); // Toggle the visibility of Add Answer form
    };

    const handleTagClick = (tagName) => {
        console.log(`Tag clicked: ${tagName}`);
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
            {answers.slice(0, visibleCount).map((answer) => (
                <div key={answer.id} className="container pt-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img src={answer.image || img1} style={{ height: '10vh' }} alt="Profile" className="rounded-circle mr-2" />
                                            <div>
                                                <h5 className="card-title">{answer.author_username || 'Anonymous'}</h5>
                                                <p className="card-text">{answer.date_posted}</p>
                                            </div>
                                            <button className="btn btn-sm btn-primary ms-3">{answer.is_anonymous ? 'Anonymous' : 'Public'}</button>
                                        </div>
                                        {answer.featured_image && (
                                            <div>
                                                <img 
                                                    src={answer.featured_image} 
                                                    style={{ width: '50px', height: '50px' }} 
                                                    alt="Featured" 
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <h4 className="card-text">{answer.title}</h4>
                                    <p className="card-text">{answer.caption}</p>
                                    <li className="list-group-item">
                                        Company: {answer.companies.map(company => company.name).join(', ')}
                                    </li>
                                    <li className="list-group-item">
                                        Sector: {answer.sectors.map(sector => `${sector.sub_sector} (${sector.industry})`).join(', ')}
                                    </li>
                                    <li className="list-group-item">
                                        <div className="d-flex flexi flex-wrap">
                                            {answer.tags && answer.tags.map((tag, idx) => (
                                                <button 
                                                    className="btn1 btn-primary me-2 mb-2" 
                                                    key={idx}
                                                    onClick={() => handleTagClick(tag.name)}
                                                >
                                                    {tag.name}
                                                </button>
                                            ))}
                                        </div>
                                    </li>
                                    <div className="d-flex justify-content-between align-items-center primary p-3">
                                        <div className="btn btn-sm btn-primary" onClick={() => handleAnswerButtonClick(answer.id)}>
                                            Answer
                                        </div>
                                        <button className="btn btn-sm btn-primary polls-text">
                                            <FaEye size={20} /> {answer.view_count} Views
                                        </button>
                                        <button className="btn btn-sm">
                                            <IoMdArrowDropleft size={25} color='blue' /> 03 <IoMdArrowDropright size={25} color='blue' />
                                        </button>
                                        <button className="btn btn-sm bg-success text-white" onClick={() => handleAddAnswerButtonClick(answer.id)}>
                                            Add Answer
                                        </button>
                                    </div>

                                    {visibleAnswers === answer.id && (
                                        <div className="polls-content open ">
                                            <h3 className='text-center'>
                                                <AnswersGiven questionId={answer.id} />
                                            </h3>
                                        </div>
                                    )}

                                    {visibleAddAnswer === answer.id && (
                                        <GiveAnswer questionId={answer.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
            ))}

            {visibleCount < answers.length && (
                <div className="col-12 mt-3 pb-5">
                    <button className="btn btn-warning btn-block w-100" onClick={loadMore}>
                        LOAD MORE QUESTIONS
                    </button>
                </div>
            )}
        </div>
    );
};

export default HomeSlid9;
