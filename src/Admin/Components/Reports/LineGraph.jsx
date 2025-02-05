import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { sampleData } from "./Sample";

const SalesLineChart = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedMonth, setSelectedMonth] = useState("All Months");
  const [activeTab, setActiveTab] = useState("All");
  const themes= localStorage.getItem("theme")
  const calculateMonthlySales = (year, month) => {
    const data = sampleData[year][month];
    const monthlySales = {};

    data.forEach(({ course, price }) => {
      if (!monthlySales[course]) {
        monthlySales[course] = 0;
      }
    });

    data.forEach(({ course, price }) => {
      monthlySales[course] += price;
    });

    return Object.keys(monthlySales).map((course) => ({
      course,
      sales: monthlySales[course],
    }));
  };

  const calculateYearlySales = (year) => {
    const data = sampleData[year];
    const yearlySales = {};

    Object.keys(data).forEach((month) => {
      data[month].forEach(({ course, price }) => {
        if (!yearlySales[course]) {
          yearlySales[course] = 0;
        }
      });
    });

    Object.keys(data).forEach((month) => {
      data[month].forEach(({ course, price }) => {
        yearlySales[course] += price;
      });
    });

    return Object.keys(yearlySales).map((course) => ({
      course,
      sales: yearlySales[course],
    }));
  };

  const getChartData = () => {
    if (selectedMonth === "All Months") {
      return calculateYearlySales(selectedYear);
    } else {
      return calculateMonthlySales(selectedYear, selectedMonth);
    }
  };

  const [chartData, setChartData] = useState(getChartData());

  useEffect(() => {
    setChartData(getChartData());
  }, [selectedYear, selectedMonth]);

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `₹${value}`;
          },
        },
      },
    },
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedMonth("All Months");
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <div className={` ${themes === "dark" ? "bg-black text-black" : "text-black   "} md:w-[350px] w-[310px] h-[400px] shadow-xl  rounded-xl relative mx-auto p-4`}>
      <h1 className={` ${themes === "dark" ? "bg-black text-black" : "text-black   "}  font-bold text-center  mb-6`}>
        Sales of Each Course
      </h1>
      <div className="flex absolute justify-center mt-4">
        <label
          htmlFor="year-select"
          className="block text-sm font-medium text-[#001510]"
        ></label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
          className="mt-1 block w-30 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {Object.keys(sampleData).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="flex absolute justify-center mt-14">
        <label
          htmlFor="month-select"
          className="block text-sm font-medium [#001510]"
        ></label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="mt-1 block w-30 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="All Months">All Months</option>
          {Object.keys(sampleData[selectedYear]).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>
      {/* <div className=" text-center text-black text-2xl  font-bold">
        {" "}
        Sales of Each Course
      </div> */}

      <div className="my-4 h-[400px] w-auto justify-center items-center flex">
        <Line
          data={{
            labels: chartData.map((data) => data.course),
            datasets: [
              {
                label: `Sales Data (${
                  selectedMonth === "All Months" ? "Yearly" : selectedMonth
                } ${selectedYear})`,
                data: chartData.map((data) => data.sales),
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 3, // Increase the border width for a thicker line
                hoverBackgroundColor: "rgba(75,192,192,0.4)",
                hoverBorderColor: "rgba(75,192,192,1)",
                lineTension: 0.1, // Optional: smooths the line
              },
            ],
          }}
          options={chartOptions}
        />
      </div>
    </div>
  );
};

export default SalesLineChart;
