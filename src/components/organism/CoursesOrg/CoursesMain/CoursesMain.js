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
            <CoursesLeftBar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <CoursesFeedContent />
          </Grid>
          <Grid item sm={4} className={classes.right}>
            <CoursesRightBar />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default CoursesMain;
