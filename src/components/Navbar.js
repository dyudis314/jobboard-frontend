import React from "react";
import '../index.css';
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
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
    textTransform: "uppercase",
    display: "flex"
  },
  logo: {
    flexGrow: "1",
    cursor: "pointer",
    display: 'flex'
  },
  link: {
    textDecoration: "none",
    color: "#534737",
    fontSize: "20px",
    marginLeft: theme.spacing(10),
    "&:hover": {
      color: "#8f6b3d"
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar style={{ background: 'inherit', boxShadow: 'none' }}>
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          <a href="https://www.digitaltoast.dev/" style={{ textDecoration: 'none', color: '#000' }}><img src="./images/dt_logo.png" alt="logo" className="logo" /></a>
        </Typography>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/resources" className={classes.link}>
              Resources
            </Link>
            <Link to="/post" className={classes.link}>
              <button className="btn">Post a Job</button>
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
