import styled from "styled-components";
export const MainContainer = styled.main`
  padding: 10px;
  max-width: 90%;
  margin: 0 auto;
`;

export const CompanyProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  @media (max-width: 900px) {
    padding-left: 50px;
  }
  @media (max-width: 425px) {
  display: flex;
  flex-direction: column;
  padding-left: 25px;
  }
  @media (max-width: 320px) {
    flex-direction: column;
    padding-left: 25px;
  }
`;
export const Data = styled.div`
  display: flex;
  align-items: start;
  margin-bottom: 20px;
  padding-left: 75px;
  flex-direction: column;
  min-height: 300px;
  border: 1px solid black;
  border-radius: 10px;
  @media (max-width: 900px) {
    padding: 10px;
  }
  @media (max-width: 500px) {
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
`;

export const CompanyLogo = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20%;
  margin-right: 20px;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompanyInfo = styled.div`
  h1 {
    font-size: 24px;
    margin: 0;
  }
  p {
    font-size: 18px;
    color: #666;
  }
`;

export const FiltersContainer = styled.div`
  margin-bottom: 20px;
`;

export const FilterTabs = styled.div`
  display: flex;
  padding-left: 70px;
  border-bottom: 2px solid #ddd;
  @media (max-width: 1000px) {
    text-align: center;
  }
  @media (max-width: 800px) {
    padding-left: 0px;
    font-size: small;
    text-align: center;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const Tab = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  border-bottom: ${(props) => (props.active ? "2px solid #007bff" : "none")};
  @media (max-width: 450px) {
    padding: 2px 2px;
  }
`;
export const ButtonHolder = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
`;
export const SortBy = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const SortHeading = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin: 0%;
`;
export const SortButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 5px;
  border: ${(props) => (props.active ? "none" : "1px solid #888888")};
  color: ${(props) => (props.active ? "white" : "#888888")};
  background-color: ${(props) => (props.active ? "#007bff" : "white")};
`;

export const DiscussionList = styled.div`
  margin-top: 20px;
`;

export const DiscussionItem = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 4px;
  background-color: #f9f9f9;
`;

export const DiscussionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const AuthorProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.span`
  font-weight: bold;
  margin-right: 10px;
`;

export const TimeStamp = styled.span`
  color: #999;
`;

export const DiscussionContent = styled.div`
  margin-bottom: 10px;
  h2 {
    font-size: 20px;
    margin: 0;
  }
  p {
    font-size: 16px;
    color: #333;
  }
`;

export const CommunityInfo = styled.div`
  margin-top: 10px;
  p {
    font-size: 16px;
    color: #555;
  }
`;

export const CompanyList = styled.div`
  margin-top: 10px;
  h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: 16px;
      color: #333;
    }
  }
`;

export const SectorList = styled.div`
  margin-top: 10px;
  h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: 16px;
      color: #333;
    }
  }
`;

export const TagList = styled.div`
  margin-top: 10px;
  h3 {
    font-size: 18px;
    margin-bottom: 5px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      font-size: 16px;
      color: #333;
    }
  }
`;

export const DiscussionFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionButton = styled.button`
  background-color: ${(props) => (props.primary ? "#007bff" : "#ddd")};
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#ccc")};
  }
`;

export const AskQuestionButton = styled.button`
  background-color: orange;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  
  font-size: 16px;
  &:hover {
    background-color: #218838;
  }
`;

export const AskQuestionModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height:95vh;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
 @media (max-width:520px){
  top: 57%;
   height: 105vh;
  width: 100%;

  }
  `;

export const ModalHeader = styled.h2`
  margin-top: 0;
`;

export const ModalContent = styled.div`
  margin-bottom: 100px;
  
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
   @media (max-width:430px){
    margin-left:10%;

  }
`;

export const CloseButton = styled.button`
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 0px 7px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px;
  font-size: 26px;
  position: absolute;
  right: 0;
  &:hover {
    background: #c82333;
  }
`;

export const SubmitButton = styled.button`
  background: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
 
  
`;
export const AskQuestionModal1 = styled.div`
  position: absolute;
  top: 65%;
  left: 50%;
  width: 100%;
  height: 820%;
  transform: translate(-50%, -50%);
       background: rgba(255, 255, 255, 0.5); /* Semi-transparent background */
            backdrop-filter: blur(10px); /* Apply blur effect */
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  
`;