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
    <Container
      maxWidth="xl"
      disableGutters
      sx={{
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <Grid container>
          <Grid item sm={1} xs={2}>
            <MessageLeftBar />
          </Grid>
          <Grid item sm={11} xs={10}>
            <MessageFeedContent />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default MessageMain;
