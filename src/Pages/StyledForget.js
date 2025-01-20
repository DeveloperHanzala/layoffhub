import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: start;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const FormContaienr = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;
const RightContainer = styled.div`
  width: 770px;
  margin-top: -40px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Pic = styled.img`
  width: 210px;
  height: 70px;
`;
const LeftContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 15px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Heading = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 0%;
  color: orange;
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 22px;
  }
`;
const Text = styled.p`
  max-width: 400px;
  font-size: 18px;
  font-weight: 400;
  margin: 0%;
  text-align: center;
  @media (max-width: 800px) {
    width: 100%;
    font-size: 14px;
  }
`;
const InputContainer = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
const Input = styled.input`
  width: 450px;
  border: 2px solid silver;
  padding: 0px 0px 0px 25px;
  border-radius: 8px;
  height: 65px;
  font-size: 18px;
  font-weight: 400;
  @media (max-width: 450px) {
    width: 375px;
  }
  @media (max-width: 375px) {
    width: 325px;
  }
  @media (max-width: 350px) {
    width: 290px;
  }
`;
const Button = styled.button`
  width: 450px;
  border: none;
  border-radius: 10px;
  height: 65px;
  font-size: 18px;
  cursor: pointer;
  font-weight: 400;
  background-color: orange;
  color: white;
  &:hover {
    background-color: white;
    color: orange;
    border: 1px solid orange;
  }
  @media (max-width: 450px) {
    width: 375px;
  }
  @media (max-width: 375px) {
    width: 325px;
  }
  @media (max-width: 350px) {
    width: 290px;
  }
`;

const Return = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ReturnLink = styled.a`
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  font-size: 18px;
`;
export {
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
};
