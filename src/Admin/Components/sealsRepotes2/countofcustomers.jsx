// HorizontalBarChart.js
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = () => {
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
        label: "Number of Customers",
        data: [65, 59, 80, 81, 56, 55, 40, 75, 85, 90, 100, 120],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Number of Customers per Month",
      },
    },
  };

  return (
    <div className=" bg-[#03045e] w-screen h-screen  justify-center items-center">
      <h2 className="text-2xl font-bold  text-white text-center mb-4">
        Customer Growth
      </h2>
      <div className="bg-white  m-10 mx-56 shadow-md rounded-lg p-6">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default HorizontalBarChart;
