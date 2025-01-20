import React, { useEffect,useState, Suspense, lazy } from 'react';
import { MdGroups } from 'react-icons/md';
import { FaTags } from 'react-icons/fa';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import HomeSlid2 from '../Components/HomeSlid2';
import axios from 'axios';
import Sidebar2 from '../Components/Sidebar2';

const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));

const MsgAns = () => {
    const [activeComponent, setActiveComponent] = useState('Popular'); // Manage which component to show

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
      <div className="container">
        <div className="row">
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
            <div className="div2 mb-5">
              <div>
              <HomeSlid2/>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-3 pt-4">
           <Sidebar2/>
          </div>
        </div>
      </div>
      <Footer />
      
    </>
  )
}

export default MsgAns
