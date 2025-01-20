import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import img1 from "../Images/logo-nobackground-1000.png";
import { Spinner } from "react-bootstrap";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // Loader state
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true); // Show loader
    setMsg(""); // Reset message state

    try {
      const user = { username, password };
      console.log("Submitting user:", user);

      const loginResponse = await axios.post(
        "https://api.layoffhub.ai/api/login/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Login Response:", loginResponse.data);

      const token = loginResponse.data.access;

      if (token) {
        localStorage.setItem("access-token", token);
        localStorage.setItem("username", loginResponse.data.username);

        setMsg("Login success.");
        navigate("/");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMsg("Invalid username or password. Please try again.");
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
        <div className="col-lg-5">
          <div className="card-body p-md-5 mx-md-4">
            <div className="text-center">
              <img src={img1} alt="Logo" style={{ height: "10vh" }} />
            </div>
            <form
              className="p-5 mt-4"
              style={{ boxShadow: "5px 5px 20px black", borderRadius: "5px" }}
              onSubmit={handleLogin}
            >
              <h2 className="text-primary text-center mb-4">Sign In</h2>
              <div className="form-outline mb-4">
                <label
                  className="form-label text-primary"
                  htmlFor="form2Example11"
                >
                  Username / Email
                </label>
                <input
                  type="text"
                  id="form2Example11"
                  className="form-control"
                  placeholder="Enter Username or Email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-outline mb-4">
                <label
                  className="form-label text-primary"
                  htmlFor="form2Example22"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="form2Example22"
                  className="form-control"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="text-center pt-1 mb-3 pb-1">
                <button
                  className="btn btn-warning text-white btn-block mb-4 w-100"
                  type="submit"
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
                    "Continue"
                  )}
                </button>
                {msg && (
                  <div
                    className={`alert ${
                      msg.includes("success") ? "alert-success" : "alert-danger"
                    }`}
                    role="alert"
                  >
                    {msg}
                  </div>
                )}
                <div style={{ marginTop: "20px" }}>
                  <Link
                    to="/forget_password"
                    className="text-primary"
                    style={{ textDecoration: "none" }}
                  >
                    Forgot password?
                  </Link>
                </div>
                <hr />
              </div>
              <div className="d-flex align-items-center justify-content-center pt-3">
                <p className="mb-0 me-2">Don't have an account?</p>
                <Link
                  to={"/signup"}
                  className="text-primary"
                  style={{ textDecoration: "none" }}
                >
                  Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
