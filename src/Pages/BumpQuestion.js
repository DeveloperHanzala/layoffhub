import React, { useEffect,useState, Suspense, lazy } from 'react';
import HomeSlid from '../Components/HomeSlid';
import { MdGroups } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';

const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));

const BumpQuestion = () => {
  const [activeComponent, setActiveComponent] = useState('Popular');
  const token = localStorage.getItem("access-token");
  const handleClick = (componentName) => {
    setActiveComponent(componentName);
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
    <div>
      <>
        <Navbar />
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-12 col-md-9 pt-4">
              <div className="homeimg pb-3 text-white">
                <div className="text-center container pt-5">
                  <h4>Share & grow the world's knowledge!</h4>
                  <p className="container">
                    We want to connect the people who have knowledge to the people who need it, to bring together people with different perspectives so they can understand each other better, and to empower everyone to share their knowledge.
                  </p>
                  <input className="inp1" type="search" placeholder="Type Search Words..." />
                </div>
              </div>
              <div className="div1 mb-5">
                <div>
                  <HomeSlid />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-12 col-md-3 pt-4">
              <div className="div-2 pt-4">
                <button className="btnn text-white">ASK A QUESTION?</button>
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
                  <div className="row">
                    {/* Tags Buttons */}
                   
                    <div className="container">
                                <div className="row">
                                    {trendTags.map((tag, index) => (
                                        // Ensure that `tag` is a string or extract the string property if it's an object
                                        <div className="col-12 mb-2 text-center" key={index}>
                                            <button type="button" className="btn-09">{typeof tag === 'string' ? tag : tag.name}</button>
                                        </div>
                                    ))}
                                </div>
                            </div>





                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default BumpQuestion;
