import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import ProfileFeedContent from "../ProfileFeedContent/ProfileFeedContent";
import ProfileRightBar from "../ProfileRightBar/ProfileRightBar";
import ProfileLeftBar from "../ProfileLeftBar/ProfileLeftBar";
import HomeLeftBar from "../../HomeOrg/HomeLeftBar/HomeLeftBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const ProfileMain = () => {
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
            <ProfileLeftBar />
          </Grid>
          <Grid item sm={6} xs={10}>
            <ProfileFeedContent />
          </Grid>
          <Grid item sm={5} style={{ backgroundColor: "#fafafa" }}>
            <ProfileRightBar />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ProfileMain;
