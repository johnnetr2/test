import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Box, Typography } from '@mui/material';
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';
import './Login_org.css'

const Login_org = () => {
    return (
        <Container sx={{margin:0, padding:0, boxSizing:'border-box', display:'flex'}}>
            <Container sx={{height:'100vh', width:'50%', backgroundColor:'#0A1596'}}></Container>
            <Container sx={{width:'50%', margin:5}} >
            <Box>
                <Typography variant="h3" >Logga in</Typography>
                <Typography variant="body1" >Lorem ipsum, dolor sit amet consectetur adipisicing elit</Typography>
                <Label_field type='text' title="Email" />
                <Label_field type='password' title="Password" />
                <Link to="#">Glomt losenord?</Link>
                <Link style={{textDecoration:'none'}} to="/dashboard"><Filled_btn title="Logga in" /></Link>
                <Typography variant="body1" >eller</Typography>
                <Outline_btn title="Logga in Med Google" />
                <Typography variant="body1">Har du ingte konto? <Link to="#">Skapa konto har</Link></Typography>
            </Box>
            </Container>
        </Container>
    )
}

export default Login_org
