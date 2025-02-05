// import React from "react";
// import { Bar } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

// const BarGraphComponent = ({ data }) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   // Calculate the total price of courses taken in each month
//   const totalPriceByMonth = months.reduce((acc, month) => {
//     acc[month] = data
//       .filter((item) => item.month === month)
//       .reduce((sum, item) => sum + item.price, 0);
//     return acc;
//   }, {});

//   const barChartData = {
//     labels: months,
//     datasets: [
//       {
//         label: "Total Sales",
//         data: Object.values(totalPriceByMonth),
//         backgroundColor: "rgba(75, 192, 192, 0.8)",
//         borderColor: "rgba(75, 192, 192, 1)",
//         borderWidth: 1,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       title: {
//         display: true,
//         text: "Monthly Sales",
//       },
//     },
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full">
//       <Bar data={barChartData} options={options} />
//     </div>
//   );
// };

// export default BarGraphComponent;
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

const BarGraphComponent = ({ data }) => {
  const months = [
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
  ];

  // Generate colors dynamically
  const getColorByIndex = (index) => {
    const colors = [
      "rgba(75, 192, 192, 0.8)",
      "rgba(255, 99, 132, 0.8)",
      "rgba(54, 162, 235, 0.8)",
      "rgba(255, 206, 86, 0.8)",
      "rgba(153, 102, 255, 0.8)",
      "rgba(255, 159, 64, 0.8)",
      "rgba(199, 199, 199, 0.8)",
      "rgba(83, 102, 255, 0.8)",
      "rgba(255, 99, 71, 0.8)",
      "rgba(60, 179, 113, 0.8)",
      "rgba(238, 130, 238, 0.8)",
      "rgba(218, 165, 32, 0.8)",
    ];
    return colors[index % colors.length];
  };

  // Calculate the total price of courses taken in each month
  const totalPriceByMonth = months.reduce((acc, month) => {
    acc[month] = data
      .filter((item) => item.month === month)
      .reduce((sum, item) => sum + item.price, 0);
    return acc;
  }, {});

  const barChartData = {
    labels: months,
    datasets: [
      {
        label: "Total Sales",
        data: Object.values(totalPriceByMonth),
        backgroundColor: months.map((_, index) => getColorByIndex(index)),
        borderColor: months.map((_, index) => getColorByIndex(index)),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales",
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full h-full">
      <Bar data={barChartData} options={options} />
    </div>
  );
};

export default BarGraphComponent;
