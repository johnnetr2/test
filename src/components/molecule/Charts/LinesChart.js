import react, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
} from "recharts";
import { EndPoints, instance2 } from "../../service/Route";
const LinesChart = (props) => {
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
        if (response?.data?.lastWeek) {
          const totalQuestionMonday = response.data.lastWeek[0]?.totalQuestion;
          const correctAnswerMonday = response.data.lastWeek[0]?.correctAnswer;
          const totalCgpaMonday =
            (correctAnswerMonday / totalQuestionMonday) * 2;
          setMondayData(totalCgpaMonday.toFixed(1).replace(/\.0+$/, ""));
          if (response?.data?.lastWeek[1]) {
            const totalQuestionTuesday =
              response?.data?.lastWeek[1]?.totalQuestion;
            const correctAnswerTuesday =
              response?.data?.lastWeek[1]?.correctAnswer;
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
            setWednesdayData(totalCgpaWednesday.toFixed(1).replace(/\.0+$/, ""));
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
      });
    }
  }, []);

  return (
    <Box>
      <LineChart
        width={400}
        height={200}
        style={{
          fontSize: "0.75rem",
        }}
        data={[
          {
            name: "v35",
            point: mondayData,
          },
          {
            name: "v39",
            point: tuesdayData,
          },
          {
            name: "v37",
            point: wednesdayData,
          },
          {
            name: "v38",
            point: thursdayData,
          },
          {
            name: "v39",
            point: fridayData,
          },
          {
            name: "v40",
            point: saturdayData,
          },
          {
            name: "v41",
            point: sundayData,
          },
        ]}
        syncId="anyId"
        margin={{
          top: 10,
          right: 10,
          left: -30,
          bottom: 0,
        }}
      >
        <CartesianGrid />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="point"
          stroke="#0A1596"
          strokeWidth="3"
          fill="#0A1596"
          dot={{ stroke: "#0A1596", strokeWidth: 3, r: 4, strokeDasharray: "" }}
          options={{
            scales: {
              x: {
                grid: {
                  display: "false",
                },
              },
            },
          }}
          // options={{
          //   scales: {
          //     xAxes: [
          //       {
          //         gridLines: {
          //           display: false,
          //         },
          //       },
          //     ],
          //   },
          // }}

          // data={{
          //   labels: ["V.35", "V.39", "V.37", "V.38", "V.39", "V.40", "V.41"],
          //   datasets: [
          //     {
          //       label: "# of votes",
          //       data: [
          //         mondayData,
          //         tuesdayData,
          //         wednesdayData,
          //         thursdayData,
          //         fridayData,
          //         saturdayData,
          //         sundayData,
          //       ],
          //       backgroundColor: ["#0A1596"],
          //       borderWidth: 2,
          //     },
          //   ],
          // }}
          // // width="100%"
          // // height="100%"
          // options={{
          //   maintainAspectRatio: false,
          //   scales: {
          //     yAxes: [
          //       {
          //         ticks: {
          //           beginAtZero: true,
          //         },
          //       },
          //     ],
          //   },
          //   legend: {
          //     labels: {
          //       fontSize: 25,
          //     },
          //   },
          // }}
        />
      </LineChart>
    </Box>
  );
};

export default LinesChart;
