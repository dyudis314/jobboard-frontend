import React from 'react';
import Box from '@mui/material/Box';
import '../components/Header.css';
import Input from '@mui/material/Input';


const Header = () => {

return (
    <Box className="header-box">
        <h1>JobBoard</h1>
        <h3>Find Your Next Job...</h3>
        <Input />
    </Box>
    ); 

}

export default Header;