import './App.css';
import { React, useEffect, useState } from 'react';
//import FetchJobs from '../src/api/index';
import JobsList from './components/JobsList';
import Home from './pages/Home';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobCategory, setJobCategory] = useState('All');
  const [headerText, setHeaderText] = useState("")
  const [headerSubText, setHeaderSubtext] = useState("")

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
        <Home
          jobs={jobs}
          setJobs={setJobs}
          jobCategory={jobCategory}
          setJobCategory={setJobCategory}
          filteredJobs={filteredJobs}
          setFilteredJobs={setFilteredJobs}
          headerText={headerText}
          setHeaderText={setHeaderText}
          headerSubText={headerSubText}
          setHeaderSubtext={setHeaderSubtext}
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

