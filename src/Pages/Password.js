import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  RightContainer,
  Pic,
  LeftContainer,
  TextContainer,
  Heading,
  Text,
  InputContainer,
  Input,
  Button,
} from "./StyledPassword";
import axios from "axios";
import reset from "../Images/logo-nobackground-1000.png";

const Password = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // Parse uidb64 and token from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const uidb64 = urlParams.get("uid");
  const token = urlParams.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `https://api.layoffhub.ai/api/password-reset-confirm/${uidb64}/${token}/`,
        {
          new_password: password,
          confirm_new_password: confirmPassword,
        }
      );

      setSuccess("Password has been reset successfully.");
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      setError(error.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainContainer>
      <LeftContainer>
        <Pic src={reset} alt="LoGo" />
        <TextContainer>
          <Heading>Enter New Password</Heading>
          <Text>Please enter your new strong password below:</Text>
        </TextContainer>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <Input
              type="password"
              placeholder="New Password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            <Input
              type="password"
              placeholder="Confirm New Password"
              name="confirm_password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
            <Button>{loading ? "Updating..." : "Update Password"}</Button>
          </InputContainer>
        </form>
        <InputContainer>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </InputContainer>
      </LeftContainer>
    </MainContainer>
  );
};

export default Password;
