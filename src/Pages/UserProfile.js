import React, { useState, useEffect, useRef } from "react";
import SideBar from "../Components/SideBar";
import { IoMdPerson } from "react-icons/io";
import { BsCcCircle } from "react-icons/bs";
import img from "../Images/person_3_sm.jpg";
import axios from "axios";

const UserProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralUrl, setReferralUrl] = useState(""); // State for referral URL
  const [referralpoint, setReferralPoint] = useState(""); // State for referral URL
  const token = localStorage.getItem("access-token");
  const referralUrlRef = useRef(null);

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
        localStorage.setItem("UserID", userData.user.id);
        setFirstName(userData.user.first_name);
        setLastName(userData.user.last_name);
        setUserName(userData.user.username);
        setPhone(userData.user.phone);
        setAddress(userData.user.address);
        setCountry(userData.user.country);
        setState(userData.user.state);
        setZip(userData.user.zip_code);
        setEmail(userData.user.email);

        // Log state to verify it's being set
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("User Name:", userName);
      } catch (error) {
        console.error("Error fetching user profile data:", error);
      }
    };

    fetchUserProfile();
  }, [token, firstName, lastName, userName]);

  useEffect(() => {
    const fetchReferralUrl = async () => {
      try {
        const response = await axios.get(
          "https://api.layoffhub.ai/api/refer/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const referralData = response.data;
        console.log("Fetched Referral Data:", referralData);
        setReferralUrl(referralData.referral_url); // Update state with referral URL
        setReferralPoint(referralData.referral_points); // Update state with referral URL
      } catch (error) {
        console.error("Error fetching referral URL:", error);
      }
    };

    fetchReferralUrl();
  }, [token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const userdata = {
      username: userName,
      first_name: firstName,
      last_name: lastName,
      current_password: currentPassword,
      new_password: password,
      confirm_new_password: confirmPassword,
      address,
      phone,
      country,
      state,
      zip_code: zip,
    };

    try {
      const result = await axios.put(
        "https://api.layoffhub.ai/api/profile/update/",
        userdata,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("API Response:", result);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  const handleCopyClick = () => {
    if (referralUrlRef.current) {
      referralUrlRef.current.select();
      referralUrlRef.current.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text to the clipboard
      try {
        document.execCommand('copy');
        alert('Referral URL copied to clipboard!');
      } catch (err) {
        console.error('Failed to copy referral URL: ', err);
      }
    }
  };

  return (
    <div className="col-lg-12 col-md-12 d-flex flex-row user-profile-container">
      <div style={{width:"100%"}}>
        
        <SideBar />
      </div>
      <div className="main-content col-lg-8 col-md-6">
        <div className="container">
          <div className="col-12">
            <h2 className="pt-5 d-flex align-items-center justify-content-center gap-10px">
              <IoMdPerson color="rgb(0, 102, 255)" size={35} className="mx-2" />
              <span>{userName}</span> Profile
            </h2>
          </div>
          <div className="col-12 col-md-3"></div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div className="col-12 col-md-3 d-flex justify-content-center">
              <img
                src={img}
                className="rounded-circle border border-primary my-5"
                style={{ height: "30vh" }}
                alt="Profile"
              />
            </div>
            <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
              <button className="rounded-pill border border-primary bg-transparent px-3">
                <h3>
                  <span className="text-warning">{referralpoint}</span> Points
                </h3>
              </button>
            </div>
            <div className="col-12">
              <section className="get-in-touch">
                <form
                  className="contact-form row"
                  style={{ flexWrap: "wrap", display: "flex" }}
                  onSubmit={handleSubmit}
                >
                  <div className="form-field col-12 col-lg-12">
                    <span className="fs-5">Your Referral Code: </span>
                    <input
                      type="text"
                      ref={referralUrlRef}
                      value={referralUrl}
                      readOnly
                      style={{ width: '68%', padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
                    />
                    <button
                      onClick={handleCopyClick}
                      style={{
                        marginLeft: '10px',
                        padding: '8px 16px',
                        border: 'none',
                        borderRadius: '4px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      Copy
                    </button>
                  </div>
                  {/* Other form fields */}
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="firstName"
                      className="input-text js-input"
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                    <label htmlFor="firstName" style={{ color: "#1376f8" }}>
                      First Name
                    </label>
                  </div>
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="lastName"
                      className="input-text js-input"
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                    <label htmlFor="lastName" style={{ color: "#1376f8" }}>
                      Last Name
                    </label>
                  </div>
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="userName"
                      className="input-text js-input"
                      type="text"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                    />
                    <label style={{ color: "#1376f8" }} htmlFor="userName">
                      User Name
                    </label>
                  </div>
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="oldpassword"
                      className="input-text js-input"
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                    />
                    <label htmlFor="oldpassword" style={{ color: "#1376f8" }}>
                      Old Password
                    </label>
                  </div>
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="newpassword"
                      className="input-text js-input"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label style={{ color: "#1376f8" }} htmlFor="newpassword">
                      New Password
                    </label>
                  </div>
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="confirmpassword"
                      className="input-text js-input"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label
                      style={{ color: "#1376f8" }}
                      htmlFor="confirmpassword"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="form-field col-12">
                    <input
                      id="email"
                      className="input-text js-input"
                      type="email"
                      value={email}
                      readOnly
                    />
                    <label style={{ color: "#1376f8" }} htmlFor="email">
                      E-mail
                    </label>
                  </div>
                  <div className="form-field col-12">
                    <input
                      id="address"
                      className="input-text js-input"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                    <label style={{ color: "#1376f8" }} htmlFor="address">
                      Address
                    </label>
                  </div>
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="phone"
                      className="input-text js-input"
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                    <label style={{ color: "#1376f8" }} htmlFor="phone">
                      Phone
                    </label>
                  </div>
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="country"
                      className="input-text js-input"
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                    <label style={{ color: "#1376f8" }} htmlFor="country">
                      Country
                    </label>
                  </div>
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="state"
                      className="input-text js-input"
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      required
                    />
                    <label style={{ color: "#1376f8" }} htmlFor="state">
                      State
                    </label>
                  </div>
                  <div className="form-field col-12 col-lg-6">
                    <input
                      id="zip"
                      className="input-text js-input"
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      required
                    />
                    <label style={{ color: "#1376f8" }} htmlFor="zip">
                      Zip Code
                    </label>
                  </div>
                  <div className="form-field col-12 d-flex justify-content-center align-items-center">
                    <input
                      className="submit-btn btn btn-outline-primary btn-lg w-50"
                      type="submit"
                      value="Save"
                    />
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
