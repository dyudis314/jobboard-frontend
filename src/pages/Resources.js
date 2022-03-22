import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';

export default function Resources() {

  const useStyles = makeStyles({
    root: {
      minWidth: 200
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });

  const classes = useStyles();

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
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                Blind 75
              </Typography>
              <CardMedia
                component="img"
                height="200"
                image="./images/blind75.png"
                alt="blind75"
              />
              <Typography className={classes.pos} color="textSecondary">
                #datastructures #algorithms
              </Typography>
              <Typography variant="body2" component="p">
                75 practice problems for your next coding interview.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" target="_blank" href="https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                frontendeval
              </Typography>
              <CardMedia
                component="img"
                height="200"
                image="./images/frontendeval.png"
                alt="frontendeval"
              />
              <Typography className={classes.pos} color="textSecondary">
                #frontend
              </Typography>
              <Typography variant="body2" component="p">
                Free exercises to practice for modern frontend development interviews
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="https://frontendeval.com/" target="_blank">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                CS Career Questions
              </Typography>
              <CardMedia
                component="img"
                height="200"
                image="./images/reddit.png"
                alt="reddit"
              />
              <Typography className={classes.pos} color="textSecondary">
                #advice
              </Typography>
              <Typography variant="body2" component="p">
                A subreddit for those with questions about working in computer-science.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" target="_blank" href="https://www.reddit.com/r/cscareerquestions/">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={2}>
          <Card className={classes.root} variant="outlined">
            <CardContent>
              <Typography variant="h5" component="h2">
                protege.dev
              </Typography>
              <CardMedia
                component="img"
                height="200"
                image="./images/protege.png"
                alt="protege.dev"
              />
              <Typography className={classes.pos} color="textSecondary">
                #jobs
              </Typography>
              <Typography variant="body2" component="p">
                Browse the latest opportunities in tech.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" target="blank " href="https://protege.dev/">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </main>
  );
}
