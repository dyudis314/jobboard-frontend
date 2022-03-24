import Typography from '@mui/material/Typography';
import { Card, CardContent } from "@material-ui/core";
import Avatar from '@mui/material/Avatar';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../components/Header.css';
import Header from '../components/Header';


export default function About() {
  return (
    <main>
        <Header
          headerText={"The crispy mission."}
          headerSubText={"Finding you the best dev and engineer jobs, hot off the press."}
        />
      <Card style={{ maxWidth: 950, margin: "25px auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography variant="h4">What is...digitalToast?</Typography>
          <Typography variant="h6">digitalToast is a job board that features bleeding edge engineering + dev jobs.<br></br><br></br>  It's built on a Node (backend) and React + Material UI (frontend). <br></br><br></br>  As someone who switched careers early on (music to tech), my aim with this project is to provide a fresh selection of dev + engineering roles. Please feel free to reach out below if you have ideas on how to expand digitalToast.<br></br><br></br></Typography>
          <Typography variant="h4">Wait, but why... Toast?</Typography>
          <Typography variant="h6">One Sunday morning, I was making the breakfast of champions (eggs, bacon... and toast, of course!). As I was buttering my toast, something hit me: I should make a digital job board that features unique opportunities that I'd be super interested in.<br></br><br></br> And I should call it digitalToast.<br></br><br></br>To this day, I still don't know where the name came from... <br></br><br></br>But voila! digitalToast was born.<br></br><br></br></Typography>
          <Card style={{ maxWidth: 450, margin: "25px auto", padding: "20px 5px" }}>
            <CardContent>
              <Avatar alt="dylan" src="./images/dylan.jpg" sx={{ width: 106, height: 106 }} />
              <Typography></Typography>
              <TwitterIcon href="https://twitter.com/dylanyudis" target="_blank" />
              <LanguageIcon href="#" />
              <GitHubIcon />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </main>
  );
}