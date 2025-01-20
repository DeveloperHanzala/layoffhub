/* import React, { useState, useEffect } from "react";
import img from '../Images/person_3_sm.jpg';
import img1 from '../Images/LOGO-01.png';
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import {Link} from "react-router-dom";

const SidebarAnalytics = () => {
 
  
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  

  return (
    <div className='row auto-height-div'>
      <div className='col-12 bg-dark'>
   
        <div className='d-flex justify-content-center  align-item-center'>
          <div className='flex-column '>
          
          <p className='text-white mx-2 d-flex flex-column flex-md-row align-items-center'>
           
          </p></div>
        </div>
        <div className='d-flex justify-content-center align-item-center flex-column my-4'>
          <NavLink
            to="/Summary"
            className={`btnn19 mx-1 prof    bg-transparent w-100 ${activeButton === 'Summary' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Summary')}
          >
            <h5 className=' fw-bold d-flex my-2 justify-content-center  align-items-center '>
             Summary 
            </h5>
          </NavLink>
          <NavLink
            to="/heatmap"
            className={`btnn19 mx-2 ques  bg-transparent w-100 ${activeButton === 'Heatmap' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Heatmap')}
          >
            <h5 className='fw-bold my-2  d-flex justify-content-center align-items-center '>
               Heatmap 
            </h5>
          </NavLink>
          <NavLink
            to="/iteractivesummary"
            className={`btnn19 mx-1 answ bg-transparent w-100 ${activeButton === ' InteractiveSummary' ? 'active' : ''}`}
            onClick={() => handleButtonClick(' InteractiveSummary')}
          >
            <h5 className='fw-bold my-2 d-flex justify-content-center align-items-center'>
            Interactive Summary
            </h5>
          </NavLink>
          <NavLink
            to="/statesummary"
            className={`btnn19 mx-1 prof1    bg-transparent w-100 ${activeButton === 'StateSummary ' ? 'active' : ''}`}
            onClick={() => handleButtonClick('StateSummary')}
          >
            <h5 className=' fw-bold d-flex my-2 justify-content-center  align-items-center '>
            State Summary 
            </h5>
          </NavLink>
          <NavLink
            to="/city&state"
            className={`btnn19 mx-2 ques  bg-transparent w-100 ${activeButton === 'City&State' ? 'active' : ''}`}
            onClick={() => handleButtonClick('City&State')}
          >
            <h5 className='fw-bold my-2  d-flex justify-content-center align-items-center '>
            City & State
            </h5>
          </NavLink>
          <NavLink
            to="/industries"
            className={`btnn19 mx-1 answ bg-transparent w-100 ${activeButton === 'Industry' ? 'active' : ''}`}
            onClick={() => handleButtonClick('Industry')}
          >
            <h5 className='fw-bold my-2 d-flex justify-content-center align-items-center'>
            Industry 
            </h5>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SidebarAnalytics;
 */