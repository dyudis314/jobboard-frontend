import * as React from 'react';
import Container from '@mui/material/Container';
import Job from './Job';

const JobsList = ( {jobs, setJobs} ) => {
    return (
        <Container>
            <ul className="jobs-list">
                {jobs.map((job) => (
                    <Job
                    jobs={jobs}
                    setJobs={setJobs}
                    job={job}
                    name={job.name}
                    age={job.age}
                    />
                ))}
            </ul>
        </Container>
    )  
}
export default JobsList;