import React from 'react';
import './Header.css';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Stack from '@mui/material/Stack';

const Header = ({ headerText, headerSubText }) => {

    return (
        <>
            <Stack className="header-box" spacing={2} sx={{mb: -5}}>
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
                </Stack>
            </Stack>
        </>
    );
}
export default Header;