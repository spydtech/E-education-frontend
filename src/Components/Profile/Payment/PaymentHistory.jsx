import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const transactionsData = [
  { id: "EEDU98087965", date: "Wed Feb 5, 2025", time: "10:45:20 am", course: "UI/UX Design", amount: "17899.00 INR", paymentType: "Debit card", status: "Successful" },
  { id: "EEDU98087966", date: "Wed Feb 5, 2025", time: "10:45:21 am", course: "UI/UX Design", amount: "17899.00 INR", paymentType: "UPI", status: "Failed" },
  { id: "EEDU98087967", date: "Wed Feb 5, 2025", time: "10:45:22 am", course: "UI/UX Design", amount: "17899.00 INR", paymentType: "Credit Card", status: "Processing" },
  { id: "EEDU98087968", date: "Wed Feb 5, 2025", time: "10:45:23 am", course: "UI/UX Design", amount: "17899.00 INR", paymentType: "IMPS - Banking", status: "Successful" },
  { id: "EEDU98087969", date: "Wed Feb 5, 2025", time: "10:45:24 am", course: "UI/UX Design", amount: "17899.00 INR", paymentType: "Debit card", status: "Successful" },
  { id: "EEDU98087970", date: "Thu Feb 6, 2025", time: "11:00:20 am", course: "UI/UX Design", amount: "17899.00 INR", paymentType: "Debit card", status: "Successful" },
  { id: "EEDU98087971", date: "Thu Feb 6, 2025", time: "11:00:30 am", course: "UI/UX Design", amount: "17899.00 INR", paymentType: "Credit Card", status: "Processing" },
];

const statusColors = {
  Successful: "bg-blue-100 text-blue-600",
  Failed: "bg-red-100 text-red-600",
  Processing: "bg-orange-100 text-orange-600",
};

const PaymentHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  // Calculate total pages
  const totalPages = Math.ceil(transactionsData.length / transactionsPerPage);

  // Slice transactions for the current page
  const currentTransactions = transactionsData.slice(
    (currentPage - 1) * transactionsPerPage,
    currentPage * transactionsPerPage
  );

  // Pagination Handler
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6 bg-white  font-poppins">
      {/* Header and Filters */}
      <div className="flex justify-between items-center mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
          All Transactions <FaChevronDown className="ml-2" />
        </button>
        <div className="flex gap-2">
          {["Date", "Amount", "Course Type", "Payment Status", "Payment Type"].map((filter) => (
            <button key={filter} className="border px-4 py-2 rounded-lg flex items-center">
              {filter} <FaChevronDown className="ml-1" />
            </button>
          ))}
        </div>
      </div>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left ">
          <thead>
            <tr className="border-b-2 border-b-black">
              {["Transaction ID", "Date of Transaction", "Time of Transaction", "Course Name", "Amount", "Payment Type", "Status"].map(
                (header) => (
                  <th key={header} className="px-4 py-2 text-gray-600">{header}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {currentTransactions.map((txn, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">{txn.id}</td>
                <td className="px-4 py-2">{txn.date}</td>
                <td className="px-4 py-2">{txn.time}</td>
                <td className="px-4 py-2">{txn.course}</td>
                <td className="px-4 py-2">{txn.amount}</td>
                <td className="px-4 py-2">{txn.paymentType}</td>
                <td className="px-4 py-2">
                  <span className={`px-2 py-1 rounded-full text-xs ${statusColors[txn.status]}`}>
                    {txn.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500">
          {Math.min((currentPage - 1) * transactionsPerPage + 1, transactionsData.length)}-
          {Math.min(currentPage * transactionsPerPage, transactionsData.length)} of {transactionsData.length}
        </p>

        <div className="flex items-center space-x-2">
          {/* Previous Page */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-lg ${currentPage === 1 ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          >
            Prev
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-3 py-1 rounded-lg ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Page */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-lg ${currentPage === totalPages ? "bg-gray-200 text-gray-500 cursor-not-allowed" : "bg-blue-500 text-white"}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
