import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid #212121'
    },
    container: {
        paddingRight: theme.spacing(0),
        paddingLeft: theme.spacing(0),
        marginRight: theme.spacing(0),
        marginLeft: theme.spacing(0),
    }
}))

const Signup_org = () => {

    const classes = useStyles();

    return (
        <Container maxWidth="1200" className={classes.container} sx={{ boxSizing: 'border-box', display: 'flex' }}>
            <Container className={classes.container} sx={{ width: '50%', height:'100vh', backgroundColor: '#0A1596' }}></Container>
            <Container sx={{ width: '50%',  display: 'flex', justifyContent: 'center', alignItem: 'center' }}>
                <Box >
                    <Typography variant="h3">Registrering</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    <Label_field type='text' title="Full Name" />
                    <Label_field type='text' title="Email" />
                    <Label_field type='password' title="Password" />
                    <Typography variant="body1">Glomt losenord?</Typography>
                    <Link to="/login" style={{ textDecoration: 'none' }}><Filled_btn title="Skapa konto" /></Link>
                    <Typography variant="body1">eller</Typography>
                    <Outline_btn title="Konto med Google" />
                    <Typography variant="body1" sx={{ textAlign: 'center', width: '80%' }} >Har du redan ett konto?<Link to="/login">Logga in</Link></Typography>
                    <Typography variant="body1" mt={2} sx={{ textTransform: 'uppercase', fontSize: '.75rem', textAlign: 'center', width: '80%' }}>This site is protected by recaptcha and the Google privacy policy and terms of service apply</Typography>
                </Box>
            </Container>
        </Container>
    )
}

export default Signup_org