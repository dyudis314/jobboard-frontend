import './App.css';
import { React, useEffect, useState } from 'react';
//import { FetchJobs } from '../src/api/index';
import Home from './pages/Home';

function App() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [jobCategory, setJobCategory] = useState('All');
  const [headerText, setHeaderText] = useState("");
  const [headerSubText, setHeaderSubtext] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('https://jobboard-api-2.herokuapp.com/jobs')
      .then(response => response.json())
      .then(res => {
        if (res) {
          setJobs(res);
          setLoading(true);
          console.log(res[0])
        }
      });
  }, []);

  //https://digitaltoast-api.herokuapp.com/users

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
          jobs={jobs}
          setJobs={setJobs}
          filteredJobs={filteredJobs}
          loading={loading}
          setLoading={setLoading}
        />
      </div>
  );
}

export default App;

