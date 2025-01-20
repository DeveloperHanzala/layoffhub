import React, { useState, useEffect, Suspense, lazy } from "react";
import styled from "styled-components";
import { PiBuildingApartmentFill } from "react-icons/pi";
import axios from "axios";
import Loader from "../Components/Loader";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CompanyCard = lazy(() => import("./CompanyCard"));

const CompanyContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
 
  padding: 0px;
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const SearchContainer = styled.div`
  padding-left: 20px;
  width: 400px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
    @media (max-width:375px){
   width: 320px !important;
  }
    @media (max-width:435px){
   width: 270px !important;
  }
      @media (max-width:320px){
   width: 240px !important;
  }
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  font-size: 16px;
  border: none;
  outline: none;
  
`;

const CardHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ButtonHolder = styled.div`
  width: 95%;
  margin-bottom: 20px;
  justify-content: end;
  align-items: end;
  flex-direction: column;
  gap: 15px;
  display: flex;
   @media (max-width:520px){
   width: 90%;
   margin-left:30px;
  }
     @media (max-width:430px){
   width: 50% !important;
   margin-left:140px !important;
  }
    @media (max-width:399px){
   width: 85% !important;
   margin-left:30px !important;
  }
 
`;

const FilterButton = styled.button`
  width: 400px;
  height: 40px;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #888888;
  color: white;
    @media (max-width:425px){
   width: 320px !important;

   
  }
    @media (max-width:435px){
    width: 270px !important;
   
  }
  @media (max-width:320px){
   width: 240px !important;
  }
`;

const PageButton = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  border: none;
  border-radius: 3px;
  background-color: ${(props) => (props.active ? "#007bff" : "#ccc")};
  color: white;
  cursor: pointer;
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const Company = () => {
  const [companies, setCompanies] = useState([]);
  const [visibleCompanies, setVisibleCompanies] = useState(50); // Number of companies to show at a time
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const [itemsPerPage] = useState(12); // Items per page
  const navigate = useNavigate();

  const Filter = () => {
    navigate("/apx");
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://api.layoffhub.ai/api/companies/"
      );
      setCompanies(response.data || []);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false);
    }
  };

  const loadMoreCompanies = () => {
    setVisibleCompanies((prev) => prev + 50);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setVisibleCompanies(50); // Reset to the initial number of visible companies
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);

  const currentCompanies = filteredCompanies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageButtons = [];

    if (currentPage > 1) {
      pageButtons.push(
        <PageButton key="prev" onClick={() => goToPage(currentPage - 1)}>
          Previous
        </PageButton>
      );
    }

    pageButtons.push(
      <PageButton
        key={1}
        active={currentPage === 1}
        onClick={() => goToPage(1)}
      >
        1
      </PageButton>
    );

    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    if (startPage > 2) {
      pageButtons.push(<span key="ellipsis1">...</span>);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <PageButton
          key={i}
          active={currentPage === i}
          onClick={() => goToPage(i)}
        >
          {i}
        </PageButton>
      );
    }

    if (endPage < totalPages - 1) {
      pageButtons.push(<span key="ellipsis2">...</span>);
    }

    if (totalPages > 1) {
      pageButtons.push(
        <PageButton
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => goToPage(totalPages)}
        >
          {totalPages}
        </PageButton>
      );
    }

    if (currentPage < totalPages) {
      pageButtons.push(
        <PageButton key="next" onClick={() => goToPage(currentPage + 1)}>
          Next
        </PageButton>
      );
    }

    return pageButtons;
  };

  return (
    <>
      <Navbar />
      <div className="mamaaa pb-5">
        <div className="row mdi pt-5">
          <div className="col-12 bgg">
            <div className="pt-4 mb-5">
              <div className="row align-items-center">
                <div className="col-12">
                  <div className="col-md-12">
                   
                  </div>
                  <ButtonHolder>
                    <SearchContainer>
                      <FaSearch size={20} />
                      <SearchInput
                        type="text"
                        placeholder="Search Companies"
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                    </SearchContainer>
                    <FilterButton onClick={Filter}>
                      Filter By Industries
                    </FilterButton>
                  </ButtonHolder>

                  {loading ? (
                    <Loader />
                  ) : (
                    <>
                      <CardHolder>
                        <Suspense fallback={<Loader />}>
                          <CompanyContainer>
                            {currentCompanies.map((company) => (
                              <CompanyCard key={company.id} company={company} />
                            ))}
                          </CompanyContainer>
                        </Suspense>
                        <PaginationContainer>
                          {renderPageNumbers()}
                        </PaginationContainer>
                      </CardHolder>
                    </>
                  )}
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Company;
