import React, { useState, useEffect } from "react";

export const sampleData = {
  2021: {
    January: [
      { username: "ravi", userid: "001", course: "React js", price: 100 },
      { username: "john", userid: "002", course: "Node js", price: 200 },
      { username: "mary", userid: "003", course: "Vue js", price: 150 },
      { username: "lisa", userid: "004", course: "Angular", price: 250 },
      { username: "mike", userid: "005", course: "React js", price: 100 },
      { username: "jane", userid: "006", course: "Node js", price: 200 },
      { username: "peter", userid: "007", course: "Vue js", price: 150 },
      { username: "linda", userid: "008", course: "Angular", price: 250 },
      { username: "alex", userid: "009", course: "React js", price: 100 },
      { username: "sara", userid: "010", course: "Node js", price: 200 },
    ],
    February: [
      { username: "ravi", userid: "001", course: "React js", price: 100 },
      { username: "john", userid: "002", course: "Node js", price: 200 },
      { username: "mary", userid: "003", course: "Vue js", price: 150 },
      { username: "lisa", userid: "004", course: "Angular", price: 250 },
      { username: "mike", userid: "005", course: "React js", price: 100 },
      { username: "jane", userid: "006", course: "Node js", price: 200 },
      { username: "peter", userid: "007", course: "Vue js", price: 150 },
      { username: "linda", userid: "008", course: "Angular", price: 250 },
      { username: "alex", userid: "009", course: "React js", price: 100 },
      { username: "sara", userid: "010", course: "Node js", price: 200 },
    ],

    March: [
      { username: "kelly", userid: "011", course: "React js", price: 100 },
      { username: "nathan", userid: "012", course: "Node js", price: 200 },
      { username: "olivia", userid: "013", course: "Vue js", price: 150 },
    ],
    April: [
      { username: "emily", userid: "014", course: "Angular", price: 250 },
      { username: "patrick", userid: "015", course: "React js", price: 100 },
      { username: "quinn", userid: "016", course: "Node js", price: 200 },
    ],
    May: [
      { username: "ryan", userid: "017", course: "Vue js", price: 150 },
      { username: "sophia", userid: "018", course: "Angular", price: 250 },
      { username: "thomas", userid: "019", course: "React js", price: 100 },
    ],
    June: [
      { username: "umberto", userid: "020", course: "Node js", price: 200 },
      { username: "victoria", userid: "021", course: "Vue js", price: 150 },
      { username: "william", userid: "022", course: "Angular", price: 250 },
    ],
    July: [
      { username: "xander", userid: "023", course: "React js", price: 100 },
      { username: "yasmine", userid: "024", course: "Node js", price: 200 },
      { username: "zoe", userid: "025", course: "Vue js", price: 150 },
    ],
    August: [
      { username: "adam", userid: "026", course: "Angular", price: 250 },
      { username: "beth", userid: "027", course: "React js", price: 100 },
      { username: "carla", userid: "028", course: "Node js", price: 200 },
    ],
    September: [
      { username: "daniel", userid: "029", course: "Vue js", price: 150 },
      { username: "emma", userid: "030", course: "Angular", price: 250 },
      { username: "felix", userid: "031", course: "React js", price: 100 },
    ],
    October: [
      { username: "gina", userid: "032", course: "Node js", price: 200 },
      { username: "henry", userid: "033", course: "Vue js", price: 150 },
      { username: "isabel", userid: "034", course: "Angular", price: 250 },
    ],
    November: [
      { username: "jason", userid: "035", course: "React js", price: 100 },
      { username: "karen", userid: "036", course: "Node js", price: 200 },
      { username: "leo", userid: "037", course: "Vue js", price: 150 },
    ],
    December: [
      { username: "mia", userid: "038", course: "Angular", price: 250 },
      { username: "noah", userid: "039", course: "React js", price: 100 },
      { username: "oliver", userid: "040", course: "Node js", price: 200 },
    ],
  },
  2022: {
    January: [
      { username: "ravi", userid: "001", course: "React js", price: 100 },
      { username: "john", userid: "002", course: "Node js", price: 200 },
      { username: "mary", userid: "003", course: "Vue js", price: 150 },
      { username: "lisa", userid: "004", course: "Angular", price: 250 },
      { username: "mike", userid: "005", course: "React js", price: 100 },
      { username: "jane", userid: "006", course: "Node js", price: 200 },
      { username: "peter", userid: "007", course: "Vue js", price: 150 },
      { username: "linda", userid: "008", course: "Angular", price: 250 },
      { username: "alex", userid: "009", course: "React js", price: 100 },
      { username: "sara", userid: "010", course: "Node js", price: 200 },
    ],
    February: [
      { username: "ravi", userid: "001", course: "React js", price: 100 },
      { username: "john", userid: "002", course: "Node js", price: 200 },
      { username: "mary", userid: "003", course: "Vue js", price: 150 },
      { username: "lisa", userid: "004", course: "Angular", price: 250 },
      { username: "mike", userid: "005", course: "React js", price: 100 },
      { username: "jane", userid: "006", course: "Node js", price: 200 },
      { username: "peter", userid: "007", course: "Vue js", price: 150 },
      { username: "linda", userid: "008", course: "Angular", price: 250 },
      { username: "alex", userid: "009", course: "React js", price: 100 },
      { username: "sara", userid: "010", course: "Node js", price: 200 },
    ],

    March: [
      { username: "kelly", userid: "011", course: "React js", price: 100 },
      { username: "nathan", userid: "012", course: "Node js", price: 200 },
      { username: "olivia", userid: "013", course: "Vue js", price: 150 },
    ],
    April: [
      { username: "emily", userid: "014", course: "Angular", price: 250 },
      { username: "patrick", userid: "015", course: "React js", price: 100 },
      { username: "quinn", userid: "016", course: "Node js", price: 200 },
    ],
    May: [
      { username: "ryan", userid: "017", course: "Vue js", price: 150 },
      { username: "sophia", userid: "018", course: "Angular", price: 250 },
      { username: "thomas", userid: "019", course: "React js", price: 100 },
    ],
    June: [
      { username: "umberto", userid: "020", course: "Node js", price: 200 },
      { username: "victoria", userid: "021", course: "Vue js", price: 150 },
      { username: "william", userid: "022", course: "Angular", price: 250 },
    ],
    July: [
      { username: "xander", userid: "023", course: "React js", price: 100 },
      { username: "yasmine", userid: "024", course: "Node js", price: 200 },
      { username: "zoe", userid: "025", course: "Vue js", price: 150 },
    ],
    August: [
      { username: "adam", userid: "026", course: "Angular", price: 250 },
      { username: "beth", userid: "027", course: "React js", price: 100 },
      { username: "carla", userid: "028", course: "Node js", price: 200 },
    ],
    September: [
      { username: "daniel", userid: "029", course: "Vue js", price: 150 },
      { username: "emma", userid: "030", course: "Angular", price: 250 },
      { username: "felix", userid: "031", course: "React js", price: 100 },
    ],
    October: [
      { username: "gina", userid: "032", course: "Node js", price: 200 },
      { username: "henry", userid: "033", course: "Vue js", price: 150 },
      { username: "isabel", userid: "034", course: "Angular", price: 250 },
    ],
    November: [
      { username: "jason", userid: "035", course: "React js", price: 100 },
      { username: "karen", userid: "036", course: "Node js", price: 200 },
      { username: "leo", userid: "037", course: "Vue js", price: 150 },
    ],
    December: [
      { username: "mia", userid: "038", course: "Angular", price: 250 },
      { username: "noah", userid: "039", course: "React js", price: 100 },
      { username: "oliver", userid: "040", course: "Node js", price: 200 },
    ],
  },
  2023: {
    January: [
      { username: "ravi", userid: "001", course: "React js", price: 100 },
      { username: "john", userid: "002", course: "Node js", price: 200 },
      { username: "mary", userid: "003", course: "Vue js", price: 150 },
      { username: "lisa", userid: "004", course: "Angular", price: 250 },
      { username: "mike", userid: "005", course: "React js", price: 100 },
      { username: "jane", userid: "006", course: "Node js", price: 200 },
      { username: "peter", userid: "007", course: "Vue js", price: 150 },
      { username: "linda", userid: "008", course: "Angular", price: 250 },
      { username: "alex", userid: "009", course: "React js", price: 100 },
      { username: "sara", userid: "010", course: "Node js", price: 200 },
    ],
    February: [
      { username: "ravi", userid: "001", course: "React js", price: 100 },
      { username: "john", userid: "002", course: "Node js", price: 200 },
      { username: "mary", userid: "003", course: "Vue js", price: 150 },
      { username: "lisa", userid: "004", course: "Angular", price: 250 },
      { username: "mike", userid: "005", course: "React js", price: 100 },
      { username: "jane", userid: "006", course: "Node js", price: 200 },
      { username: "peter", userid: "007", course: "Vue js", price: 150 },
      { username: "linda", userid: "008", course: "Angular", price: 250 },
      { username: "alex", userid: "009", course: "React js", price: 100 },
      { username: "sara", userid: "010", course: "Node js", price: 200 },
    ],

    March: [
      { username: "kelly", userid: "011", course: "React js", price: 100 },
      { username: "nathan", userid: "012", course: "Node js", price: 200 },
      { username: "olivia", userid: "013", course: "Vue js", price: 150 },
    ],
    April: [
      { username: "emily", userid: "014", course: "Angular", price: 250 },
      { username: "patrick", userid: "015", course: "React js", price: 100 },
      { username: "quinn", userid: "016", course: "Node js", price: 200 },
    ],
    May: [
      { username: "ryan", userid: "017", course: "Vue js", price: 150 },
      { username: "sophia", userid: "018", course: "Angular", price: 250 },
      { username: "thomas", userid: "019", course: "React js", price: 100 },
    ],
    June: [
      { username: "umberto", userid: "020", course: "Node js", price: 200 },
      { username: "victoria", userid: "021", course: "Vue js", price: 150 },
      { username: "william", userid: "022", course: "Angular", price: 250 },
    ],
    July: [
      { username: "xander", userid: "023", course: "React js", price: 100 },
      { username: "yasmine", userid: "024", course: "Node js", price: 200 },
      { username: "zoe", userid: "025", course: "Vue js", price: 150 },
    ],
    August: [
      { username: "adam", userid: "026", course: "Angular", price: 250 },
      { username: "beth", userid: "027", course: "React js", price: 100 },
      { username: "carla", userid: "028", course: "Node js", price: 200 },
    ],
    September: [
      { username: "daniel", userid: "029", course: "Vue js", price: 150 },
      { username: "emma", userid: "030", course: "Angular", price: 250 },
      { username: "felix", userid: "031", course: "React js", price: 100 },
    ],
    October: [
      { username: "gina", userid: "032", course: "Node js", price: 200 },
      { username: "henry", userid: "033", course: "Vue js", price: 150 },
      { username: "isabel", userid: "034", course: "Angular", price: 250 },
    ],
    November: [
      { username: "jason", userid: "035", course: "React js", price: 100 },
      { username: "karen", userid: "036", course: "Node js", price: 200 },
      { username: "leo", userid: "037", course: "Vue js", price: 150 },
    ],
    December: [
      { username: "mia", userid: "038", course: "Angular", price: 250 },
      { username: "noah", userid: "039", course: "React js", price: 100 },
      { username: "oliver", userid: "040", course: "Node js", price: 200 },
      { username: "karenKb", userid: "089", course: "Node js", price: 200 },
      { username: "karenioi", userid: "080", course: "Node js", price: 200 },
    ],
  },
};

