import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import ProfileFeedContent from '../ProfileFeedContent/ProfileFeedContent'
import ProfileRightBar from '../ProfileRightBar/ProfileRightBar'
import ProfileLeftBar from '../ProfileLeftBar/ProfileLeftBar'

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ProfileMain = () => {

  const classes = useStyles();

  return (
      <Grid container>
        <Grid item sm={1} xs={2} >
          <ProfileLeftBar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <ProfileFeedContent />
        </Grid>
        <Grid item sm={4} className={classes.right}>
          <ProfileRightBar />
        </Grid>
      </Grid>
  )
}

export default ProfileMain