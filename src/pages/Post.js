import { BrowserRouter as Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import '../components/Header.css';
import '../index.css';
import { Typography, Card, CardContent, Grid, TextField } from "@material-ui/core";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function Post() {
    return (
      <div>
         <Navbar>
          <Link to="/about"/>
          <Link to="/contact" />
          <Link to="/resources"/>
        </Navbar>
        <Stack className="header-box" spacing={2}>
          <div>
            <Typography sx={{ fontSize: 50 }} className="maintext">
                Looking to post a job?
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: 20, mb: 3, color: '#534737' }} className="header-subtext">
                Fill out the below form!
            </Typography>
          </div>
          </Stack>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField label="Company Name" placeholder="Enter company name" variant="outlined" fullWidth required></TextField>
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField label="Job Title" placeholder="Enter job title" variant="outlined" fullWidth required></TextField>
                </Grid>
                <Grid xs={12} item>
                  <TextField type="email" label="Email" placeholder="Enter email" variant="outlined" fullWidth required></TextField>
                </Grid>
                <Grid xs={12} item>
                  <TextField type="number" label="Phone" placeholder="Enter phone number" variant="outlined" fullWidth required></TextField>
                </Grid>
                <Grid xs={12} item>
                  <TextField multiline rows={4} label="Message" placeholder="Enter job details" variant="outlined" fullWidth required></TextField>
                </Grid>
                <Grid xs={12} item>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
      </div>
    );
  }