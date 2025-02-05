import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import 'tailwindcss/tailwind.css';

// Register the necessary components with Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const TotalSales = () => {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Courses Sold',
                data: [65, 59, 80, 81, 56, 55],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Customers',
                data: [28, 48, 40, 19, 86, 27],
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
            {
                label: 'Revenue',
                data: [350, 480, 400, 190, 860, 270],
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sales Report',
            },
        },
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Sales Report</h2>
            <div className="mb-8">
                <Bar data={data} options={options} />
            </div>
            <div>
                <Line data={data} options={options} />
            </div>
        </div>
    );
};

export default TotalSales;