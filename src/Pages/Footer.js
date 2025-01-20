import React from "react";
import img from "../Images/logo-nobackground-1000.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleExternalLinkClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className=" mt-3 bgggg">
        <footer className="bg-light text-center ">
          <div className="container p-4 pb-2">
            <section className="mb-4 ">
              <Link to={"/home"} className="m-1 mx-4 text1">
                Home
              </Link>
              <Link to={"/company"} className="m-1 text1">
                Companies
              </Link>
              <Link to={"/apx"} className="m-1 text1">
                Sector Companies
              </Link>
              <Link to={"/analytics"} className="m-1 mx-4 text1">
                Analytics
              </Link>
              <Link to={"/termandcondition"} className="m-1 text1">
                Terms and Conditions
              </Link>
              {/* <Link to={'/tags'} className="m-1 mx-4 text1">Tags</Link>
      
      <Link to={'/help'} className="m-1 mx-4 text1">Help</Link> */}
            </section>
            <Link
              to="#"
              onClick={() =>
                handleExternalLinkClick(
                  "https://www.facebook.com/profile.php?id=61564318528455"
                )
              }
            >
              <FaFacebook
                size={35}
                style={{ color: "blue" }}
                className="mx-2"
              />
            </Link>
            <Link
              to="#"
              onClick={() =>
                handleExternalLinkClick(
                  "https://www.linkedin.com/company/layoffhub/?viewAsMember=true"
                )
              }
            >
              <FaLinkedin
                size={35}
                style={{ color: "blue" }}
                className="mx-2"
              />
            </Link>
            <Link
              to="#"
              onClick={() =>
                handleExternalLinkClick("https://www.instagram.com/layoffhub")
              }
            >
              <FaInstagram
                size={35}
                style={{ color: "rgba(255, 0, 0, 0.63)" }}
                className="mx-2"
              />
            </Link>
            <Link
              to="#"
              onClick={() => handleExternalLinkClick("https://x.com/layoffhub")}
            >
              <FaXTwitter size={35} color="black" className="mx-2" />
            </Link>
          </div>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            <img src={img} className="img1" />
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
