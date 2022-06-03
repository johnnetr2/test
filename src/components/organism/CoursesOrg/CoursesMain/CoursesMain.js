import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import CoursesFeedContent from "../CoursesFeedContent/CoursesFeedContent";
import CoursesRightBar from "../CoursesRightBar/CoursesRightBar";
import CoursesLeftBar from "../CoursesLeftBar/CoursesLeftBar";
import { EndPoints, instance2 } from "../../../service/Route";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const CoursesMain = () => {
  const classes = useStyles();
  const [previousExams, setPreviousExams] = useState();
  const [limit, setLimit] = useState(7);

  useEffect(() => {
    const data = {
      limit,
    };
    const URL = EndPoints.getPreviousExams;
    instance2.get(URL, data).then((response) => {
      console.log(response.data, "this is api response");
      setPreviousExams(response.data.data);
    });
  }, []);

  const LoadMore = () => {
    const limit = setLimit((lim) => lim + 10);
  };
  useEffect(() => {
    console.log(limit, "new limit");
    return;
    // const data = {
    //   limit
    // }
    // const URL = EndPoints.getPreviousExams
    // instance2.get(URL, data).then(response => {
    //   console.log(response.data, 'this is api response')
    //   setPreviousExams(response.data.data)
    // })
  }, [limit]);

  console.log("Courses Main content");

  return (
    <Container maxWidth="false" disableGutters>
      <Container maxWidth="xl" disableGutters>
        <Grid container>
          <Grid item sm={1} xs={1} md={1} lg={1} xl={1}>
            <CoursesLeftBar />
          </Grid>
          <Grid item sm={11} xs={11} md={7} lg={7} xl={7}>
            <CoursesFeedContent
              previousExams={previousExams}
              loadMore={() => LoadMore()}
            />
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
            <CoursesRightBar previousExams={previousExams} />
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default CoursesMain;
