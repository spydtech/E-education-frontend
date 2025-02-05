import React, { useState, useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { sampleData } from "./Sample";
import { useDispatch, useSelector } from "react-redux";
const TraineeTable = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedMonth, setSelectedMonth] = useState("All Months");
  const [data, setData] = useState(sampleData);
  const chartRef = useRef(null);
  const [activeTab, setActiveTab] = useState("All");
  const themes= localStorage.getItem("theme")
  useEffect(() => {
    const storedData = localStorage.getItem("traineeData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      localStorage.setItem("traineeData", JSON.stringify(sampleData));
    }
  }, []);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedMonth("All Months");
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const getDataToDisplay = () => {
    if (selectedMonth === "All Months") {
      return Object.values(data[selectedYear]).flat();
    } else {
      return data[selectedYear][selectedMonth];
    }
  };

  const groupDataByCourse = (data) => {
    const groupedData = {};
    data.forEach((record) => {
      if (!groupedData[record.course]) {
        groupedData[record.course] = 0;
      }
      groupedData[record.course]++;
    });
    return groupedData;
  };

  const dataToDisplay = getDataToDisplay();
  const groupedData = groupDataByCourse(dataToDisplay);

  const totalCoursesYear = Object.values(data[selectedYear])
    .flat()
    .reduce((acc, curr) => acc + 1, 0);

  const totalCoursesMonth =
    selectedMonth === "All Months"
      ? totalCoursesYear
      : data[selectedYear][selectedMonth].length;

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const labels = Object.keys(groupedData);
      const counts = Object.values(groupedData);

      chartRef.current.chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Course Count",
              data: counts,
              backgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
              borderRadius: 8,
              barPercentage: 0.5,
              categoryPercentage: 0.6,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              stepSize: 1,
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  let label = context.dataset.label || "";
                  if (label) {
                    label += ": ";
                  }
                  if (context.parsed.y !== null) {
                    label += context.parsed.y;
                  }
                  return label;
                },
              },
            },
          },
          animation: {
            duration: 1000,
            easing: "easeOutQuart",
          },
        },
      });
    }
  }, [groupedData]);

  return (
    <div className={`  ${themes === "dark" ? "bg-black text-black" : "text-black   "}  md:w-[350px] w-[310px]  relative h-[400px] rounded-xl shadow-xl mx-auto p-4`}>
      <h1 className={ `  ${themes === "dark" ? "bg-black text-white" : "text-black   "}font-bold text-center  mb-6`}>
        Count of Courses Purchased - Total: {totalCoursesYear}
        {selectedMonth !== "All Months" && (
          <span>
            {" "}
            (for {selectedMonth}: {totalCoursesMonth})
          </span>
        )}
      </h1>
      <div className="mt-4 absolute flex justify-center">
        <label
          htmlFor="year-select"
          className="block text-sm font-medium text-[#001510]"
        ></label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
          className="mt-1 block w-30 pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {Object.keys(data).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex mt-14 absolute justify-center">
        <label
          htmlFor="month-select"
          className="block text-sm font-medium text-[#001510]"
        ></label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="mt-1 block w-30 pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="All Months">All Months</option>
          {Object.keys(data[selectedYear]).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* <div className="text-center text-black text-2xl font-bold">
        Count of Courses Purchased - Total: {totalCoursesYear}
        {selectedMonth !== "All Months" && (
          <span>
            {" "}
            (for {selectedMonth}: {totalCoursesMonth})
          </span>
        )}
      </div> */}

      <div className="mb-4 text-white lg:h-[380px]  flex justify-center items-center">
        <canvas
          ref={chartRef}
          id="courseChart"
          width="300"
          height="200"
        ></canvas>
      </div>
    </div>
  );
};

export default TraineeTable;
