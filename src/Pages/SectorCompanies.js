import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { HiUserGroup, HiCurrencyDollar } from "react-icons/hi2";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {
  SectionContainer,
  IndustrySection,
  SectionHeader,
  StyledSlider,
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
  CustomArrow,
  ArrowsContainer,
} from "./StyledSectorCompanies";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Loader from "../Components/Loader";
import Footer from "../Components/Footer";

const Sector = () => {
  const [sectors, setSectors] = useState([]);
  const [companies, setCompanies] = useState({});
  const [loading, setLoading] = useState(true);
  const [visibleSectors, setVisibleSectors] = useState(10);
  const navigate = useNavigate();
  const sliderRefs = useRef({});

  useEffect(() => {
    const fetchSectorsAndCompanies = async () => {
      try {
        const sectorResponse = await axios.get(
          "https://api.layoffhub.ai/api/industries_sectors"
        );
        let sectorData = sectorResponse.data.map((sector) => ({
          ...sector,
          sector: sector.sector.replace(/\//g, "-"),
        }));

        const uniqueSectors = Array.from(
          new Set(sectorData.map((sector) => sector.sector))
        ).map((sectorName) =>
          sectorData.find((sector) => sector.sector === sectorName)
        );

        setSectors(uniqueSectors);

        const companyResponses = await Promise.all(
          uniqueSectors.map((sector) =>
            axios.get(
              `https://api.layoffhub.ai/api/company_by_sector/${sector.sector}/`
            )
          )
        );

        const companiesBySector = uniqueSectors.reduce((acc, sector, idx) => {
          acc[sector.sector] = companyResponses[idx].data;
          return acc;
        }, {});

        setCompanies(companiesBySector);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchSectorsAndCompanies();
  }, []);

  const handleLoadMore = () => {
    setVisibleSectors((prevVisibleSectors) => prevVisibleSectors + 10);
  };

  const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          infinite: true,
        },
      },
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Loading = () => loading && <div><Loader/></div>;

  const handlePrevClick = (sector) => {
    if (sliderRefs.current[sector]) {
      sliderRefs.current[sector].slickPrev();
    }
  };

  const handleNextClick = (sector) => {
    if (sliderRefs.current[sector]) {
      sliderRefs.current[sector].slickNext();
    }
  };

  return (
    <>
      <Navbar />
      <Loading />
      <SectionContainer>
        {sectors.slice(0, visibleSectors).map((sector) => (
          <IndustrySection key={sector.id}>
            <SectionHeader>{sector.sector}</SectionHeader>
            <StyledSlider
              {...sliderSettings}
              ref={(slider) => (sliderRefs.current[sector.sector] = slider)}
            >
              {companies[sector.sector]?.map((company) => (
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
            </StyledSlider>
            <ArrowsContainer>
            <CustomArrow onClick={() => handlePrevClick(sector.sector)}>
                <FaArrowLeft />
              </CustomArrow>
              <CustomArrow onClick={() => handleNextClick(sector.sector)}>
                <FaArrowRight />
              </CustomArrow>
              
            </ArrowsContainer>
          </IndustrySection>
        ))}
        {visibleSectors < sectors.length && (
          <LoadMoreButton onClick={handleLoadMore}>
            View More Industries
          </LoadMoreButton>
        )}
      </SectionContainer>

      <Footer/>
    </>
  );
};

export default Sector;
