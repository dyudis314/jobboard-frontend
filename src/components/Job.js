import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../index';

const Job = ({ companyName, title, category, datePosted, image, description, url, details, id }) => {
  return (
    <>
    <Accordion sx={{ mb: 3}} className="hover" id={id}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Avatar alt="companylogo" src={image} sx={{mr: 2}} />
        <Stack>
          <div>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              {companyName}
            </Typography>
          </div>
          <div>
            <Typography variant="h6" component="div">
              {title}
            </Typography>
          </div>
          <div >
            <Typography  color="text.secondary">
              #{category}
            </Typography>
          </div>
          <div >
            <Typography variant="body1">
              {datePosted}
              </Typography>
          </div>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack >
          <div >
            <Typography>
              <b>Description</b><br></br>
              {description}
            </Typography>
          </div>
          <div >
            <Typography>
              <b>Details & Experience</b><br></br>
              {details}
            </Typography>
          </div>
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