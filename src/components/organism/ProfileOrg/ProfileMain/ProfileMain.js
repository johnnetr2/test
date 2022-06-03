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
      maxWidth="false"
      disableGutters
      sx={{
        boxSizing: "border-box",
        display: "flex",
      }}
    >
      <Container
        maxWidth="xl"
        disableGutters
        sx={{
          boxSizing: "border-box",
          display: "flex",
        }}
      >
        <Grid container>
          <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
            <ProfileLeftBar />
          </Grid>
          <Grid item sm={11} xs={11} md={7} lg={7} xl={7}>
            <ProfileFeedContent />
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ backgroundColor: "#fafafa" }}
          >
            <ProfileRightBar />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default ProfileMain;