const TraineeTable = () => {
  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [data, setData] = useState(sampleData);

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
        groupedData[record.course] = [];
      }
      groupedData[record.course].push(record);
    });
    return groupedData;
  };

  const calculateAggregateTotal = (courseData) => {
    return courseData.reduce((total, record) => total + record.price, 0);
  };

  const dataToDisplay = getDataToDisplay();
  const groupedData = groupDataByCourse(dataToDisplay);

  return (
    <div className=" p-4">
      <h1 className="text-3xl text-center font-bold text-[#153243]">
        User Information{" "}
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
        <div className="mb-4 ">
          <label
            htmlFor="year-select"
            className="block text-sm font-medium text-white"
          >
            Select Year:
          </label>
          <select
            id="year-select"
            value={selectedYear}
            onChange={handleYearChange}
            className="mt-1 block w-52 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {Object.keys(data).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="month-select"
            className="block text-sm font-medium text-white"
          >
            Select Month:
          </label>
          <select
            id="month-select"
            value={selectedMonth}
            onChange={handleMonthChange}
            className="mt-1 block w-52 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="All Months">All Months</option>
            {Object.keys(data[selectedYear]).map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#153243]">
            <tr className="">
              <th className="px-6 py-3 bg-[#153243] text-left h-12 text-xs font-medium text-white uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 bg-[#153243] text-left h-12 text-xs font-medium text-white uppercase tracking-wider">
                UserID
              </th>
              <th className="px-6 py-3 bg-[#153243] text-left h-12 text-xs font-medium text-white uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 bg-[#153243] text-left h-12 text-xs font-medium text-white uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 bg-[#153243] text-left h-12 text-xs font-medium text-white uppercase tracking-wider">
                Course Count
              </th>
              <th className="px-6 py-3 bg-[#153243] text-left h-12 text-xs font-medium text-white uppercase tracking-wider">
                Aggregate Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.keys(groupedData).map((course, index) => (
              <React.Fragment key={course}>
                <tr className="bg-gray-100">
                  <td
                    colSpan="6"
                    className="px-6 py-3 text-xs font-bold text-[#153243] uppercase tracking-wider"
                  >
                    {course}
                  </td>
                </tr>
                {groupedData[course].map((record, idx) => (
                  <tr key={`${record.userid}-${index}-${idx}`}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.userid}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.course}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {record.price}
                    </td>
                    {idx === 0 && (
                      <React.Fragment>
                        <td
                          rowSpan={groupedData[course].length}
                          className="px-6 py-4 whitespace-nowrap font-bold"
                        >
                          {groupedData[course].length}
                        </td>
                        <td
                          rowSpan={groupedData[course].length}
                          className="px-6 py-4 whitespace-nowrap font-bold"
                        >
                          {calculateAggregateTotal(groupedData[course])}
                        </td>
                      </React.Fragment>
                    )}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TraineeTable;
