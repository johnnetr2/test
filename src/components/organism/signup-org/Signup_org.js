import React from 'react'
import './Signup_org.css'
import { Container, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';



const Signup_org = () => {
    return (
        <Container sx={{ margin: 0, padding: 0, boxSizing: 'border-box', display: 'flex' }}>
            <Container sx={{ width: '50%', backgroundColor: '#0A1596' }}></Container>
            <Container sx={{ width: '50%', margin: 5, display:'flex', justifyContent:'center', alignItem:'center' }}>
                <Box>
                    <Typography variant="h3">Registrering</Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    <Label_field type='text' title="Full Name" />
                    <Label_field type='text' title="Email" />
                    <Label_field type='password' title="Password" />
                    <Typography variant="body1">Glomt losenord?</Typography>
                    <Link to="/login" style={{ textDecoration: 'none' }}><Filled_btn title="Skapa konto" /></Link>
                    <Typography variant="body1">eller</Typography>
                    <Outline_btn title="Konto med Google" />
                    <Typography variant="body1" sx={{textAlign:'center', width:'80%'}} >Har du redan ett konto?<Link to="/login">Logga in</Link></Typography>
                    <Typography variant="body1" mt={2} sx={{textTransform:'uppercase', fontSize:'.75rem', textAlign:'center', width:'80%'}}>This site is protected by recaptcha and the Google privacy policy and terms of service apply</Typography>
                </Box>
            </Container>
        </Container>
    )
}

export default Signup_org
