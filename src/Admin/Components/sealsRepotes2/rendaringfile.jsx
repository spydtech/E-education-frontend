import React from "react";
import BarGraphComponent from "./countofproducts";

const RenderingFile = () => {
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

  return (
    <div className="bg-[#03045e] w-screen h-screen flex items-center justify-center">
      <div className=" p-6 rounded-lg shadow-lg w-[900px] h-[500px]">
        <BarGraphComponent data={data} />
      </div>
    </div>
  );
};

export default RenderingFile;
