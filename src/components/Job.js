import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Job = ({companyName, title, category, datePosted, image, description, url }) => {
       return (
        <Card sx={{ minWidth: 275, mb: 3,display: 'flex'}}>
        <CardContent>
          <Avatar alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {companyName}
          </Typography>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {category}
          </Typography>
          <Typography variant="body2">
            {datePosted}
          </Typography>
        </CardContent>
        {/*<CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>*/}
      </Card>
      );
    }
    export default Job;