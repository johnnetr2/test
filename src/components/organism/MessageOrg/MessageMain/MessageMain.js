import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import MessageFeedContent from "../MessageFeedContent/MessageFeedContent";
import MessageLeftBar from "../MessageLeftBar/MessageLeftBar";
import HomeLeftBar from "../../HomeOrg/HomeLeftBar/HomeLeftBar";

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
      <Container maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
            <MessageLeftBar />
          </Grid>
          <Grid item sm={11} xs={11} md={11} lg={11} xl={11}>
            <MessageFeedContent />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default MessageMain;
