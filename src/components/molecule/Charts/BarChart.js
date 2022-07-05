import { Bar } from "react-chartjs-2";
import React, { useRef, useEffect, useState } from "react";
import Chart from 'chart.js';
import { Card } from "@material-ui/core";
import {EndPoints, instance2} from '../../service/Route'

const LineDemo = (props) => {
    const LALA = useRef();

        const [mondayExercise, setMondayExercise] = useState("")
    const [tuesdayExercise, setTuesdayExercise] = useState("")
    const [wednesdayExercise, setWednesdayExercise] = useState("")
    const [thursdayExercise, setThursdayExercise] = useState("")
    const [fridayExercise, setFridayExercise] = useState("")
    const [saturdayExercise, setSaturdayExercise] = useState("")
    const [sundayExercise, setSundayExercise] = useState("")

    useEffect(() => {
      const URL = EndPoints.oneDayExercise + localStorage.getItem('userId')
      instance2.get(URL).then((response)=>
      {
          setMondayExercise(response.data.days_of_exam.Monday)
          setTuesdayExercise(response.data.days_of_exam.Tuesday)
          setWednesdayExercise(response.data.days_of_exam.Wednesday)
          setThursdayExercise(response.data.days_of_exam.Thursday)
          setFridayExercise(response.data.days_of_exam.Friday)
          setSaturdayExercise(response.data.days_of_exam.Saturday)
          setSundayExercise(response.data.days_of_exam.Sunday)
      })

    }, [])

    return (
        <div>
            <Card style={{
                // height: '90%',
                paddingTop: '2rem',
                paddingBottom: '2rem',
            }} >
                <Bar
                    options={{

                        legend: {
                            display: false
                        },
                        borderRadius: 2,
                        scales: {
                            barPercentage: 0.2,
                            xAxes: [
                                {
                                    gridLines: {
                                        display: false
                                    },
                                    barThickness: 5, // number (pixels) or 'flex'
                                    maxBarThickness: 12 // number (pixels)
                                }
                            ],
                            yAxes: [
                                {
                                    ticks: {
                                        stepSize: 2,
                                        beginAtZero: true
                                        // callback: function (value, index, values) {
                                        //   return value;
                                        // }
                                    },
                                    barPercentage: 1.0,
                                    categoryPercentage: 1.0
                                }
                            ]
                        }
                    }}
                    data={{
                labels: ['V.35', 'V.39', 'V.37', 'V.38', 'V.39', 'V.40', 'V.41'],
                datasets: [
                    {
                                backgroundColor: [
                                    "#0A1596",
                                    "#0A1596",
                                    "#0A1596",
                                    "#0A1596",
                                    "#0A1596",
                                    "#0A1596",
                                    "#0A1596",
                                    "#0A1596",
                                    "#0A1596"
                                ],
                                barPercentage: 0.1,
                                categorySpacing: 2,
                        data: [mondayExercise, tuesdayExercise, wednesdayExercise, thursdayExercise, fridayExercise, saturdayExercise, sundayExercise]
                            }
                        ]
                    }}
                />
            </Card>
        </div>
    );
};

export default LineDemo;













// import react, { useEffect, useState } from 'react'
// import { Bar } from 'react-chartjs-2'
// import {Chart as ChartJS} from 'chart.js/auto'
// import {EndPoints, instance2} from '../../service/Route'

// const BarChart = () => {

//     const [mondayExercise, setMondayExercise] = useState("")
//     const [tuesdayExercise, setTuesdayExercise] = useState("")
//     const [wednesdayExercise, setWednesdayExercise] = useState("")
//     const [thursdayExercise, setThursdayExercise] = useState("")
//     const [fridayExercise, setFridayExercise] = useState("")
//     const [saturdayExercise, setSaturdayExercise] = useState("")
//     const [sundayExercise, setSundayExercise] = useState("")

//     useEffect(() => {
//       const URL = EndPoints.oneDayExercise + localStorage.getItem('userId')
//       instance2.get(URL).then((response)=>
//       {
//           setMondayExercise(response.data.days_of_exam.Monday)
//           setTuesdayExercise(response.data.days_of_exam.Tuesday)
//           setWednesdayExercise(response.data.days_of_exam.Wednesday)
//           setThursdayExercise(response.data.days_of_exam.Thursday)
//           setFridayExercise(response.data.days_of_exam.Friday)
//           setSaturdayExercise(response.data.days_of_exam.Saturday)
//           setSundayExercise(response.data.days_of_exam.Sunday)
//       })

//     }, [])
    

//     return (
//         <Bar style={{ height: '15rem' }}
//             data={{
//                 labels: ['V.35', 'V.39', 'V.37', 'V.38', 'V.39', 'V.40', 'V.41'],
//                 datasets: [
//                     {
//                         label: '',
//                         // data: [mondayExercise, tuesdayExercise, wednesdayExercise, thursdayExercise, fridayExercise, saturdayExercise, sundayExercise],
//                         data: [0, 2, 4, 6, 8, 9, 10],
//                         order: 2,
//                         backgroundColor: [
//                             '#0A1596'
//                         ],
//                         borderColor: [
//                             '#e1e1e1'
//                         ],
//                         borderWidth: 0,
//                         maxBarThickness: 8,
//                         borderRadius: 10,
//                         stepSize: 2,
//                     },
//                 ],
//             }}
//             width='100%'
//             height='100%'
//             options={{
//                 maintainAspectRatio: false,
//                 scales: {
//                     y: {
//                         beginAtZero: true,
//                     }
//                 },
//                 legend: {
//                     labels: {
//                         fontSize: 25,
//                     },
//                 }
//             }}
//         />
//     )
// }

// export default BarChart;

