import styled from "styled-components";
import Slider from "react-slick";

export const MainContainer = styled.div``;
export const SectionContainer1 = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
 
`;


// Container for the whole section
export const SectionContainer = styled.div`
  padding: 20px;
  overflow: hidden;
`;

// Container for each industry section
export const IndustrySection = styled.div`
  margin-bottom: 40px;
`;

// Header of each industry section
export const SectionHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;
export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;
export const CustomArrow = styled.button`
  background: transparent;
  border: none;
  color: #000;
  font-size: 24px;
  cursor: pointer;
  z-index: 1;

  &:hover {
    color: #555;
  }
`;
// Card content, e.g., company name, size, revenue
export const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const CardInfo = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

// Styled component for the slider
export const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
  }
  .slick-slide {
    padding: 10px;
  }

  .slick-dots {
    bottom: -30px;
    display: flex !important;
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
  }
`;

export const LoadMoreButton = styled(Button)`
  display: block;
  margin: 20px auto;
`;

export const CardContainer = styled.div`
  width: 100% !important;
  height: 200px;
  display: flex !important;
  padding: 15px;
  gap: 5px;
  box-shadow: 0px 0px 5px black;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 20px;
   @media (max-width: 600px) {
  .CardContainer {
    width: 90%; /* Ensure cards are visible */
  }
     @media (max-width:499px){
   width: 320px !important;
  }
     @media (max-width:399px){
   width: 290px !important;
  }
`;
export const CompanyData = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
`;

export const CompnayPic = styled.img`
  width: 40px;
  height: 40px;
`;
export const NameHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 5px;
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

export const Data = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
`;

export const Name = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const ThreadsComtainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: left;
`;
export const Threds = styled.div`
  padding: 7px;
  display: flex;
  align-items: center;
  background-color: #ebeef1;
  color: black;
  font-size: 14px;
  border: none;
  border-radius: 8px;
`;

export const Icon = styled.div`
  font-size: 14px;
  color: #1376f8;
`;
export const Title = styled.p`
  font-size: 14px;
  margin: 0%;
`;
export const Number = styled.p`
  font-size: 14px;
  margin: 0%;
`;
