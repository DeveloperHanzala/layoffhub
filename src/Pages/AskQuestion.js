import React, { useState, useEffect, useRef } from 'react';
import { MdHelp } from 'react-icons/md';
import { TbCapture } from 'react-icons/tb';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaBold, FaItalic, FaUnderline, FaStrikethrough, FaAlignLeft, FaAlignCenter, FaAlignRight, FaListUl, FaListOl, FaLink } from 'react-icons/fa';
import axios from 'axios';
import Sidebar2 from '../Components/Sidebar2';

const AskQuestion = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [title, setTitle] = useState("");
    const [caption, setCaption] = useState("");
    const [anonymous, setAnonymous] = useState(false);
    const [companyid, setCompanyid] = useState("");
    const [sectorid, setSectorid] = useState("");
    const [companyName, setCompanyName] = useState([]);
    const [sectorname, setSectorname] = useState([]);
    const textareaRef = useRef(null);
    const [image, setImage] = useState("");
    const token = localStorage.getItem("access-token");

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

    const handleSelect = (event) => {
        const selectedTag = event.target.value;
        if (selectedTag && !selectedTags.includes(selectedTag)) {
            setSelectedTags([...selectedTags, selectedTag]);
        }
    };

    const handleRemove = (tagToRemove) => {
        setSelectedTags(selectedTags.filter(tag => tag !== tagToRemove));
    };

    const handleCompanyChange = (e) => {
        setCompanyid(e.target.value);
    };

    const handleSectorChange = (e) => {
        setSectorid(e.target.value);
    };

    const applyFormatting = (command) => {
        document.execCommand(command, false, null);
    };

    const ask_a_question = async () => {
        try {
            const payload = {
                title,
                caption,
                anonymous,
                companyid,
                sectorid,
                tagname: selectedTags,
                dateposted: new Date().toISOString(),
                author: 'AuthorName',
                image
            };
            await axios.post('https://api.layoffhub.ai/api/ask_a_question/', payload, {
                headers: { Authorization: `Bearer ${token}` }
            });
            alert('Question submitted successfully!');
        } catch (error) {
            console.error('Error submitting question:', error);
            alert('Failed to submit question.');
        }
    };

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

    useEffect(() => {
        const fetchSectorName = async () => {
            try {
                const response = await axios.get('https://api.layoffhub.ai/api/industries_sectors/', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setSectorname(response.data);
            } catch (error) {
                console.error('Error fetching sector names:', error);
            }
        };
        fetchSectorName();
    }, [token]);

    return (
        <div>
            <Navbar />
            <div className="container-fluid  px-md-5 px-3">
                <div className="row mdi">
                    <div className="col-12 col-md-9 pt-4">
                        <div className="content-box pt-4 mb-5">
                            <div className="row">
                                <div className="col-12 col-md-3">
                                    <h4 className="tags pt-2"><MdHelp className="text-primary" size={30} /> Help</h4>
                                </div>
                            </div>
                            <hr />
                            <div className="pt-4">
                                <div className="pb-3">
                                    <label className="fw-bold pb-2">Question Title</label>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                                    <p className="pt-2">Please choose an appropriate title for the question.</p>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="pb-3">
                                    <label className="fw-bold pb-2">Company Name</label>
                                    <select className="form-control" value={companyid} onChange={handleCompanyChange}>
                                        <option value="" hidden>Select a company...</option>
                                        {companyName.length > 0 ? companyName.map((company, index) => (
                                            <option key={index} value={company.id}>{company.name}</option>
                                        )) : <option disabled>Loading...</option>}
                                    </select>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="pb-3">
                                    <label className="fw-bold pb-2">Sector</label>
                                    <select className="form-control" value={sectorid} onChange={handleSectorChange}>
                                        <option value="" hidden>Select a sector...</option>
                                        {sectorname.length > 0 ? sectorname.map((sector, index) => (
                                            <option key={index} value={sector.id}>{sector.sub_sector}</option>
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
                                            <span key={index} className="badge bg-primary me-2">
                                                {tag} <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={() => handleRemove(tag)}></button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <div className="pb-3">
                                    <label className="fw-bold pb-2">Upload Image</label>
                                    <div className="input-group">
                                        <input type="file" className="form-control" accept="image/*" id="imageUpload" value={image} onChange={(e) => setImage(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="pt-4">
                                <div className="pb-3">
                                    <div className="toolbar d-flex flex-wrap mb-2">
                                        <div className="btn-group me-2">
                                            <button className="btn" onClick={() => applyFormatting('bold')}><FaBold /></button>
                                            <button className="btn" onClick={() => applyFormatting('italic')}><FaItalic /></button>
                                            <button className="btn" onClick={() => applyFormatting('underline')}><FaUnderline /></button>
                                            <button className="btn" onClick={() => applyFormatting('strikeThrough')}><FaStrikethrough /></button>
                                        </div>
                                        <div className="btn-group me-2">
                                            <button className="btn" onClick={() => applyFormatting('justifyLeft')}><FaAlignLeft /></button>
                                            <button className="btn" onClick={() => applyFormatting('justifyCenter')}><FaAlignCenter /></button>
                                            <button className="btn" onClick={() => applyFormatting('justifyRight')}><FaAlignRight /></button>
                                        </div>
                                        <div className="btn-group me-2">
                                            <button className="btn" onClick={() => applyFormatting('insertUnorderedList')}><FaListUl /></button>
                                            <button className="btn" onClick={() => applyFormatting('insertOrderedList')}><FaListOl /></button>
                                        </div>
                                        <div className="btn-group me-2">
                                            <button className="btn" onClick={() => applyFormatting('createLink')}><FaLink /></button>
                                        </div>
                                    </div>
                                    <div className="editor-content">
                                        <div
                                            className="form-control"
                                            contentEditable
                                            ref={textareaRef}
                                            style={{ minHeight: '150px', border: '1px solid #ced4da', borderRadius: '.25rem' }}
                                            onChange={(e) => setCaption(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-4">
                                <button className="btn btn-primary" onClick={ask_a_question}>Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 pt-4 meda">
                        <Sidebar2 />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AskQuestion;
