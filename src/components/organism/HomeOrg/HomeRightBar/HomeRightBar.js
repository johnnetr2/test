import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LinesChart from "../../../molecule/Charts/LinesChart";
import { EndPoints, instance2 } from "../../../service/Route";
import moment from "moment";

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
  // const [studentPreference, setStudentPreference] = useState();
  let [showPrognos, seTShowPrognos] = useState();
  let obj = {};
  const [weeklyProgress, setWeeklyProgress] = useState(0);
  const [weeks, setWeeks] = useState();
  let weeklyProgressArr = [];
  let weeksArr = [];

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      const URL = EndPoints.oneDayResult + localStorage.getItem("userId");

      instance2.get(URL).then((response) => {
        const data = datesGroupByComponent(response.data.lastWeek, "W");
        data &&
          Object.values(data).map((key, index) => {
            const week = (Object.keys(data)[index] =
              "V." + Object.keys(data)[index]);
            weeksArr.push(week);
            let obj = {};
            key.map((item) => {
              obj.correctAnswers = obj?.correctAnswers
                ? obj?.correctAnswers + item.correctAnswer
                : item.correctAnswer;
              obj.totalQuestion = obj?.totalQuestion
                ? obj?.totalQuestion + item.answer.length
                : item.length;
            });
            weeklyProgressArr.push(obj);
          });
        setWeeklyProgress(weeklyProgressArr);
        setWeeks(weeksArr);
      });

      const getPreviosRecord =
        EndPoints.studentPerviousProgress + localStorage.getItem("userId");
      instance2.get(getPreviosRecord).then((response) => {
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
    <Container maxWidth={false} style={{ padding: "0 3rem" }}>
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
            }}
          >
            <Box sx={{ width: "49%", backgroundColor: "#fff" }}>
              <QuestionProgressBox
                totalPrognos={props?.totalPrognos}
                showPrognos={showPrognos}
              />
            </Box>
            <Box sx={{ width: "49%", backgroundColor: "#fff" }}>
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
                  weeklyProgress[0] ? weeklyProgress[0].correctAnswers : ""
                }
                tuesdayData={
                  weeklyProgress[1] ? weeklyProgress[1].correctAnswers : ""
                }
                wednesdayData={
                  weeklyProgress[2] ? weeklyProgress[2].correctAnswers : ""
                }
                thursdayData={
                  weeklyProgress[3] ? weeklyProgress[3].correctAnswers : ""
                }
                fridayData={
                  weeklyProgress[4] ? weeklyProgress[4].correctAnswers : ""
                }
                saturdayData={
                  weeklyProgress[5] ? weeklyProgress[5].correctAnswers : ""
                }
                sundayData={
                  weeklyProgress[6] ? weeklyProgress[6].correctAnswers : ""
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
    </Container>
  );
};

export default HomeRightBar;
