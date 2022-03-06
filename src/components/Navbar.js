import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from './Drawer';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginRight: theme.spacing(5),
    textTransform: "uppercase",
    display: "flex"
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    marginRight: theme.spacing(15),
  },
  link: {
    textDecoration: "none",
    color: "#404040",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "black",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" style={{ background: '#dac2ac' }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <a href="http://localhost:3001/" style={{ textDecoration: 'none', color: '#000' }}><img src="./images/dt_logo.png" className="logo"/></a>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/contact" className={classes.link}>
              Contact
            </Link>
            <Link to="/post" className={classes.link}>
              Post a Job
            </Link>
            <Link to="/resources" className={classes.link}>
              Resources
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
