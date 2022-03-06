import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './Header.css'


const Form = ({ jobCategory, setJobCategory }) => {

  const handleChange = (e) => {
    setJobCategory(e.target.value);
  };

  return (
    <div>
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
  </div>
  );
}
export default Form;