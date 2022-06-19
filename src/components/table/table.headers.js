import React from "react";
import TableSort from "./table.sort.js";
import "./table.css";

const TableHeaders = (props) => {
  let headers;

  if (props.headernames[0]) {
    headers = Object.keys(props.headernames[0]);
  }

  return (
    <thead>
      <tr key={1}>
        {headers &&
          headers.map((header) => {
            return <TableSort key={header} headerText={header} loadIssues={props.loadIssues} data={props.headernames}/>;
          })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
