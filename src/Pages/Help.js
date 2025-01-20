import React, { useEffect,useState, Suspense, lazy } from 'react';
import { MdGroups } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { MdHelp } from "react-icons/md";
import Slide1 from "../Components/Slide1"
import axios from 'axios';
import {Link} from 'react-router-dom'


const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));

const Help = () => {
  const [activeComponent, setActiveComponent] = useState('Popular');
  
  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };
  const token = localStorage.getItem("access-token");

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
    <>
    <Navbar />
      <div className="mx-5">
        <div className="row">
          <div className="col-12 col-md-9 pt-4">
          
            <div className="div3 pt-4 mb-5">
          
          
          
            <div>
                <div className='row'>
                  <div className='col-3 '>
                  <h4 className="tags pt-2"><MdHelp className='text-primary' size={30} />Help</h4>
                  </div>
                 

                    


                </div>
                <hr/>


                  <div className='container'>
                    <div className='row'>
                      <div className='col-3'>
                      <h4 className="tags pt-2"><MdHelp className='text-primary' size={30} />FAQs</h4>

                      </div>
                    </div>
                  </div>

                  <div className='container'>
                    <div className='row'>
                      <div className='col-12'>
                      <p className='mx-5 pt-2'>Find out everything you need to get started by taking the tour. If you still have questions, come back and check out the pinned articles, if you still need help contact us: admin@layoffhub.ai</p>

                      </div>
                    </div>
                  </div>


                  <Slide1/>

               



              </div>








            </div>
          </div>
            
          <div className="col-12 col-md-3 pt-4">
              <div className="div-2 pt-4">
              <div className='p-3'>
            <Link to={'/askquestion'} className="btnn btn btn-warning text-white">ASK A QUESTION?</Link>
            </div>                 <hr />
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
                   
                    <div className="">
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
        </div>
      </div>

      <Footer />
    </>
  )
}



export default Help
