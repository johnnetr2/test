import React, { useState, useEffect } from "react";
import { Grid, makeStyles, Container } from "@material-ui/core";
import CoursesFeedContent from "../CoursesFeedContent/CoursesFeedContent";
import CoursesRightBar from "../CoursesRightBar/CoursesRightBar";
import CoursesLeftBar from "../CoursesLeftBar/CoursesLeftBar";
import { EndPoints, instance2 } from "../../../service/Route";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1000")]: {
      display: "none",
    },
  },
  main: {
    [theme.breakpoints.up("1300")]: {
      display: "flex",
      justifyContent: "space-between",
    },
    [theme.breakpoints.down("1280")]: {
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

const CoursesMain = () => {
  const classes = useStyles();
  const [previousExams, setPreviousExams] = useState();
  const [limit, setLimit] = useState(7);
  const [provHistoryData, setProvHistoryData] = useState("");
  const [seasons, setSeasons] = useState();

  useEffect(() => {
    const data = {
      limit,
    };
    const URL = EndPoints.getPreviousExams;
    instance2.get(URL, data).then((response) => {
      setPreviousExams(response.data.data);
    });
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const URL = EndPoints.simuleraQuizHistory + userId;
    console.log(URL, "this is url");
    instance2.get(URL).then((response) => {
      console.log(response.data);
      if (response.data.length > 0) {
        setProvHistoryData(response.data);

        let allSeasons;
        let newSeasons;
        response?.data.map((item) => {
          allSeasons = allSeasons ?? {};
          allSeasons[item.simuleraSeason._id] =
            allSeasons[item.simuleraSeason._id] ?? [];
          allSeasons[item.simuleraSeason._id].push(item);
        });
        Object.keys(allSeasons).map((key) => {
          newSeasons = newSeasons ?? {};
          newSeasons[key] = {
            time: allSeasons[key][allSeasons[key].length - 1].createdAt,
            season: allSeasons[key],
          };
        });
        setSeasons(newSeasons);
        console.log(newSeasons, "this is iiiiiiiiiiiiiiiiiiiiii");
      }
    });
  }, []);

  const LoadMore = () => {
    const limit = setLimit((lim) => lim + 10);
  };
  useEffect(() => {
    return;
    // const data = {
    //   limit
    // }
    // const URL = EndPoints.getPreviousExams
    // instance2.get(URL, data).then(response => {
    //   setPreviousExams(response.data.data)
    // })
  }, [limit]);

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
          item
          className={classes.leftBarHide}
          style={{ maxWidth: "6rem" }}
          sm={1}
          xs={1}
          md={1}
          lg={1}
          xl={1}
        >
          <CoursesLeftBar />
        </Grid>
        <Grid item sm={12} xs={11} md={7} lg={7} xl={7}>
          {/* {seasons &&  */}
          <CoursesFeedContent
            previousExams={previousExams}
            loadMore={() => LoadMore()}
            seasons={seasons}
          />
          {/* } */}
        </Grid>
        <Grid
          item
          style={{ maxWidth: "27rem", backgroundColor: "#fafafa" }}
          className={classes.right}
        >
          <CoursesRightBar
            data={provHistoryData}
            previousExams={previousExams}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CoursesMain;
