import React, { useEffect, useState, Suspense, lazy } from 'react';
import { MdGroups, MdDiamond } from 'react-icons/md';
import { FaTags, FaMugHot } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { IoTrophySharp } from "react-icons/io5";
import { PiMedalLight } from "react-icons/pi";
import { BsCcCircle, BsHexagonFill } from "react-icons/bs";
import { GiDiamonds } from "react-icons/gi";
import { GrDiamond } from "react-icons/gr";
import axios from 'axios';
import Sidebar2 from '../Components/Sidebar2';

const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));

const TermsCondition = () => {
  const [activeComponent, setActiveComponent] = useState('Popular');
  const [trendTags, setTrendTags] = useState([]);
  const [tags, setTags] = useState([]);

  const bronzeColor = '#CD7F32';
  const silverColor = '#C0C0C0';
  const goldenColor = '#FFD700';
  const gradientStyle = '#006400';

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

  useEffect(() => {
    fetchTrendTags();
  }, [token]);

  return (
    <>
      <Navbar />
      <div className="mx-5 pb-5">
        <div className="row mdi">
          <div className="col-12 col-md-9 mt-4 bgg">
            <div className="pt-4 mb-5">
              <div className='d-flex align-items-center mb-3'>
                <IoTrophySharp color="blue" size={30} />
                <h4 className='ms-3'>Terms and Condition</h4>
              </div>
              <hr />
              <div className='mb-4'>
                <div className='d-flex align-items-center'>
                  <FaMugHot size={25} />
                  <h5 className='ms-3'>Points System</h5>
                </div>
                <p>Besides gaining reputation with your questions and answers, you receive badges for being especially helpful. Badges appear on your profile page, questions & answers.</p>
              </div>

           

              <div className='row mb-4'>
                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>20 Points</span>
                   
                    <hr />
                   
                      <span className='mx-1'>For Signing up.</span>
                    </div>
                  </div>
                </div>

                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>20 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>For referring a new user for paid membership.</span>
                    </div>
                  </div>
                </div>

                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>20 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>For referring a new user.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mb-4'>
                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>10 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>When your answer has been chosen as the best answer.</span>
                    </div>
                  </div>
                </div>

                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>10 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>For adding an answer.</span>
                    </div>
                  </div>
                </div>

                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>10 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>For adding a new post.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mb-4'>
                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>5 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>For adding a new question.</span>
                    </div>
                  </div>
                </div>

                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>5 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>Your question gets a vote.</span>
                    </div>
                  </div>
                </div>

                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>5 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>Your answer gets a vote.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row mb-4'>
                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>5 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>Each time when a user follows you.</span>
                    </div>
                  </div>
                </div>

                <div className='col-4 col-md-4 mb-3'>
                  <div className="tags out p-4">
                    <div>
                      <FaMugHot size={20} color='rgb(255, 123, 0)' />
                      <span className='mx-2 fw-bold'>5 Points</span>
                    </div>
                    <hr />
                    <div>
                      <span className='mx-1'>For adding your social media links to your profile.</span>
                    </div>
                  </div>
                </div>
              </div>

              <hr />
              <div className='container'>
                <div className='row'>
                  <div className='col-1'>
                    <h4 className="tags mx-4"> </h4>
                  </div>
                  <div className='col-10 main p-3'>
                    <div className="row">
                      <div className="col-3 col3">
                        <p className='bgc text-white  '>
                          <span className=''>Layoff Whisperer</span>
                        </p>
                        <span>
                          <BsCcCircle style={{ color: bronzeColor, fontSize: '35px' }} />
                          <span className='fs-3'>0</span>
                          <span className='fs-6'>upvotes</span>
                        </span>
                      </div>
                      <div className="col-9">
                        <p className="m-0">You must have a total score of 0 in at least 10 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 10.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='container pt-4'>
                <div className='row'>
                  <div className='col-1'>
                    <h4 className="tags mx-4"> </h4>
                  </div>
                  <div className='col-10 main p-3'>
                    <div className="row">
                      <div className="col-3 col3">
                        <p className='bgcs bg-primary text-white text-center'>
                          <span className=''>Contributor</span>
                        </p>
                        <span>
                          <BsCcCircle style={{ color: silverColor, fontSize: '35px' }} />
                          <span className='fs-3'>50</span>
                          <span className='fs-6'>upvotes</span>
                        </span>
                      </div>
                      <div className="col-9">
                        <p className="m-0">You must have a total score of 50 in at least 50 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 50.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='container pt-4'>
                <div className='row'>
                  <div className='col-1'>
                    <h4 className="tags mx-4"> </h4>
                  </div>
                  <div className='col-10 main p-3'>
                    <div className="row">
                      <div className="col-3 col3">
                        <p className='bgcs bg-warning text-white text-center'>
                          <span className=''>Rumor Connoisseur</span>
                        </p>
                        <span>
                          <BsCcCircle style={{ color: goldenColor, fontSize: '35px' }} />
                          <span className='fs-3'>100</span>
                          <span className='fs-6'>upvotes</span>
                        </span>
                      </div>
                      <div className="col-9">
                        <p className="m-0">You must have a total score of 100 in at least 100 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 100.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='container pt-4'>
                <div className='row'>
                  <div className='col-1'>
                    <h4 className="tags mx-4"> </h4>
                  </div>
                  <div className='col-10 main p-3'>
                    <div className="row">
                      <div className="col-3 col3">
                        <p className='bgcs bg-success text-center text-white'>
                          <span style={{ fontSize: 'small' }}>Master of Scuttlebutt</span>
                        </p>
                        <span>
                          <GiDiamonds style={{ color: gradientStyle, fontSize: '35px' }} />
                          <span className='fs-3'>250</span>
                          <span className='fs-6'>upvotes</span>
                        </span>
                      </div>
                      <div className="col-9">
                        <p className="pt-3">You must have a total score of 250 in at least 150 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 150.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='container pt-4'>
                <div className='row'>
                  <div className='col-1'>
                    <h4 className="tags mx-4"> </h4>
                  </div>
                  <div className='col-10 main p-3'>
                    <div className="row">
                      <div className="col-3 col3">
                        <p className='bgcs bg-primary text-white text-center'>
                          <span className=''>Guru</span>
                        </p>
                        <span>
                          <BsHexagonFill className='text-primary' style={{ fontSize: '35px' }} />
                          <span className='fs-3'>500</span>
                          <span className='fs-6'>upvotes</span>
                        </span>
                      </div>
                      <div className="col-9">
                        <p className="m-0">You must have a total score of 500 in at least 200 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 200.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='container pt-4 pb-5'>
                <div className='row'>
                  <div className='col-1'>
                    <h4 className="tags mx-4"> </h4>
                  </div>
                  <div className='col-10 main p-3'>
                    <div className="row">
                      <div className="col-3 col3">
                        <p className='bgcs bg-danger text-white text-center'>
                          <span className=''>Elder</span>
                        </p>
                        <span>
                          <MdDiamond className='text-danger' style={{ fontSize: '35px', display: 'inline-block', transform: 'rotate(-45deg)' }} />
                          <span className='fs-3'>1000</span>
                          <span style={{ fontSize: 'small' }}>upvotes</span>
                        </span>
                      </div>
                      <div className="col-9">
                        <p className="m-0">You must have a total score of 1000 in at least 250 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 250.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='container pt-4 pb-5'>
                <div className='row'>
                  <div className='col-1'>
                    <h4 className="tags mx-4"> </h4>
                  </div>
                  <div className='col-10 main p-3'>
                    <div className="row">
                      <div className="col-3 col3">
                        <p className='bgcs bg-primary text-white text-center'>
                          <span className=''>Oracle</span>
                        </p>
                        <span>
                          <GrDiamond className='text-primary' style={{ color: bronzeColor, fontSize: '35px' }} />
                          <span className='fs-3'>5000</span>
                          <span style={{ fontSize: 'small' }}>upvotes</span>
                        </span>
                      </div>
                      <div className="col-9">
                        <p className="m-0">You must have a total score of 5000 in at least 100 non-community wiki answers to achieve this badge. Highest scoring answer that outscored an accepted answer with score of more than 100.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

       

            </div>
          </div>
          <div className="col-12 col-md-3 mt-4">
            <Sidebar2 />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermsCondition;
