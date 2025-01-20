import React, { useState, useEffect, useRef } from "react";
import {
  Button,
  ButtonContainer,
  CompanyData,
  CompnayDetail,
  CompnayPic,
  ContantHolder,
  ContextContainer,
  Heading,
  HeadingContainer,
  Icon,
  MainContainer1,
  NameHolder,
  NumberContainer,
  Seachbar,
  SearchContainer,
  CompnayName,
  CompnaySector,
  DetailButton,
} from "./StyledCompanies";
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaStrikethrough,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaListUl,
  FaListOl,
  FaLink,
} from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import {
  MainContainer,
  AskQuestionModal1,
  AskQuestionModal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  CloseButton,
  SubmitButton,
} from "./StyledCompaniesProfile";
import { FaSearch } from "react-icons/fa";

const Companies = () => {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const companiesPerPage = 10;
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [caption1, setCaption] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [companyid, setCompanyid] = useState([]);
  const [sectorid, setSectorid] = useState([]);
  const [sectorname, setSectorname] = useState([]);
  const textareaRef = useRef(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [companyData, setCompanyData] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("access-token");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("https://api.layoffhub.ai/api/top-companies/");
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    fetchCompanies();
  }, []);

  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCompanies.length / companiesPerPage);

  const currentCompanies = filteredCompanies.slice(
    (currentPage - 1) * companiesPerPage,
    currentPage * companiesPerPage
  );

  const CompanyDiscussion = (companyId) => {
    navigate(`/discussions/${companyId}`);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const visiblePages = [];
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      visiblePages.push(i);
    }
  } else {
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      visiblePages.push(i);
    }
    if (currentPage < totalPages - 2) {
      visiblePages.push("...");
      visiblePages.push(totalPages);
    }
  }

  const ask_a_question = async () => {
    const payload = {
      title,
      caption: caption1,
      is_anonymous: anonymous,
      company_ids: Array.isArray(companyid) ? companyid : [companyid],
      sector_ids: Array.isArray(sectorid) ? sectorid : [sectorid],
      sectors: sectorname,
      tag_names: selectedTags,
      dateposted: new Date().toISOString(),
      author: "AuthorName",
    };

    try {
      await axios.post("https://api.layoffhub.ai/api/ask_a_question/", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Question submitted successfully!");
      setShowModal(false);
      window.location.reload();
    } catch (error) {
      console.error("Error submitting question:", error.response ? error.response.data : error.message);
      alert("Failed to submit question.");
    }
  };

  const usertags = ["Technology Enthusiasts", "Software Developers", "Hardware Geeks", "Mobile Technology", "Web Development",
    "AI & Machine Learning", "Cybersecurity", "Data Science", "Cloud Computing", "Blockchain Enthusiasts",
    "IoT Innovators", "Game Development", "Networking Experts", "Tech News", "Startups & Entrepreneurs",
    "Open Source Projects", "Tech Events", "Career Advice in Tech", "Tech Education", "Tech Support",
    "Freelancers", "UI/UX Design", "DevOps", "Programming Languages", "IT Professionals",
    "Robotics", "Virtual Reality", "Augmented Reality", "Tech Podcasts", "Coding Challenges",
    "Tech Books", "Women in Tech", "Ethical Hacking", "IT Certifications", "Tech Reviews",
    "Server Administration", "Software Testing", "Mobile Apps Development", "Tech Innovations",
    "E-commerce Development", "Tech Gadgets", "Artificial Intelligence", "Machine Learning", "Big Data",
    "Tech Jobs", "Tech Trends", "Project Management", "Tech Tutorials", "Software Architecture",
    "Tech Startups", "Tech Investment", "Digital Marketing", "SEO & SEM", "Content Management",
    "Cloud Services", "SaaS", "PaaS", "IaaS", "Cyber Threats", "IT Governance", "Data Privacy",
    "IT Law & Compliance", "Tech Partnerships", "Innovation Labs", "IT Infrastructure",
    "Agile Methodologies", "Scrum Masters", "Product Management", "Technical Writing", "Quality Assurance",
    "IT Outsourcing", "Tech Networking", "IT Strategy", "Business Intelligence", "Data Warehousing",
    "IT Consulting", "Mobile Gaming", "Tech Health", "IT Ethics", "Green Technology", "Tech Incubators",
    "Tech Crowdfunding", "Digital Transformation", "Smart Cities", "Wearable Technology", "Tech Culture",
    "Remote Work", "Tech Ecosystems", "IT Service Management", "Disaster Recovery", "Tech Policy",
    "IT Procurement", "Enterprise Architecture", "Tech Conferences", "Tech Communities", "IT Leadership",
    "Tech Mentorship", "Tech Volunteers", "Open Innovation", "Smart Homes"];

  const handleSubmit = () => {
    ask_a_question();
  };

  const handleSelect = (event) => {
    const selectedTag = event.target.value;
    if (selectedTag && !selectedTags.includes(selectedTag)) {
      setSelectedTags([...selectedTags, selectedTag]);
    }
  };

  const handleRemove = (tagToRemove) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const applyFormatting = (command) => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      document.execCommand(command, false, null);
    }
  };

  const handleCompanyChange = (e) => {
    setCompanyid(e.target.value);
  };

  const [companyName, setCompanyName] = useState([]);
  useEffect(() => {
    const fetchCompanyName = async () => {
      try {
        const response = await axios.get('https://api.layoffhub.ai/api/companies', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setCompanyName(response.data);
      } catch (error) {
        console.error('Error fetching company names:', error);
      }
    };
    fetchCompanyName();
  }, [token]);

  const handleStartDiscussionClick = () => {
    if (!token) {
      alert("Please login to start a discussion.");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <MainContainer1>
        <ContantHolder>
          <ButtonContainer>
            <Button onClick={handleStartDiscussionClick}>START A DISCUSSION</Button>
          </ButtonContainer>
          {showModal && (
            <AskQuestionModal1>
              <AskQuestionModal>
                <ModalHeader>
                  <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
                  <h2>Start a Discussion</h2>
                </ModalHeader>
                <ModalContent>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSubmit();
                    }}
                  >
                    <div className="row">
                      <div className="pt-4">
                        <div className="content-box pt-4 mb-5">
                          <div className="">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="anonymousCheck"
                                checked={anonymous}
                                onChange={() => setAnonymous(!anonymous)}
                              />
                              <label className="form-check-label" htmlFor="anonymousCheck">
                                Post anonymously
                              </label>
                            </div>
                          </div>
                          <div className="pt-4">
                            <div className="pb-3">
                              <label className="fw-bold ">Title</label>
                              <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                              />
                              {/* <p className="">
                                Please choose an appropriate title for the discussion.
                              </p> */}
                            </div>
                          </div>
                          <div className="">
                            <label className="fw-bold ">Company Name</label>
                            <select className="form-control" value={companyid} onChange={handleCompanyChange}>
                              <option value="" hidden>Select a company...</option>
                              {companyName.length > 0 ? companyName.map((company, index) => (
                                <option key={index} value={company.id}>{company.name}</option>
                              )) : <option disabled>Loading...</option>}
                            </select>
                          </div>
                          <div className="pt-2">
                            <div className="">
                              <label className="fw-bold ">Tags</label>
                              <select className="form-control" onChange={handleSelect}>
                                <option value="" hidden>Select tags...</option>
                                {usertags.map((tag, index) => (
                                  <option key={index} value={tag}>
                                    {tag}
                                  </option>
                                ))}
                              </select>
                              <div className="selected-tags mt-2">
                                {selectedTags.map((tag, index) => (
                                  <span key={index} className="badge bg-secondary me-2">
                                    {tag}
                                    <button
                                      type="button"
                                      className="btn-close btn-close-white ms-2"
                                      aria-label="Remove"
                                      onClick={() => handleRemove(tag)}
                                    />
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="pt-4">
                            <div className="pb-3">
                          {/*     <div className="toolbar d-flex  flex-wrap mb-2">
                                <div className="btn-group me-2">
                                  <button type="button" className="btn" onClick={() => applyFormatting("bold")}>
                                    <FaBold />
                                  </button>
                                  <button type="button" className="btn" onClick={() => applyFormatting("italic")}>
                                    <FaItalic />
                                  </button>
                                  <button type="button" className="btn" onClick={() => applyFormatting("underline")}>
                                    <FaUnderline />
                                  </button>
                                  <button type="button" className="btn" onClick={() => applyFormatting("strikeThrough")}>
                                    <FaStrikethrough />
                                  </button>
                                </div>
                                <div className="btn-group me-2">
                                  <button type="button" className="btn" onClick={() => applyFormatting("justifyLeft")}>
                                    <FaAlignLeft />
                                  </button>
                                  <button type="button" className="btn" onClick={() => applyFormatting("justifyCenter")}>
                                    <FaAlignCenter />
                                  </button>
                                  <button type="button" className="btn" onClick={() => applyFormatting("justifyRight")}>
                                    <FaAlignRight />
                                  </button>
                                </div>
                                <div className="btn-group me-2">
                                  <button type="button" className="btn" onClick={() => applyFormatting("insertOrderedList")}>
                                    <FaListOl />
                                  </button>
                                  <button type="button" className="btn" onClick={() => applyFormatting("insertUnorderedList")}>
                                    <FaListUl />
                                  </button>
                                  <button type="button" className="btn" onClick={() => applyFormatting("createLink")}>
                                    <FaLink />
                                  </button>
                                </div>
                              </div> */}
                              <textarea
                                ref={textareaRef}
                                className="form-control"
                                rows="4"
                                value={caption1}
                                onChange={(e) => setCaption(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <ModalFooter>
                    <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                  </ModalFooter>
                </ModalContent>
              </AskQuestionModal>
            </AskQuestionModal1>
          )}
          <HeadingContainer>
            <Heading>Most Active Companies</Heading>
            <SearchContainer>
              <Icon>
                <FaSearch />
              </Icon>
              <Seachbar
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </SearchContainer>
          </HeadingContainer>
          <div className="space">
            {currentCompanies.map((company, index) => {
              const isFirstItem = index === 0;
              const isLastItem = index === currentCompanies.length - 1;

              const applyBackgroundColor =
                (index + 1) % 2 === 0 && index % 2 === 1;

              return (
                <CompnayDetail key={company.id}>
                  <NumberContainer
                    style={{
                      borderRadius: `${
                        isFirstItem ? "8px 0px" : "0"
                      } ${isLastItem ? "0px 0px 8px" : "0"}`,
                      backgroundColor: applyBackgroundColor ? "#1376f89f" : "#1376f8",
                    }}
                  >
                    {(currentPage - 1) * companiesPerPage + index + 1}
                  </NumberContainer>
                  <ContextContainer>
                    <CompanyData>
                      <CompnayPic src={company.picture} alt={company.name} />
                      <NameHolder>
                        <CompnayName>{company.name}</CompnayName>
                        <CompnaySector>{company.sector}</CompnaySector>
                      </NameHolder>
                    </CompanyData>
                    <DetailButton onClick={() => navigate(`/${company.name}`)}>
                    View Company
                    </DetailButton>
                  </ContextContainer>
                </CompnayDetail>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "end", marginTop: "20px" }}>
            <div className="p-2 jaba2">
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                <RiArrowDropLeftLine size={30} />
              </button>
              {currentPage > 3 && (
                <>
                  <button onClick={() => goToPage(1)}>1</button>
                  {currentPage > 4 && <span>...</span>}
                </>
              )}
              {visiblePages.map((page, index) => (
                <button
                  key={index}
                  onClick={() => typeof page === "number" && goToPage(page)}
                  style={{
                    margin: "0 5px",
                    fontWeight: page === currentPage ? "bold" : "normal",
                    border: page === currentPage ? "2px solid #1376f8" : "none",
                  }}
                >
                  {page}
                </button>
              ))}
              <button onClick={goToNextPage} disabled={currentPage === totalPages} className="mx-2">
                <RiArrowDropRightLine size={30} />
              </button>
            </div>
          </div>
        </ContantHolder>
      </MainContainer1>
    </>
  );
};

export default Companies;
