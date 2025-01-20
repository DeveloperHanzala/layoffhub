import React, { useEffect, useState } from "react";
import SideBar from "../Components/SideBar";
import { FaCircleQuestion } from "react-icons/fa6";
import axios from "axios";

const UserQuestion = () => {
  const [questions, setQuestions] = useState([]);
  const [visibleCount, setVisibleCount] = useState(7); // Number of questions to display
  const token = localStorage.getItem("access-token");
  const user_id = localStorage.getItem("UserID");

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
      setQuestions(Array.isArray(questions) ? questions : []);
    } catch (error) {
      console.error("Error fetching content data:", error);
    }
  };

  useEffect(() => {
    getQuestions();
  }, []);

  const formatTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  const showMoreQuestions = () => {
    setVisibleCount(questions.length); // Increase visible count by 5
  };

  return (
    <div className="col-lg-12 d-flex flex-row user-question-container">
      <div style={{width:"100%"}}>
        <SideBar />
      </div>
      <div className="main-content col-lg-8">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="pt-5">
                <h2 className="fs-2 d-flex align-items-center">
                  <FaCircleQuestion
                    className="mx-1"
                    color="rgb(0, 102, 255)"
                    size={35}
                  />
                  Discussions
                </h2>
              
              </div>
            </div>
          </div>
        </div>
        <div className="container px-5">
          {Array.isArray(questions) && questions.length > 0 ? (
            questions.slice(0, visibleCount).map((item) => (
              <div className="row" key={item.id} style={{ flexWrap: "wrap" }}>
                <div className="col-12 card mt-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <div>
                          <h5 className="card-title">{item.author_username || 'Anonymous'}</h5>
                          <p className="card-text">
                            <span className="text-primary">Posted At </span>
                            {new Date(item.date_posted).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) || 'July 17, 2004'}
                          </p>
                        </div>
                        <div className="mx-3">
                          <button className="btn btn-sm btn-primary m-3">
                            {item.community || "No Community"}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <h4 className="card-text">
                        <span className="fs-6">Your Title:</span> {item.title}
                      </h4>
                      <h5 className="btn my-3">{item.view_count} views</h5>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No questions found.</p>
          )}
         
           {questions.length > visibleCount && (
                              <button className="btn btn-primary"  onClick={showMoreQuestions}>All Discussions</button>

           
          )}
        </div>
      </div>
    </div>
  );
};

export default UserQuestion;
