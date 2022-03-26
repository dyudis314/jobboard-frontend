import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../components/Job.css'

const Job = ({ companyName, title, category, datePosted, image, description, url, details, id }) => {
  return (
    <>
<Accordion sx={{ mb: 3}} className="hover" id={id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar alt="companylogo" 
        src={image} 
        sx={{mr: 2, width: 60, height: 60}} 
        style={{alignSelf: 'center', marginLeft: '15px'}} 
        />
        <Stack>
            <span className="companyName">
              {companyName}
            </span>
            <span className="title">
              {title}
            </span>
            <span className="category_datePosted"> 
              #{category} | {datePosted}
            </span>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack sx={{ml: 3}} spacing={3}>
          <Stack className="moreInfo">
            <span>
              <b>Description</b><br></br>
              {description}
            </span>
            <br></br>
            <span>
              <b>Details & Experience</b><br></br>
              {details}
            </span>
          </Stack>
          <div>
            <a href={url} target="_blank" rel="noopener noreferrer"><button className="btn">Apply</button></a>
          </div>
        </Stack>
      </AccordionDetails>
    </Accordion>
    </>
  );
}
export default Job;

/*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/