import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, Typography } from '@mui/material';
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';
import './Login_org.css'

const Login_org = () => {
    return (
        <Container disableGutters maxWidth={false} sx={{ boxSizing: 'border-box', display: 'flex' }}>
            <Container disableGutters sx={{ minHeight: 'fit-content', width: '40%', backgroundColor: '#0A1596' }}></Container>
            <Container disableGutters sx={{ width: '60%', padding: '4rem', display: 'flex', justifyContent: 'center', alignItem: 'center' }} >
                <Box>
                    <Box sx={{ marginBottom: '1rem' }}>
                        <Typography variant="h3" sx={{ marginBottom: '1rem' }}>Logga in</Typography>
                        <Typography variant="body2" >Lorem ipsum, dolor sit amet consectetur adipisicing elit</Typography>
                    </Box>
                    <Label_field type='text' placeholder="Email" title="Email" />
                    <Label_field type='password' placeholder="Password" title="Password" />
                    <Link to="#">Glomt losenord?</Link>
                    <Box sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <Link style={{ textDecoration: 'none' }} to="/dashboard"><Filled_btn title="Logga in" /></Link>
                    </Box>
                    <Typography variant="body1" >eller</Typography>
                    <Box sx={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <Outline_btn title="Logga in Med Google" />
                    </Box>
                    <Typography variant="body1">Har du ingte konto? <Link to="#">Skapa konto har</Link></Typography>
                </Box>
            </Container>
        </Container>
    )
}

export default Login_org