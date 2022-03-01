import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Form = ({ jobs, setJobs, jobCategory, setJobCategory }) => {

  const handleChange = (e) => {
    setJobCategory(e.target.value);
  };

  return (
    <Box>
      <FormControl sx={{ minWidth: 160 }}>
        <InputLabel id="demo-simple-select-label">Jobs</InputLabel>
        <Select
          id="job-select"
          value={jobCategory}
          label="Job"
          onChange={handleChange}
        >
          <MenuItem value={"All"}>All</MenuItem>
          <MenuItem value={"Full-Stack"}>Full-Stack</MenuItem>
          <MenuItem value={"Frontend"}>Frontend</MenuItem>
          <MenuItem value={"Backend"}>Backend</MenuItem>
        </Select>
      </FormControl>
  </Box>
  );
}
export default Form;