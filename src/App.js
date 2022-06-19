import React, { useState, createContext, useEffect } from 'react';
import Table from './components/table/table';
import axios from 'axios';
import { APIURL } from './constants/strings';
import './style.css';

export default function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    loadIssuesData();
  }, []);

  const loadIssuesData = async () => {
    await axios
      .get(APIURL)
      .then((response) => setIssues(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Table data={issues} loadIssues={setIssues} />
    </div>
  );
}
