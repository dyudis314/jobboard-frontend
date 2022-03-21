import './App.css';
import { React, useEffect, useState } from 'react';
//import FetchJobs from '../src/api/index';
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import JobsList from './components/JobsList';
import Header from './components/Header';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobCategory, setJobCategory] = useState('All');

  /*
  useEffect(() => {
    FetchJobs()
  }, []);
  */

  useEffect(() => {
    fetch('https://digitaltoast-api.herokuapp.com/users')
      .then(response => response.json())
      .then(res => {
        if (res && res.data) {
          setJobs(res.data);
        }
      });
  }, []);

  return (
      <div className="App">
        <Navbar>
          <Link to="/about" />
          <Link to="/contact" />
          <Link to="/post" />
          <Link to="/resources" />
        </Navbar>
        <Header
          jobs={jobs}
          setJobs={setJobs}
          jobCategory={jobCategory}
          setJobCategory={setJobCategory}
          filteredJobs={filteredJobs}
          setFilteredJobs={setFilteredJobs}
        />
        <JobsList
          jobs={jobs}
          setJobs={setJobs}
          filteredJobs={filteredJobs}
        />
      </div>
  );
}

export default App;

