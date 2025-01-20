import React from 'react';
import { Link } from 'react-router-dom'; 
import { IoIosPeople } from "react-icons/io";
import { FaPaperclip } from 'react-icons/fa';

const CompanyList = ({ companies = [], visibleCompanies, handleShowMore, hasMore }) => { 
    const renderCompanyRows = () => {
        const companiesToShow = Array.isArray(companies) ? companies.slice(0, visibleCompanies) : [];
        const companiesPerRow = 2; 
        const token = localStorage.getItem("access-token");
        const rows = [];

        for (let i = 0; i < companiesToShow.length; i += companiesPerRow) {
            rows.push(companiesToShow.slice(i, i + companiesPerRow));
        }

        return rows.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
                {row.map((company) => (
                    <div key={company.id} className='col-12 col-sm-12 col-md-6 col-lg-6  mb-4'>
                        <div className="tags p-2 bord3 rounded mx-3 d-flex flex-column h-100">
                            <div className='row align-items-center mkkkk flex-grow-1'>
                                <div className='col-12'>
                                    <h4>
                                        <b className='mx-2'>{company.name}</b>
                                    </h4>
                                    <span>Symbol:<b> {company.symbol}</b></span><br/>
                                    <span style={{ fontSize: 'small' }}>{company.industry}</span>
                                </div>
                            </div>

                            <div className='row pt-3 flex-shrink-1'>
                                <div className='col-12'>
                                    <span className='p-2 btn btn-outline-secondary w-100 text-truncate smaall small'>
                                        <FaPaperclip color='orange' /> {company.industry_clean}
                                    </span>
                                </div>
                            </div>

                            <div className='row pt-3 flex-grow-1'>
                                <div className='col-12'>
                                    <IoIosPeople size={30} className='text-primary mx-2' />
                                    <span>Name On Web: </span>
                                    <a target="_blank" rel="noopener noreferrer" href={company.website_url}>{company.name_on_website}</a>
                                </div>
                            </div>

                            <div className='row flex-shrink-0'>
                                <div className='col-12'>
                                    <button className='btn btn-primary w-100 text-truncate small'>
                                        <Link
                                            to={`/${company.name}`}
                                            className="mx-1 text-white"
                                        >
                                            Visit Company
                                        </Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ));
    };

    return (
        <>
            <div className='pt-3'>
                {renderCompanyRows()}
            </div>
            {hasMore && (
                <div className="text-center bhbh">
                    <button className="btn btn-primary" onClick={handleShowMore}>Show More</button>
                </div>
            )}
        </>
    );
};

export default CompanyList;
