import { Bar } from "react-chartjs-2";
import React, { useRef, useEffect, useState } from "react";
import { EndPoints, instance2 } from "../../service/Route";
import { Box } from "@material-ui/core";
import moment from "moment";



const LineDemo = (props) => {
  // const LALA = useRef();
  // const [mondayExercise, setMondayExercise] = useState(1);
  // const [tuesdayExercise, setTuesdayExercise] = useState(2);
  // const [wednesdayExercise, setWednesdayExercise] = useState(3);
  // const [thursdayExercise, setThursdayExercise] = useState(4);
  // const [fridayExercise, setFridayExercise] = useState(5);
  // const [saturdayExercise, setSaturdayExercise] = useState(6);
  // const [sundayExercise, setSundayExercise] = useState(7);
  const [weeklyprogress, setWeeklyProgress] = useState()
  let weeklyProgressArr = []

  // const w = []

  useEffect(() => {
    console.log(props.weeklyProgress, 'weekly progress', props.weeks, 'weeek')
    props.weeklyProgress.map(item => {
      weeklyProgressArr.push(item.correctAnswers)
    })
    setWeeklyProgress(weeklyProgressArr)
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

  return (
    <Box>
      <Bar
        width={415}
        height={200}
        options={{
          legend: {
            display: false,
          },
          maintainAspectRatio: false,
          responsive: true,
          borderRadius: 2,
          scales: {
            barPercentage: 0.2,
            xAxes: [
              {
                gridLines: {
                  display: false,
                },
                barThickness: 5, // number (pixels) or 'flex'
                maxBarThickness: 12, // number (pixels)
              },
            ],
            yAxes: [
              {
                ticks: {
                  stepSize: 2,
                  beginAtZero: true,
                  gridLines: {
                    display: false,
                  },
                },
                barPercentage: 1.0,
                categoryPercentage: 1.0,
              },
            ],
          },
        }}
        data={{
          labels: props?.weeks,
          // labels: ["V.35", "V.39", "V.37", "V.38", "V.39", "V.40", "V.41"],
          datasets: [
            {
              marginTop: [
                '2rem'
              ],
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
              data: weeklyprogress
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
      />
    </Box>
  );
};

export default LineDemo;
