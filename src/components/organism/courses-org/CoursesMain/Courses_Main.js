import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import Feed_Content from '../feed-content/Feed_Content'
import Right_Bar from '../right-bar/Right_Bar'
import Left_Bar from '../left-bar/Left_Bar'

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Courses_Main = () => {

  const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Grid item sm={1} xs={2} >
          <Left_Bar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed_Content />
        </Grid>
        <Grid item sm={4} className={classes.right}>
          <Right_Bar />
        </Grid>
      </Grid>
    </div>
  )
}

export default Courses_Main