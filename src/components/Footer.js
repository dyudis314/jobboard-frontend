import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link'
import '../components/Footer.css';

export default function Footer() {
    return (
        <footer>
            <Box bgcolor="#fdba55" height="200px" textAlign="right">
                <Container maxWidth="xlg">
                    <Grid container style={{ fontSize: '16px' }}>
                        <Grid item xs={12} md={6}>
                            <Link href="/" color="inherit">
                                Home
                            </Link>
                            <Box>
                                <Link href="/about" color="inherit">
                                    About
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/resources" color="inherit">
                                    Resources
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/post" color="inherit">
                                    Post A Job
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box textAlign="left">
                                <a href="http://localhost:3000/" style={{ textDecoration: 'none', color: '#000' }}><img src="./images/logo.png" alt="logo" className="logo_footer" /></a>
                            </Box>
                        </Grid>
                        <Box textAlign="center" >
                            digitalToast.io &reg; {new Date().getFullYear} | Dylan Yudis
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
};