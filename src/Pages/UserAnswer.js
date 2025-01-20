import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SideBar from '../Components/SideBar';

import { MdQuestionAnswer } from "react-icons/md";
import img1 from '../Images/person_3_sm.jpg'; // Placeholder image

const UserAnswer = () => {
    const [answers, setAnswers] = useState([]);
    const token = localStorage.getItem("access-token");
    const user_id = localStorage.getItem("UserID");
    const [visibleCount, setVisibleCount] = useState(7); // Number of questions to display

    const getQuestions = async () => {
        const url = `https://api.layoffhub.ai/api/user/${user_id}/questions_answers/`;
        try {
            const response = await axios.get(url, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            // Log the full response for debugging
            console.log("API response:", response.data);

            // Extract questions from the response
            const { questions } = response.data;
            setAnswers(Array.isArray(questions) ? questions : []);
        } catch (error) {
            console.error("Error fetching content data:", error);
        }
    };

    useEffect(() => {
        getQuestions();
    }, [user_id, token]);

    const showMoreQuestions = () => {
        setVisibleCount(answers.length); // Increase visible count by 5
      };
    

    return (
        <>
            <div className='col-lg-12 d-flex flex-row user-question-container'>
            <div style={{width:"100%"}} >
        <SideBar />
      </div>
                <div className='main-content1 col-8 mx-4'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='pt-5'>
                                    <h2 className='fs-2 d-flex align-items-center'>
                                        <MdQuestionAnswer className='mx-1' color='rgb(0, 102, 255)' size={35} />
                                        Replies
                                    </h2>
                               
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container container2 px-5'>
                        {Array.isArray(answers) && answers.length > 0 ? (
                            answers.map((item) => (
                                <div className="row" key={item.id} style={{ flexWrap: "wrap" }}> 
                                    <div className='col-12 card mt-4'>
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <h5 className="card-title">{item.author_username || 'Anonymous'}</h5>
                                                    <p className="card-text">
                                                        <span className='text-primary'>Posted At </span> {new Date(item.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) || 'July 17, 2004'}
                                                    </p>
                                                </div>
                                                <div className="mx-3">
                                                   
                                                </div>
                                            </div>
                                            <p className="card-text my-3">{item.content}</p>
                                            <div className="d-flex justify-content-start bg-warning bgbb p-3">
                                            <h4 className="card-text"><span className="fs-6">Your Reply:</span> {item.caption}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No questions found.</p>
                        )}
                    </div>
                    {answers.length > visibleCount && (
                                        <button className='btn btn-primary'  onClick={showMoreQuestions}>All Replies</button>
                                    )}
                </div>
            </div>
        </>
    );
}

export default UserAnswer;
