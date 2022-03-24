import '../components/Header.css';
import Header from '../components/Header';
import '../index.css';
import { Card, CardContent, Grid, TextField } from "@material-ui/core";
import Typography from '@mui/material/Typography';

export default function Post() {
  return (
    <div>
        <Header
          headerText={"Looking to post a job?"}
          headerSubText={"Fill out the below form!"}
        />

      <Card style={{ maxWidth: 950, margin: "25px auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography variant="h5" >Contact Us</Typography>
          <Typography variant="body2" gutterBottom component="p" color="textSecondary">Fill out the form and we will get back to you shortly.</Typography>
          <form action="https://formsubmit.co/dyudis314@gmail.com" method="POST">
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField name="company name" label="Company Name" placeholder="Enter company name" variant="outlined" fullWidth required></TextField>
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField name="job title " label="Job Title" placeholder="Enter job title" variant="outlined" fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField name="email" type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField name="number" type="number" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <TextField multiline rows={4} label="Message" placeholder="Enter job details" variant="outlined" fullWidth required></TextField>
              </Grid>
              <Grid xs={12} item>
                <button className="btn">Submit</button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}