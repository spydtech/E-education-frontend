import React, { useState } from "react";

const trainee = [
  {
    name: "Robin Huion",
  },
];

const course = "Full Stack Java"; // Setting the same course for all trainees

const data = [
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",
    name: "Robert Wolfkisser",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",
    name: "Jill Jailbreaker",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-3.png",
    name: "Henry Silkeater",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",
    name: "Bill Horsefighter",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
    name: "Jeremy Footviewer",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-6.png",
    name: "Robert Wolfkisser",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",
    name: "Jill Jailbreaker",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",
    name: "Henry Silkeater",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png",
    name: "Bill Horsefighter",
    course: course,
  },
  {
    avatar:
      "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-10.png",
    name: "Jeremy Footviewer",
    course: course,
  },
];
const courseColor = "bg-red-100 text-red-400"; // Example color for courses

function TraineeCourseTable2() {
  const [search, setSearch] = useState("");
  const themes = localStorage.getItem("theme");

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const rows = filteredData.map((item, index) => (
    <tr
      key={index}
      className={`${
        themes === "dark" ? "bg-black text-white border-white" : ""
      } border-b bg-[#204349] bg-opacity-10`}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 h-10 w-10">
            <img className="h-10 w-10 rounded-full" src={item.avatar} alt="" />
          </div>
          <div className="ml-4">
            <h1
              className={`${
                themes === "dark" ? "bg-black text-white border-white" : ""
              } text-sm font-medium text-[#204349]`}
            >
              {item.name}
            </h1>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <h1
          className={`${
            themes === "dark" ? "bg-black text-white border-white" : ""
          } px-2 inline-flex text-[16px] leading-5 font-semibold text-[#204349] rounded-full`}
        >
          {item.course}
        </h1>
      </td>
    </tr>
  ));

  return (
    <div className="overflow-x-auto">
      <div className="min-w-full shadow-md overflow-x-auto rounded-lg">
        <div className="p-3 flex flex-col md:flex-row justify-between m-3 space-y-3 md:space-y-0">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={handleSearchChange}
            className="inline-block px-4 py-2 placeholder:text-[#204349] border-2 border-[#204349] rounded-3xl"
          />
          <div className="flex items-center space-x-2 mx-2">
            <h3
              className={`${
                themes === "dark" ? "bg-black text-white border-white" : ""
              } text-[#204349]`}
            >
              Trainee:
            </h3>
            {trainee.map((traineeItem, index) => (
              <span
                key={index}
                className={`${
                  themes === "dark" ? "bg-black text-white border-white" : ""
                } px-2 py-1 text-[#204349] rounded-md`}
              >
                {traineeItem.name}
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead className="bg-[#204349]">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  User
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                >
                  Course
                </th>
              </tr>
            </thead>
            <tbody
              className={`${
                themes === "dark" ? "bg-black" : ""
              } divide-y divide-gray-200`}
            >
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TraineeCourseTable2;

