import React, { useState, useEffect } from "react";
import img from "../Images/person_3_sm.jpg";
import img1 from "../Images/LOGO-01.png";
import { MdEmail } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaRegQuestionCircle } from "react-icons/fa";
import { MdQuestionAnswer } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import styled from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import {
  Humburder,SideBarCon,ButtonDiv,SidebarContainer

} from "./StyledNavbar";
const MainContainer = styled.div`
width:100%;
display:flex;
flex-direction:column;
`
const SideBar = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const token = localStorage.getItem("access-token");
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          "https://api.layoffhub.ai/api/profile/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userData = response.data;
        console.log("Fetched User Data:", userData);
        setFirstName(userData.user.first_name);
        setLastName(userData.user.last_name);
        setUserName(userData.user.username);
        setPhone(userData.user.phone);
        setAddress(userData.user.address);
        setCountry(userData.user.country);
        setState(userData.user.state);
        setZip(userData.user.zip_code);
        setEmail(userData.user.email);

        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("User Name:", userName);
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchUserProfile();
  }, [token]);

  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };

  return (
    <>
    <MainContainer style={{ height: "auto" }}>
    <Humburder>
<GiHamburgerMenu onClick={toggleMenu}/>
    </Humburder>
    <SideBarCon showMenu={showMenu}>
      <SidebarContainer>
      <div className="row auto-height-div">
        <div className="col-12 bg-black">
          <div className="d-flex justify-content-center align-item-center">
            <Link className="" to={"/"}>
              <img src={img1} style={{ height: "10vh" }} />
            </Link>
          </div>
          <div className="d-flex justify-content-center align-item-center py-3">
            <img
              src={img}
              className="rounded-circle border-white my-4"
              style={{ height: "20vh" }}
            />
          </div>
          <div className="d-flex justify-content-center align-item-center">
            <h4 className="text-white">{userName}</h4>
          </div>
          <div className="d-flex justify-content-center  align-item-center">
            <div className="flex-column ">
              <p className="text-white mx-2 d-flex flex-column flex-md-row align-items-center">
                <MdEmail size={20} color="white" className="me-1" />
                {email}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center align-item-center flex-column my-4">
            <NavLink
              to="/userprofile"
              className={`btnn19 mx-1 prof    bg-transparent w-100 ${
                activeButton === "profile" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("profile")}
            >
              <h5 className=" fw-bold d-flex my-2 justify-content-center  align-items-center ">
                <IoMdPerson className="mx-3" size={20} />
                Profile
              </h5>
            </NavLink>
            <NavLink
              to="/question"
              className={`btnn19 mx-2 ques  bg-transparent w-100 ${
                activeButton === "questions" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("questions")}
            >
              <h5 className="fw-bold my-2  d-flex justify-content-center align-items-center ">
                <FaRegQuestionCircle  className="mx-3"size={20} /> Discussions
              </h5>
            </NavLink>
            <NavLink
              to="/ans"
              className={`btnn19 mx-1 answ bg-transparent w-100 ${
                activeButton === "answers" ? "active" : ""
              }`}
              onClick={() => handleButtonClick("answers")}
            >
              <h5 className="fw-bold my-2 d-flex justify-content-center align-items-center">
                <MdQuestionAnswer className="mx-3" size={20} /> 
                Replies
              </h5>
            </NavLink>
          </div>
        </div>
      </div>
      </SidebarContainer>
      <ButtonDiv>
      <RxCross2 onClick={toggleMenu}/>
      </ButtonDiv>
    </SideBarCon>
    </MainContainer>
    </>
  );
};

export default SideBar;