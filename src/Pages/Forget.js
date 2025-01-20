import React, { useState } from "react";
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
  Return,
  ReturnLink,
  FormContaienr,
  Button,
} from "./StyledForget";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import reset from "../Images/logo-nobackground-1000.png";

const Forget = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const user = {
        email,
      };

      console.log("Submitting user:", user);
      const response = await axios.post(
        "https://api.layoffhub.ai/api/password-reset/",
        user
      );
      console.log("Api-response", response);
      alert(response.data.message);
      setSuccess("Password reset email has been sent.");
    } catch (error) {
      setError(error.response?.data?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  const Sign_in = () => {
    navigate("/signin");
  };

  return (
    <MainContainer>
      <LeftContainer>
        <Pic src={reset} alt="Logo" />
        <TextContainer>
          <Heading>Forgot Your Password?</Heading>
          <Text>
            After You Write Your Email Address,
            <br /> We Will Send A Link To Your Given Address.
            <br />
            Click on the Link to Generate Your New Password
          </Text>
        </TextContainer>
        <FormContaienr onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <Button>{loading ? "Sending..." : "Reset Password"}</Button>
        </FormContaienr>
        <InputContainer>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
          <Return>
            <ReturnLink onClick={Sign_in}>Return to Login</ReturnLink>
          </Return>
        </InputContainer>
      </LeftContainer>
    </MainContainer>
  );
};

export default Forget;
