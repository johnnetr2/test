import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import MessageFeedContent from "../MessageFeedContent/MessageFeedContent";
import MessageLeftBar from "../MessageLeftBar/MessageLeftBar";

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
    <Container maxWidth="false" disableGutters>
      <Grid container>
        <Grid
          item
          style={{ maxWidth: "6rem" }}
          sm={1}
          xs={1}
          md={1}
          lg={1}
          xl={1}
        >
          <MessageLeftBar />
        </Grid>
        <Grid item sm={11} xs={11} md={11} lg={11} xl={11}>
          <MessageFeedContent />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MessageMain;
