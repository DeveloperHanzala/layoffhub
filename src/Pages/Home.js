import React, { useEffect, useState, Suspense, lazy } from "react";
import HomeSlid from "../Components/HomeSlid";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from "axios";
import Companies from "./Companies";
import {
  ContantHolder,
} from "./StyledCompanies";
const Popular = lazy(() => import("../Components/Popular"));
const Answer = lazy(() => import("../Components/Answer"));

const Home = () => {
  const token = localStorage.getItem("access-token");

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [activeComponent, setActiveComponent] = useState("Popular");

  

  const handleSearchChange = async (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query.length >= 3) {
      try {
        const response = await axios.get(
          "https://api.layoffhub.ai/api/search_bar/",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: { qury: query },
          }
        );
        setSearchResults(response.data || []);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else if (query.length < 3) {
      setSearchResults([]);
    } else {
      setSearchResults(null);
    }
  };

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 pt-4">
          <div className="">
            <Companies />
            
            <div className="mx-5 px-5 pt-5">
            <h2>Trending Discussion</h2>
            </div>
            <div className="olll">
            <ContantHolder>
              <HomeSlid />
            </ContantHolder>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
