import * as React from 'react';
import '../index.css'
import Header from '../components/Header';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from '@mui/material/Typography';
import { Grid } from "@material-ui/core";
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';

export default function Resources() {

  const useStyles = makeStyles({
    root: {
      minWidth: 225,
      maxWidth: 450
    },
    pos: {
      marginBottom: 12
    },
    gridContainer: {
      marginTop: '5px',
      padding: "20px",
      justify: "center"
    }
  });

  const classes = useStyles();

  return (
    <>
      <Header
        headerText={"The Resources Page."}
        headerSubText={"Here's a list of resources to help you land that next, cool dev or engineer role."}
      />
      <Grid container spacing={4} className={classes.gridContainer}>
        {<Grid item xs={12} sm={6} md={4} >
          <CardActionArea target="_blank" href="https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions">
            <Card style={{ height: 450 }} className={classes.root} className="hover" variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 1 }} >
                  Blind 75
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image="./images/blind75.png"
                  alt="blind75"
                />
                <Typography className={classes.pos} color="textSecondary">
                  #datastructures #algorithms
                </Typography>
                <Typography variant="body1" component="p">
                  75 LeetCode practice problems for your next coding interview.
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>}
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea target="_blank" href="https://frontendeval.com/">
            <Card style={{ height: 450 }} className={classes.root} className="hover" variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                  frontendeval.com
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image="./images/frontendeval.png"
                  alt="frontendeval"
                />
                <Typography className={classes.pos} color="textSecondary">
                  #frontend
                </Typography>
                <Typography variant="body1" component="p">
                  Free exercises to practice for modern frontend development interviews.
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea target="_blank" href="https://www.reddit.com/r/cscareerquestions/">
            <Card style={{ height: 450 }} className={classes.root} className="hover" variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                  cscareerquestions
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image="./images/reddit.png"
                  alt="reddit"
                />
                <Typography className={classes.pos} color="textSecondary">
                  #advice
                </Typography>
                <Typography variant="body1" component="p">
                  A subreddit for those with questions about working in computer-science.
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea target="_blank" href="https://protege.dev/">
            <Card style={{ height: 450 }} className={classes.root} className="hover" variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                  protege.dev
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image="./images/protege.png"
                  alt="protege.dev"
                />
                <Typography className={classes.pos} color="textSecondary">
                  #jobs
                </Typography>
                <Typography variant="body1" component="p">
                  Browse the latest opportunities in tech.
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea target="_blank" href="https://haseebq.com/farewell-app-academy-hello-airbnb-part-i/">
            <Card style={{ height: 450 }} className={classes.root} className="hover" variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                  haseebq.com
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image="./images/haseebq.png"
                  alt="blog"
                />
                <Typography className={classes.pos} color="textSecondary">
                  #inspo
                </Typography>
                <Typography variant="body1" component="p">
                  An inspirational story with loads of cs career advice.
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea target="_blank" href="https://www.youtube.com/watch?v=Pk7LeAU-avM">
            <Card style={{ height: 450 }} className={classes.root} className="hover" variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                  Full-Stack Project Idea
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image="./images/boba.png"
                  alt="boba app tutorial video"
                />
                <Typography className={classes.pos} color="textSecondary">
                  #projects
                </Typography>
                <Typography variant="body1" component="p">
                  A tutorial on how to create a mini, full-stack boba app.
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea target="_blank" href="https://www.freecodecamp.org/">
            <Card style={{ height: 450 }} className={classes.root} className="hover" variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                  freecodecamp.org
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image="./images/fcc.png"
                  alt="freecodecamp.org"
                />
                <Typography className={classes.pos} color="textSecondary">
                  #learn
                </Typography>
                <Typography variant="body1" component="p">
                  Learn to code for free!
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea target="_blank" href="https://www.youtube.com/playlist?list=PLxjGQaV8rAh31XjOpXApfzfs2L8S5gKfp">
            <Card style={{ height: 450 }} className={classes.root} className="hover" variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                  Andrew LaCivita
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image="./images/andrewlacivita.png"
                  alt="andrew lacivita"
                />
                <Typography className={classes.pos} color="textSecondary">
                  #advice
                </Typography>
                <Typography variant="body1" component="p">
                  Some of the best techniques in answering and asking job interview questions.
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardActionArea target="_blank" href="https://www.youtube.com/c/DThompsonDev">
            <Card style={{ height: 450 }} className={classes.root} className="hover" variant="outlined">
              <CardContent>
                <Typography variant="h4" component="h2" sx={{ mb: 1 }}>
                  Danny Thompson
                </Typography>
                <CardMedia
                  component="img"
                  height="300"
                  image="./images/dannythompson.png"
                  alt="andrew lacivita"
                />
                <Typography className={classes.pos} color="textSecondary">
                  #advice
                </Typography>
                <Typography variant="body1" component="p">
                  Interview tips and ways to optimize your job search.
                </Typography>
              </CardContent>
              <CardActions>
              </CardActions>
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </>
  );
}