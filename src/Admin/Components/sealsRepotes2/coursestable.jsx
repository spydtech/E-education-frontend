import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const CoursesTable = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedYear, setSelectedYear] = useState("2024");

  const data = [
    {
      username: "ravi",
      userid: "001",
      course: "React js",
      price: 100,
      month: "January",
    },
    {
      username: "bargav",
      userid: "002",
      course: "React js",
      price: 100,
      month: "February",
    },
    {
      username: "gopi",
      userid: "003",
      course: "React js",
      price: 100,
      month: "March",
    },
    {
      username: "mallayya",
      userid: "004",
      course: "React js",
      price: 100,
      month: "April",
    },
    {
      username: "Ratnapriya",
      userid: "005",
      course: "Angular",
      price: 120,
      month: "May",
    },
    {
      username: "VishnuVardhan",
      userid: "006",
      course: "Javascript",
      price: 90,
      month: "June",
    },
    {
      username: "Vishnu",
      userid: "007",
      course: "Javascript",
      price: 90,
      month: "July",
    },
    {
      username: "lakshman",
      userid: "008",
      course: "Javascript",
      price: 90,
      month: "August",
    },
    {
      username: "krishna",
      userid: "009",
      course: "Nodejs",
      price: 110,
      month: "September",
    },
    {
      username: "chintu",
      userid: "010",
      course: "Expressjs",
      price: 95,
      month: "October",
    },
    {
      username: "bannu",
      userid: "011",
      course: "Expressjs",
      price: 95,
      month: "November",
    },
    {
      username: "buddy",
      userid: "012",
      course: "Expressjs",
      price: 95,
      month: "December",
    },
    {
      username: "banny",
      userid: "013",
      course: "Expressjs",
      price: 95,
      month: "January",
    },
    {
      username: "malleswari",
      userid: "014",
      course: ".net",
      price: 130,
      month: "February",
    },
    {
      username: "swari",
      userid: "015",
      course: "corejava",
      price: 85,
      month: "March",
    },
  ];

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
        label: "No of products",
        data: Object.values(totalPriceByMonth),
        backgroundColor: months.map((_, index) => getColorByIndex(index)),
        borderColor: months.map((_, index) => getColorByIndex(index)),
        borderWidth: 2,
      },
    ],
  };

  const courseData = data.reduce((acc, item) => {
    acc[item.course] = (acc[item.course] || 0) + item.price;
    return acc;
  }, {});

  const pieChartData = {
    labels: Object.keys(courseData),
    datasets: [
      {
        label: "Course Sales",
        data: Object.values(courseData),
        backgroundColor: Object.keys(courseData).map((_, index) =>
          getColorByIndex(index)
        ),
        borderColor: Object.keys(courseData).map((_, index) =>
          getColorByIndex(index)
        ),
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="p-8 bg-[#03045e] min-h-screen">
      <div className="flex justify-center mb-10 space-x-10">
        <Link to="/linechart">
          <div className="bg-gradient-to-r from-red-200 to-red-400 w-60 h-40 flex flex-col items-center justify-center rounded-lg shadow-lg text-red-800 text-xl font-semibold transform transition-transform hover:scale-105">
            <div className="text-center">
              ${data.reduce((acc, item) => acc + item.price, 0)} <br /> Total
              Sales
            </div>
          </div>
        </Link>
<Link to = "/countofproducts">


        <div className="bg-gradient-to-r from-blue-200 to-blue-400 w-60 h-40 flex flex-col items-center justify-center rounded-lg shadow-lg text-blue-800 text-xl font-semibold transform transition-transform hover:scale-105">
          <div className="text-center">
            {data.length} <br /> Count Products
          </div>
        </div>
</Link>

        <Link to="/countofcustomers">
          <div className="bg-gradient-to-r from-green-200 to-green-400 w-60 h-40 flex flex-col items-center justify-center rounded-lg shadow-lg text-green-800 text-xl font-semibold transform transition-transform hover:scale-105">
            <div className="text-center">
              {new Set(data.map((item) => item.username)).size} <br /> Count
              Customers
            </div>
          </div>
        </Link>
      </div>

      <div className="flex flex-col mb-10 space-y-4">
        <div className="flex justify-center items-center mb-10 space-x-4 w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[300px]">
            <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] h-[300px]">
            <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* Add the Monthly Sales Line Chart component */}
        {/* <div className="flex justify-center mb-10">
          <LineChartComponent />
        </div> */}
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[1100px]">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#219EBC] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Username
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  User ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Course Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Course Price
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-100 transition-colors duration-300"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.username}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 font-semibold">
                    {item.userid}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {item.course}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    ${item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoursesTable;
