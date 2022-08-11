import React from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import ProfileFeedContent from "../ProfileFeedContent/ProfileFeedContent";
import ProfileRightBar from "../ProfileRightBar/ProfileRightBar";
import HomeLeftBar from "../../HomeOrg/HomeLeftBar/HomeLeftBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1200")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  leftBarHide: {
    [theme.breakpoints.down("600")]: {
      display: "none",
    },
  },
}));

const ProfileMain = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        boxSizing: "border-box",
      }}
    >
      <Grid container wrap="nowrap" className={classes.main}>
        <Grid
          className={classes.leftBarHide}
          item
          style={{ maxWidth: "6rem" }}
          sm={1}
          xs={1}
          md={1}
          lg={1}
          xl={1}
        >
          <HomeLeftBar currentPage="profile" />
        </Grid>
        <Grid
          item
          sm={11}
          xs={12}
          md={7}
          lg={7}
          xl={7}
          style={{ maxWidth: "100rem" }}
        >
          <ProfileFeedContent />
        </Grid>
        <Grid
          item
          style={{
            backgroundColor: "#fafafa",
            width: "35rem",
          }}
          className={classes.right}
        >
          <ProfileRightBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileMain;
