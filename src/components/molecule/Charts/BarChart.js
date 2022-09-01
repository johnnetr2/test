import React, { useRef, useEffect, useState } from "react";
import {
  BarChart,
  Legend,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { EndPoints, instance2 } from "../../service/Route";
import { Box } from "@material-ui/core";
import moment from "moment";

const LineDemo = (props) => {
  console.log(props, "props demo console");
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

  useEffect(() => {
    props.weeklyProgress.map((item) => {
      weeklyProgressArr.push(item.correctAnswers);
    });
    setWeeklyProgress(weeklyProgressArr);
    //   const URL = EndPoints.getLastSevenWeeksData + props.sectionId;
    //   instance2.get(URL).then((response) => {
    //     const data = datesGroupByComponent(response.data.sevenWeekData, 'W')
    //     setWeeks(data)
    //     data && Object.values(data).map((key, index) => {
    //       console.log(Object.keys(data)[index], 'this')
    //       let obj = 0
    //       key.map(item => {
    //         obj = obj + item.correctAnswer
    //       })
    //       arr.push(obj)
    //     })
    //     setWeeklyProgress(arr)
    //     console.log(arr, 'arrryaaaayyyyyyyyyyyy')
    //   });
  }, []);

  const data = [
    {
      name: "V 35",
      uv: 4000,
    },
    {
      name: "V 36",
      uv: 3000,
    },
    {
      name: "V 37",
      uv: 2000,
    },
    {
      name: "V 38",
      uv: 2780,
    },
    {
      name: "V 39",
      uv: 1890,
    },
    {
      name: "V 40",
      uv: 2390,
    },
    {
      name: "V 41",
      uv: 3490,
    },
  ];

  // const data = [
  //   {
  //     name: props?.weeks[0] ? props?.weeks[0] : "",
  //     uv: weeklyprogress[0] ? props?.weeks[0] : "",
  //   },
  //   {
  //     name: props?.weeks[1] ? props?.weeks[1] : "",
  //     uv: weeklyprogress[1] ? props?.weeks[1] : "",
  //   },
  //   {
  //     name: props?.weeks[2] ? props?.weeks[2] : "",
  //     uv: weeklyprogress[2] ? props?.weeks[2] : "",
  //   },
  //   {
  //     name: props?.weeks[3] ? props?.weeks[3] : "",
  //     uv: weeklyprogress[3] ? props?.weeks[3] : "",
  //   },
  //   {
  //     name: props?.weeks[4] ? props?.weeks[4] : "",
  //     uv: weeklyprogress[4] ? props?.weeks[4] : "",
  //   },
  //   {
  //     name: props?.weeks[5] ? props?.weeks[5] : "",
  //     uv: weeklyprogress[5] ? props?.weeks[5] : "",
  //   },
  //   {
  //     name: props?.weeks[6] ? props?.weeks[6] : "",
  //     uv: weeklyprogress[6] ? props?.weeks[6] : "",
  //   },
  // ];
  // {
  //   name: props?.weeks,
  //   uv: 4000,
  // },
  // {
  //   name: props?.weeks,
  //   uv: 3000,
  // },
  // {
  //   name: props?.weeks,
  //   uv: 2000,
  // },
  // {
  //   name: props?.weeks,
  //   uv: 2780,
  // },
  // {
  //   name: props?.weeks,
  //   uv: 1890,
  // },
  // {
  //   name: props?.weeks,
  //   uv: 2390,
  // },
  // {
  //   name: "Page G",
  //   uv: 3490,
  // },

  return (
    <Box>
      {/* <Bar
        width={200}
        height={300}
        options={{
          layout: {
            padding: {
              // left: -10,
              // bottom: 10,
            },
          },

          legend: {
            display: false,
          },
          maintainAspectRatio: false,
          responsive: true,
          scales: {
            barPercentage: 0.2,
            xAxes: [
              {
                // stacked: true,
                gridLines: {
                  display: false,
                },
                barThickness: 5, // number (pixels) or 'flex'
                maxBarThickness: 12, // number (pixels)
              },
            ],
            yAxes: [
              {
                gridLines: {
                  drawBorder: false,
                },
                ticks: {
                  // min: 0,
                  // max: 10,
                  padding: 10,
                  offset: 10,
                  stepSize: 2,
                  beginAtZero: true,
                  gridLines: {
                    display: false,
                  },
                },
                barPercentage: 1.0,
                borderRadius: 20,
                categoryPercentage: 1.0,
                // labelPadding: 10,
              },
            ],
          },
        }}
        data={{
          labels: props?.weeks,
          // labels: ["V.35", "V.39", "V.37", "V.38", "V.39", "V.40", "V.41"],
          datasets: [
            {
              marginTop: ["2rem"],
              backgroundColor: [
                "#0A1596",
                "#0A1596",
                "#0A1596",
                "#0A1596",
                "#0A1596",
                "#0A1596",
                "#0A1596",
                "#0A1596",
                "#0A1596",
              ],
              barPercentage: 0.1,
              categorySpacing: 2,
              data: weeklyprogress,
              // [
              // mondayExercise,
              // wednesdayExercise,
              // tuesdayExercise,
              // thursdayExercise,
              // fridayExercise,
              // saturdayExercise,
              // sundayExercise,
              // ],
            },
          ],
        }}
      /> */}
      <BarChart width={396} height={200} data={data}>
        <CartesianGrid strokeDasharray="0 0" vertical="" horizontal="true" />
        <XAxis dataKey="name" dy={10} tickLine={false} />
        <YAxis dx={-10} tickLine={false} axisLine={false} />
        <Tooltip />
        <Bar dataKey="pv" fill="#0A1596" barSize={5} radius={[10, 10, 0, 0]} />
      </BarChart>
    </Box>
  );
};

export default LineDemo;
