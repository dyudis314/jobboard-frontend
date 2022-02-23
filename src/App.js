import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Container from '@mui/material/Container';
//import FetchJobs from '../src/api/index';
import JobsList from './components/JobsList';


function App() {
const [jobs, setJobs] = useState([]);

const fetchJobs = () => {
  fetch('http://localhost:3000/users')
  .then(response => response.json())
  .then(res => {
  if (res && res.data) {
    setJobs(res.data);
   console.log(jobs);
      }
  })
};
fetchJobs()
 

  return (
    <div className="App">
      <Container maxWidth="100vw">
        <ResponsiveAppBar />
        <Header
        jobs={jobs}
        setJobs={setJobs}
        />
        <JobsList jobs={jobs} setJobs={setJobs}/>
      </Container>
    </div>
  );
}

export default App;
