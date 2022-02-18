import React from 'react'
import Logo from '../../../../assets/icons/logo.svg'
import Home from '../../../../assets/icons/homec.svg'
import Course from '../../../../assets/icons/courses.svg'
import Feedback from '../../../../assets/icons/msg.svg'
import Profile from '../../../../assets/icons/profile.svg'
import { Container, makeStyles, Typography } from "@material-ui/core";
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
    backgroundColor: theme.palette.primary.main,
    position: "sticky",
    top: 0,
    [theme.breakpoints.down("sm")]: {
      padding: 0,
      backgroundColor: "#fff"
    },
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "#fff",
      color: "#555",
      border: "1px solid #ece7e7",
    },
  },
  item: {
    display: "flex",
    flexDirection: 'column',
    maxWidth: '10rem',
    minHeight: '8rem',
    border: '1px solid #f0f',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
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
    border: '1px solid #0f0',
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
      <div className={classes.item} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <img src={Logo} style={{ maxWidth: '5rem' }} />
      </div>
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