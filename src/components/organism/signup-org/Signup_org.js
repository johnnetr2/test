import React from 'react'
import './Signup_org.css'
import { Container, Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Box } from '@mui/material'
import Label_field from '../../../components/molecule/label-field/Label_field';
import Filled_btn from '../../../components/atom/filled-btn/Filled_btn';
import Outline_btn from '../../../components/atom/outline-btn/Outline_btn';

const Signup_org = () => {
<<<<<<< Updated upstream
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
=======

    const [register, setRegister] = useState(
        {
            fullName: "",
            email: "",
            password: ""
        })

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRegister({ ...register, [name]: value })
        console.log(register, "this is the console of the change Handler")
    }

    const clickHandler = (e) => {
        e.preventDefault()
        const data = {
            fullName: register.fullName,
            email: register.email,
            password: register.password
        }

        const URL = EndPoints.SignUp
        instance.post(URL, data).then(response => {
            console.log(response.data.user, 'this is the api response')
            if (response.data.message == 'success') {
                if (response.data.user.token) {
                    swal("Success!", response.data.message, 'success')
                    window.location.href = "/login"
                }
            }
            else {
                swal("Warning!", response.data.message)
            }
        }).catch((error) => {
            console.log(error);
        })

    }

    const useStyle = makeStyles({
        root: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box'
        },
        last_para:
        {
            lineHeight:'.75rem',
            marginTop:'20px',
            textTransform:'uppercase',
            width:'90%',
            textAlign:'center',
            fontSize:'.75rem'
        },
        second_last_para:
        {
            lineHeight:'2.75rem',
            marginTop:'20px',
            textTransform:'uppercase',
            width:'90%',
            textAlign:'center',
            fontSize:'.75rem'
        }
    });

    const classes = useStyle()

    return (
        <>
            <Container style={{ display: 'flex', margin: 0, padding: 0, width: '100%', height:'fit-content' }} >
                <Container style={{ display: 'flex', border:'1px solid #888', backgroundColor: '#0A1596', margin: 0, padding: 0, width: '50vw' }} >
                    {/* <Box elevation={2} style={{height:'50vh', width:'50vh', border:'1px solid #212121', backgroundColor:'red'}}></Box> */}
                </Container>
                <Container style={{ display: 'flex', margin: 0, padding: 100, width: '50vw' }} >
                    <div className="signup-org-1">

                        <div className="inner-signup-org-1">
                            <h1>Registrering</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <Label_field
                                placeholder="Enter Full Name"
                                type='text'
                                onChange={changeHandler}
                                value={register.fullName}
                                name="fullName"
                                title="Full Name" />
                            <Label_field
                                placeholder="Enter Email"
                                type='email'
                                onChange={changeHandler}
                                value={register.email}
                                name="email"
                                title="Email" />
                            <Label_field
                                placeholder="Enter Password"
                                type='password'
                                onChange={changeHandler}
                                value={register.password}
                                name="password"
                                title="Password" />
                            <u>Glomt losenord?</u>
                            <Filled_btn title="Skapa konto" onClick={clickHandler} />
                            <p>eller</p>
                            <Outline_btn title="Konto med Google" />
                            <p className={classes.second_last_para}>Har du redan ett konto?<Link to="/login">Logga in</Link></p>
                            <p className={classes.last_para}>This site is protected by recaptcha and the Google privacy policy and terms of service apply</p>
                        </div>
                    </div>
                </Container>
            </Container>
        </>
>>>>>>> Stashed changes
    )
}

export default Signup_org
