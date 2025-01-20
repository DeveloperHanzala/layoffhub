import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './SidebarAnalytics';


const Warn = () => {
  return (
    <>
    <Navbar />
    <div className="analytics-container">

      <div className="content-container">
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          
        
      </div>
    </div>

  </div >
    <Footer />
   </>
  )
}

export default Warn
