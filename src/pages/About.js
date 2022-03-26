import Typography from '@mui/material/Typography';
import { Card, CardContent } from "@material-ui/core";
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import '../components/Header.css';
import Header from '../components/Header';
import '../index.css';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Footer from '../components/Footer'

export default function About() {
  return (
    <Container sx={{textAlign: 'center', alignItems: 'center', justifyContent: 'center'}}>
        <Header
          headerText={"The crispy mission."}
          headerSubText={"Finding you the best dev and engineer jobs, hot off the press."}
        />
      <Card style={{ maxWidth: 950, margin: "25px auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography variant="h4">What is...digitalToast?</Typography>
          <Typography variant="h6">digitalToast is a job board that features bleeding edge engineering + dev jobs.<br></br><br></br>  It's built on Node, React and Material UI. <br></br><br></br>  As someone who switched careers early on (music to tech), my aim with this project was to provide a fresh selection of dev + engineering roles. Please feel free to reach out below if you have ideas on how to expand digitalToast.<br></br><br></br></Typography>
          <Typography variant="h4">Wait, but why... Toast?</Typography>
          <Typography variant="h6">One Sunday morning, I was making the breakfast of champions (eggs 🥚 + bacon 🥓 + toast 🍞 of course!). As I was buttering my toast, something hit me: I should make a digital job board that features unique opportunities that I'd be super interested in.<br></br><br></br> And I should call it digitalToast!<br></br><br></br>To this day, I still don't know where the name came from... <br></br><br></br>And voila! digitalToast was born 👼<br></br><br></br></Typography>
          <Grid container>
            <Grid item xs={12}>
              <Card style={{ maxWidth: 550, padding: "20px 5px", margin: '0 auto' }} className="hover">
                <CardContent>
                  <CardMedia
                    sx={{ borderRadius: 4 }}
                    component="img"
                    alt="dylan"
                    width="150"
                    height="450"
                    image="./images/dylan.jpg"
                    />
                  <Box sx={{mt: 2}}>
                    <Typography variant="h4">Dylan Yudis</Typography>
                    <Box sx={{mt: 1}}>
                      <a style={{ padding: 4 }} href="https://twitter.com/dylanyudis" target="_blank"><TwitterIcon sx={{fontSize: 32}}/></a>
                      <a style={{ padding: 4} } href="https://www.dylanyudis.com/" target="_blank"><LanguageIcon sx={{fontSize: 32}}/></a>
                      <a style={{ padding: 4 }} href="https://github.com/dyudis314" target="_blank"><GitHubIcon sx={{fontSize: 32}} /></a>
                      <a style={{ padding: 4 }} href="mailto:dyudis314@gmail.com" target="_blank"> <EmailIcon sx={{fontSize: 32}} /></a>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
      </CardContent>
      </Card>
      <Footer />
    </Container>
  );
}