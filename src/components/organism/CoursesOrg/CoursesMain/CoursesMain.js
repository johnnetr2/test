import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
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
    <div>
      <Grid container>
        <Grid item sm={1} md={1} xs={1}>
          <CoursesLeftBar />
        </Grid>
        <Grid item sm={7} md={7} xs={11}>
          <CoursesFeedContent />
        </Grid>
        <Grid item sm={4} md={4} className={classes.right}>
          <CoursesRightBar />
        </Grid>
      </Grid>
    </div>
  );
};

export default CoursesMain;
