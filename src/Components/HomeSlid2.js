import React, { useState } from 'react';
import img1 from '../Images/person_3_sm.jpg'
import { TbPinnedFilled } from "react-icons/tb";
import { FaMessage } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { MdReport } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";
import { LuReply } from "react-icons/lu";
import { IoCameraOutline } from "react-icons/io5";
import {
    FaBold, FaItalic, FaUnderline, FaStrikethrough, FaAlignLeft,
    FaAlignCenter, FaAlignRight, FaListUl, FaListOl, FaQuoteRight,
    FaCode, FaLink, FaImage
} from 'react-icons/fa';
import axios from 'axios';

const HomeSlid2 = () => {
    const [user, setUser] = useState("");
    const [psudo, setPsudo] = useState("");
    const [content, setContent] = useState("");
    const token = localStorage.getItem("access-token");

    const handlesubmit = async (event) => {
      event.preventDefault();
    const data = { 
        user: user,
        pseudonym: psudo,
        content: content,
        date_posted:new Date().toISOString(),
      };

      const Response = await axios.post(
        "http://api.layoffhub.ai:8000/api/answer_a_question/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer  ${token}   ` 
          },
        }
      );
      console.log("API  Response:", Response.data);

    }
    
    
    return (

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex align-items-center">
                                    <img src={img1} style={{ height: '10vh' }} alt="Profile" className="rounded-circle mr-2" />
                                    <div>
                                        <h5 className="card-title">Admin</h5>
                                        <p className="card-text">July 17, 2004</p>

                                    </div>
                                    <button className="btn btn-sm btn-primary m-3">English</button>
                                </div>
                                <div>

                                    <span className=""><TbPinnedFilled size={35} color='red' />Pinned</span>
                                </div>
                            </div>
                            <h4 className="card-text">Is this statement, "i see him last night" can be understood as "I saw him last night"?</h4>
                            <p className="card-text">In my local language [Bahasa Indonesia) there are no verb-2 or past tense form as time tracker. So, I often forget to use the past form of verb when speaking english.</p>

                            <li className="list-group-item">I saw him last night (correct)</li>
                            <li className="list-group-item">I see him last night [incorrect)</li>

                            <p className="card-text">But i think both has the same meaning and are understandable. Isn't it?</p>
                            <div className="d-flex m-3 align-items-center p-3 " style={{ background: ' rgba(0, 102, 255, 0.411)' }}>
                                <button className="btn mx-3 btn-sm btn-primary "><FaMessage  /> 04 Answers</button>
                                <button className="btn  btn-sm btn-primary"><FaEye  />39 Views</button>
                                <button className="btn mx-3 btn-sm btn-primary"><FaMessage/> 04 Answers</button>
                                <button className="btn  btn-sm btn-primary"><FaEye  />39 Views</button>
                                <button className="btn mx-3 btn-sm "><IoMdArrowDropleft size={25} color='blue' /> 03<IoMdArrowDropright size={25} color='blue' /> </button>
                                <button className="btn mx-5 btn-sm btn-success">Answer</button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="">
                            <div className="card-body">
                                <button className='btn'><MdReport size={25} /><span className='m-2'>Report</span></button>




                            </div>
                        </div>

                    </div>
                    <div className='col-6'>
                        <button className='btn'><FaShareAlt size={25} /><span className='m-2'>Share</span></button>
                        <FaFacebook size={35} style={{ color: 'blue' }} className='mx-2' />
                        <FaLinkedin size={35} style={{ color: 'blue' }} className='mx-2' />
                        <FaSquareWhatsapp size={35} style={{ color: 'rgb(14, 235, 43)' }} className='mx-2' />
                        <FaXTwitter size={30} className='mx-2' />


                    </div>


                </div>


            </div>
            <hr />
            <div className="row ">
                <div className="col-md-12">
                    <div className="">
                        <div className='row'>
                            <div className='col-6'>
                                <div className="card-header">
                                    <h6 className="card-title d-flex m-3 align-items-center ">02 Answers</h6>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="bt-2">
                                    <button
                                        type="button"
                                        className="btn btn-success bt-3"

                                    >
                                        <span className="">Voted</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn bt-3 "

                                    >
                                        <span className="">Oldest</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn  bt-3"

                                    >
                                        <span className="">Recent</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="btn bt-3 "

                                    >
                                        <span className="">Random</span>
                                    </button>

                                </div>

                            </div>
                            <hr />
                        </div>

                        <div className="col-12 mt-3">
                            <div className="">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="d-flex align-items-center">
                                            <img src={img1} style={{ height: '10vh' }} alt="Profile" className="rounded-circle mr-2" />
                                            <div>
                                                <h5 className="card-title mx-2">Jhon Patar</h5>
                                                <p className="card-text mx-2">Added and answer on April 19,2024 at 3:00am</p>

                                            </div>
                                        </div>
                                      
                                    </div>
                                    <p className="card-text p-4">Yes, I understand it. I hear a lot of this incorrect grammar from my wife. I would expect that the person that spoke this was possibly Chinese. In Chinese there are no tenses or plurals. No he or she pronouns. The context tells all. So it might have been a direct translation from Chinese.</p>


                                    <div className='container'>
                                        <div className='row'>
                                            <div className='col-12'>
                                                <button className="btn btn-sm  "><IoMdArrowDropup size={25} color='blue' /> 03<IoMdArrowDropup size={25} color='blue' /> </button>
                                                <button className="btn   button"><LuReply size={25} /><span className='m-2'>Reply</span></button>
                                                <button className='btn button'><FaShareAlt size={25} /><span className='m-2'>Share</span></button>


                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2 >Leave an answer</h2>
                    <form >
                        <div className="form-group mt-3">
                            <label htmlFor="answer">Featured Image</label><br />
                            <div className="input11 m-2 p-2">
                                <div className="input-group  ">
                                    <span className="input-group-text">
                                        <IoCameraOutline size={25} />
                                    </span>
                                    <input
                                        type="file"
                                        className="form-control d-flex justify-content-between align-items-center"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        id="imageUpload"
                                    />
                                    <label htmlFor="imageUpload" className="btn btn11 mx-auto btn-primary">Browse</label>
                                </div>
                            </div>
                        </div>
                        <div className="container inp my-3">
                            <div className="editor-toolbar bg-light p-2 rounded-top">
                                <select id="exampleFormControlSelect1">
                                    <option>Paragraph</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>
                                <div className="btn-group me-2">

                                    <button className="btn btn-light"><FaBold /></button>
                                    <button className="btn btn-light"><FaItalic /></button>
                                    <button className="btn btn-light"><FaUnderline /></button>
                                    <button className="btn btn-light"><FaStrikethrough /></button>
                                </div>
                                <div className="btn-group me-2">
                                    <button className="btn btn-light"><FaAlignLeft /></button>
                                    <button className="btn btn-light"><FaAlignCenter /></button>
                                    <button className="btn btn-light"><FaAlignRight /></button>
                                </div>
                                <div className="btn-group me-2">
                                    <button className="btn btn-light"><FaListUl /></button>
                                    <button className="btn btn-light"><FaListOl /></button>
                                </div>
                                <div className="btn-group me-2">
                                    <button className="btn btn-light"><FaQuoteRight /></button>
                                    <button className="btn btn-light"><FaCode /></button>
                                </div>
                                <div className="btn-group me-2">
                                    <button className="btn btn-light"><FaLink /></button>
                                    <button className="btn btn-light"><FaImage /></button>
                                </div>

                                <select id="exampleFormControlSelect1">
                                    <option>Code Block</option>
                                    <option>Medium</option>
                                    <option>Hard</option>
                                </select>

                            </div>
                            <div className="editor-content bg-white border rounded-bottom">
                                <textarea className="form-control border-0 " rows="5 " 
                                 onChange={(e) => setContent(e.target.value)}

                                ></textarea>
                            </div>
                        </div>

                        <div className="container my-5">
                            <div className="row mt-3 ">
                                <div className='col-6'>
                                <input type="text" className='p-3 inp  w-100 ' placeholder='Your Name'
                                onChange={(e) => setUser(e.target.value)}
                                
                                
                                />
                                </div>
                                <div className='col-6'>
                                <input type="text" className='p-3 inp  w-100 ' placeholder='E-mail' />
                                </div>
                            </div>
                            <div className='col-12'>
                            <input type="text" className='p-3 inp my-5 w-100' placeholder='URL'
                             onChange={(e) => setPsudo(e.target.value)}
                            />
                        </div></div>
                        
                            <div className='row pb-5'>
                                <div className='col-4'></div>
                                <div className='col-4'>
                                    <button type="submit" className="btn w-100 btn-primary "
                                    onClick={handlesubmit}
                                    >Submit</button>
                                </div>
                                <div className='col-4 '></div>
                            </div>
                    </form >
                </div>
            </div>

        </div>
    );
}

export default HomeSlid2
