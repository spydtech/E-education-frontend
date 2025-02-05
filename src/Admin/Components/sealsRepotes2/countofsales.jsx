import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComponent = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Sales (in Rupees)",
        data: [
          500, 1500, 800, 2000, 1700, 1100, 1900, 2200, 2300, 1500, 1800, 2100,
        ],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
        pointBackgroundColor: "rgba(75, 192, 192, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
        color: "#333",
        font: {
          size: 16,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const month = context.label;
            const sales = context.raw;
            return `${month}: ₹${sales}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          color: "#333",
          font: {
            size: 14,
          },
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "#333",
          font: {
            size: 12,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Sales (in Rupees)",
          color: "#333",
          font: {
            size: 14,
          },
        },
        beginAtZero: true,
        grid: {
          borderDash: [5, 5],
        },
        ticks: {
          color: "#333",
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="bg-[#03045e] w-screen h-screen  flex justify-center items-center ">
      <div className="flex   h-[400px] bg-gray-100 p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChartComponent;
