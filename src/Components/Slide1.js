import React, { useState } from 'react';
import { MdHelp } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";

const Slide1 = () => {
  const [visibleParagraph, setVisibleParagraph] = useState(null);

  // Handler to toggle visibility based on the index of the clicked item
  const handleHeaderClick = (index) => {
    setVisibleParagraph(visibleParagraph === index ? null : index);
  };

  return (
    <div>
      <div className='container  p-4'>
        <div className='row'>
          <div className='col-11  mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(0)} style={{ cursor: 'pointer' }}>
            < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>What is LayoffHub?</span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
            
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 0 ? 'visible' : ''}`}>
          LayoffHub is a source for what's new and popular on the web.<br/>

Users like you provide all of the content and decide, through voting, what's good and what's junk.<br/>

Links that receive community approval bubble up towards #1, so the front page is constantly in motion and (hopefully) filled with fresh, interesting links.          </p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(1)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>How can I stay anonymous on LayoffHub?
              </span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 fw-semibold bg2 paragraph ${visibleParagraph === 1 ? 'visible' : ''}`}>
          LayoffHub allows users to remain anonymous by not using personally identifiable information when creating an account. However, be cautious about sharing personal details in posts or comments. LayoffHub also has a feature to create private subLayoffHubs or message other users privately if needed.          </p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(2)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>What does it mean if a question is</span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 fw-semibold bg2 paragraph ${visibleParagraph === 2 ? 'visible' : ''}`}>
            Content for item 3. Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.
          </p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(3)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>How can I find specific content or topics on LayoffHub?</span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 3 ? 'visible' : ''}`}>
          You can find specific content or topics by using LayoffHub’s search bar, which allows you to search for keywords. Additionally, using filters such as “hot,” “new,” “rising,” and “top” can help you discover content on specific topics.          </p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(4)} style={{ cursor: 'pointer' }}>
            < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>I made a mistake in my submission title, how can I edit it?</span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 4 ? 'visible' : ''}`}>
          Submission titles cannot be edited. However, you can simply delete it and resubmit it. The sooner you do this, the less likely you will lose any votes or comments.          </p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(5)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>What can I do to get my submissions noticed?
              </span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 5 ? 'visible' : ''}`}>
          Remember that adage about not judging a book by its cover? No one actually follows it. So choose your title carefully — make it useful, provide context, and be descriptive. Be careful though, if you're too aggressive it could backfire. Phrases like, "Vote this up to spread the word!" or "AMAZING!" tend to annoy most LayoffHub Users, who will make sure your post doesn't see the light of day.          </p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(6)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>I want to change my username. Do I have to start a new account?
              </span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 6 ? 'visible' : ''}`}>
          Yes. Once a user account is created, the username cannot be edited. You can create a new user profile but cannot migrate karma, comment karma or trophies to the new username.

</p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(7)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>Is posting personal information ok?
              </span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 7 ? 'visible' : ''}`}>
          NO. LayoffHub is a pretty open and free speech place, but it is not ok to post someone's personal information, or post links to personal information. This includes links to public Facebook pages and screenshots of Facebook pages with the names still legible. We all get outraged by the ignorant things people say and do online, but witch hunts and vigilantism hurt innocent people and certain individual information, including personal info found online is often false. Posting personal information will get you banned. Posting professional links to contact a congressman or the CEO of some company is probably fine, but don't post anything inviting harassment, don't harass, and don't cheer on or vote up obvious vigilantism.

</p>
        </div>
      </div>

 {/*      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(8)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>Why is the system asking me to wait a day before asking another?</span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 8 ? 'visible' : ''}`}>
            Content for item 9. Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.
          </p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(9)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>How do I ask a good question?</span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 9 ? 'visible' : ''}`}>
            Content for item 10. Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.
          </p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(10)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>What should I do when someone answers my question?</span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 10 ? 'visible' : ''}`}>
            Content for item 11. Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.
          </p>
        </div>
      </div>

      <div className='container    p-4'>
        <div className='row'>
          <div className='col-11 mx-4 bg1 pt-3 pb-2' onClick={() => handleHeaderClick(11)} style={{ cursor: 'pointer' }}>
          < h5 className='d-flex justify-content-between align-items-center'>
              <MdHelp className='text-primary' size={25} />
              <span className='head mx-4'>What topics can I ask about here?</span>
              <IoMdArrowDropdown className='text-primary  ' size={30} />
            </ h5>
          </div>
          <p className={`col-11 mx-4 bg2 fw-semibold paragraph ${visibleParagraph === 11 ? 'visible' : ''}`}>
            Content for item 12. Questions that need additional work or that are not a good fit for this site may be put on hold by experienced community members. While questions are on hold, they cannot be answered, but can be edited to make them eligible for reopening.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Slide1;
