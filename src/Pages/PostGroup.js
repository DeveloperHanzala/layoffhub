import React, { useState, Suspense, lazy } from 'react';
import { MdGroups } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import img1 from '../Images/person_3_sm.jpg'

import { MdGroupAdd } from "react-icons/md";
import { TbPinnedFilled } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));



const PostGroup = () => {
    const [activeComponent, setActiveComponent] = useState('Popular');

    const handleClick = (componentName) => {
        setActiveComponent(componentName);
    };
  return (
    <>
    <Navbar />
  <div className="container pb-5  ">
      <div className="row">
          <div className="col-12 col-md-9 pt-4 ">

              <div className="pt-4 mb-5 bgg" >

                  <div>
                  <div className='row align-items-center '>
{/* Header Column */}
<div className='col-12 col-md-5'>
<h4 className="tags mx-3 d-flex display-flex-center align-item-center pt-2">
<MdGroupAdd className='text-primary' size={30} />
<span className='mx-2 pt-1'>Posts in Group</span>
</h4>
</div>

<div className='col-12 col-md-5 d-none d-md-block'></div>

<div className='col-12 col-md-2'>
<div className='d-flex flex-column flex-md-row align-items-md-center'>

<button className=' btn btn-primary'>Add a Post</button>
</div>
</div>
</div>

                      <hr />

                      <div className='row pt-3 d-flex justify-content-center align-items-center'>
                        <div className='col-10'>
                        {[1, 2, 3].map((item, index) => (
          <div className="col-12 mt-3" key={index}>
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src={img1} style={{height:'10vh'}} className="profile-img rounded-circle" alt="Profile" />
                    <div>
                      <h5 className="card-title">Admin</h5>
                      <p className="card-text">July 17, 2004</p>
                    </div>
                  </div>
                
                </div>
                <h4 className="card-text">Is this statement, "i see him last night" can be understood as "I saw him last night"?</h4>
                <p className="card-text">In my local language [Bahasa Indonesia) there are no verb-2 or past tense form as time tracker. So, I often forget to use the past form of verb when speaking english.</p>
                <ul className="list-group">
                  <li className="list-group-item">I saw him last night (correct)</li>
                  <li className="list-group-item">I see him last night [incorrect)</li>
                </ul>
                <p className="card-text">But i think both has the same meaning and are understandable. Isn't it?</p>
                <div className="d-flex justify-content-between align-items-center primary p-3">
                  
                  <button className="btn btn-sm btn-primary"><FaMessage size={20} /> 04 Answers</button>
                  <button className="btn btn-sm btn-primary"><FaEye size={20} /> 39 Views</button>
                  <button className="btn btn-sm"><IoMdArrowDropleft size={25} color='blue' /> 03 <IoMdArrowDropright size={25} color='blue' /></button>
                  <button className="btn btn-sm btn-success">Answer</button>
                </div>
              </div>
            </div>
          </div>
        ))}
                        </div>

                      </div>



                  </div>
              </div>
          </div>
      

          <div className="col-12 col-md-3 pt-4">
              <div className="back4 pt-4">
                  <button className="btnn text-white">ASK A QUESTION?</button>
                  <hr />
                  <div className=' '>
                      <div className='row '>
                          <div className='col-1 '>
                          </div>

                          <div className='col-5 bord-2 '><span className='fw-bold'>QUESTIONS</span>
                              <h4 className='text-center text-primary'>20</h4>
                          </div>
                          <div className='col-5 bord2 ' >
                              <span className='fw-bold'>ANSWERS</span>
                              <h4 className='text-center text-warning'>10</h4>
                          </div>
                      </div>
                      <div className='row'>
                          <div className='col-1'>
                          </div>

                          <div className='col-5 bord-1 text-center '>
                              <span className='fw-bold' style={{ fontSize: 'small' }}>BEST ANSWERS</span>
                              <h4 className=' text-success'>05</h4>


                          </div>
                          <div className='col-5 bord1   ' >
                              <span className='fw-bold mx-3'>USERS</span>
                              <h4 className='text-center text-primary'>25</h4>
                          </div>
                      </div>
                  </div>




                  <hr />
                  <div className="cen">
                      <MdGroups size={35} color="blue" /> <span className="p-2"><b>Top Members</b></span>
                  </div>
                  <hr />
                  <div className="row">
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
                          <div className="col-12 text-center">
                              <button type="button" className="btn-09">Analytics</button>
                              <button type="button" className="btn-09">Computer</button>
                              <button type="button" className="btn-09">Company</button>
                              <button type="button" className="btn-09">Django</button>
                              <button type="button" className="btn-09">Analytics</button>
                              <button type="button" className="btn-09">Computer</button>
                              <button type="button" className="btn-09">Company</button>
                              <button type="button" className="btn-09">Django</button>
                              <button type="button" className="btn-09">Analytics</button>
                              <button type="button" className="btn-09">Computer</button>
                              <button type="button" className="btn-09">Company</button>
                              <button type="button" className="btn-09">Django</button>
                              <button type="button" className="btn-09">Analytics</button>
                              <button type="button" className="btn-09">Computer</button>
                              <button type="button" className="btn-09">Company</button>
                              <button type="button" className="btn-09">Django</button>
                              <button type="button" className="btn-09">Analytics</button>
                              <button type="button" className="btn-09">Computer</button>
                              <button type="button" className="btn-09">Company</button>
                              <button type="button" className="btn-09">Django</button>
                              <button type="button" className="btn-09">Analytics</button>
                              <button type="button" className="btn-09">Computer</button>
                              <button type="button" className="btn-09">Company</button>
                              <button type="button" className="btn-09">Django</button>
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

export default PostGroup
