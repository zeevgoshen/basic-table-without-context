import React, { useState, useContext, useMemo } from 'react';
import { IssuesContext } from '../../App';

import './table.css';

// When the filter text doesn't match, we show the full list of issues

// const TableFilter = (props) => {
const TableFilter = ({loadIssues, issues, headerText}) => {
  const [filterText, setFilter] = useState('');

  // using this state so we can reload the full issuelist
  // when no results are found
  const [allIssues, setAllIssues] = useState(issues);

  // We will be using setIssues to update
  // the table with the filtered results

  const filteredIssues = useMemo(() => {
    // no search text in the search textbox
    // show all issues
    if (filterText.length === 0) {
      //setIssues(allIssues);
      loadIssues(allIssues);
    }

    return (
      allIssues &&
      allIssues.filter((issue) => {
        console.log(issue.url.toLowerCase());
        return filterText.length > 0
          ? issue.selector.toLowerCase().includes(filterText.toLowerCase()) ||
              issue.url.toLowerCase().includes(filterText.toLowerCase())
          : allIssues;
      })
    );
  }, [filterText, allIssues]);

  if (filteredIssues.length > 0 && filteredIssues.length < allIssues.length) {
    loadIssues(filteredIssues);
  } else if (filteredIssues.length === 0) {
    loadIssues(allIssues);
  }

  return (
    <div className="filterHeader">
      <label className="filterHeaderLabel">
        {headerText.toUpperCase()}
      </label>
      <input
        type="text"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="filterTextBox"
      />
    </div>
  );
};
export default TableFilter;
