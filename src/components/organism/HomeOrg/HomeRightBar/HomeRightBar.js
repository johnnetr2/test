import React, { useEffect, useState } from "react";
import { Container, makeStyles, Typography, Box } from "@material-ui/core";
import QuestionProgressBox from "../../../../components/molecule/QuestionProgressBox/QuestionProgressBox";
import GoalBox from "../../../../components/molecule/GoalBox/GoalBox";
import ImpDatesCard from "../../../../components/molecule/ImpDatesCard/ImpDatesCard";
import LinesChart from "../../../molecule/Charts/LinesChart";
import { EndPoints, instance2 } from "../../../service/Route";
// import { synchronizedLineChartData } from "../data/Data";

const useStyles = makeStyles((theme) => ({
  root: {
    backgrounColor: "#fff",
  },
}));

const HomeRightBar = (props) => {
  const classes = useStyles();
  const [studentPreference, setStudentPreference] = useState();
  const [mondayData, setMondayData] = useState(0);
  const [tuesdayData, setTuesdayData] = useState(0);
  const [wednesdayData, setWednesdayData] = useState(0);
  const [thursdayData, setThursdayData] = useState(0);
  const [fridayData, setFridayData] = useState(0);
  const [saturdayData, setSaturdayData] = useState(0);
  const [sundayData, setSundayData] = useState(0);
  let [showPrognos, seTShowPrognos] = useState();
  let obj = {};
  const [weeklyProgress, setWeeklyProgress] = useState()
  const [weeks, setWeeks] = useState()
  let weeklyProgressArr = []
  let weeksArr = []

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

      const URL = EndPoints.oneDayResult + localStorage.getItem("userId");
      
      instance2.get(URL).then((response) => {
        console.log(response.data, 'api dataaaaaaaaaaaa')
        if (response.data.message == "success") {
          response.data.lastWeek.map(item => {
            const data = new Date(item?.createdAt)
            obj[weekDays[data.getDay()]] = {
              totalQuestions: obj[weekDays[data.getDay()]]?.totalQuestions ? obj[weekDays[data.getDay()]]?.totalQuestions + item.totalQuestion : item.totalQuestion,
              correctAnswer: obj[weekDays[data.getDay()]]?.correctAnswer ? obj[weekDays[data.getDay()]]?.correctAnswer + item.correctAnswer : item.correctAnswer,
              date: item.createdAt
            }
          })
        }
        console.log(obj, 'this is api respponse for graph')
        // if (response.data.lastWeek[0]) {
        //   const totalQuestionMonday = response.data.lastWeek[0].totalQuestion;
        //   const correctAnswerMonday = response.data.lastWeek[0].correctAnswer;
        //   const totalCgpaMonday =
        //     (correctAnswerMonday / totalQuestionMonday) * 2;
        //   setMondayData(totalCgpaMonday.toFixed(1).replace(/\.0+$/, ""));
        //   if (response.data.lastWeek[1]) {
        //     const totalQuestionTuesday =
        //       response.data.lastWeek[1].totalQuestion;
        //     const correctAnswerTuesday =
        //       response.data.lastWeek[1].correctAnswer;
        //     const totalCgpaTuesday =
        //       (correctAnswerTuesday / totalQuestionTuesday) * 2;
        //     setTuesdayData(totalCgpaTuesday.toFixed([1).replace(/\.0+$/, ""));
        //   }
        //   if (response.data.lastWeek[2]) {
        //     const totalQuestionWednesday =
        //       response.data.lastWeek[2].totalQuestion;
        //     const correctAnswerWednesday =
        //       response.data.lastWeek[2].correctAnswer;
        //     const totalCgpaWednesday =
        //       (correctAnswerWednesday / totalQuestionWednesday) * 2;
        //     setWednesdayData(
        //       totalCgpaWednesday.toFixed(1).replace(/\.0+$/, "")
        //     );
        //   }
        //   if (response.data.lastWeek[3]) {
        //     const totalQuestionThursday =
        //       response.data.lastWeek[3].totalQuestion;
        //     const correctAnswerThursday =
        //       response.data.lastWeek[3].correctAnswer;
        //     const totalCgpaThursday =
        //       (correctAnswerThursday / totalQuestionThursday) * 2;
        //     setThursdayData(totalCgpaThursday.toFixed(1).replace(/\.0+$/, ""));
        //   }
        //   if (response.data.lastWeek[4]) {
        //     const totalQuestionFriday = response.data.lastWeek[4].totalQuestion;
        //     const correctAnswerFriday = response.data.lastWeek[4].correctAnswer;
        //     const totalCgpaFriday =
        //       (correctAnswerFriday / totalQuestionFriday) * 2;
        //     setFridayData(totalCgpaFriday.toFixed(1).replace(/\.0+$/, ""));
        //   }
        //   if (response.data.lastWeek[5]) {
        //     const totalQuestionSaturday =
        //       response.data.lastWeek[5].totalQuestion;
        //     const correctAnswerSaturday =
        //       response.data.lastWeek[5].correctAnswer;
        //     const totalCgpaSaturday =
        //       (correctAnswerSaturday / totalQuestionSaturday) * 2;
        //     setSaturdayData(totalCgpaSaturday.toFixed(1).replace(/\.0+$/, ""));
        //   }
        //   if (response.data.lastWeek[6]) {
        //     const totalQuestionSunday = response.data.lastWeek[6].totalQuestion;
        //     const correctAnswerSunday = response.data.lastWeek[6].correctAnswer;
        //     const totalCgpaSunday =
        //       (correctAnswerSunday / totalQuestionSunday) * 2;
        //     setSundayData(totalCgpaSunday.toFixed(1).replace(/\.0+$/, ""));
        //   }
        // }
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


  useEffect(() => {
    const studentPrefenenceURL =
      EndPoints.getStudentPreference + localStorage.getItem("userId");
    instance2.get(studentPrefenenceURL).then((response) => {
      if (response?.data?.StudentPreference) {
        setStudentPreference(response.data.StudentPreference);
      }
    });
  }, [props.StudentPreference]);

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
                goalPoint={
                  props.studentPreference && props.studentPreference
                    ? props.studentPreference.point
                    : studentPreference?.point
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
              POANG
            </Typography>
            <LinesChart
              syncId="anyId"
              mondayData={1}
              tuesdayData={2}
              wednesdayData={4}
              thursdayData={6}
              fridayData={2}
              saturdayData={3}
              sundayData={1}
              weeks={[1, 2, 3]}
              HomeRightBar="homeRightBar"
            />
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
              Viktiga datum
            </Typography>
            <Box sx={{ display: "flex", marginBottom: "1rem" }}>
              <Box sx={{ width: "100%", backgroundColor: "#fff" }}>
                <ImpDatesCard />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default HomeRightBar;
