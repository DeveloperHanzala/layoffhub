import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img1 from '../Images/person_3_sm.jpg';
import './AnswerGiven.css';
import AnswerComponent from './AnswerComponent';

const AnswersGiven = ({ questionId }) => {
    const [data, setData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(4); // Show 4 answers initially

    const getAnswers = async () => {
        const url = `https://api.layoffhub.ai/api/answer_a_question/${questionId}/`;

        try {
            const response = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const submitreply = response.data.reverse() || []
            setData(submitreply);
        } catch (error) {
            console.error('Error fetching content data:', error);
        }
    };

    useEffect(() => {
        if (questionId) {
            getAnswers();
        }
    }, [questionId]);

    const loadMoreAnswers = () => {
        setVisibleCount((prevCount) => prevCount + 4); // Load 4 more answers on each click
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className="answers-container" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                        {data.length > 0 ? (
                            data.slice(0, visibleCount).map((answer) => (
                                <div key={answer.id} className="mb-4  p-3">
                                    <div className="d-flex align-items-start">
                                     
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-center">
                                            <h6 className="card-title">
                                            {answer.user?.username || "Anonymous"}
                          </h6>
                                            </div>
                                            <div className='text-start'>
                                                <span className="text-muted" style={{ fontSize: 'small' }}><span className='text-primary'> Posted At </span>
                                                {new Date(answer.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) || 'July 17, 2004'}
                                                </span>
                                            </div>
                                            <h6 className="mt-3 px-2 mx-2  nnn">{answer.content}</h6>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row'>
                                        <AnswerComponent answerId={answer.id} />
                                    </div>
                                    <hr/>
                                </div>
                                
                            ))
                        ) : (
                            <h5>No Comments available</h5>
                        )}
                    </div>
                  
                    {visibleCount < data.length && (
                        <button className="btn btn-primary mt-3" onClick={loadMoreAnswers}>
                            Load More Comments
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AnswersGiven;
