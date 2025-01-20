import styled from "styled-components";
export const CardContainer = styled.div`
  width: 350px;
  height: 200px;
  display: flex;
  padding: 15px;
  gap: 5px;
  box-shadow: 0px 0px 5px black;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: linear-gradient(to bottom, blue 29%, transparent 30%) left / 2px 100% no-repeat;

  border-radius: 5px;
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
