import { React, useEffect } from 'react';
import './Header.css';
import Form from './Form';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


const Header = ({jobs, setJobs, jobCategory, setJobCategory, filteredJobs, setFilteredJobs}) => {

    useEffect(() => {
        filterJobs();
        },[jobs, jobCategory])
       
    const filterJobs = () => {
    if (jobCategory === 'Full-Stack') {
        setFilteredJobs(jobs.filter(job => job.category === 'Full-Stack'))
    } else if (jobCategory === 'Frontend') {
        setFilteredJobs(jobs.filter(job => job.category === 'Frontend'))
    } else if (jobCategory === 'Backend') {
        setFilteredJobs(jobs.filter(job => job.category === 'Backend'))
    } else {
        setFilteredJobs(jobs)
        }
    }

    return (
    <Box className="header-box">
     <Typography sx={{ fontSize: 38 }} gutterBottom>
        Find your next dev or engineering role
     </Typography>
     <Form
        jobs={jobs}
        setJobs={setJobs}
        jobCategory={jobCategory}
        setJobCategory={setJobCategory}
        />
    </Box>
    );
}
export default Header