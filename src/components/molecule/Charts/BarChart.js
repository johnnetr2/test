import React, { useRef, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { EndPoints, instance2 } from "../../service/Route";
import { Box } from "@material-ui/core";
import moment from "moment";

// const data = [
//   {
//     name: "V35",
//     correct: 8,
//   },
//   {
//     name: "V36",
//     correct: 10,
//   },
//   {
//     name: "V37",
//     correct: 12,
//   },
//   {
//     name: "V38",
//     correct: 15,
//   },
//   {
//     name: "V39",
//     correct: 20,
//   },
//   {
//     name: "V40",
//     correct: 33,
//   },
//   {
//     name: "V41",
//     correct: 40,
//   },
// ];

const LineDemo = (props) => {
  // console.log(props.weeks[0].slice(0, 4), "weeks console");
  // const LALA = useRef();
  // const [mondayExercise, setMondayExercise] = useState(1);
  // const [tuesdayExercise, setTuesdayExercise] = useState(2);
  // const [wednesdayExercise, setWednesdayExercise] = useState(3);
  // const [thursdayExercise, setThursdayExercise] = useState(4);
  // const [fridayExercise, setFridayExercise] = useState(5);
  // const [saturdayExercise, setSaturdayExercise] = useState(6);
  // const [sundayExercise, setSundayExercise] = useState(7);
  const [weeklyprogress, setWeeklyProgress] = useState();
  const [mdata, setmData] = useState([]);
  let weeklyProgressArr = [];

  // const w = []

  // useEffect(() => {
  //   props.weeklyProgress.map((item) => {
  //     weeklyProgressArr.push(item.correctAnswers);
  //   });
  //   console.log(weeklyProgressArr, "weeklyProgressArr console in useEffect");
  //   setWeeklyProgress(weeklyProgressArr);
  //   //   const URL = EndPoints.getLastSevenWeeksData + props.sectionId;
  //   //   instance2.get(URL).then((response) => {
  //   //     const data = datesGroupByComponent(response.data.sevenWeekData, 'W')
  //   //     setWeeks(data)
  //   //     data && Object.values(data).map((key, index) => {
  //   //       console.log(Object.keys(data)[index], 'this')
  //   //       let obj = 0
  //   //       key.map(item => {
  //   //         obj = obj + item.correctAnswer
  //   //       })
  //   //       arr.push(obj)
  //   //     })
  //   //     setWeeklyProgress(arr)
  //   //     console.log(arr, 'arrryaaaayyyyyyyyyyyy')
  //   //   });
  // }, []);

  const data = [
    {
      name: props?.weeks?.length !== 0 ? props?.weeks[0] : "",
      correct:
        props?.weeklyProgress?.length !== 0
          ? props?.weeklyProgress[0]?.correctAnswers
          : "",
    },
    {
      name: props?.weeks?.length !== 0 ? props?.weeks[1] : "",
      correct:
        props?.weeklyProgress?.length !== 0
          ? props?.weeklyProgress[1]?.correctAnswers
          : "",
    },
    {
      name: props?.weeks?.length !== 0 ? props?.weeks[2] : "",
      correct:
        props?.weeklyProgress?.length !== 0
          ? props?.weeklyProgress[2]?.correctAnswers
          : "",
    },
    {
      name: props?.weeks?.length !== 0 ? props?.weeks[3] : "",
      correct:
        props?.weeklyProgress?.length !== 0
          ? props?.weeklyProgress[3]?.correctAnswers
          : "",
    },
    {
      name: props?.weeks?.length !== 0 ? props?.weeks[4] : "",
      correct:
        props?.weeklyProgress?.length !== 0
          ? props?.weeklyProgress[4]?.correctAnswers
          : "",
    },
    {
      name: props?.weeks?.length !== 0 ? props?.weeks[5] : "",
      correct:
        props?.weeklyProgress?.length !== 0
          ? props?.weeklyProgress[5]?.correctAnswers
          : "",
    },
    {
      name: props?.weeks?.length !== 0 ? props?.weeks[6] : "",
      correct:
        props?.weeklyProgress?.length !== 0
          ? props?.weeklyProgress[6]?.correctAnswers
          : "",
    },
  ];

  return (
    <Box>
      {props?.weeks && data && (
        <BarChart
          width={396}
          height={200}
          style={{
            fontSize: "0.75rem",
          }}
          data={data}
          syncId="syncId"
          margin={{
            top: 10,
            right: 10,
            left: -25,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" vertical="" horizontal="true" />
          <XAxis dataKey="name" dy={10} tickLine={false} />
          <YAxis dx={-10} tickLine={false} axisLine={false} />
          <Tooltip
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #e1e1e1",
              borderRadius: "5px",
            }}
            itemStyle={{ color: "#000" }}
            cursor={false}
          />
          <Bar
            dataKey="correct"
            fill="#0A1596"
            barSize={5}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      )}
    </Box>
  );
};

export default LineDemo;
