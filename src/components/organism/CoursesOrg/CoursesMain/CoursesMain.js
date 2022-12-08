import { Container, Grid, makeStyles } from "@material-ui/core";
import { EndPoints, instance2 } from "../../../service/Route";
import React, { useEffect, useState } from "react";

import BottomNavBar from "../../../molecule/BottomNavBar/BottomNavBar";
import CoursesFeedContent from "../CoursesFeedContent/CoursesFeedContent";
import CoursesRightBar from "../CoursesRightBar/CoursesRightBar";
import HomeLeftBar from "../../HomeOrg/HomeLeftBar/HomeLeftBar";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("1200")]: {
      display: "none",
    },
    padding: "0 1rem",
  },
  main: {
    minHeight: "100vh",
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
  const [provpassSeasons, setProvpassSeasons] = useState();
  const userId = useSelector((state) => state.value.user._id);

  useEffect(() => {
    const data = {
      limit,
    };
    const getPreviosExams = EndPoints.getPreviousExams;
    instance2.get(getPreviosExams, data).then((response) => {
      console.log(response, "get previous exams");
      setPreviousExams(response.data.data);
    });

    const URL = EndPoints.simuleraQuizHistory + userId;
    instance2.get(URL).then((response) => {
      if (response.data.length > 0) {
        let newArray = [];
        response.data &&
          response.data.map((item) => {
            let obj = item ?? {};
            let totalQuestions = 0;
            let totalAnswer = 0;
            let date;

            item.simuleraQuizResult.map((result) => {
              totalQuestions = totalQuestions + result.totalQuestions;
              totalAnswer = totalAnswer + result.correctAnswerCounter;
            });
            obj["totalQuestions"] = totalQuestions;
            obj["totalAnswer"] = totalAnswer;

            newArray.push(obj);
          });
        setProvHistoryData(newArray);

        let provPassArray = [];
        newArray?.map((item) => {
          const exist = provPassArray.some(
            (elem) => item.simuleraSeason?._id == elem.simuleraSeason?._id
          );
          if (!exist) {
            provPassArray.push(item);
          } else {
            const simuleraQ = provPassArray.find(
              (ques) => item.simuleraSeason._id == ques.simuleraSeason._id
            );
            const date1 = new Date(simuleraQ.createdAt);
            const date2 = new Date(item.createdAt);
            if (date1.getTime() < date2.getTime()) {
              const index = provPassArray.findIndex(
                (obj) => item.simuleraSeason._id == obj.simuleraSeason._id
              );
              provPassArray.splice(index, 1, item);
            }
          }
        });
        setProvpassSeasons(provPassArray);
      }
    });
  }, []);

  const LoadMore = () => {
    const limit = setLimit((lim) => lim + 10);
  };

  return (
    <Container maxWidth="false" disableGutters>
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
          {/* <CoursesLeftBar /> */}
          <HomeLeftBar currentPage="course" />
        </Grid>
        <Grid item xs={12} sm={10} lg={7} xl={7} style={{ margin: "0 auto" }}>
          <CoursesFeedContent
            previousExams={previousExams}
            data={provHistoryData}
            loadMore={() => LoadMore()}
            seasons={provpassSeasons}
          />
        </Grid>
        <Grid
          item
          style={{
            width: "35rem",
            backgroundColor: "#fafafa",
          }}
          className={classes.right}
        >
          <CoursesRightBar
            data={provHistoryData}
            previousExams={previousExams}
          />
        </Grid>
      </Grid>
      <BottomNavBar currentPage="course" />
    </Container>
  );
};

export default CoursesMain;
