import react, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const BarChart = () => {

    return (
        <Bar
            data={{
                labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
                datasets: [
                    {
                        label: '# of votes',
                        data: [2, 3, 1, 1, 5, 4, 5],
                        backgroundColor: [
                            'blue'
                        ],
                        borderColor: [
                            'blue'
                        ],
                        borderWidth: 1,
                    },
                ],
            }}
            width='100%'
            height='100%'
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
                }
            }}
        />
    )
}

export default BarChart;

