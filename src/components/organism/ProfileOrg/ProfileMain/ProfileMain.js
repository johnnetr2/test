import React from "react";
import { Grid, Container, makeStyles } from "@material-ui/core";
import ProfileFeedContent from "../ProfileFeedContent/ProfileFeedContent";
import ProfileRightBar from "../ProfileRightBar/ProfileRightBar";
import ProfileLeftBar from "../ProfileLeftBar/ProfileLeftBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1243")]: {
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
}));

const ProfileMain = () => {
  const classes = useStyles();

  return (
    <Container
      maxWidth="false"
      disableGutters
      sx={{
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <Grid container className={classes.main}>
        <Grid
          item
          style={{ maxWidth: "6rem" }}
          sm={1}
          xs={1}
          md={1}
          lg={1}
          xl={1}
        >
          <ProfileLeftBar />
        </Grid>
        <Grid
          item
          sm={11}
          xs={11}
          md={7}
          lg={7}
          xl={7}
          style={{ maxWidth: "100rem" }}
        >
          <ProfileFeedContent />
        </Grid>
        <Grid
          item
          sm={4}
          md={4}
          lg={4}
          xl={4}
          style={{ backgroundColor: "#fafafa", maxWidth: "30rem" }}
          className={classes.right}
        >
          <ProfileRightBar />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileMain;
