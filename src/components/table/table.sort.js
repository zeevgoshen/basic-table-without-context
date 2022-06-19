import React, { useState, useContext } from "react";
import { IssuesContext } from "../../App";
import {
  NO,
  ID,
  ISSUE_TYPE,
  ISSUETYPE,
  SELECTOR,
  URL,
} from "../../constants/strings.js";
import TableFilter from "./table.filter.js";
import "./table.css";

const TableSort = ({loadIssues, headerText, data}) => {
  const [isActive, setIsActive] = useState(true);

  //const { issues, setIssues } = useContext(IssuesContext);

  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");


  const handleSortingChange = (accessor) => {
    setIsActive((current) => !current);

    const sortOrder =
      accessor === sortField && order === "asc" ? "desc" : "asc";

    setSortField(accessor);
    setOrder(sortOrder);
    handleSorting(accessor, sortOrder);
  };

  const handleSorting = (sortField, sortOrder) => {
    if (sortField) {
      const sorted = [...data].sort((a, b) => {
        if (a[sortField] === null) {
          return 1;
        }
        if (b[sortField] === null) {
          return -1;
        }
        if (a[sortField] === null && b[sortField] === null) {
          return 0;
        }
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      loadIssues(sorted);
    }
  };

  return (
    <th
      className="columnHeader"
      key={headerText}
      style={{ backgroundColor: isActive ? "#607085" : "#435060" }}
      onClick={() => handleSortingChange(headerText)}
    >
      <div>
        <div className="buttonsAndLabel">
          <div style={{}}>
            {headerText === ID ? (
              NO
            ) : headerText.toUpperCase() |
              (headerText === ISSUETYPE) ? (
              ISSUE_TYPE
            ) : headerText.toUpperCase() |
              (headerText.toUpperCase() === SELECTOR ||
                headerText.toUpperCase() === URL) ? (
              <TableFilter
                key={headerText}
                issues={data}
                headerText={headerText}
                loadIssues={loadIssues}
              />
            ) : (
              headerText.toUpperCase()
            )}
          </div>
          <div className="sortButtonsContainer">
            {order === "asc" ? (
              <button className="sortButton asc">▲</button>
            ) : (
              <button className="sortButton desc">▼</button>
            )}
          </div>
        </div>
      </div>
    </th>
  );
};
export default TableSort;
