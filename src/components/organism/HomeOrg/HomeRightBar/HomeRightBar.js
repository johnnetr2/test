import { Box, Container, Typography, makeStyles } from "@material-ui/core";
import { EndPoints, instance2 } from "../../../service/Route";
import React, { useEffect, useState } from "react";

import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LinesChart from "../../../molecule/Charts/LinesChart";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import { createTheme } from "@mui/material/styles";
import moment from "moment";
import { padding } from "@mui/system";
import { useSelector } from "react-redux";

function datesGroupByComponent(dates, token) {
  return dates.reduce(function (val, obj) {
    let comp = moment(obj["createdAt"], "YYYY/MM/DD").format(token);
    (val[comp] = val[comp] || []).push(obj);
    return val;
  }, {});
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: "#fff",
  },
}));
const HomeRightBar = (props) => {
  const classes = useStyles();
  const theme = createTheme();
  const { token, user } = useSelector((state) => state.value);
  // const [studentPreference, setStudentPreference] = useState();
  let [showPrognos, seTShowPrognos] = useState();
  const [weeklyProgress, setWeeklyProgress] = useState(0);
  const [weeks, setWeeks] = useState();
  let weeklyProgressArr = [];
  let weeksArr = [];
  let newArray = [];

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    if (user._id) {
      const URL = EndPoints.oneDayResult + user._id;
      instance2.get(URL, { headers }).then((response) => {
        const data = datesGroupByComponent(response.data.lastWeek, "W");
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
            obj.attemptedQuestion = 0;
            obj.overAllprognos = null;
            weeklyProgressArr.push(obj);
          }
        }
        data &&
          Object.values(data).map((key, index) => {
            const week = (Object.keys(data)[index] =
              "V." + Object.keys(data)[index]);
            weeksArr.push(week);
            newArray = previousweeks.concat(weeksArr);
            let obj = {};
            key.map((item) => {
              obj.correctAnswers = obj?.correctAnswers
                ? obj?.correctAnswers + item.correctAnswer
                : item.correctAnswer;
              obj.attemptedQuestion = obj?.attemptedQuestion
                ? obj?.attemptedQuestion + item.attemptedQuestion
                : item.attemptedQuestion;
            });
            var overAllprognos = obj?.correctAnswers / obj?.attemptedQuestion;
            var a = overAllprognos * 2;
            obj.overAllprognos = a.toFixed(1);
            weeklyProgressArr.push(obj);
          });

        setWeeklyProgress(weeklyProgressArr);
        setWeeks(newArray);
      });

      const getPreviosRecord = EndPoints.studentPerviousProgress + user._id;
      instance2.get(getPreviosRecord, { headers }).then((response) => {
        response.data.Data.map((item) => {
          if (item.CorrectQuestion < 1) {
            seTShowPrognos(false);
            return;
          }
        });
      });
    }
  }, []);

  // useEffect(() => {
  //   const studentPrefenenceURL =
  //     EndPoints.getStudentPreference + localStorage.getItem("userId");
  //   instance2.get(studentPrefenenceURL).then((response) => {
  //     console.log(response, "home right bar get api response");
  //     if (response?.data?.StudentPreference) {
  //       setStudentPreference(response.data.StudentPreference);
  //     }
  //   });
  // }, [props.StudentPreference]);

  return (
    <Box sx={{ padding: { xs: 0, sm: "0 3rem" }, width: "100%" }}>
      <Box
        sx={{
          height: "auto",
          marginTop: "6rem",
        }}
      >
        <Box style={{ marginTop: "10.5rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginTop: "2rem",
              marginBottom: "1.5rem",
            }}
          >
            Analys
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              rowGap: ".5rem",
            }}
          >
            <Box
              sx={{ width: { xs: "100%", sm: "49%" }, backgroundColor: "#fff" }}
            >
              <QuestionProgressBox
                totalPrognos={props?.totalPrognos}
                showPrognos={showPrognos}
              />
            </Box>
            <Box
              sx={{ width: { xs: "100%", sm: "49%" }, backgroundColor: "#fff" }}
            >
              <GoalBox
                // goalPoint={
                //   props.studentPreference && props.studentPreference
                //     ? props.studentPreference.point
                //     : studentPreference?.point
                // }
                goalPoint={
                  props?.studentPreference?.point &&
                  props?.studentPreference?.point
                }
              />
            </Box>
          </Box>
        </Box>
        <Box style={{ marginTop: "2rem" }}>
          <Typography
            variant="h6"
            component="h6"
            style={{
              marginTop: "2rem",
              marginBottom: "1rem",
            }}
          >
            Utveckling
          </Typography>
          <Box
            sx={{
              display: "flex",
              height: "18rem",
              backgroundColor: "#fff",

              borderRadius: 3,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
              border: "1px solid #dddddd",
              boxShadow: "0px 5px 10px #f2f2f2",
              padding: "2rem",
              [theme.breakpoints.down("md")]: {
                padding: "1rem",
                overflow: "scroll",
              },
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
                  weeklyProgress[0] ? weeklyProgress[0].overAllprognos : ""
                }
                tuesdayData={
                  weeklyProgress[1] ? weeklyProgress[1].overAllprognos : ""
                }
                wednesdayData={
                  weeklyProgress[2] ? weeklyProgress[2].overAllprognos : ""
                }
                thursdayData={
                  weeklyProgress[3] ? weeklyProgress[3].overAllprognos : ""
                }
                fridayData={
                  weeklyProgress[4] ? weeklyProgress[4].overAllprognos : ""
                }
                saturdayData={
                  weeklyProgress[5] ? weeklyProgress[5].overAllprognos : ""
                }
                sundayData={
                  weeklyProgress[6] ? weeklyProgress[6].overAllprognos : ""
                }
                weeklyProgress={weeklyProgress}
                weeks={weeks}
                HomeRightBar="homeRightBar"
              />
            )}
          </Box>

          <Box style={{ marginTop: "2rem" }}>
            <Typography
              variant="h6"
              component="h6"
              style={{
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
            >
              Nästa prov
            </Typography>
            <Box sx={{ display: "flex", marginBottom: "1rem" }}>
              <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
                <ImpDatesCard
                  season={
                    props?.studentPreference?.season &&
                    props?.studentPreference?.season
                  }
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeRightBar;
