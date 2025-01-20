import React, { useState, useEffect } from "react";
import axios from "axios";
import { HiUserGroup, HiCurrencyDollar } from "react-icons/hi2";
import {
  SectionContainer1,
  LoadMoreButton,
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
  MainContainer,
} from "./StyledSectorCompanies";
import { useNavigate } from "react-router-dom";

const Similar = () => {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleSectors, setVisibleSectors] = useState(10);
  const navigate = useNavigate();
  const sector = localStorage.getItem("Sector");

  useEffect(() => {
    const fetchSectorsAndCompanies = async () => {
      try {
        const response = await axios.get(
          `https://api.layoffhub.ai/api/company_by_sector/${sector}/`
        );
        setCompanies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchSectorsAndCompanies();
  }, [sector]);

  const handleLoadMore = () => {
    setVisibleSectors((prevVisibleSectors) => prevVisibleSectors + 10);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainContainer>
        <SectionContainer1>
          {companies.slice(0, visibleSectors).map((company) => (
            <CardContainer key={company.id}>
              <CompanyData>
                <CompnayPic src={company.picture} alt="Company Logo" />
                <NameHolder>
                  <CompnayName>{company.clean_name}</CompnayName>
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
          ))}
        </SectionContainer1>
        {visibleSectors < companies.length && (
          <LoadMoreButton onClick={handleLoadMore}>
            View More Industries
          </LoadMoreButton>
        )}
      </MainContainer>
    </>
  );
};

export default Similar;
