import react, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'

const BarChart = () => {

    return (
        <Bar
            data={{
                labels: ['V.35', 'V.39', 'V.37', 'V.38', 'V.39', 'V.40', 'V.41'],
                datasets: [
                    {
                        label: '',
                        data: [0, 2, 4, 6, 8, 10, 5],
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

