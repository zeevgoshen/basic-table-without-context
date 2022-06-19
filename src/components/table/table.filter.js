import React, { useState, useContext, useMemo } from "react";
import { IssuesContext } from "../../App";

import "./table.css";

// When the filter text doesn't match, we show the full list of issues

const TableFilter = (props) => {
  const [filterText, setFilter] = useState("");

  // using this state so we can reload the full issuelist
  // when no results are found
  //const [allIssues, setAllIssues] = useState(props.issues);

  // We will be using setIssues (from context) to update
  // the table with the filtered results
  //const { issues, setIssues } = useContext(IssuesContext);

  // const filteredIssues = useMemo(() => {
  //   // no search text in the search textbox
  //   // show all issues
  //   if (filterText.length === 0) {
  //     //setIssues(allIssues);
  //     props.loadIssues(props.data)
  //   }

  //   return props.data.filter((issue) => {
  //     return filterText.length > 0
  //       ? issue.selector.toLowerCase().includes(filterText.toLowerCase()) ||
  //           issue.url.toLowerCase().includes(filterText.toLowerCase())
  //       : props.data;
  //   });
  // }, [filterText, props.data]);

  // if (filteredIssues.length > 0 && filteredIssues.length < allIssues.length) {
  //   props.loadIssues(filteredIssues);
  // } else if (filteredIssues.length === 0) {
  //   props.loadIssues(props.data);
  // }

  // return (
  //   <div className="filterHeader">
  //     <label className="filterHeaderLabel">
  //       {props.headerText.toUpperCase()}
  //     </label>
  //     <input
  //       type="text"
  //       onChange={(e) => {
  //         setFilter(e.target.value);
  //       }}
  //       onClick={(e) => {
  //         e.stopPropagation();
  //       }}
  //       className="filterTextBox"
  //     />
  //   </div>
  // );
};
export default TableFilter;
