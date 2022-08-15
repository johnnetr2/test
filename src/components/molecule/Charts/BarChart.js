import { Bar } from "react-chartjs-2";
import React, { useRef, useEffect, useState } from "react";
// import Chart from "chart.js";
// import Chart from "chart.js/auto";
import { Card } from "@material-ui/core";
import { EndPoints, instance2 } from "../../service/Route";
import { Box } from "@material-ui/core";

const LineDemo = (props) => {
  const LALA = useRef();
  const [mondayExercise, setMondayExercise] = useState("");
  const [tuesdayExercise, setTuesdayExercise] = useState("");
  const [wednesdayExercise, setWednesdayExercise] = useState("");
  const [thursdayExercise, setThursdayExercise] = useState("");
  const [fridayExercise, setFridayExercise] = useState("");
  const [saturdayExercise, setSaturdayExercise] = useState("");
  const [sundayExercise, setSundayExercise] = useState("");

  useEffect(() => {
    const URL = EndPoints.oneDayExercise + props.sectionId;
    instance2.get(URL).then((response) => {
      console.log(response, "bar chart data");
      setMondayExercise(response.data.days_of_exam.Monday);
      setTuesdayExercise(response.data.days_of_exam.Tuesday);
      setWednesdayExercise(response.data.days_of_exam.Wednesday);
      setThursdayExercise(response.data.days_of_exam.Thursday);
      setFridayExercise(response.data.days_of_exam.Friday);
      setSaturdayExercise(response.data.days_of_exam.Saturday);
      setSundayExercise(response.data.days_of_exam.Sunday);
    });
  });

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
          labels: ["V.35", "V.39", "V.37", "V.38", "V.39", "V.40", "V.41"],
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
              data: [
                mondayExercise,
                wednesdayExercise,
                tuesdayExercise,
                thursdayExercise,
                fridayExercise,
                saturdayExercise,
                sundayExercise,
              ],
            },
          ],
        }}
      />
    </Box>
  );
};

export default LineDemo;
