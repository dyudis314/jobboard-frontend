import { React } from 'react';
import '../components/Loader.css';
import Typography from '@mui/material/Typography';

const Loader = ({ headerSubText }) => {
    return (
        <div className="loader-container">
            <img src="./images/logo.png" className="loader" />
            <Typography sx={{ color: '#534737' }} variant="h6">
                {headerSubText}
            </Typography>
        </div>
    );
}
export default Loader;