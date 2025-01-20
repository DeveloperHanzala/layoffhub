import React, { useState, useEffect, useRef, lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MdGroups } from 'react-icons/md';
import { FaTags, FaEye } from 'react-icons/fa';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';
import { PiBuildingApartmentFill } from "react-icons/pi";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';
import Loader from '../Components/Loader';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { TbCapture } from 'react-icons/tb';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaAlignLeft, FaAlignCenter, FaAlignRight, FaListUl, FaListOl, FaLink } from 'react-icons/fa';
import CompanyComp from '../Components/CompanyComp';
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
const Popular = lazy(() => import('../Components/Popular'));
const Answer = lazy(() => import('../Components/Answer'));

const CompanyProfile = () => {
    const { name } = useParams();
    const [activeComponent, setActiveComponent] = useState('Popular');
    const [companyDetails, setCompanyDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [visibleAnswers, setVisibleAnswers] = useState(null);
    const [visibleAddAnswer, setVisibleAddAnswer] = useState(null);
    const [trendTags, setTrendTags] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [anonymous, setAnonymous] = useState(false);
    const [companyid, setCompanyid] = useState([]);
    const [sectorid, setSectorid] = useState([]);
    const [companyName, setCompanyName] = useState([]);
    const [sectorname, setSectorname] = useState([]);
    const textareaRef = useRef(null);
    const token = localStorage.getItem("access-token");
    const [selectedTags, setSelectedTags] = useState([]);

    const usertags = [
        "Technology Enthusiasts", "Software Developers", "Hardware Geeks", "Mobile Technology", "Web Development",
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
        "Tech Mentorship", "Tech Volunteers", "Open Innovation", "Smart Homes"
    ];

    const handleSelect = (event) => {
        const selectedTag = event.target.value;
        if (selectedTag && !selectedTags.includes(selectedTag)) {
            setSelectedTags([...selectedTags, selectedTag]);
        }
    };

    const handleRemove = (tagToRemove) => {
        setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
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
            caption,
            is_anonymous: anonymous,
            company_ids: Array.isArray(companyid) ? companyid : [companyid],
            sector_ids: Array.isArray(sectorid) ? sectorid : [sectorid],
            sectors: sectorname,
            tag_names: selectedTags,
            dateposted: new Date().toISOString(),
            author: 'AuthorName',
        };

        try {
            await axios.post('https://api.layoffhub.ai/api/ask_a_question/', payload, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Question submitted successfully!');
        } catch (error) {
            console.error('Error submitting question:', error.response ? error.response.data : error.message);
            alert('Failed to submit question.');
        }
        
};

useEffect(() => {
    const fetchCompanyName = async () => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/companies');
            setCompanyName(response.data);
        } catch (error) {
            console.error('Error fetching company names:', error);
        }
    };
    fetchCompanyName();
}, []);

useEffect(() => {
    const fetchQuestion = async () => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/companies');
            setCompanyName(response.data);
        } catch (error) {
            console.error('Error fetching company names:', error);
        }
    };
    fetchQuestion();
}, []);

useEffect(() => {
    const fetchSectorName = async () => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/industries_sectors/');
            setSectorname(response.data);
        } catch (error) {
            console.error('Error fetching sector names:', error);
        }
    };
    fetchSectorName();
}, []);

const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
};



useEffect(() => {
    const fetchCompanyDetails = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`https://api.layoffhub.ai/api/company_profile/${name}/`);

            setCompanyDetails(response.data);


            setCompanyid(response.data.id);


        } catch (error) {
            console.error('Error fetching company details:', error);
            setError('Failed to load company details.');
        } finally {
            setLoading(false);
        }
    };

    if (name) {
        fetchCompanyDetails();
    } else {
        setError('Invalid Company Name.');
        setLoading(false);
    }
}, [name]);

useEffect(() => {
    const fetchTrendTags = async () => {
        try {
            const response = await axios.get('https://api.layoffhub.ai/api/trending_tags/');
            setTrendTags(response.data || []);
        } catch (error) {
            console.error("Error fetching trending tags:", error);
            setError('Failed to load trending tags.');
        }
    };

    fetchTrendTags();
}, []);

const handleClick = (componentName) => {
    setActiveComponent(componentName);
};

const handleAnswerButtonClick = (id) => {
    setVisibleAnswers(visibleAnswers === id ? null : id);
};

const handleAddAnswerButtonClick = (id) => {
    setVisibleAddAnswer(visibleAddAnswer === id ? null : id);
};

const handleTagClick = (tagName) => {
    console.log(`Tag clicked: ${tagName}`);
};

if (loading) return <p><Loader /></p>;
if (error) return <p>{error}</p>;

const handleSubmit = () => {
    ask_a_question();
    toggleModal();
};

