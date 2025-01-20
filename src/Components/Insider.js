import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
`;

const Header = styled.h2`
  font-size: 24px;
  border-bottom: 2px solid #1e6bd6;
  padding-bottom: 10px;
`;

const SummaryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;

  th,
  td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f9f9f9;
    font-weight: normal;
  }
`;

const Tabs = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  margin-right: 10px;
  background-color: ${(props) => (props.active ? "#1e6bd6" : "#f9f9f9")};
  color: ${(props) => (props.active ? "#fff" : "#333")};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #1e6bd6;
    color: #fff;
  }
`;

const TradesTableWrapper = styled.div`
  width: 100%;
  overflow-x: auto; /* Enables horizontal scroll if table overflows */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    overflow-x: scroll; /* Forcing horizontal scroll for smaller screens */
  }
`;

const TradesTable = styled.table`
  width: 100%;
  min-width: 600px; /* Set a minimum width for the table */
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    text-align: left;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f9f9f9;
    font-weight: normal;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  a {
    color: #1e6bd6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 320px) {
    th,
    td {
      padding: 3px;
      text-align: left;
      border: 1px solid #ddd;
    }

    th,
    td {
      font-size: small;
    }
  }
`;
const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  select {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .pagination-controls {
    display: flex;
    align-items: center;

    span {
      margin: 0 5px;
    }

    button {
      padding: 5px 10px;
      margin: 0 5px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 5px;
      cursor: pointer;

      &:hover {
        background-color: #1e6bd6;
        color: #fff;
      }
    }
  }
`;

const InsiderTrades = () => {
  const [activeTab, setActiveTab] = useState("All Trade");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalSharesHeld3Months, setTotalSharesHeld3Months] = useState(0);
  const [totalSharesTrade3Months, setTotalSharesTrade3Months] = useState(0);
  const [totalSharesTrade12Months, setTotalSharesTrade12Months] = useState(0);
  const [totalSharesHeld12Months, setTotalSharesHeld12Months] = useState(0);
  const symbol = localStorage.getItem("symbol");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://api.layoffhub.ai/api/display-data/${symbol}/`;
        const response = await axios.get(apiUrl);

        const { data_last_3_months } = response.data[0] || {};
        const { data_last_12_months } = response.data[1] || {};

        const filteredData = data_last_12_months || [];
        const filteredData1 = data_last_3_months || [];

        const filteredData3Months = data_last_3_months || [];
        const filteredData12Months = data_last_12_months || [];

        const totalSharesHeld3 = filteredData3Months.reduce(
          (acc, item) => acc + (parseInt(item.shares_held) || 0),
          0
        );
        const totalSharesTrade3 = filteredData3Months.reduce(
          (acc, item) => acc + (parseInt(item.shares_traded) || 0),
          0
        );

        // Calculate total shares held for 12 months
        const totalSharesHeld12 = filteredData12Months.reduce(
          (acc, item) => acc + (parseInt(item.shares_held) || 0),
          0
        );
        const totalSharesTrade12 = filteredData12Months.reduce(
          (acc, item) => acc + (parseInt(item.shares_traded) || 0),
          0
        );

        setTotalSharesHeld3Months(totalSharesHeld3);
        setTotalSharesHeld12Months(totalSharesHeld12);
        setTotalSharesTrade3Months(totalSharesTrade3);
        setTotalSharesTrade12Months(totalSharesTrade12);

        let filtered = [];
        if (activeTab === "Buy") {
          filtered = filteredData.filter(
            (item) =>
              item.Transaction &&
              item.Transaction.toLowerCase() !== "sale" &&
              item.Transaction !== "Null"
          );
        } else if (activeTab === "Sell") {
          filtered = filteredData.filter(
            (item) =>
              item.Transaction &&
              item.Transaction.toLowerCase() === "sale" &&
              item.Transaction !== "Null"
          );
        } else {
          filtered = filteredData;
        }

        setData(filtered);
        console.log(data);
        setCurrentPage(1);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
        setData([]);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Container>
      <Header>Number of Insider Shares Traded</Header>
      <SummaryTable>
        <thead>
          <tr>
            <th>Insider Trade</th>
            <th>3 Months</th>
            <th>12 Months</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Number of Shares Bought</td>
            <td>{totalSharesHeld3Months}</td>
            <td>{totalSharesHeld12Months}</td>
          </tr>
          <tr>
            <td>Number of Shares Sold</td>
            <td>{totalSharesTrade3Months}</td>
            <td>{totalSharesTrade12Months}</td>
          </tr>
          <tr>
            <td>Total Shares Traded</td>
            <td>{totalSharesHeld3Months + totalSharesTrade3Months}</td>
            <td>{totalSharesHeld12Months + totalSharesTrade12Months}</td>
          </tr>
        </tbody>
      </SummaryTable>
      <Tabs>
        <Tab
          active={activeTab === "All Trade"}
          onClick={() => handleTabClick("All Trade")}
        >
          All Trade
        </Tab>
        <Tab active={activeTab === "Buy"} onClick={() => handleTabClick("Buy")}>
          Buy
        </Tab>
        <Tab
          active={activeTab === "Sell"}
          onClick={() => handleTabClick("Sell")}
        >
          Sell
        </Tab>
      </Tabs>
      <TradesTableWrapper>
        <TradesTable>
          <thead>
            <tr>
              <th>Insider</th>
              <th>Relation</th>
              <th>Last Date</th>
              <th>Transaction</th>
              <th>Owner Type</th>
              <th>Shares Traded</th>
              <th>Price</th>
              <th>Shares Held</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <a href="#">{item.Insider}</a>
                  </td>
                  <td>{item.Relation}</td>
                  <td>{item.last_date}</td>
                  <td>{item.Transaction}</td>
                  <td>{item.owner_type}</td>
                  <td>{item.shares_traded}</td>
                  <td>{item.Price}</td>
                  <td>{item.shares_held}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No data available</td>
              </tr>
            )}
          </tbody>
        </TradesTable>
      </TradesTableWrapper>
      <Pagination>
        <div>
          Show:
          <select value={itemsPerPage} onChange={handleItemsPerPageChange}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
        <div className="pagination-controls">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            {"<"}
          </button>
          <span>{currentPage}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastItem >= data.length}
          >
            {">"}
          </button>
        </div>
      </Pagination>
    </Container>
  );
};

export default InsiderTrades;
