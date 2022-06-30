import react, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Box } from "@mui/material";
import { EndPoints, instance2 } from "../../service/Route";
const LineChart = () => {
  const [mondayData, setMondayData] = useState([]);
  const [tuesdayData, setTuesdayData] = useState([]);
  const [wednesdayData, setWednesdayData] = useState([]);
  const [thursdayData, setThursdayData] = useState([]);
  const [fridayData, setFridayData] = useState([]);
  const [saturdayData, setSaturdayData] = useState([]);
  const [sundayData, setSundayData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      const URL = EndPoints.oneDayResult + localStorage.getItem("userId");
      instance2.get(URL).then((response) => {
        if (response.data.lastWeek[0]) {
          const totalQuestionMonday = response.data.lastWeek[0].totalQuestion;
          const correctAnswerMonday = response.data.lastWeek[0].correctAnswer;
          const totalCgpaMonday =
            (correctAnswerMonday / totalQuestionMonday) * 2;
          setMondayData(totalCgpaMonday);
          if (response.data.lastWeek[1]) {
            const totalQuestionTuesday =
              response.data.lastWeek[1].totalQuestion;
            const correctAnswerTuesday =
              response.data.lastWeek[1].correctAnswer;
            const totalCgpaTuesday =
              (correctAnswerTuesday / totalQuestionTuesday) * 2;
            setTuesdayData(totalCgpaTuesday);
          }
          if (response.data.lastWeek[2]) {
            const totalQuestionWednesday =
              response.data.lastWeek[2].totalQuestion;
            const correctAnswerWednesday =
              response.data.lastWeek[2].correctAnswer;
            const totalCgpaWednesday =
              (correctAnswerWednesday / totalQuestionWednesday) * 2;
            setWednesdayData(totalCgpaWednesday);
          }
          if (response.data.lastWeek[3]) {
            const totalQuestionThursday =
              response.data.lastWeek[3].totalQuestion;
            const correctAnswerThursday =
              response.data.lastWeek[3].correctAnswer;
            const totalCgpaThursday =
              (correctAnswerThursday / totalQuestionThursday) * 2;
            setThursdayData(totalCgpaThursday);
          }
          if (response.data.lastWeek[4]) {
            const totalQuestionFriday = response.data.lastWeek[4].totalQuestion;
            const correctAnswerFriday = response.data.lastWeek[4].correctAnswer;
            const totalCgpaFriday =
              (correctAnswerFriday / totalQuestionFriday) * 2;
            setFridayData(totalCgpaFriday);
          }
          if (response.data.lastWeek[5]) {
            const totalQuestionSaturday =
              response.data.lastWeek[5].totalQuestion;
            const correctAnswerSaturday =
              response.data.lastWeek[5].correctAnswer;
            const totalCgpaSaturday =
              (correctAnswerSaturday / totalQuestionSaturday) * 2;
            setSaturdayData(totalCgpaSaturday);
          }
          if (response.data.lastWeek[6]) {
            const totalQuestionSunday = response.data.lastWeek[6].totalQuestion;
            const correctAnswerSunday = response.data.lastWeek[6].correctAnswer;
            const totalCgpaSunday =
              (correctAnswerSunday / totalQuestionSunday) * 2;
            setSundayData(totalCgpaSunday);
          }
        }
      });
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Line
        data={{
          labels: ["V.35", "V.39", "V.37", "V.38", "V.39", "V.40", "V.41"],
          datasets: [
            {
              label: "# of votes",
              data: [
                mondayData,
                tuesdayData,
                wednesdayData,
                thursdayData,
                fridayData,
                saturdayData,
                sundayData,
              ],
              backgroundColor: ["#0A1596"],
              borderWidth: 2,
            },
          ],
        }}
        width="100%"
        height="100%"
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </Box>
  );
};

export default LineChart;