return (
    <>
        <Navbar />
        <div className="mx-5">
            <div className="row">
                <div className="col-12 col-md-12 pt-4">
                    <div className="div1 pt-4 mb-5">
                        <div className='row'>
                            <div className='col-12 col-md-12 text-center pt-5'>
                                {companyDetails ? (
                                    <>
                                        <h2 className='pt-3'>{companyDetails.name}</h2>
                                        <p className='pt-3'>
                                            <PiBuildingApartmentFill size={20} />
                                            <span className='fw-bold mx-2' style={{ fontSize: 'small' }}>
                                                {companyDetails.industry}
                                            </span>
                                        </p>
                                        <p>
                                            {companyDetails.industry_clean} |
                                            <span className='mx-2'> {companyDetails.sector}</span>
                                        </p>
                                        <p className='pt-5 px-4'>
                                            <button className='btn '>Symbol: {companyDetails.symbol}</button>
                                            <button className='btn '>Sector: {companyDetails.public_or_private}</button>
                                            <button className='btn '>Clean: {companyDetails.clean_name}</button>
                                            <button className='btn btn-primary' onClick={toggleModal}>Ask Question</button>
                                        </p>
                                        <h5 className="pb-3">
                                            Website URL:{" "}
                                            <Link to={`https://layoffhub.ai/${companyDetails.name}`}>
                                                https://layoffhub.ai/{companyDetails.name}
                                            </Link>
                                        </h5>
                                    </>
                                ) : (
                                    <p>Company details not found.</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Rest of your code for displaying answers */}

                </div>
                {/*    <div className="col-12 col-md-3 pt-4">
                        <Sidebar2 />
                    </div> */}
            </div>
        </div>

        {/* Modal for Asking a Question */}
        <AskQuestionModal1>
              <AskQuestionModal
              show={isModalOpen}
              onHide={toggleModal}
              dialogClassName="custom-modal"
              centered
              >
            <Modal.Header closeButton>
                <Modal.Title>Ask a Question</Modal.Title>
            </Modal.Header>
            <Modal.Body className='model1'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}>
                    <div className='row'>
                        <div className="pt-4">
                            <div className="content-box pt-4 mb-5">
                                <div className="pt-4">
                                    <div className="pb-3">
                                        <label className="fw-bold pb-2">Question Title</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                        />
                                        <p className="pt-2">Please choose an appropriate title for the question.</p>
                                    </div>
                                </div>


                                <div className="pt-4">
                                    <div className="pb-3">
                                        <label className="fw-bold pb-2">Company Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={companyDetails ? companyDetails.name : ''}
                                            disabled
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="pb-3">
                                        <label className="fw-bold pb-2">Sector</label>
                                        <select
                                            className="form-control"
                                            value={sectorid}
                                            onChange={handleSectorChange}
                                        >
                                            <option value="" hidden>Select a sector...</option>
                                            {sectorname.length > 0 ? sectorname.map((sector, index) => (
                                                <option key={index} value={sector.id}>{sector.sector}</option>
                                            )) : <option disabled>Loading...</option>}
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="pb-3">
                                        <label className="fw-bold pb-2">Tags</label>
                                        <select className="form-control" onChange={handleSelect}>
                                            <option value="" hidden>Select tags...</option>
                                            {usertags.map((tag, index) => (
                                                <option key={index} value={tag}>{tag}</option>
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
                                        <label className="fw-bold pb-2">Upload Image</label>
                                        <div className="input-group">
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                id="imageUpload"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="pb-3">
                                        <h4>Details</h4>
                                        <button className="btn btn-primary">
                                            <TbCapture className="mx-1" size={25} /> Add Media
                                        </button>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="pb-3">
                                        <div className="toolbar d-flex flex-wrap mb-2">
                                            <div className="btn-group me-2">
                                                <button type="button" className="btn" onClick={() => applyFormatting('bold')}><FaBold /></button>
                                                <button type="button" className="btn" onClick={() => applyFormatting('italic')}><FaItalic /></button>
                                                <button type="button" className="btn" onClick={() => applyFormatting('underline')}><FaUnderline /></button>
                                                <button type="button" className="btn" onClick={() => applyFormatting('strikeThrough')}><FaStrikethrough /></button>
                                            </div>
                                            <div className="btn-group me-2">
                                                <button type="button" className="btn" onClick={() => applyFormatting('justifyLeft')}><FaAlignLeft /></button>
                                                <button type="button" className="btn" onClick={() => applyFormatting('justifyCenter')}><FaAlignCenter /></button>
                                                <button type="button" className="btn" onClick={() => applyFormatting('justifyRight')}><FaAlignRight /></button>
                                            </div>
                                            <div className="btn-group me-2">
                                                <button type="button" className="btn" onClick={() => applyFormatting('insertOrderedList')}><FaListOl /></button>
                                                <button type="button" className="btn" onClick={() => applyFormatting('insertUnorderedList')}><FaListUl /></button>
                                                <button type="button" className="btn" onClick={() => applyFormatting('createLink')}><FaLink /></button>
                                            </div>
                                        </div>
                                        <textarea
                                            ref={textareaRef}
                                            className="form-control"
                                            rows="4"
                                            value={caption}
                                            onChange={(e) => setCaption(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="anonymousCheck"
                                            checked={anonymous}
                                            value={true}
                                            onChange={(e) => setAnonymous(e.target.value)}
                                        />
                                        <label className="form-check-label" htmlFor="anonymousCheck">Post anonymously</label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={toggleModal}>
                    Close
                </Button>
                <SubmitButton variant="primary" onClick={handleSubmit}>
                    Submit
                </ SubmitButton>
            </Modal.Footer>
            </AskQuestionModal>
            </AskQuestionModal1>
        <CompanyComp/>

        <Footer />
    </>
);
};

export default CompanyProfile;
