import { React, useEffect } from 'react';
import './Header.css';
import Form from './Form';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


const Header = ({jobs, setJobs, jobCategory, setJobCategory, setFilteredJobs}) => {

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
    <Stack className="header-box" spacing={2}>
     <div>
        <Typography sx={{ fontSize: 50, fontWeight: 'bold' }} className="header-maintext">
            Want to find your next dev role?
        </Typography>
     </div>
     <div>
        <Typography sx={{ fontSize: 20, mb: 3, color: '#534737' }} className="header-subtext">
            Get toasty below!
        </Typography>
     </div>
     <div>
        <Form
        jobs={jobs}
        setJobs={setJobs}
        jobCategory={jobCategory}
        setJobCategory={setJobCategory}
        />
     </div>
    </Stack>
    );
}
export default Header