import React from 'react';
import './Header.css'
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import { BrowserRouter as Link } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const Header = ({ headerText, headerSubText }) => {
    return (
        <>
        <Stack className="header-box" spacing={2}>
            <Navbar>
                <Link to="/about" />
                <Link to="/contact" />
                <Link to="/resources" />
            </Navbar>
                <div style={{ marginTop: '50px', padding: '10px' }}>     
                    <div>
                        <Typography sx={{ textAlign: 'center' }} className="maintext" variant="h3">
                            {headerText}
                        </Typography>
                    </div>
                    <div style={{ margin: '12.5px' }}>
                        <Typography sx={{ color: '#534737' }} variant="h6">
                            {headerSubText}
                        </Typography>
                    </div>
                    <div>
                        <Typography sx={{ color: '#534737' }} variant="h6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Typography>
                    </div>
                </div>     
            </Stack>
        </>
    );
}
export default Header;