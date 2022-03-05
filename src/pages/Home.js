/*import { React, useEffect, useState } from 'react';
import JobsList from '../components/JobsList';
import Form from '../components/Form';

export default function Home() {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [jobCategory, setJobCategory] = useState('All');
    
    
    /*
    useEffect(() => {
      FetchJobs()
    }, []);

    
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
      <main style={{ padding: "1rem 0" }}>
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
      </main>
    );
  }*/