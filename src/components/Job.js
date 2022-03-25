import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
          <Box>
            <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
              {companyName}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="Box">
              {title}
            </Typography>
          </Box>
          <Box >
            <Typography  color="text.secondary">
              #{category}
            </Typography>
          </Box>
          <Box >
            {/*<Typography variant="body1">
              <AccessTimeIcon sx={{ fontSize: 20 }} /> {datePosted}
              </Typography>*/}
          </Box>
        </Stack>
      </AccordionSummary>
      <AccordionDetails>
        <Stack >
          <Box >
            <Typography>
              <b>Description</b><br></br>
              {description}
            </Typography>
          </Box>
          <Box >
            <Typography>
              <b>Details & Experience</b><br></br>
              {details}
            </Typography>
          </Box>
          <Box>
            <a href={url} target="_blank" rel="noopener noreferrer"><button className="btn">Apply</button></a>
          </Box>
        </Stack>
      </AccordionDetails>
    </Accordion>
    </>
  );
}
export default Job;