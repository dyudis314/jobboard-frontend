import './App.css';
import { React, useEffect, useState } from 'react';
import Form from './components/Form';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Container from '@mui/material/Container';
import FetchJobs from '../src/api/index';
import JobsList from './components/JobsList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


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
  fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(res => {
  if (res && res.data) {
  setJobs(res.data);
  console.log('API works');
      }
  });
}, []);


useEffect(() => {
  filterJobs();
},[jobs, jobCategory])
 
const filterJobs = () => {
  switch(jobCategory) {
      case 'Full-Stack' :
        setFilteredJobs(jobs.filter(job => job.category === 'Full-Stack'))
      break;
      case 'Frontend' :
        setFilteredJobs(jobs.filter(job => job.category === 'Frontend'))
      break;
      case 'Backend' :
        setFilteredJobs(jobs.filter(job => job.category === 'Backend'))
      break;
      default :
        setFilteredJobs(jobs)
      break;
  }
}

  return (
    <Router>
      <div className="App">
        <Container maxWidth="100vw">
          <ResponsiveAppBar />
            <Routes>
              <Route path="/home">
                <br></br>
                <Form
                jobs={jobs}
                setJobs={setJobs}
                jobCategory={jobCategory}
                setJobCategory={setJobCategory}
                />
                <JobsList 
                jobs={jobs} 
                setJobs={setJobs}
                filteredJobs={filteredJobs}
                />
              </Route>
            </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
