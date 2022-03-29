import { React, useEffect } from 'react';
import '../components/Header.css';
import '../index';
import Form from '../components/Form';
import Header from '../components/Header'
import JobsList from '../components/JobsList';
import Loader from '../components/Loader';

const Home = ({ jobs, setJobs, jobCategory, setJobCategory, filteredJobs, setFilteredJobs,loading }) => {

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
                headerSubText={"Fantastic. You’ve come to the right place. Below is a list of really cool dev and engineering jobs that I hope you’ll like. Use the filter to narrow your search. Let’s get toasty!"}
            />
            <Form
                jobs={jobs}
                setJobs={setJobs}
                jobCategory={jobCategory}
                setJobCategory={setJobCategory}
            />
            {loading ? <JobsList
                jobs={jobs}
                setJobs={setJobs}
                filteredJobs={filteredJobs}
            /> : <Loader headerSubText={"Burning the Toast..."} />}
        </>
    );
}
export default Home;