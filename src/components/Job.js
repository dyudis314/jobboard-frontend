import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { spacing } from '@mui/system';
import { shadows } from '@mui/system';


const Job = ( {jobs, setJobs, name, age} ) => {
       return (
        <Stack 
        direction="row" 
        spacing={30}
        p={4} 
        sx={{ 
            border: 1, 
            borderRadius: 2,
            mt: 4,
            mb: 4,
            boxShadow: 2,
            borderColor: 'grey.500' }}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
            <h1>{name}</h1>
            <h2>{age}</h2>
        </Stack>
            );
    }
    export default Job;