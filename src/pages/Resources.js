import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import ResourceCard from '../components/Card';
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";


export default function Resources() {

  const useStyles = makeStyles({
    gridContainer: {
      paddingLeft: "40px",
      paddingRight: "40px"
    }
  });

  return (
    <main>
      <Navbar>
        <Link to="/about" />
        <Link to="/contact" />
        <Link to="/resources" />
      </Navbar>
      <Stack className="header-box" spacing={2}>
        <div>
          <Typography sx={{ fontSize: 55 }} className="maintext">
            Resources
          </Typography>
        </div>
        <div>
          <Typography sx={{ fontSize: 20, mb: 3, color: '#534737' }} className="header-subtext">
            Here's a list of resources that will help you land your next job.
          </Typography>
        </div>
      </Stack>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <ResourceCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <ResourceCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <ResourceCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <ResourceCard />
        </Grid>
      </Grid>
    </main>
  );
}
