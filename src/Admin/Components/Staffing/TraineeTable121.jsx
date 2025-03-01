import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

const TraineeTable = () => {
  const [trainees, setTrainees] = useState([]);
// const [traineeData, setTraineeData] = useState([]);
const jwt = localStorage.getItem("jwt");
  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/trainee/getAllTrainee`, {
        headers: {
          Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
        },
      })
      .then((response) => {
        console.log("API response:", response);
        if (Array.isArray(response.data)) {
          setTrainees(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [jwt]);

  return (
    <div className="flex justify-center min-h-screen mx-auto ">
      <div className="bg-white rounded-lg shadow-lg w-full">
        <h2 className="text-2xl font-bold text-center bg-[#001510] text-white py-4 ">
          Trainee List
        </h2>
        <div className="overflow-x-auto">
          {trainees.length > 0 ? (
            <table className="table-auto w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">userId</th>
                  <th className="border border-gray-300 px-4 py-2">First Name</th>
                  <th className="border border-gray-300 px-4 py-2">Last Name</th>
                  <th className="border border-gray-300 px-4 py-2">Mobile Number</th>
                  <th className="border border-gray-300 px-4 py-2">Email</th>
                  {/* <th className="border border-gray-300 px-4 py-2">Username</th>
                  <th className="border border-gray-300 px-4 py-2">Password</th> */}
                </tr>
              </thead>
              <tbody>
                {trainees.map((trainee, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-gray-300 px-4 py-2">{trainee.userId}</td>
                    <td className="border border-gray-300 px-4 py-2">{trainee.firstName}</td>
                    <td className="border border-gray-300 px-4 py-2">{trainee.lastName}</td>
                    <td className="border border-gray-300 px-4 py-2">{trainee.phoneNumber}</td>
                    <td className="border border-gray-300 px-4 py-2">{trainee.email}</td>
                   
                    {/* <td className="border border-gray-300 px-4 py-2">{trainee.password}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center text-gray-500">No trainees registered yet.</p>
          )}
        </div>
      </div>
    </div>
  );``
};

export default TraineeTable;