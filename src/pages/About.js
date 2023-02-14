import { Card, CardContent } from "@material-ui/core";
import '../index.css';
import '../components/Header.css';
import '../pages/About.css';
import Header from '../components/Header';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import EmailIcon from '@mui/icons-material/Email';

export default function About() {
  return (
    <Container sx={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
      <Header
        headerText={"The Crispy Mission."}
        headerSubText={"Finding you the best dev and engineer jobs, hot off the press. Let's dive into the story behind the Toast."}
      />
      <Card style={{ maxWidth: 950, margin: "25px auto", padding: "20px 5px" }}>
        <CardContent>
          <span className="headingText">What is...digitalToast?</span><br></br>
          <span className="bodyText">digitalToast is a career resources website that features cutting edge engineering + dev jobs 💻 <br></br><br></br>  It's built on Node, React and Material UI. <br></br><br></br>  As someone who switched careers early on&mdash;from music to tech&mdash;I always faced challenges in my job search. My aim with this project is to provide a fresh selection of dev + engineering roles.<br></br> Please feel free to reach out below if you have ideas on how to expand digitalToast.<br></br><br></br></span>
          <span className="headingText">Wait, but why... Toast?</span><br></br>
          <span className="bodyText">One Sunday morning, I was making the breakfast of champions: 🥚 + 🥓 + 🍞  = 🔥 ❗<br></br> As I was buttering my toast, something hit me: I should make a digital job board that features unique opportunities that I'd be super interested in 🤷<br></br><br></br> And I should call it digitalToast! 💯<br></br><br></br>And voila! digitalToast was born 👼<br></br><br></br></span>
          <Grid container>
            <Grid item xs={12}>
              <Card style={{ maxWidth: 400, margin: '0 auto' }} className="hover">
                <CardContent>
                  <CardMedia
                  
                    component="img"
                    alt="dylan"
                    image="./images/dylan_lifestyle.jpg"
                  />
                  <Box sx={{ mt: 2 }}>
                    <span className="headingText">Dylan Yudis</span><br></br>
                    <span className="bodyText">Executive Chef | Toast Master</span>
                    <Box sx={{ mt: 1 }}>
                      <IconButton aria-label="dylanyudis.com" onClick={() => window.open('https://www.dylanyudis.com/')}>
                        <LanguageIcon />
                      </IconButton>
                      <IconButton aria-label="https://www.linkedin.com/in/dylanyudis/" onClick={() => window.open('https://www.linkedin.com/in/dylanyudis/')}>
                        <LinkedInIcon />
                      </IconButton>
                      <IconButton aria-label="mailto:dyudis314@gmail.com" onClick={() => window.open('mailto:dyudis314@gmail.com')}>
                        <EmailIcon />
                      </IconButton>
                      <IconButton aria-label="https://twitter.com/dylanyudis" onClick={() => window.open('https://twitter.com/dylanyudis')}>
                        <TwitterIcon />
                      </IconButton>
                      <IconButton aria-label="https://github.com/dyudis314" onClick={() => window.open('https://github.com/dyudis314')}>
                        <GitHubIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}