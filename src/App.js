import './App.css';
import { React, useEffect, useState } from 'react';
//import FetchJobs from '../src/api/index';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from './components/Form';
import JobsList from './components/JobsList';


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
      <div className="App">
          <Navbar>
            <Link to="/about"/>
            <Link to="/contact" />
            <Link to="/post" />
            <Link to="/resources"/>
          </Navbar>
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
      </div>
  );
}

export default App;

