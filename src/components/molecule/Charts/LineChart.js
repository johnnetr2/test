import react, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
const LineChart = () => {

    return (

        <Line
            data={{
                labels: ['V.35', 'V.39', 'V.37', 'V.38', 'V.39', 'V.40', 'V.41'],
                datasets: [
                    {
                        label: '# of votes',
                        data: [0, 0.4, 0.8, 1.2, 1.6, 2.0],
                        backgroundColor: [
                            '#0A1596'
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
                },
            }}
        />
    )
}

export default LineChart;

