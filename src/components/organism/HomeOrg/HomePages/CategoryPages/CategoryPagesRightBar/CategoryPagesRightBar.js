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

const useStyles = makeStyles((theme) => ({
  root: {
    "& .css-5xe99f-MuiLinearProgress-bar1": {
      backgroundColor: "#27AE60",
    },
  },
}));

const CategoryPagesRightBar = (props) => {
  console.log(props, "category right bar");
  const [mondayData, setMondayData] = useState("");
  const [tuesdayData, setTuesdayData] = useState("");
  const [wednesdayData, setWednesdayData] = useState("");
  const [thursdayData, setThursdayData] = useState("");
  const [fridayData, setFridayData] = useState("");
  const [saturdayData, setSaturdayData] = useState("");
  const [sundayData, setSundayData] = useState("");
  const classes = useStyles();
  const [progressData, setProgressData] = useState("");
  const [lastWeekTasks, setLastWeekTasks] = useState("");
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const URL = EndPoints.resultBySectionCategory + props.item._id;
    instance2.get(URL).then((response) => {
      if (response.data.message == "success") {
        if (response.data.lastWeek[0]) {
          const totalQuestionMonday = response.data.lastWeek[0].totalQuestion;
          const correctAnswerMonday = response.data.lastWeek[0].correctAnswer;
          const totalCgpaMonday =
            (correctAnswerMonday / totalQuestionMonday) * 2;
          setMondayData(totalCgpaMonday.toFixed(1).replace(/\.0+$/, ""));
          if (response.data.lastWeek[1]) {
            const totalQuestionTuesday =
              response.data.lastWeek[1].totalQuestion;
            const correctAnswerTuesday =
              response.data.lastWeek[1].correctAnswer;
            const totalCgpaTuesday =
              (correctAnswerTuesday / totalQuestionTuesday) * 2;
            setTuesdayData(totalCgpaTuesday.toFixed(1).replace(/\.0+$/, ""));
          }
          if (response.data.lastWeek[2]) {
            const totalQuestionWednesday =
              response.data.lastWeek[2].totalQuestion;
            const correctAnswerWednesday =
              response.data.lastWeek[2].correctAnswer;
            const totalCgpaWednesday =
              (correctAnswerWednesday / totalQuestionWednesday) * 2;
            setWednesdayData(
              totalCgpaWednesday.toFixed(1).replace(/\.0+$/, "")
            );
          }
          if (response.data.lastWeek[3]) {
            const totalQuestionThursday =
              response.data.lastWeek[3].totalQuestion;
            const correctAnswerThursday =
              response.data.lastWeek[3].correctAnswer;
            const totalCgpaThursday =
              (correctAnswerThursday / totalQuestionThursday) * 2;
            setThursdayData(totalCgpaThursday.toFixed(1).replace(/\.0+$/, ""));
          }
          if (response.data.lastWeek[4]) {
            const totalQuestionFriday = response.data.lastWeek[4].totalQuestion;
            const correctAnswerFriday = response.data.lastWeek[4].correctAnswer;
            const totalCgpaFriday =
              (correctAnswerFriday / totalQuestionFriday) * 2;
            setFridayData(totalCgpaFriday.toFixed(1).replace(/\.0+$/, ""));
          }
          if (response.data.lastWeek[5]) {
            const totalQuestionSaturday =
              response.data.lastWeek[5].totalQuestion;
            const correctAnswerSaturday =
              response.data.lastWeek[5].correctAnswer;
            const totalCgpaSaturday =
              (correctAnswerSaturday / totalQuestionSaturday) * 2;
            setSaturdayData(totalCgpaSaturday.toFixed(1).replace(/\.0+$/, ""));
          }
          if (response.data.lastWeek[6]) {
            const totalQuestionSunday = response.data.lastWeek[6].totalQuestion;
            const correctAnswerSunday = response.data.lastWeek[6].correctAnswer;
            const totalCgpaSunday =
              (correctAnswerSunday / totalQuestionSunday) * 2;
            setSundayData(totalCgpaSunday.toFixed(1).replace(/\.0+$/, ""));
          }
        }
      }
    });
  }, []);

  useEffect(() => {
    const URL = EndPoints.testHistory + props.item._id;
    instance2.get(URL).then((response) => {
      setProgressData(response.data, "token response");
    });
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
                (lastWeekTasks.totalCorrectQuestions /
                  lastWeekTasks.totalQuestions) *
                100
              }
            />
            <Typography
              style={{
                marginTop: "-0.95rem",
                position: "absolute",
                fontSize: "12px",
                alignSelf: "center",
                marginLeft: width > 900 ? width * 0.125 : width * 0.34,
                color:
                  lastWeekTasks.totalCorrectQuestions >
                  lastWeekTasks.totalQuestions / 2
                    ? "#F9F9F9"
                    : "",
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
              {lastWeekTasks.totalCorrectQuestions}
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
          <LineDemo sectionId={props.item._id} />
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

            <LinesChart
              mondayData={mondayData}
              tuesdayData={tuesdayData}
              wednesdayData={wednesdayData}
              thursdayData={thursdayData}
              fridayData={fridayData}
              saturdayData={saturdayData}
              sundayData={sundayData}
              CategoryPagesRightBar="categoryPagesRightBar"
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default CategoryPagesRightBar;
