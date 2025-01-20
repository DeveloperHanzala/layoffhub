import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegCommentAlt } from "react-icons/fa";

const AnswerComponent = ({ answerId }) => {
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const token = localStorage.getItem("access-token");

  const toggleCommentBox = () => {
    setShowCommentBox(!showCommentBox);
  };

  const toggleReplies = () => {
    setShowReplies(!showReplies);
    if (!showReplies) {
      getComments(); // Fetch comments only when showing replies
    }
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const submitComment = async () => {
    if (!token) {
      alert("Please login to add a Reply");
      return;
    }

    const url = `https://api.layoffhub.ai/api/answer_an_answer/${answerId}/`;

    try {
      const response = await axios.post(
        url,
        { content: commentText },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Comment submitted:", response.data);
      setCommentText("");
      setShowCommentBox(false);
      getComments(); // Refresh the comments after submission
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const getComments = async () => {
    const url = `https://api.layoffhub.ai/api/answer_an_answer/${answerId}/`;

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const submitreply = response.data.reverse() || []

      setComments(submitreply);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    if (answerId && showReplies) {
      getComments();
    }
  }, [answerId, showReplies]);

  return (
    <div className="container-fluid">
      <div className="d-flex flex-row col-1 justify-content-start align-items-start">
        <div>
          <button className="btn btn-primary" onClick={toggleCommentBox}>
            <FaRegCommentAlt />
          </button>
        </div>
        <div className="mx-3">
          <button className="btn hbb me-2" onClick={toggleReplies}>
            {showReplies ? "Hide Replies" : "Show Replies"}
          </button>
        </div>
      </div>

      {showCommentBox && (
        <div className="comment-box w-100 mt-2 p-2">
          <textarea
            className="form-control"
            placeholder="Add your reply..."
            value={commentText}
            onChange={handleCommentChange}
          ></textarea>
          <button className="btn btn-primary mt-2" onClick={submitComment}>
            Submit Reply
          </button>
        </div>
      )}

      {showReplies && (
        <div className="mt-3">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id} className="p-2 rounded">
                <div className="p-2 ">
                  <div className="d-flex">
                    <h6>{comment.user ? comment.user.username : "Anonymous"}</h6>
                  </div>
                  <div className="d-flex">
                    <span className="text-muted" style={{ fontSize: "small" }}>
                      <span className="text-primary">Posted At </span>
                      {new Date(comment.date_posted).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }) || "July 17, 2004"}
                    </span>
                  </div>
                  <p className="mb-1"></p>
                  <div className="d-flex">
                    <h6 className="mb-1">{comment.content}</h6>
                    <p className="text-muted" style={{ fontSize: "small" }}></p>
                  </div>
                  <hr />
                </div>
              </div>
            ))
          ) : (
            <h5>No Replies available</h5>
          )}
        </div>
      )}
    </div>
  );
};

export default AnswerComponent;
