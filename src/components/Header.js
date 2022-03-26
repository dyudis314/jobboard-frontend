import React from 'react';
import './Header.css';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import { BrowserRouter as Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
//import Box from '@mui/material/Box';

const Header = ({ headerText, headerSubText }) => {

    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return (
        <>
            <Stack className="header-box" spacing={2}>
                <Navbar>
                    <Link to="/about" />
                    <Link to="/contact" />
                    <Link to="/resources" />
                </Navbar>
                <Stack style={{ marginTop: '50px', padding: '10px' }}>
                        <span style={{ textAlign: 'center' }} className="maintext" >
                            {headerText}
                        </span>
                <Stack style={{ margin: '12.5px' }} className="subtext">
                    <span sx={{ color: '#534737' }}>
                        {headerSubText}
                    </span>
                </Stack>
                <Stack>
                    <span sx={{ color: '#534737' }} className="subtext">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </span>
                </Stack>
                </Stack>
            </Stack>
        </>
    );
}
export default Header;