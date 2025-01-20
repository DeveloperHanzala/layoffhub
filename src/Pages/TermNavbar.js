import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../Images/LOGO-01.png";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const MainContainer = styled.nav`
  width: 100%;
  align-items: center;
  justify-content: space-around;
  background-color: #616956;
  display: flex;
  padding: 20px 0px;
  box-shadow: 1px 1px 1px black;
  @media (max-width: 610px) {
    display: flex-box;
  }
`;
const LogoContainer = styled.img`
  width: 250px;
  height: 80px;
  cursor: pointer;
  @media (max-width: 500px) {
    width: 170px;
    height: 50px;
  }
  @media (max-width: 350px) {
    width: 150px;
    height: 40px;
  }
`;
const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin: 0%;
  padding: 0%;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const MenuList = styled.li`
  font-size: 20px;
  font-weight: 500;
  list-style: none;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      padding-bottom: 5px;
      border-bottom: 1px solid white;
    }
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
const TermNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const Home = () => {
    navigate("/");
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };

  return (
    <>
      <MainContainer>
        <MenuContainer>
          <MenuList>
            <Link to="/termandcondition" onClick={hideMenu}>
              Content Rules
            </Link>
          </MenuList>
          <MenuList>
            <Link to="/userpolicy" onClick={hideMenu}>
              Privacy Policy
            </Link>
          </MenuList>
          <MenuList>
            <Link to="/agreement" onClick={hideMenu}>
              User Agreement
            </Link>
          </MenuList>
        </MenuContainer>
      </MainContainer>
    </>
  );
};

export default TermNavbar;
