import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import Sidebar from './SidebarAnalytics';
const Heatmap = () => {
  return (
    <>
    <Navbar />
    <div className="analytics-container">

      <div className="content-container">
        <div className='row'>
          <div className='col-2'>
            <Sidebar />
          </div>
          <div className='col-10'>
            <main className="main-content">
            <iframe style={{ width: 1400, height: 1050, border: 0 }} src="https://lookerstudio.google.com/embed/reporting/fcb19fae-4fe8-49e1-9cc0-d3edfeb1e57a/page/p_mixpyzc0jd" frameborder="0"  allowfullscreen sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"></iframe>
              </main>
          </div>
        
      </div>
    </div>

  </div >
    <Footer />
   </>
  )
}

export default Heatmap
