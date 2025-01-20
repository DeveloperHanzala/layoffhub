import React, { useEffect,useState, Suspense, lazy } from 'react';
import { MdGroups } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';
import { MdGroupAdd } from "react-icons/md";





const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));
const EditGroup = () => {
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
  <div className="container pb-5  ">
      <div className="row">
          <div className="col-12 col-md-9 pt-4 ">

              <div className="pt-4 mb-5 bgg" >

                  <div>
                  <div className='row align-items-center '>
{/* Header Column */}
<div className='col-12 col-md-3'>
<h4 className="tags mx-3 d-flex display-flex-center align-item-center pt-2">
<MdGroupAdd className='text-primary' size={30} />
<span className='mx-2 pt-1'>Edit Group</span>
</h4>
</div>

{/* Empty Column for Spacing */}
<div className='col-12 col-md-3 d-none d-md-block'></div>

{/* Search and Button Column */}

</div>

                      <hr />

                      <div className='row pt-3 d-flex justify-content-center align-items-center'>
                        <div className='col-10 '>
                            <label className='fw-bold pb-2'>Author</label>
                      <input type='text' className='w-100 inp px-3 py-2' placeholder='author' />
                      </div>
                      
                      <div className='col-10 '>
                            <label className='fw-bold pt-4 pb-2'>Author UserName</label>
                      <input type='text' className='w-100 inp px-3 py-2' placeholder='author_username	' />
                      </div>
                      <div className='col-10 '>
                            <label className='fw-bold pt-4 pb-2'>Heading</label>
                      <input type='text' className='w-100 inp px-3 py-2' placeholder='heading' />
                      </div>
                      <div className='col-10 '>
                            <label className='fw-bold pt-4 pb-2'>Content<span className='text-danger'>*</span></label>
                      <textarea type='text' className='w-100 inp px-3 py-2' placeholder='content' rows={10} required ></textarea>
                      </div>
                      <div className='col-10 d-flex flex-column'>
                            <label className='fw-bold pt-4 pb-2'>Image</label>
                            
                            <input
      type='file'
      id='imageUpload'
      className='d-none w-100 inp px-3 py-2' 
    />
               <label htmlFor='imageUpload' className='w-100 inp px-3 py-2 text-center btn-12'>
      Choose Image
    </label>
                      </div>
                      <div className='col-10  pb-4'>
                            <label className='fw-bold pt-4 pb-2'>Image Url</label>
                      <input type='text' className='w-100 inp px-3 py-2' placeholder='image file' />
                      </div>
                      <div className='col-10  pb-4'>
                     <button className='w-100 p-3 btn btn-warning btn-block text-white fs-5'>Submit</button>
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

  <Footer />
</>
  )
}

export default EditGroup
