import * as React from 'react';
import Job from './Job';
import Container from '@mui/material/Container';

const JobsList = ({ jobs, setJobs, filteredJobs }) => {
    return (
        <>
            <Container maxWidth="lg" minHeight="lg">
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
                        id={job.id}
                        key={job.id}
                    />
                ))}
            </Container>
        </>
    );
}
export default JobsList;