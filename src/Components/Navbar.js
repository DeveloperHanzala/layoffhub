import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import React, { useState, useEffect } from "react";
import img1 from "../Images/person_3_sm.jpg";
import {
  MainContainer,
  LogoContainer,
  MenuContainer,
  MenuList,
  Button,
  Button1,
  Button3,
  ButtonContanier,
  ButtonContanier1,
  Humburder,
  UserMenu,
  DropdownItem,
  DropdownMenu,
  NotificationContrainer,
  BellButton,
  Notification,
  ShowButton,
  AllNotification,
  Message,
} from "./StyledNavbar";
import { FaBell } from "react-icons/fa";
import img from "../Images/logo-nobackground-1000.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";

const Navbar = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [groups, setGroups] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [visibleNotifications, setVisibleNotifications] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const token = localStorage.getItem("access-token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const Home = () => {
    navigate("/");
  };
  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowDropdown(false);
    setIsDropdownOpen(false);
  };
  const hideMenu = () => {
    setShowMenu(false);
  };
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    setShowMenu(false);
    setIsDropdownOpen(false);
  };
  const toggleBell = () => {
    setShowDropdown(false);
    setShowMenu(false);
    setIsDropdownOpen(!isDropdownOpen);
  };


  const Signin = () => {
    navigate("/signin");
  };
  const Signup = () => {
    navigate("/signup");
  };

  const fetchNotifications = async () => {
    try {
      const response = await axios.get(
        "https://api.layoffhub.ai/api/notifications/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotifications(response.data || []);
      setVisibleNotifications(response.data.slice(0, 3));
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  const handleShowMore = () => {
    setShowAll(!showAll);
    if (showAll) {
      setVisibleNotifications(notifications.slice(0, 3));
    } else {
      setVisibleNotifications(notifications);
    }
  };

  const markAsRead = async (notificationId) => {
    try {
      await axios.patch(
        `https://api.layoffhub.ai/api/notifications/${notificationId}/`,
        { is_read: true },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setNotifications(
        notifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, is_read: true }
            : notification
        )
      );
      setVisibleNotifications(
        visibleNotifications.map((notification) =>
          notification.id === notificationId
            ? { ...notification, is_read: true }
            : notification
        )
      );
    } catch (error) {
      console.error("Error marking notification as read:", error);
    }
  };

  const fetchGroups = async () => {
    try {
      const response = await axios.get("https://api.layoffhub.ai/api/groups/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setGroups(response.data || []);
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  const handleChange = async () => {
    const user = { name, description };
    try {
      const response = await axios.post(
        "https://api.layoffhub.ai/api/groups/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("API response:", response);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const Log_Out = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername("");
    setGroups([]);
    navigate("/");
  };
  const navi = (id) => {
    navigate(`/groupdetail/${id}`);
  };
  useEffect(() => {
    if (token) {
      fetchNotifications();
      fetchGroups();
    }
  }, [token]);

  useEffect(() => {
    const storedToken = localStorage.getItem("access-token");
    const storedUsername = localStorage.getItem("username");

    if (storedToken) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
      <MainContainer>
        <LogoContainer src={img} alt="Logo" onClick={Home}></LogoContainer>
        <MenuContainer showMenu={showMenu}>
          <MenuList>
            <Link to="/" onClick={hideMenu}>
              Home
            </Link>
          </MenuList>
          <MenuList>
            <Link to="/company" onClick={hideMenu}>
              Companies
            </Link>
          </MenuList>
          <MenuList>
            <Link to="/analytics" onClick={hideMenu}>
              Analytics
            </Link>
          </MenuList>
          {!isLoggedIn ? (
            <ButtonContanier1>
              <>
                <Button3 onClick={Signin}>Sign-in</Button3>
                <Button3 onClick={Signup}>Sign-up</Button3>
              </>
            </ButtonContanier1>
          ) : (
            <span></span> // Render the username as a span element or any other HTML element you prefer
          )}
        </MenuContainer>

        <ButtonContanier>
          <NotificationContrainer>
            <BellButton
              type="button"
              onClick={toggleBell}
            >
              <FaBell />
            </BellButton>
            <Notification className="dop">
              {isDropdownOpen && (
                <AllNotification>
                  {visibleNotifications.map((notification, index) => (
                    <div
                      style={{
                        width: "100%",
                      }}
                      className={`dropdown-item ${
                        notification.is_read ? "read" : "unread"
                      }`}
                      key={index}
                      onClick={() => markAsRead(notification.id)}
                    >
                      <Message>{notification.message}</Message>
                      <p
                        style={{
                          fontSize: "smaller",
                          color: "gray",
                        }}
                      >
                        {new Date(notification.created_at).toLocaleString()}
                      </p>
                      {notification.is_read ? (
                        <span className="badge bg-success">Read</span>
                      ) : (
                        <span className="badge bg-danger">Unread</span>
                      )}
                    </div>
                  ))}
                  <ShowButton onClick={handleShowMore}>
                    {showAll ? "Show Less" : "Show More"}
                  </ShowButton>
                </AllNotification>
              )}
            </Notification>
          </NotificationContrainer>
          {isLoggedIn ? (
            <UserMenu onClick={toggleDropdown}>
              {username}
              {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
              <DropdownMenu showDropdown={showDropdown}>
                <DropdownItem>
                  <div className="row text-center">
                    <div className="col-12 flex-row">
                      <img
                        src={img1}
                        style={{ height: "10vh" }}
                        alt="Profile"
                        className="rounded-circle mr-2"
                      />
                      <p>{username}</p>
                      <DropdownItem className=" text-center text-light">
                        <Link to={"/userprofile"} className="btn btn-primary">
                          Profile
                        </Link>
                      </DropdownItem>
                      
                    </div>
                  </div>
                </DropdownItem>
                <DropdownItem onClick={Log_Out} className="btn btn-primary text-white">Log-Out</DropdownItem>
              </DropdownMenu>
            </UserMenu>
          ) : (
            <>
              <Button onClick={Signin}>Sign-in</Button>
              <Button1 onClick={Signup}>Sign-up</Button1>
            </>
          )}
          <Humburder>
            <GiHamburgerMenu onClick={toggleMenu} />
          </Humburder>
        </ButtonContanier>
      </MainContainer>
    </>
  );
};

export default Navbar;
