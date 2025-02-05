import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { sampleData } from "./Sample";
import { useDispatch, useSelector } from "react-redux";

const AnnualSalesLineGraph = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [data, setData] = useState(null);
  const [totalSales, setTotalSales] = useState(0);
  const [activeTab, setActiveTab] = useState("All");
  const themes= localStorage.getItem("theme")
  useEffect(() => {
    const storedData = localStorage.getItem("traineeData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData(sampleData);
      localStorage.setItem("traineeData", JSON.stringify(sampleData));
    }
  }, []);

  useEffect(() => {
    if (data) {
      renderChartData();
    }
  }, [selectedYear, data]);

  useEffect(() => {
    if (data && data[selectedYear]) {
      const yearlyTotal = Object.keys(data[selectedYear]).reduce(
        (acc, month) => {
          const monthData = data[selectedYear][month];
          return acc + monthData.reduce((sum, item) => sum + item.price, 0);
        },
        0
      );
      setTotalSales(yearlyTotal);
    }
  }, [data, selectedYear]);

  const getMonthlyTotals = () => {
    const monthlyTotals = [];
    Object.keys(data[selectedYear]).forEach((month) => {
      const monthData = data[selectedYear][month];
      const total = monthData.reduce((acc, curr) => acc + curr.price, 0);
      monthlyTotals.push({ month, total });
    });
    return monthlyTotals;
  };

  const renderChartData = () => {
    const monthlyTotals = getMonthlyTotals();
    const months = monthlyTotals.map((item) => item.month);
    const totals = monthlyTotals.map((item) => item.total);

    return {
      labels: months,
      datasets: [
        {
          label: `Sales for ${selectedYear}`,
          data: totals,
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.1,
        },
      ],
    };
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className={` ${themes === "dark" ? "bg-black text-black" : "text-black   "} md:w-[350px] w-[310px] h-[400px]  shadow-xl rounded-xl relative mx-auto p-4`}>
      <h1 className={` ${themes === "dark" ? "bg-black text-white" : "text-black   "} font-bold text-center text-[#001510] mb-6`}>
        Annual Sales - Total: ₹{totalSales}
      </h1>
      <div className="flex  absolute justify-center mt-6">
        <label
          htmlFor="year-select"
          className="block text-sm font-medium text-[#001510]"
        ></label>
        <select
          id="year-select"
          value={selectedYear}
          onChange={handleYearChange}
          className="mt-1 block w-24 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {Object.keys(data).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {/* <div className="text-center text-black text-2xl font-bold">
        Annual Sales - Total: ₹{totalSales}
      </div> */}

      <div className="my-4 h-[400px] w-auto justify-center items-center flex">
        {data && (
          <Line
            data={renderChartData()}
            options={{
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: "Sales (in ₹)",
                  },
                },
                x: {
                  title: {
                    display: true,
                    text: "Months",
                  },
                },
              },
            }}
          />
        )}
      </div>
    </div>
  );
};

export default AnnualSalesLineGraph;
