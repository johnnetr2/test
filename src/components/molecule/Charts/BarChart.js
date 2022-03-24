import react, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'
import {EndPoints, instance2} from '../../service/Route'

const BarChart = () => {

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
        <Bar
            data={{
                labels: ['V.35', 'V.39', 'V.37', 'V.38', 'V.39', 'V.40', 'V.41'],
                datasets: [
                    {
                        label: '',
                        data: [mondayExercise, tuesdayExercise, wednesdayExercise, thursdayExercise, fridayExercise, saturdayExercise, sundayExercise],
                        backgroundColor: [
                            '#0A1596'
                        ],
                        borderColor: [
                            '#e1e1e1'
                        ],
                        borderWidth: 0,
                    },
                ],
            }}
            width='100%'
            height='100%'
            options={{
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                legend: {
                    labels: {
                        fontSize: 25,
                    },
                }
            }}
        />
    )
}

export default BarChart;

