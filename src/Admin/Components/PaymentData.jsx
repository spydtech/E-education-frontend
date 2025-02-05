import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ThemeToggle from "../../Components/trainee/TraineeDashboard/Theamtoggle";
const PaymentData = () => {
  // Sample data array
  const paymentData = [
    {
      date: "2/3/2024",
      userId: "42310",
      fullName: "User A",
      email: "usera@email.com",
      course: "JavaScript",
      paymentMethod: "Credit Card",
    },
    {
      date: "3/4/2024",
      userId: "42314",
      fullName: "User B",
      email: "userb@email.com",
      course: "Java",
      paymentMethod: "Online",
    },
    {
      date: "4/5/2024",
      userId: "42318",
      fullName: "User C",
      email: "userc@email.com",
      course: "Python",
      paymentMethod: "Debit Card",
    },
    {
      date: "5/6/2024",
      userId: "42322",
      fullName: "User D",
      email: "userd@email.com",
      course: "React",
      paymentMethod: "UPI",
    },
    {
      date: "6/7/2024",
      userId: "42326",
      fullName: "User E",
      email: "usere@email.com",
      course: "Node.js",
      paymentMethod: "Cash",
    },
  ];
  const themes = localStorage.getItem("theme");
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  // const themes= localStorage.getItem("theme")
  return (
    <div className={` flex flex-col justify-center overflow-x-auto p-4`}>
      <h1 className=" font-semibold text-xl py-2">Payment Method</h1>
      <div className={` max-w-[1140px]`}>
        <table className="min-w-full border-collapse overflow-hidden">
          <thead className="">
            <tr className=" text-base  ">
              <th className="px-4 py-4 border text-start">Date</th>
              <th className="px-4 py-4 border text-start">User Id</th>
              <th className="px-4 py-4 border text-start">Full Name</th>
              <th className="px-4 py-4 border text-start">E-Mail ID</th>
              <th className="px-4 py-4 border text-start">Course</th>
              <th className="px-4 py-4 border text-start">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((data, index) => (
              <tr className="text-sm" key={index}>
                <td className="px-4 py-2 border">{data.date}</td>
                <td className="px-4 py-2 border">{data.userId}</td>
                <td className="px-4 py-2 border">{data.fullName}</td>
                <td className="px-4 py-2 border">{data.email}</td>
                <td className="px-4 py-2 border">{data.course}</td>
                <td className="px-4 py-2 border">{data.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentData;
