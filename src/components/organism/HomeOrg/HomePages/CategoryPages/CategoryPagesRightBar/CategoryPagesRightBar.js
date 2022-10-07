import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import {
  EndPoints,
  instance2,
} from "../../../../../../components/service/Route";
import React, { useEffect, useState } from "react";
import moment, { weekdays } from "moment";

import BarChart from "../../../../../molecule/Charts/BarChart";
import { DTKNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { ELFNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { KVANormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { LASNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import LineDemo from "../../../../../molecule/Charts/BarChart";
import { LinearProgress } from "@mui/material";
import LinesChart from "../../../../../molecule/Charts/LinesChart";
import { MEKNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { NOGNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { ORDNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import { XYZNormeringValueFor } from "../../../../../atom/percentageCalculator/PercentageCalculator";
import useWindowDimensions from "../../../../../molecule/WindowDimensions/dimension";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor: "#27AE60",
    },
  },
}));

function datesGroupByComponent(dates, token) {
  return dates.reduce(function (val, obj) {
    let comp = moment(obj["createdAt"], "YYYY/MM/DD").format(token);
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, {});
}

const CategoryPagesRightBar = (props) => {
  const classes = useStyles();
  const [progressData, setProgressData] = useState("");
  const [lastWeekTasks, setLastWeekTasks] = useState("");
  const { height, width } = useWindowDimensions();
  const [weeklyProgress, setWeeklyProgress] = useState();
  const [weeks, setWeeks] = useState();
  const [prognos, setPrognos] = useState();
  const [weeklyCorrect, setWeeklyCorrect] = useState();
  let weeklyProgressArr = [];
  let weeksArr = [];
  let newArray = [];

  useEffect(() => {
    const lastWeeksData = EndPoints.getLastSevenWeeksData + props.item._id;
    instance2.get(lastWeeksData).then((response) => {
      const data = datesGroupByComponent(response.data.sevenWeekData, "W");
      let previousweeks = [];
      let a;
      if (Object.keys(data).length < 7) {
        let keys = Object.keys(data); //35,36
        let first = keys[0]; //35
        a = 7 - Object.keys(data).length; //5
        let b = first - a; //30 //first = 35
        for (let index = b; index < first; index++) {
          previousweeks.push("V." + index);
        }

        let obj = {};
        for (let index = 0; index < a; index++) {
          obj.correctAnswers = 0;
          obj.attemptQuestions = 0;
          obj.eachCategoryPrognos = 0;
          obj.totalQuestion = 0;
          weeklyProgressArr.push(obj);
        }
      }
      data &&
        Object.values(data).map((key, index) => {
          const week = (Object.keys(data)[index] =
            "V." + Object.keys(data)[index]);

          let obj = {};
          weeksArr.push(week);
          newArray = previousweeks.concat(weeksArr);

          key.map((item) => {
            obj.correctAnswers = obj?.correctAnswers
              ? obj?.correctAnswers + item.correctAnswer
              : item.correctAnswer;
            obj.totalQuestion = obj?.totalQuestion
              ? obj?.totalQuestion + item.totalQuestion
              : item.totalQuestion;
            obj.attemptQuestions = obj?.attemptQuestions
              ? obj?.attemptQuestions + item.answer.length
              : item.answer.length;
          });
          var overAllprognos = obj?.correctAnswers / obj.attemptQuestions;
          var a = overAllprognos * 2;
          obj.eachCategoryPrognos = a.toFixed(1);
          weeklyProgressArr.push(obj);
        });
      setWeeklyProgress(weeklyProgressArr);
      setWeeks(newArray);
    });
  }, []);

  useEffect(() => {
    // const URL = EndPoints.testHistory + props.item._id;
    // instance2.get(URL).then((response) => {
    //   setProgressData(response.data, "token response");
    // });
    const LastWeekURL = EndPoints.lastWeekTasks + props.item._id;
    instance2.get(LastWeekURL).then((response) => {
      setLastWeekTasks(response.data);
      const weeklyAttempted = datesGroupByComponent(
        response.data.weeklyCorrectQuestions,
        "W"
      );
      // const aks = Object.keys(weeklyCorrect);
      // let totalCorrect = 0;
      // console.log(weeklyCorrect, "WC");
      const WeeklyObjArray = Object.keys(weeklyAttempted).pop();
      const AttemptedExercises = weeklyAttempted[WeeklyObjArray];
      // // const WeeklyObjArray = Object.keys(weeklyCorrect);
      // // for (let i = 0; i < CorrectAnswers.length; i++) {
      // //   totalCorrect = totalCorrect + CorrectAnswers[i].correctAnswer;
      // // }
      if (AttemptedExercises?.length !== 0) {
        setWeeklyCorrect(AttemptedExercises?.length);
      } else {
        setWeeklyCorrect(0);
      }

      setPrognos(
        (response.data.totalCorrectQuestions /
          response.data.totalAttemptedQuestions) *
          100
      );
    });
  }, []);

  const percentageCalculation = (prognos) => {
    if (props?.item.title == "XYZ") {
      return XYZNormeringValueFor(prognos);
    } else if (props?.item.title == "KVA") {
      return KVANormeringValueFor(prognos);
    } else if (props?.item.title == "NOG") {
      return NOGNormeringValueFor(prognos);
    } else if (props?.item.title == "DTK") {
      return DTKNormeringValueFor(prognos);
    } else if (props?.item.title == "ELF") {
      return ELFNormeringValueFor(prognos);
    } else if (props?.item.title == "LÄS") {
      return LASNormeringValueFor(prognos);
    } else if (props?.item.title == "ORD") {
      return ORDNormeringValueFor(prognos);
    } else if (props?.item.title == "MEK") {
      return MEKNormeringValueFor(prognos);
    }
  };

  return (
    <Box
      maxWidth={true}
      style={{
        backgrounColor: "#fafafa",
        padding: { xs: "0 !important", md: "0 3rem" },
      }}
    >
      <Box
        sx={{
          height: "fit-content",
          marginTop: width < 1280 ? "2rem" : "11.7rem",
        }}
      >
        <Box>
          {width > 900 && (
            <Typography variant="h5">Statistik - {props.item.title}</Typography>
          )}
          <Typography variant="body2" style={{ marginTop: "0.5rem" }}>
            Du har klarat
            {` ${lastWeekTasks && lastWeekTasks?.totalAttemptedQuestions} `} av
            {` ${lastWeekTasks && lastWeekTasks?.totalQuestions} `}
            uppgifter
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
                  ? (lastWeekTasks.totalAttemptedQuestions /
                      lastWeekTasks.totalQuestions) *
                    100
                  : 0
              }
            />
            {/* <Typography
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
            </Typography> */}
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
              {!weeklyCorrect ? "0" : weeklyCorrect}
            </Typography>
            <Typography variant="body2">
              Klarade uppgifter denna veckan
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "1rem" }}>
            <Typography variant="h5">
              {!lastWeekTasks ? "0" : lastWeekTasks.totalAttemptedQuestions}
            </Typography>
            <Typography variant="body2">Klarade uppgifter totalt</Typography>
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
            // overflow: "scroll",
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
            Uppgifter
          </Typography>
          {weeks && weeklyProgress && (
            <LineDemo weeklyProgress={weeklyProgress} weeks={weeks} />
          )}
        </Box>

        <Box
          sx={{
            marginTop: "4rem",
            marginBottom: "2rem",
          }}
        >
          <Typography variant="h5">
            {prognos ? percentageCalculation(prognos) : 0}
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
              // overflow: "scroll",
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
              Poäng
            </Typography>

            {weeks && weeklyProgress && (
              <LinesChart
                syncId="anyId"
                mondayData={
                  weeklyProgress[0]
                    ? weeklyProgress[0].eachCategoryPrognos
                    : null
                }
                tuesdayData={
                  weeklyProgress[1]
                    ? weeklyProgress[1].eachCategoryPrognos
                    : null
                }
                wednesdayData={
                  weeklyProgress[2]
                    ? weeklyProgress[2].eachCategoryPrognos
                    : null
                }
                thursdayData={
                  weeklyProgress[3]
                    ? weeklyProgress[3].eachCategoryPrognos
                    : null
                }
                fridayData={
                  weeklyProgress[4]
                    ? weeklyProgress[4].eachCategoryPrognos
                    : null
                }
                saturdayData={
                  weeklyProgress[5]
                    ? weeklyProgress[5].eachCategoryPrognos
                    : null
                }
                sundayData={
                  weeklyProgress[6]
                    ? weeklyProgress[6].eachCategoryPrognos
                    : null
                }
                weeklyProgress={weeklyProgress}
                weeks={weeks}
                CategoryPagesRightBar="categoryPagesRightBar"
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CategoryPagesRightBar;
