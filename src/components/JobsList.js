import * as React from 'react';
import Container from '@mui/material/Container';
import Job from './Job';

const JobsList = ({ jobs, setJobs, filteredJobs }) => {
    return (
        <Container>
            <ul className="jobs-list">
                {filteredJobs.map((job) => (
                    <Job
                        jobs={jobs}
                        setJobs={setJobs}
                        job={job}
                        companyName={job.company_name}
                        title={job.title}
                        category={job.category}
                        datePosted={job.date_posted}
                        image={job.image}
                        description={job.description}
                        url={job.url}
                        details={job.details}
                    />
                ))}
            </ul>
        </Container>
    );
}
export default JobsList;