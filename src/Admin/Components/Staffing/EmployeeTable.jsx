import React, { useEffect, useState } from "react";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data from local storage
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <div className="flex justify-center min-h-screen mx-auto p-2 font-poppins">
      <div className="bg-white shadow-lg w-full">
        <h2 className="text-2xl font-bold text-center bg-[#001510] text-white py-4 ">
          Employee List
        </h2>
        <div className=" overflow-x-auto">
          {employees.length > 0 ? (
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">First Name</th>
                  <th className="border border-gray-300 px-4 py-2">Last Name</th>
                  <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  <th className="border border-gray-300 px-4 py-2">Username</th>
                  <th className="border border-gray-300 px-4 py-2">Password</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((employee, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{employee.firstName}</td>
                    <td className="border border-gray-300 px-4 py-2">{employee.lastName}</td>
                    <td className="border border-gray-300 px-4 py-2">{employee.mobileNumber}</td>
                    <td className="border border-gray-300 px-4 py-2">{employee.email}</td>
                    <td className="border border-gray-300 px-4 py-2">{employee.username}</td>
                    <td className="border border-gray-300 px-4 py-2">{employee.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">No employees registered yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeTable;
