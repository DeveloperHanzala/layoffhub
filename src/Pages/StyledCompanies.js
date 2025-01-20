import styled from "styled-components";

export const MainContainer1 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContantHolder = styled.div`
  width: 90%;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
`;
export const Button = styled.button`
  width: 190px;
  height: 50px;
  background-color: orange;
  color: white;
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: white;
    color: orange;
    border: 1px solid orange;
  }
  @media (max-width: 750px) {
    width: 150px;
    height: 40px;
    font-size: 14px;
  }
`;

export const HeadingContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  @media (max-width: 750px) {
    justify-content: end;
    gap: 10px;
  }
`;

export const Heading = styled.h1`
  font-weight: 500;
  font-size: 28px;
  margin: 0%;
  @media (max-width: 750px) {
    font-size: 22px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 8px;
  border: 1px solid black;
  @media (max-width: 400px) {
    padding: 5px 5px;
  }
`;
export const PagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 20px;
  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const Icon = styled.div`
  font-size: 18px;
  color: black;
  @media (max-width: 400px) {
    font-size: 16px;
  }
`;

export const Seachbar = styled.input`
  width: 300px;
  border: none;
  font-size: 18px;
  padding-left: 5px;
  &:active {
    border: none;
    outline: none;
  }
  &:focus {
    border: none;
    outline: none;
  }
  @media (max-width: 700px) {
    width: 250px;
  }
  @media (max-width: 400px) {
    width: 200px;
    font-size: 16px;
  }
`;

export const CompnayDetail = styled.div`
  width: 100%;
  min-height: 50px;
  display: flex;
  gap: 30px;
  border-bottom: 1px solid black;
  padding: 0px;
  margin: 0px;
  @media (max-width: 610px) {
    gap: 0px;
  }
`;


export const NumberContainer = styled.div`
  width: 70px;
  min-height: 50px;
  font-size: 28px;
  color: white;
  background-color: #1376f8;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContextContainer = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 610px) {
    flex-wrap: wrap;
    flex-direction: column;
    gap: 10px;
  }
`;

export const DetailButton = styled.button`
  width: 170px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1376f8;
  color: white;
  border: none;
  border-radius: 8px;
  &:hover {
    background-color: white;
    color: #1376f8;
    border: 1px solid #1376f8;
  }
`;

export const CompanyData = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const CompnayPic = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 20%;
  object-fit: cover;
`;
export const NameHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 5px;
  width: 320px;
  @media (max-width: 750px) {
    width: 250px;
  }
  @media (max-width: 650px) {
    width: 200px;
  }
  @media (max-width: 610px) {
    width: 250px !important;
  }
  @media (max-width: 400px) {
    width: 200px !important;
  }
  @media (max-width: 350px) {
    width: 150px !important;
  }
`;

export const CompnayName = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin: 0%;
`;
export const CompnaySector = styled.p`
  font-weight: 500;
  font-size: 10px;
  color: #888888;
  margin: 0%;
`;