import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< Updated upstream
import { Container, Box, Typography } from '@mui/material';
=======
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box } from '@mui/material'
>>>>>>> Stashed changes
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';
import './Login_org.css'

const Login_org = () => {
    return (
<<<<<<< Updated upstream
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
=======
        <>
            <Container style={{ display: 'flex', margin: 0, padding: 0, width: '100vw', height: '100vh' }}>
                <Container style={{ display: 'flex', backgroundColor: '#0A1596', margin: 0, padding: 0, width: '50vw' }}></Container>
                <Container style={{ display: 'flex', margin: 0, padding: 50, width: '50vw', boxSizing: 'border-box' }}>
                    <div className="login-org-1">
                        <div className="inner-login-org">
                            <h1>Logga in</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                            <Label_field
                                name="email"
                                type='text'
                                onChange={getVal}
                                value={user.email}
                                title="Email" />
                            <Label_field
                                type='password'
                                onChange={getVal}
                                name="password"
                                value={user.password}
                                title="Password" />
                            <u>Glomt losenord?</u>
                            <Link to="/dashboard"><Filled_btn onClick={loginFunc} title="Logga in" /></Link>
                            <p>eller</p>
                            <Outline_btn title="Logga in Med Google" />
                            <p className="last-para-1">Har du ingte konto? <u>Skapa konto har</u></p>
                        </div>
                    </div>
                </Container>
            </Container>

        </>
>>>>>>> Stashed changes
    )
}

export default Login_org
