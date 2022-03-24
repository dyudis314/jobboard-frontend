import React from 'react';
import './Header.css'
import Typography from '@mui/material/Typography';
import Navbar from "../components/Navbar";
import { BrowserRouter as Link } from "react-router-dom";

const Header = ({ headerText, headerSubText }) => {
    return (
        <>
            <Navbar>
                <Link to="/about" />
                <Link to="/contact" />
                <Link to="/resources" />
            </Navbar>
            <div>
                <Typography sx={{ fontSize: 50, textAlign: 'center', mt: 10 }} className="maintext">
                    {headerText}
                </Typography>
            </div>
            <div>
                <Typography sx={{ fontSize: 20, mb: 3, color: '#534737' }}>
                    {headerSubText}
                </Typography>
            </div>
        </>
    );
}
export default Header;