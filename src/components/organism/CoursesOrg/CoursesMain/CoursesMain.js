import React from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import CoursesFeedContent from "../CoursesFeedContent/CoursesFeedContent";
import CoursesRightBar from "../CoursesRightBar/CoursesRightBar";
import CoursesLeftBar from "../CoursesLeftBar/CoursesLeftBar";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const CoursesMain = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="false" disableGutters>
      <Container maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
            <CoursesLeftBar />
          </Grid>
          <Grid item sm={11} xs={11} md={7} lg={7} xl={7}>
            <CoursesFeedContent />
          </Grid>
          <Grid
            item
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ backgroundColor: "#fafafa" }}
            className={classes.right}
          >
            <CoursesRightBar />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default CoursesMain;
