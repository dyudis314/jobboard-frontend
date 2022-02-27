import './App.css';
import { React, useEffect, useState } from 'react';
import Form from './components/Form';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Container from '@mui/material/Container';
import FetchJobs from '../src/api/index';
import JobsList from './components/JobsList';


function App() {
const [jobCategory, setJobCategory] = useState('All');
const [jobs, setJobs] = useState([]);

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
        setJobs(jobs.filter(job => job.category === 'Full-Stack'))
      break;
      case 'Frontend' :
        setJobs(jobs.filter(job => job.category === 'Frontend'))
      break;
      case 'Backend' :
        setJobs(jobs.filter(job => job.category === 'Backend'))
      break;
      default :
      setJobs(jobs)
      break;
  }
}

  return (
    <div className="App">
      <Container maxWidth="100vw">
        <ResponsiveAppBar />
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
        />
      </Container>
    </div>
  );
}

export default App;
