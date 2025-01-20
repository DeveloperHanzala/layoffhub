import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CardContainer,
  CompanyData,
  CompnayPic,
  CompnayName,
  CompnaySector,
  NameHolder,
  DetailButton,
  Data,
  Name,
  Icon,
  Title,
  Number,
  Threds,
  ThreadsComtainer,
} from "./StyledCompanyCard";
import { HiUserGroup, HiCurrencyDollar } from "react-icons/hi2";

const CompanyCard = ({ company }) => {
  const navigate = useNavigate();

  return (
    <CardContainer key={company.id}>
      <CompanyData>
        <CompnayPic src={company.picture} alt="Company Logo" />
        <NameHolder>
          <CompnayName>{company.name}</CompnayName>
          <CompnaySector>{company.sector}</CompnaySector>
        </NameHolder>
      </CompanyData>
      <ThreadsComtainer>
        <Threds>Total Threads: {company.threads}</Threds>
      </ThreadsComtainer>
   
   
      <DetailButton onClick={() => navigate(`/${company.name}`)}>
      View Company
      </DetailButton>
    </CardContainer>
  );
};

export default CompanyCard;
