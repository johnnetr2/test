import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import MessageFeedContent from '../MessageFeedContent/MessageFeedContent'
import MessageRightBar from '../MessageRightBar/MessageRightBar'
import MessageLeftBar from '../MessageLeftBar/MessageLeftBar'

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const MessageMain = () => {

  const classes = useStyles();

  return (
      <Grid container>
        <Grid item sm={1} xs={2} >
          <MessageLeftBar/>
        </Grid>
        <Grid item sm={7} xs={10}>
          <MessageFeedContent />
        </Grid>
        <Grid item sm={4} className={classes.right}>
          <MessageRightBar />
        </Grid>
      </Grid>
  )
}

export default MessageMain