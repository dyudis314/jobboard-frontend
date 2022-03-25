import { React } from 'react';
import Container from '@mui/material/Container';
import '../components/Loader.css';

const Loader = () => {
return (
    <div className="loader-container">
       <img src="./images/logo.png" className="loader"/>
    </div> 
    );
}
export default Loader;