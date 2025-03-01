import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

const AllPaymentsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const jwt = localStorage.getItem("jwt");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/api/payment/all`, {
        headers: {
          Authorization: `Bearer ${jwt}`, // Send JWT token to authenticate the request
        },
      })
      .then((response) => {
        console.log("API response:", response);
        if (Array.isArray(response.data)) {
          setUserData(response.data);
        } else {
          console.error("API response is not an array:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [jwt]);

  const getStatusClass = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "Pending":
        return "text-orange-500";
      case "Rejected":
        return "text-red-500";
      case "Processing":
        return "text-yellow-500";
      default:
        return "";
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
     
    });
  };
  const filteredData = userData.filter((item) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    return (
      (item.userId ? String(item.userId).toLowerCase() : "").includes(lowerCaseSearchTerm) ||
      (item.TransactionId ? String(item.TransactionId).toLowerCase() : "").includes(lowerCaseSearchTerm) ||
      (item.fullName ? String(item.fullName).toLowerCase() : "").includes(lowerCaseSearchTerm) ||
      (item.email ? String(item.email).toLowerCase() : "").includes(lowerCaseSearchTerm) ||
      (item.Date ? String(item.Date).toLowerCase() : "").includes(lowerCaseSearchTerm) ||
      (item.paymentMethod ? String(item.paymentMethod).toLowerCase() : "").includes(lowerCaseSearchTerm)
    );
  });
  
  

  return (
    <div className="overflow-x-auto ">
     <div className="relative w-[450px] mb-4">
  {/* Search Icon */}
  <svg
    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.485 20.154L13.223 13.892C12.723 14.318 12.148 14.6477 11.498 14.881C10.848 15.1143 10.1947 15.231 9.53801 15.231C7.93668 15.231 6.58135 14.6767 5.47201 13.568C4.36268 12.4593 3.80801 11.1043 3.80801 9.50298C3.80801 7.90165 4.36201 6.54598 5.47001 5.43598C6.57801 4.32598 7.93268 3.77032 9.53401 3.76898C11.1353 3.76765 12.4913 4.32232 13.602 5.43298C14.7127 6.54365 15.268 7.89932 15.268 9.49998C15.268 10.1947 15.145 10.867 14.899 11.517C14.653 12.167 14.3297 12.723 13.929 13.185L20.191 19.446L19.485 20.154ZM9.53901 14.23C10.8657 14.23 11.9857 13.7733 12.899 12.86C13.8123 11.9467 14.269 10.8263 14.269 9.49898C14.269 8.17165 13.8123 7.05165 12.899 6.13898C11.9857 5.22632 10.8657 4.76965 9.53901 4.76898C8.21235 4.76832 7.09201 5.22498 6.17801 6.13898C5.26401 7.05298 4.80735 8.17298 4.80801 9.49898C4.80868 10.825 5.26535 11.945 6.17801 12.859C7.09068 13.773 8.21068 14.2297 9.53801 14.229"
      fill="#989898"
    />
  </svg>

  {/* Search Input */}
  <input
    type="text"
    value={searchTerm}
    onChange={handleSearch}
    className="w-full p-3 pl-12 border-2 border-[#989898] text-[15px] text-[#989898] placeholder:text-[#989898] outline-none focus:ring-0 rounded-3xl"
    placeholder="Search Here..."
  />

</div>

      <table className="min-w-full text-sm">
        <thead className="text-[#989898] text-nowrap font-poppins  border-b-2 border-black">
          <tr className="h-12">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">UserId</th>
            <th className="px-4 py-2 text-left">FullName</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Course Purchase</th>
            <th className="px-4 py-2 text-left">Course Expaire</th>
            <th className="px-4 py-2 text-left">PaymentMethod</th>
            <th className="px-4 py-2 text-left">TransactionId</th>
            <th className="px-4 py-2 text-left">TotalAmount</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr
              key={index}
              className="hover:bg-[#357bcb] cursor-pointer w-auto hover:bg-opacity-10 text-[#989898]"
            >
              <td className="px-4 py-2">{formatDate(item.createdAt)}</td>
              <td className="px-4 py-2">{item.userId}</td>
              <td className="px-4 text-nowrap py-2">{item.userName}</td>
              <td className="px-4 py-2">{item.userEmail}</td>
              <td className="px-4 py-2">{item.courseDetails}</td>
              <td className="px-4 py-2">{item.expiryDate}</td>
              <td className="px-4 py-2">{item.paymentMethod}</td>
              <td className="px-4 py-2">{item.razorpayPaymentId}</td>
              <td className="px-4 py-2">{item.totalAmount}</td>
              <td className={`px-4 py-2 ${getStatusClass(item.paymentStatus)}`}>
                {item.paymentStatus}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPaymentsTable;