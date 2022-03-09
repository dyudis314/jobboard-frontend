import { BrowserRouter as Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import '../components/Post.css';
import { Typography } from "@material-ui/core";
import Box from '@mui/material/Box';

export default function Post() {
    return (
      <div>
         <Navbar>
          <Link to="/about"/>
          <Link to="/contact" />
          <Link to="/resources"/>
        </Navbar>
        <Box>
          <Typography sx={{ fontSize: 40, fontWeight: 'bold' }}>
              We'd love to hear from you!
          </Typography>
        </Box>
      </div>
    );
  }