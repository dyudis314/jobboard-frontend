import * as React from 'react';
import Job from './Job';

const JobsList = ({ jobs, setJobs, filteredJobs }) => {
    return (
        <>
            <ul>
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
            </ul>
        </>
    );
}
export default JobsList;