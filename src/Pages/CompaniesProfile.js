import React, { useState, useEffect, useRef, lazy } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import { TbCapture } from "react-icons/tb";
import {
  MainContainer,
  CompanyProfile,
  CompanyLogo,
  CompanyInfo,
  FiltersContainer,
  FilterTabs,
  Tab,
  SortBy,
  DiscussionList,
  AskQuestionModal1,
  DiscussionItem,
  DiscussionHeader,
  AuthorProfileImage,
  UserName,
  TimeStamp,
  DiscussionContent,
  CommunityInfo,
  CompanyList,
  SectorList,
  TagList,
  DiscussionFooter,
  Actions,
  ActionButton,
  AskQuestionButton,
  AskQuestionModal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  CloseButton,
  SubmitButton,
  Data,
  SortHeading,
  SortButton,
  ButtonHolder,
} from "./StyledCompaniesProfile";
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
import CompanyComp from "../Components/CompanyComp";
import InsiderTrades from "../Components/Insider";
import Similar from "./SimilarCompany";
import Footer from "../Components/Footer";
import MostCommented from "../Components/MostCommented";


const CompaniesProfile = () => {
  const { name } = useParams();
  const [activeTab, setActiveTab] = useState("Discussion");
  const [activesort, setActivesort] = useState("Discussion");
  const [companyData, setCompanyData] = useState(null);
  const [discussionData, setDiscussionData] = useState([]);
  const [insiderTradingData, setInsiderTradingData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newQuestion, setNewQuestion] = useState();
  const [symbol, setSymbol] = useState(null);
  const [companyId, setCompanyId] = useState(null); // Add state for company ID

  useEffect(() => {
    if (name) {
      axios
        .get(`https://api.layoffhub.ai/api/company_profile/${name}`)
        .then((response) => {
          const data = response.data;
          setCompanyData(data);
          console.log("Data fetched: ", data);
        
          const fetchedId = data?.id; // Assuming the ID is present in the response
          if (fetchedId) {
            setCompanyId(fetchedId);
            setCompanyid(fetchedId ) // Store the ID in the state
          }
          const fetchedSymbol = response.data?.symbol;
          const fetchedsector = response.data?.sector;
          if (fetchedSymbol) {
            setSymbol(fetchedSymbol);
            localStorage.setItem("symbol", fetchedSymbol);
            localStorage.setItem("Sector", fetchedsector);
          }
        })
        .catch((error) => {
          console.error("Error fetching company data:", error);
        });
    }
  }, [name]);

  useEffect(() => {
    if (symbol) {
      axios
        .get(`https://api.layoffhub.ai/api/fetch-data/${symbol}/`)
        .then((response) => {
          console.log("Data posted successfully:", response.data);
        })
        .catch((error) => {
          console.error("Error posting data:", error);
        });
    }
  }, [symbol]);


    useEffect(() => {
      if (activeTab === "Discussion") {
        axios.get("https://api.layoffhub.ai/api/asked_questions/")
          .then((response) => {
            // Assuming response.data is an array of questions
            const fetchedQuestions = response.data || [];
  
            // Reverse the order of questions so the newest ones come first
            const sortedQuestions = fetchedQuestions.reverse();
  
            // Update the state with the sorted questions
            setDiscussionData(sortedQuestions);
          })
          
    } 
    else if (activeTab === "Insider Trading Dashboard") {
      axios.get("https://api.example.com/insider-trading").then((response) => {
        setInsiderTradingData(response.data);
      });
      
    }else if (activeTab === "Stock Data") {
      axios.get("https://api.example.com/stock-data").then((response) => {
        setStockData(response.data);
      });
    }
  }, [activeTab]);
  useEffect(() => {
    if (activesort === "Discussion") {
      axios
        .get("https://api.layoffhub.ai/api/asked_questions/")
        .then((response) => {
          setDiscussionData(response.data);
          console.log(response.data);
        });
    } else if (activesort === "most") {
      axios
      .get("https://api.layoffhub.ai/api/asked_questions/")
      .then((response) => {
         const fetchedQuestions = response.data || [];
          
        // Sort the data by view_count in descending order
        const sortedQuestions = fetchedQuestions.sort((a, b) => b.view_count - a.view_count);

        setDiscussionData(sortedQuestions);
        
      });
    } else if (activesort === "trending") {
      axios
      .get("https://api.layoffhub.ai/api/asked_questions/")
      .then((response) => {
         const fetchedQuestions = response.data || [];
          
        // Sort the data by view_count in descending order
        const sortedQuestions = fetchedQuestions.sort((a, b) => b.votes - a.votes);

        setDiscussionData(sortedQuestions);
        
      });
    }
  }, [activesort]);


  useEffect(() => {
    const fetchTrendTags = async () => {
      try {
        const response = await axios.get(
          "https://api.layoffhub.ai/api/trending_tags/"
        );
        setTrendTags(response.data || []);
      } catch (error) {
        console.error("Error fetching trending tags:", error);
        setError("Failed to load trending tags.");
      }
    };

    fetchTrendTags();
  }, []);
  useEffect(() => {
    const fetchSectorName = async () => {
      try {
        const response = await axios.get(
          "https://api.layoffhub.ai/api/industries_sectors/"
        );
        setSectorname(response.data);
      } catch (error) {
        console.error("Error fetching sector names:", error);
      }
    };
    fetchSectorName();
  }, []);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(
          "https://api.layoffhub.ai/api/companies"
        );
        setCompanyName(response.data);
      } catch (error) {
        console.error("Error fetching company names:", error);
      }
    };
    fetchQuestion();
  }, []);
  const [activeComponent, setActiveComponent] = useState("Popular");
  const [companyDetails, setCompanyDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [visibleAnswers, setVisibleAnswers] = useState(null);
  const [visibleAddAnswer, setVisibleAddAnswer] = useState(null);
  const [trendTags, setTrendTags] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [caption1, setCaption] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [companyid, setCompanyid] = useState([]);
  const [sectorid, setSectorid] = useState([]);
  const [companyName, setCompanyName] = useState([]);
  const [sectorname, setSectorname] = useState([]);
  const textareaRef = useRef(null);
  const token = localStorage.getItem("access-token");
  const [selectedTags, setSelectedTags] = useState([]);

  const usertags = [
    "Technology Enthusiasts",
    "Software Developers",
    "Hardware Geeks",
    "Mobile Technology",
    "Web Development",
    "AI & Machine Learning",
    "Cybersecurity",
    "Data Science",
    "Cloud Computing",
    "Blockchain Enthusiasts",
    "IoT Innovators",
    "Game Development",
    "Networking Experts",
    "Tech News",
    "Startups & Entrepreneurs",
    "Open Source Projects",
    "Tech Events",
    "Career Advice in Tech",
    "Tech Education",
    "Tech Support",
    "Freelancers",
    "UI/UX Design",
    "DevOps",
    "Programming Languages",
    "IT Professionals",
    "Robotics",
    "Virtual Reality",
    "Augmented Reality",
    "Tech Podcasts",
    "Coding Challenges",
    "Tech Books",
    "Women in Tech",
    "Ethical Hacking",
    "IT Certifications",
    "Tech Reviews",
    "Server Administration",
    "Software Testing",
    "Mobile Apps Development",
    "Tech Innovations",
    "E-commerce Development",
    "Tech Gadgets",
    "Artificial Intelligence",
    "Machine Learning",
    "Big Data",
    "Tech Jobs",
    "Tech Trends",
    "Project Management",
    "Tech Tutorials",
    "Software Architecture",
    "Tech Startups",
    "Tech Investment",
    "Digital Marketing",
    "SEO & SEM",
    "Content Management",
    "Cloud Services",
    "SaaS",
    "PaaS",
    "IaaS",
    "Cyber Threats",
    "IT Governance",
    "Data Privacy",
    "IT Law & Compliance",
    "Tech Partnerships",
    "Innovation Labs",
    "IT Infrastructure",
    "Agile Methodologies",
    "Scrum Masters",
    "Product Management",
    "Technical Writing",
    "Quality Assurance",
    "IT Outsourcing",
    "Tech Networking",
    "IT Strategy",
    "Business Intelligence",
    "Data Warehousing",
    "IT Consulting",
    "Mobile Gaming",
    "Tech Health",
    "IT Ethics",
    "Green Technology",
    "Tech Incubators",
    "Tech Crowdfunding",
    "Digital Transformation",
    "Smart Cities",
    "Wearable Technology",
    "Tech Culture",
    "Remote Work",
    "Tech Ecosystems",
    "IT Service Management",
    "Disaster Recovery",
    "Tech Policy",
    "IT Procurement",
    "Enterprise Architecture",
    "Tech Conferences",
    "Tech Communities",
    "IT Leadership",
    "Tech Mentorship",
    "Tech Volunteers",
    "Open Innovation",
    "Smart Homes",
  ];

  const handleSelect = (event) => {
    const selectedTag = event.target.value;
    if (selectedTag && !selectedTags.includes(selectedTag)) {
      setSelectedTags([...selectedTags, selectedTag]);
    }
  };

  const handleRemove = (tagToRemove) => {
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToRemove));
  };

  const handleSectorChange = (e) => {
    setSectorid(e.target.value);
  };

  const applyFormatting = (command) => {
    document.execCommand(command, false, null);
  };

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
      await axios.post(
        "https://api.layoffhub.ai/api/ask_a_question/",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("Question submitted successfully!");
      setShowModal(false);
    } catch (error) {
      console.error(
        "Error submitting question:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to submit question.");
    }
  };

  useEffect(() => {
    const fetchCompanyName = async () => {
      try {
        const response = await axios.get(
          "https://api.layoffhub.ai/api/companies"
        );
        setCompanyName(response.data);
      } catch (error) {
        console.error("Error fetching company names:", error);
      }
    };
    fetchCompanyName();
  }, []);
  const handleSubmit = () => {
    ask_a_question();
  };
  const handleStartDiscussionClick = () => {
    if (!token) {
      alert("Please login to start a discussion.");
    } else {
      setShowModal(true);
    }
  };
  const handleButtonClick = () => {
  setShowModal(false);
  handleStartDiscussionClick();
};

  return (
    <>
      <Navbar />
      <MainContainer>
        <Data>
          {companyData && (
            <CompanyProfile>
             {companyData.picture ? (
                <CompanyLogo src={companyData.picture} alt={companyData.name} />
              ) : (
                <p className="mx-3">No Image Available</p> // Fallback if no picture
              )}
              <CompanyInfo>
                <h1>{companyData.name}</h1>
                <p>{companyData.industry}</p>
              </CompanyInfo>
            </CompanyProfile>
          )}
          <FilterTabs>
            <Tab
              active={activeTab === "Discussion"}
              onClick={() => setActiveTab("Discussion")}
            >
              Discussion
            </Tab>
            <Tab
              active={activeTab === "Insider Trading Dashboard"}
              onClick={() => setActiveTab("Insider Trading Dashboard")}
            >
              Insider Trading Dashboard
            </Tab>
            <Tab
              active={activeTab === "Stock Data"}
              onClick={() => setActiveTab("Stock Data")}
            >
              Stock Data
            </Tab>
            <Tab
              active={activeTab === "Similar Discussions"}
              onClick={() => setActiveTab("Similar Discussions")}
            >
              View similar company discussions
            </Tab>
          </FilterTabs>
        </Data>

        <DiscussionList>
          {activeTab === "Discussion" && discussionData.length > 0 && (
            <div>
              <ButtonHolder>
                <FiltersContainer>
                  <SortBy>
                    <SortHeading>Sort by:</SortHeading>
                    <Tab
                      active={activesort === "Discussion"}
                      onClick={() => setActivesort("Discussion")}
                    >
                      New
                    </Tab>
                    <Tab
                      active={activesort === "most"}
                      onClick={() => setActivesort("most")}
                    >
                      Most Commented
                    </Tab>
                    <Tab
                      active={activesort === "trending"}
                      onClick={() => setActivesort("trending")}
                    >
                      Trending
                    </Tab>
                  </SortBy>
                </FiltersContainer>
                <AskQuestionButton onClick={handleButtonClick}>
                  Start Discussion
                </AskQuestionButton> 
              </ButtonHolder>
              <CompanyComp companyId={companyId} activesort={activesort} showModal={showModal}/>
          
            </div>
          
          )}
          <div className="jabajaba">
          {activeTab === "Insider Trading Dashboard" && <InsiderTrades />}
          </div>
          {activeTab === "Stock Data" && (
            <div>
              {/* Render Stock Data Here */}
              {stockData.map((item) => (
                <div key={item.id}>
                  <p>{item.stockPrice}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === "Similar Discussions" && (
           <Similar/>
          )}
        </DiscussionList>

        {showModal && (
          <AskQuestionModal1>
          <AskQuestionModal>
            <ModalHeader>
              <CloseButton onClick={() => setShowModal(false)}>X</CloseButton>
              <h2 >Start a Discussion</h2>
            </ModalHeader>
            <ModalContent>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <div className="row">
                  <div className="">
                    <div className="content-box  mb-5">
                    <div className="">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="anonymousCheck"
                            checked={anonymous}
                            value={true}
                            onChange={(e) => setAnonymous(e.target.value)}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="anonymousCheck"
                          >
                            Post anonymously
                          </label>
                        </div>
                      </div>
                      <div className="">
                        <div className="">
                          <label className="fw-bold pb-2">Title</label>
                          <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                          />
                         
                        </div>
                      </div>


                  

                      <div className="">
                        <div className="pb-3">
                          <label className="fw-bold pb-2">Tags</label>
                          <select
                            className="form-control"
                            onChange={handleSelect}
                          >
                            <option value="" hidden>
                              Select tags...
                            </option>
                            {usertags.map((tag, index) => (
                              <option key={index} value={tag}>
                                {tag}
                              </option>
                            ))}
                          </select>
                          <div className="selected-tags mt-2">
                            {selectedTags.map((tag, index) => (
                              <span
                                key={index}
                                className="badge bg-secondary me-2"
                              >
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
              <ModalFooter >
              <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
            </ModalFooter>
            </ModalContent>
          
          </AskQuestionModal>
          </AskQuestionModal1>
        )}
      </MainContainer>
      <Footer/>
    </>
  );
};

export default CompaniesProfile;
