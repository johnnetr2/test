import React from 'react'
import Logo from '../../../../assets/icons/logo.svg'
import Home from '../../../../assets/icons/homec.svg'
import Course from '../../../../assets/icons/courses.svg'
import Feedback from '../../../../assets/icons/msg.svg'
import Profile from '../../../../assets/icons/profile.svg'
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
// import {
//   Bookmark,
//   List,
//   ExitToApp,
//   Home,
//   Person,
//   PhotoCamera,
//   PlayCircleOutline,
//   Settings,
//   Storefront,
//   TabletMac,
// } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRight: '1px solid #e1e1e1',
    height: "100vh",
    backgroundColor: '#f9f9f9',
    color: "white",
    paddingRight: theme.spacing(0),
    paddingLeft: theme.spacing(0),
    position:'sticky',
    top:0,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      backgroundColor: "#fff"
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#fff",
      color: "#555",
    },
  },
  item: {
    display: "flex",
    flexDirection: 'column',
    minHeight: '5rem',
    marginBottom: theme.spacing(1),
    "&:hover": {
      backgroundColor: '#0A1596'
    },
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(0),
      cursor: "pointer",
    },
  },
  icon: {
    height: '2rem',
    marginBottom: theme.spacing(1),
  },
  text: {
    fontSize: '0.65rem',
    textAlign: 'center',
    textTransform: 'uppercase',
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const LeftBar = () => {

  const classes = useStyles();

  return (

    <Container className={classes.container}>
      <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight:'5rem', borderBottom:'1px solid #e1e1e1' }}>
        <img src={Logo} style={{ maxWidth: '4rem' }} />
      </Box>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Home} className={classes.icon} />
        <Typography variant="body1" component="body1" className={classes.text}>Dashboard</Typography>
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Course} className={classes.icon} />
        <Typography variant="body1" component="body1" className={classes.text}>Simulera prov</Typography>
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Feedback} className={classes.icon} />
        <Typography variant="body1" component="body1" className={classes.text}>Feedback</Typography>
      </div>
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center' }}>
        <img src={Profile} className={classes.icon} />
        <Typography variant="body1" component="body1" className={classes.text}>Profile</Typography>
      </div>
    </Container>
  )
}

export default LeftBar