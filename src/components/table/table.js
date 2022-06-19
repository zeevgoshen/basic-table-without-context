import React from 'react';
import TableHeaders from './table.headers';
import './table.css';

const Table = ({ data, loadIssues }) => {
  return (
    <table>
      <TableHeaders headernames={data} loadIssues={loadIssues} />
      <tbody>
        {data &&
          data.map((obj, trindex) => (
            <tr key={trindex} className="trSeparator">
              {obj &&
                Object.values(obj).map((value, tdindex) => (
                  <td className="columnCell" key={tdindex}>
                    {value}
                  </td>
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default Table;
