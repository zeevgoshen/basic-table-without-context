import React from 'react';
import TableSort from './table.sort.js';
import './table.css';

const TableHeaders = ({ headernames, loadIssues }) => {
  let headers;

  if (headernames[0]) {
    headers = Object.keys(headernames[0]);
  }

  return (
    <thead>
      <tr key={1}>
        {headers &&
          headers.map((header) => {
            return (
              <TableSort
                key={header}
                headerText={header}
                loadIssues={loadIssues}
                data={headernames}
              />
            );
          })}
      </tr>
    </thead>
  );
};
export default TableHeaders;
