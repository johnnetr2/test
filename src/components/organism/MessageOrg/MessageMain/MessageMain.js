import { Container, Grid, makeStyles } from "@material-ui/core";

import BottomNavBar from "../../../molecule/BottomNavBar/BottomNavBar";
import HomeLeftBar from "../../HomeOrg/HomeLeftBar/HomeLeftBar";
import MessageFeedContent from "../MessageFeedContent/MessageFeedContent";
import React from "react";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1000")]: {
      display: "none",
    },
  },
  leftBarHide: {
    [theme.breakpoints.down("600")]: {
      display: "none",
    },
  },
}));

const MessageMain = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        boxSizing: "border-box",
      }}
    >
      <Grid container wrap="nowrap" sx={{ minHeight: "100vh" }}>
        <Grid
          item
          className={classes.leftBarHide}
          style={{ maxWidth: "6rem" }}
          sm={1}
          xs={1}
          md={1}
          lg={1}
          xl={1}
        >
          <HomeLeftBar currentPage="feedback" />
        </Grid>
        <Grid item sm={12} xs={11} md={11} lg={11} xl={11}>
          <MessageFeedContent />
        </Grid>
      </Grid>
      <BottomNavBar currentPage="feedback" />
    </Container>
  );
};

export default MessageMain;
