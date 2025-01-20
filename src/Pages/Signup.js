import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../Images/logo-nobackground-1000.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
const [reffer, setReffer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    // Field validation
    if (!userName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/g.test(password)) {
      setError(
        `Password must contain at least one special character.\nAnd Password should be at least 8 characters long.`
      );

      setLoading(false);
      return;
    }

    const user = {
      first_name: firstName,
      last_name: lastName,
      username: userName,
      email,
      password,
      confirm_password: confirmPassword,
      agreement,
      referred_by_code: reffer,
    };

    try {
      const result = await axios.post(
        "https://api.layoffhub.ai/api/signup/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("User signed up successfully:", result.data);
      navigate("/signin");
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.response && error.response.status === 400) {
        const errorMessage =
          error.response.data.username?.[0] || error.response.data.email?.[0];
        setError(errorMessage || "Error signing up");
      } else {
        setError("Error signing up. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          width: "80%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="card rounded-3 text-black">
          <div className="col-lg-12">
            <div className="card-body p-md-5 mx-md-4">
              <div className="text-center">
                <img
                  src={img1}
                  alt="Logo"
                  style={{ height: "10vh", width: "250px" }}
                />
              </div>

              <form
                className="p-5 mt-4 "
                style={{
                  boxShadow: "5px 5px 20px black",
                  borderRadius: "5px",
                }}
                onSubmit={handleSubmit}
              >
                <h2 className="text-primary text-center mb-4">Sign up</h2>

                <div
                  className="row mb-4"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    className="col-md-6  col-sm-12"
                    style={{
                      display: "flex",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <label
                      className="form-label text-primary "
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      name="firstname"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div
                    className=" col-md-6 col-sm-12"
                    style={{
                      display: "flex",
                      alignItems: "start",
                      flexDirection: "column",
                    }}
                  >
                    <label
                      className="form-label text-primary"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      name="lastname"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label text-primary" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label text-primary" htmlFor="email">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-primary" htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="form-label text-primary"
                    htmlFor="confirm_password"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="form-label text-primary"
                    htmlFor="referral_url"
                  >
                    Referral Code
                  </label>
                  <input
                    
                    id="referral_url"
                    name="referral_url"
                    className="form-control"
                    value={reffer}
                    onChange={(e) => setReffer(e.target.value)}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="terms"
                    name="agreements"
                    value={agreement}
                    onChange={(e) => setAgreement(e.target.value)}
                  />
                  <label
                    htmlFor="terms"
                    style={{
                      display: "flex",
                      gap: "5px",
                      alignItems: "center",
                    }}
                  >
                    Accept
                    <Link
                      to={"/termandcondition"}
                      style={{ textDecoration: "none" }}
                    >
                      Terms and Condition
                    </Link>
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-warning text-white btn-block mb-4 w-100"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : (
                    "Create Account"
                  )}
                </button>
                {error && (
                  <div className="alert alert-danger" role="alert">
                    {error}
                  </div>
                )}

                <hr />
                <p className="text-center">
                  Already have an account?{" "}
                  <Link to={"/signin"} style={{ textDecoration: "none" }}>
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
