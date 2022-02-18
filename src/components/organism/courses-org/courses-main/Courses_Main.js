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
        <Grid item sm={8} xs={10} style={{border:'1px solid #212121'}}>
          <Feed_Content />
        </Grid>
        <Grid item sm={3} className={classes.right} style={{border:'1px solid #212121'}}>
          <Right_Bar />
        </Grid>
      </Grid>
    </div>
  )
}

export default Courses_Main