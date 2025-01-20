import React from 'react'
import './ComingSoon.css'
import pix from '../Images/bg.mp4'
import pic from '../Images/logo-nobackground-1000.png'
import pic1 from '../Images/Artboard 1.png'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {Link} from "react-router-dom";

const ComingSoon = () => {
  return (
    <body id="coming-soon">


    <div className='bodr'>
          <div>
  <video className="bg-video mmmmnn" src={pix} playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop"></video>

    <div className="mkmk">
    <img src={pic1}/>
   
    </div>
   {/*  <div className="mkm">
    <img src={pic}/>
   
    </div> */}

  <div className="masthead ">

    {/* <div className="masthead-content text-white">
      <div className="container-fluid px-4 px-lg-0">
      <img src={pic}/>
      <div className=" nnn px-4 px-lg-0 border-0" >
        <h1 className="lh-1 mb-4 px-5 text-center" style={{fontFamily:"'Oswald', sans-serif"}}>is <br/> Coming Soon</h1>
       </div>
        <form id="contactForm" data-sb-form-api-token="API_TOKEN">
          <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
        </form>
      </div>
    </div> */}
  </div>
    

  <div className="social-icons  ">
    <div className="d-flex flex-row nnnnnn justify-content-center align-items-center mt-3 mt-lg-0">
      <a className="btn btn-dark m-3" > <Link className='mt-1' to={'https://www.facebook.com/profile.php?id=61564318528455'}>
                <FaFacebook size={35} style={{ color: 'white' }} className='mx-2' />
            </Link></a>
      <a className="btn btn-dark m-3"> <Link to={'https://www.linkedin.com/company/layoffhub/?viewAsMember=true'} >
                <FaLinkedin size={35} style={{ color: 'white' }} className='mx-2' />
            </Link></a>
      <a className="btn btn-dark m-3" > <Link to={'https://www.instagram.com/layoffhub'} >
      <FaInstagram size={35} style={{ color: 'white' }} className='mx-2' />
      </Link></a>
      <a className="btn btn-dark m-3" > <Link to={'https://x.com/layoffhub'} >
      <FaXTwitter size={35} color='white' className='mx-2' />
      </Link></a>

    </div>
  </div>
</div>

    </div>
    </body>
  )
}

export default ComingSoon
