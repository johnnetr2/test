import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import { LinearProgress } from "@mui/material";
import BarChart from "../../../../../molecule/Charts/BarChart";
import LinesChart from "../../../../../molecule/Charts/LinesChart";
import {
  EndPoints,
  instance2,
} from "../../../../../../components/service/Route";
import useWindowDimensions from "../../../../../molecule/WindowDimensions/dimension";
import LineDemo from "../../../../../molecule/Charts/BarChart";
import moment, { weekdays } from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor: "#27AE60",
    },
  },
}));

function datesGroupByComponent(dates, token) {
  return dates.reduce(function (val, obj) {
    let comp = moment(obj['createdAt'], 'YYYY/MM/DD').format(token);
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, {});
}


const CategoryPagesRightBar = (props) => {
  const classes = useStyles();
  const [progressData, setProgressData] = useState("");
  const [lastWeekTasks, setLastWeekTasks] = useState("");
  const { height, width } = useWindowDimensions();
  const [weeklyProgress, setWeeklyProgress] = useState()
  const [weeks, setWeeks] = useState()
  let weeklyProgressArr = []
  let weeksArr = []

  useEffect(() => {

    const lastWeeksData = EndPoints.getLastSevenWeeksData + props.item._id;
    instance2.get(lastWeeksData).then((response) => {

      const data = datesGroupByComponent(response.data.sevenWeekData, 'W')
      data && Object.values(data).map((key, index) => {
        const week = Object.keys(data)[index] = "V." + Object.keys(data)[index]
        weeksArr.push(week)
        let obj = {}
        key.map(item => {
          obj.correctAnswers = obj?.correctAnswers ? obj?.correctAnswers + item.correctAnswer : item.correctAnswer
          obj.totalQuestion = obj?.totalQuestion ? obj?.totalQuestion + item.totalQuestion : item.totalQuestion
        })
        weeklyProgressArr.push(obj)
      })
      console.log(weeklyProgressArr, 'arryaaaa')
      console.log(weeksArr, 'weeeek')
      setWeeklyProgress(weeklyProgressArr)
      setWeeks(weeksArr)
    });

    // const URL = EndPoints.resultBySectionCategory + props.item._id;
    // instance2.get(URL).then((response) => {
    //   if (response.data.message == "success") {
    //     response.data.lastWeek.map((item) => {
    //       const data = new Date(item?.createdAt);
    //       obj[weekDays[data.getDay()]] = {
    //         totalQuestions: obj[weekDays[data.getDay()]]?.totalQuestions
    //           ? obj[weekDays[data.getDay()]]?.totalQuestions +
    //             item.totalQuestion
    //           : item.totalQuestion,
    //         correctAnswer: obj[weekDays[data.getDay()]]?.correctAnswer
    //           ? obj[weekDays[data.getDay()]]?.correctAnswer + item.correctAnswer
    //           : item.correctAnswer,
    //         date: item.createdAt,
    //       };
    //     });

    //     if (Object.values(obj)[0]) {
    //       const totalCgpaMonday =
    //         (Object.values(obj)[0].correctAnswer /
    //           Object.values(obj)[0].totalQuestions) *
    //         2;
    //       setMondayData(totalCgpaMonday.toFixed(1).replace(/\.0+$/, ""));

    //       if (Object.values(obj)[1]) {
    //         const totalCgpaTuesday =
    //           (Object.values(obj)[1].correctAnswer /
    //             Object.values(obj)[1].totalQuestions) *
    //           2;
    //         setTuesdayData(totalCgpaTuesday.toFixed(1).replace(/\.0+$/, ""));
    //       }

    //       if (Object.values(obj)[2]) {
    //         const totalCgpaWednesday =
    //           (Object.values(obj)[2].correctAnswer /
    //             Object.values(obj)[2].totalQuestions) *
    //           2;
    //         setWednesdayData(
    //           totalCgpaWednesday.toFixed(1).replace(/\.0+$/, "")
    //         );
    //       }

    //       if (Object.values(obj)[3]) {
    //         const totalCgpaThursday =
    //           (Object.values(obj)[3].correctAnswer /
    //             Object.values(obj)[3].totalQuestions) *
    //           2;
    //         setThursdayData(totalCgpaThursday.toFixed(1).replace(/\.0+$/, ""));
    //       }

    //       if (Object.values(obj)[4]) {
    //         const totalCgpaFriday =
    //           (Object.values(obj)[4].correctAnswer /
    //             Object.values(obj)[4].totalQuestions) *
    //           2;
    //         setFridayData(totalCgpaFriday.toFixed(1).replace(/\.0+$/, ""));
    //       }

    //       if (Object.values(obj)[5]) {
    //         const totalCgpaSaturday =
    //           (Object.values(obj)[5].correctAnswer /
    //             Object.values(obj)[5].totalQuestions) *
    //           2;
    //         setSaturdayData(totalCgpaSaturday.toFixed(1).replace(/\.0+$/, ""));
    //       }

    //       if (Object.values(obj)[6]) {
    //         const totalCgpaSunday =
    //           (Object.values(obj)[6].correctAnswer /
    //             Object.values(obj)[6].totalQuestions) *
    //           2;
    //         setSundayData(totalCgpaSunday.toFixed(1).replace(/\.0+$/, ""));
    //       }
    //     }
    //   }
    // });
  }, []);

  useEffect(() => {
    // const URL = EndPoints.testHistory + props.item._id;
    // instance2.get(URL).then((response) => {
    //   setProgressData(response.data, "token response");
    // });
    const LastWeekURL = EndPoints.lastWeekTasks + props.item._id;
    instance2.get(LastWeekURL).then((response) => {
      setLastWeekTasks(response.data);
    });
  }, []);

  return (
    <Container
      maxWidth={false}
      style={{
        backgrounColor: "#fafafa",
        padding: "0 3rem",
      }}
    >
      <Box
        sx={{
          height: "fit-content",
          marginTop: width < 901 ? "2rem" : "11.7rem",
        }}
      >
        <Box>
          {width > 900 && <Typography variant="h5">Statistik</Typography>}
          <Typography variant="body2" style={{ marginTop: "0.5rem" }}>
            Du har klarat {lastWeekTasks.totalCorrectQuestions} av{" "}
            {lastWeekTasks.totalQuestions} uppgifter
          </Typography>
        </Box>
        <Box sx={{ marginTop: "1rem" }}>
          <Box
            sx={{
              width: "100%",
              border: "1px solid #dddddd",
              boxShadow: "0px 5px 10px #f2f2f2",
              borderRadius: 5,
              padding: "2rem 1rem",
              backgroundColor: "#fff",
            }}
          >
            <LinearProgress
              className={classes.root}
              sx={{
                height: 13,
                borderRadius: "5rem",
                backgroundColor: "#e1e1e1",
              }}
              variant="determinate"
              value={
                lastWeekTasks
                  ? (lastWeekTasks.totalCorrectQuestions /
                    lastWeekTasks.totalQuestions) *
                  100
                  : 0
              }
            />
            <Typography
              style={{
                marginTop: "-0.95rem",
                position: "absolute",
                fontSize: "12px",
                alignSelf: "center",
                display: "flex",
                flexDirection: "row",
                // width: "3rem",
                marginLeft: width > 900 ? width * 0.125 : width * 0.34,
                color: "#fff",
                // lastWeekTasks.totalCorrectQuestions >
                //   lastWeekTasks.totalQuestions / 2
                //   ? "#F9F9F9"
                //   : "",
              }}
            >
              {lastWeekTasks.totalCorrectQuestions} av{" "}
              {lastWeekTasks.totalQuestions}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "3rem",
            marginBottom: "2rem",
            display: "flex",
          }}
        >
          <Box sx={{ marginRight: "3rem" }}>
            <Typography variant="h5">
              {!lastWeekTasks ? "0" : lastWeekTasks.weeklyCorrectQuestions}
            </Typography>
            <Typography variant="body2">
              Gjorda uppgifter förra veckan
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "1rem" }}>
            <Typography variant="h5">
              {!lastWeekTasks ? "0" : lastWeekTasks.totalCorrectQuestions}
            </Typography>
            <Typography variant="body2">Gjorda uppgifter totalt</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            borderRadius: 3,
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            border: "1px solid #dddddd",
            boxShadow: "0px 5px 10px #f2f2f2",
            padding: "2rem",
            backgroundColor: "#fff",
          }}
        >
          <Typography
            variant="body1"
            style={{
              fontSize: "0.75rem",
              fontWeight: 540,
              marginBottom: ".5rem",
            }}
          >
            UPPGIFTER
          </Typography>
          {weeks && weeklyProgress && <LineDemo weeklyProgress={weeklyProgress} weeks={weeks} />}
        </Box>

        <Box
          sx={{
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h5">
            {lastWeekTasks
              ? (
                (lastWeekTasks.totalCorrectQuestions /
                  lastWeekTasks.totalQuestions) *
                2
              )
                .toFixed(1)
                .replace(/\.0+$/, "")
              : ""}
          </Typography>
          <Typography variant="body2">
            Prognostiserad normerad poäng {props?.item.title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", marginBottom: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              borderRadius: 3,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              border: "1px solid #dddddd",
              boxShadow: "0px 5px 10px #f2f2f2",
              padding: "2rem",
              backgroundColor: "#fff",
            }}
          >
            <Typography
              variant="body1"
              style={{
                fontSize: "0.75rem",
                fontWeight: 540,
                marginBottom: ".5rem",
              }}
            >
              POANG
            </Typography>

            {weeks && weeklyProgress && <LinesChart
              mondayData={weeklyProgress[0]? weeklyProgress[0].correctAnswers : ''}
              tuesdayData={weeklyProgress[1]? weeklyProgress[1].correctAnswers : ''}
              wednesdayData={weeklyProgress[2]? weeklyProgress[2].correctAnswers : ''}
              thursdayData={weeklyProgress[3]? weeklyProgress[3].correctAnswers : ''}
              fridayData={weeklyProgress[4]? weeklyProgress[4].correctAnswers : ''}
              saturdayData={weeklyProgress[5]? weeklyProgress[5].correctAnswers : ''}
              sundayData={weeklyProgress[6]? weeklyProgress[6].correctAnswers : ''}
              weeklyProgress={weeklyProgress} weeks={weeks}
              CategoryPagesRightBar="categoryPagesRightBar"
            />
            }
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryPagesRightBar;
