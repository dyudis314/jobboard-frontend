import { React, useEffect } from 'react';
import '../components/Header.css';
import '../index';
import Form from '../components/Form';
import Header from '../components/Header'
import JobsList from '../components/JobsList';

const Home = ({ jobs, setJobs, jobCategory, setJobCategory, filteredJobs, setFilteredJobs, headerText, setHeaderText, headerSubText, setHeaderSubtext }) => {

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

    useEffect(() => {
        filterJobs();
    }, [jobs, jobCategory]);


    return (
        <>
            <Header
                headerText={"Want to Find Your Next Dev Role?"}
                headerSubText={"Let's Get Toasty!"}
            />
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
        </>
    );
}
export default Home;