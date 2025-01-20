import React from "react";
import img from "../Images/logo-nobackground-1000.png";
import Face from "../Images/S1.png";
import Insta from "../Images/S2.png";
import Linked from "../Images/S3.png";
import Twitter from "../Images/S4.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
const IconDiv = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
  }
  a {
    &:hover {
      padding-bottom: 5px;
      border-bottom: 1px solid blue;
    }
  }
`;
const IconImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const Footer = () => {
  return (
    <>
      <div className=" mt-3 ">
        <footer className="bg-light text-center ">
          <div className="p-4 pb-2">
            <section className="mb-4 bgggg">
              <div>
                <img src={img} className="img1" />
              </div>
              <LinkContainer>
                <Link to={"/"} className="m-1 mx-4 text1">
                  Home
                </Link>
                <Link to={"/company"} className="m-1  text1">
                  Companies
                </Link>
              
                <Link to={"/analytics"} className="m-1 mx-4 text1">
                  Analytics
                </Link>
                <Link to={"/userpolicy"} className="m-1  text1">
                  Privacy Policy
                </Link>
                <Link to={"/termandcondition"} className="m-1 mx-4   text1">
                  Terms and Conditions
                </Link>
              </LinkContainer>
              {/* <Link to={'/tags'} className="m-1 mx-4 text1">Tags</Link>
      
      <Link to={'/help'} className="m-1 mx-4 text1">Help</Link> */}
              <IconDiv>
                <Link
                  to="https://www.facebook.com/profile.php?id=61564318528455"
                  target="blank"
                >
                  <IconImage src={Face} alt="facebook" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/layoffhub/?viewAsMember=true"
                  target="blank"
                >
                  <IconImage src={Linked} alt="linkedin" />
                </Link>
                <Link to="https://www.instagram.com/layoffhub" target="blank">
                  <IconImage src={Insta} alt="instagram" />
                </Link>
                <Link to="https://x.com/layoffhub" target="blank">
                  <IconImage src={Twitter} alt="instagram" />
                </Link>
              </IconDiv>
            </section>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
