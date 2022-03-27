import { React, useEffect } from 'react';
import '../components/Header.css';
import '../index';
import Form from '../components/Form';
import Header from '../components/Header'
import JobsList from '../components/JobsList';
import Loader from '../components/Loader';
import Footer from '../components/Footer'

const Home = ({ jobs, setJobs, jobCategory, setJobCategory, filteredJobs, setFilteredJobs, headerText, setHeaderText, headerSubText, setHeaderSubtext, loading, setLoading }) => {

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
                headerSubText={"Check out our full list of really cool dev and engineer jobs, all at companies that are creating and using cutting edge technologies to help make an impact. You can filter your search (Full-Stack, Frontend and Backend). New jobs are updated every week or so."}
            />
            <Form
                jobs={jobs}
                setJobs={setJobs}
                jobCategory={jobCategory}
                setJobCategory={setJobCategory}
            />
            { loading ? <JobsList
                jobs={jobs}
                setJobs={setJobs}
                filteredJobs={filteredJobs}
                /> : <Loader headerSubText={"Burning the Toast..."}/> }
            <Footer/>
        </> 
    );
}
export default Home;