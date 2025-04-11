import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import { API_BASE_URL } from "../../../Config/api";

const AllPaymentsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [userData, setUserData] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_BASE_URL}/api/payment/all`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        if (Array.isArray(response.data)) {
          const processedData = response.data.map(item => {
            // Clean and convert amount to number
            let amount = 0;
            if (item.totalAmount !== undefined && item.totalAmount !== null) {
              const amountString = String(item.totalAmount);
              // Remove all commas and non-numeric characters except decimal point
              const cleanString = amountString.replace(/[^0-9.]/g, '');
              amount = parseFloat(cleanString) || 0;
            }
            
            return {
              ...item,
              totalAmount: amount,
              // Ensure consistent status formatting
              paymentStatus: item.paymentStatus?.toUpperCase() || 'PENDING'
            };
          });

          setUserData(processedData);
        } else {
          throw new Error("API response is not an array");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [jwt]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleTabChange = (event) => {
    setActiveTab(event.target.value);
  };

  const getStatusClass = (status) => {
    switch (status.toUpperCase()) {  // Convert to uppercase for consistent comparison
      case "COMPLETED":
        return "text-green-500";
      case "PENDING":
        return "text-orange-500";
      case "REJECTED":
        return "text-red-500";
      case "PROCESSING":
        return "text-yellow-500";
      default:
        return "";
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const filteredData = userData.filter((item) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    const matchesSearch =
      (item.userId || "").toString().toLowerCase().includes(lowerCaseSearch) ||
      (item.razorpayPaymentId || "").toLowerCase().includes(lowerCaseSearch) ||
      (item.userName || "").toLowerCase().includes(lowerCaseSearch) ||
      (item.userEmail || "").toLowerCase().includes(lowerCaseSearch) ||
      (item.paymentMethod || "").toLowerCase().includes(lowerCaseSearch) ||
      (item.createdAt || "").toLowerCase().includes(lowerCaseSearch);

      const matchesStatus = activeTab === "All" || 
      (activeTab === "Completed" ? item.paymentStatus === "COMPLETED" : 
       item.paymentStatus === activeTab.toUpperCase());

return matchesSearch && matchesStatus;
});


  
  // Calculate total earnings from COMPLETED payments
  const calculateTotalEarnings = () => {
    return userData
      .filter(item => item.paymentStatus === "COMPLETED")
      .reduce((sum, payment) => sum + payment.totalAmount, 0);
  };

  const totalEarnings = calculateTotalEarnings();

  // Calculate pending payments
  const pendingPayments = userData
    .filter(item => item.paymentStatus === "PENDING")
    .reduce((sum, payment) => sum + payment.totalAmount, 0);

  // Format currency for display (Indian format)
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount).replace('₹', '₹');
  };

  const exportToExcel = () => {
    const worksheetData = filteredData.map((item) => ({
      Date: formatDate(item.createdAt),
      "User ID": item.userId,
      "Full Name": item.userName,
      Email: item.userEmail,
      "Course Purchase": item.courseDetails,
      "Course Expiry": item.expiryDate,
      "Payment Method": item.paymentMethod,
      "Transaction ID": item.razorpayPaymentId,
      Amount: item.totalAmount,
      Status: item.paymentStatus,
    }));

    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Payments");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const fileData = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });

    saveAs(fileData, "Payments_Report.xlsx");
  };

  if (isLoading) {
    return <div className="p-4 text-center">Loading payments data...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-4">
      {/* Filters and Search */}
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
      <select
    value={activeTab}
    onChange={handleTabChange}
    className="w-[180px] p-3 text-[#989898] border border-[#ccc] rounded-lg"
  >
    <option value="All">Status</option>
    <option value="Completed">Completed</option> {/* Fixed to match calculation */}
    <option value="Pending">Pending</option>
    <option value="Processing">Processing</option>
    <option value="Rejected">Rejected</option>
  </select>

        <button
          onClick={exportToExcel}
          className="p-3 rounded-lg bg-[#494949] text-white hover:bg-[#333] transition-colors"
        >
          Download Report
        </button>

        <div className="relative w-full max-w-md">
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full p-3 pl-10 border-2 border-[#989898] text-[15px] text-[#989898] placeholder:text-[#989898] outline-none focus:ring-0 rounded-3xl"
            placeholder="Search Here..."
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-[#FFE2E5] text-black h-[160px] rounded-lg flex flex-col justify-center items-start px-6">
          <h2 className="text-lg">Total Earnings</h2>
          <p className="text-2xl mt-2 font-bold">₹{totalEarnings.toLocaleString('en-IN')}</p>
        </div>

        <div className="bg-[#FFF4DE] text-black h-[160px] rounded-lg flex flex-col justify-center items-start px-6">
          <h2 className="text-lg">Pending Payments</h2>
          <p className="text-2xl mt-2 font-bold">₹{pendingPayments.toLocaleString('en-IN')}</p>
        </div>

        <div className="bg-[#DCFCE7] text-black h-[160px] rounded-lg flex flex-col justify-center items-start px-6">
          <h2 className="text-lg">Withdrawal Method</h2>
          <p className="text-md mt-2">Acc No: 1736738373</p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full text-sm border">
          <thead className="bg-gray-100 text-gray-700 text-left">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">User ID</th>
              <th className="px-4 py-3">Full Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Course Purchase</th>
              <th className="px-4 py-3">Course Expiry</th>
              <th className="px-4 py-3">Payment Method</th>
              <th className="px-4 py-3">Transaction ID</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr 
                  key={index} 
                  className="hover:bg-blue-50 border-b text-[#4A4A4A]"
                >
                  <td className="px-4 py-3">{formatDate(item.createdAt)}</td>
                  <td className="px-4 py-3">{item.userId}</td>
                  <td className="px-4 py-3">{item.userName}</td>
                  <td className="px-4 py-3">{item.userEmail}</td>
                  <td className="px-4 py-3">{item.courseDetails}</td>
                  <td className="px-4 py-3">{item.expiryDate}</td>
                  <td className="px-4 py-3">{item.paymentMethod}</td>
                  <td className="px-4 py-3">{item.razorpayPaymentId}</td>
                  <td className="px-4 py-3">₹{item.totalAmount.toLocaleString('en-IN')}</td>
                  <td className={`px-4 py-3 font-semibold ${getStatusClass(item.paymentStatus)}`}>
                    {item.paymentStatus}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="px-4 py-6 text-center text-gray-500">
                  No payments found matching your criteria
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPaymentsTable;