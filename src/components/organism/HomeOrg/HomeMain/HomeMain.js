import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import HomeFeedContent from '../HomeFeedContent/HomeFeedContent'
import HomeRightBar from '../HomeRightBar/HomeRightBar'
import HomeLeftBar from '../HomeLeftBar/HomeLeftBar'

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const HomeMainOrg = () => {

  const classes = useStyles();

  return (
      <Grid container>
        <Grid item sm={1} xs={2} >
          <HomeLeftBar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <HomeFeedContent />
        </Grid>
        <Grid item sm={4} style={{backgroundColor:'#fafafa'}} className={classes.right}>
          <HomeRightBar />
        </Grid>
      </Grid>
  )
}

export default HomeMainOrg