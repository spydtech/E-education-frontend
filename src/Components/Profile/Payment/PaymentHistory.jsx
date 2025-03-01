import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaChevronDown } from "react-icons/fa";
import { API_BASE_URL } from "../../../Config/api";

const statusColors = {
  COMPLETED: "bg-blue-100 text-blue-600",
  FAILED: "bg-red-100 text-red-600",
  PROCESSING: "bg-orange-100 text-orange-600",
};

const PaymentHistory = () => {
  const [transactions, setTransactions] = useState([]); // Initialize transactions state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const transactionsPerPage = 5;

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const token = localStorage.getItem("jwt"); // Get JWT token from localStorage
        if (!token) {
          setError("Unauthorized. Please log in.");
          setLoading(false);
          return;
        }

        const response = await axios.get(`${API_BASE_URL}/api/payment/getAll/paymentHistory`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // ✅ Convert `courseDetails` from string to object
        const formattedTransactions = response.data.map((txn) => ({
          ...txn,
          courseDetails: txn.courseDetails ? JSON.parse(txn.courseDetails) : { courseNames: [], coursePrices: [] },
        }));

        setTransactions(formattedTransactions); // Store parsed transactions in state
        setLoading(false);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setError("Failed to load payment history.");
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // Pagination Logic
  const totalPages = Math.ceil(transactions.length / transactionsPerPage);
  const currentTransactions = transactions.slice(
    (currentPage - 1) * transactionsPerPage,
    currentPage * transactionsPerPage
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) return <p className="p-6 text-center">Loading...</p>;
  if (error) return <p className="p-6 text-center text-red-500">{error}</p>;

  return (
    <div className="p-6 bg-white font-poppins">
      <h2 className="text-lg font-semibold mb-4">Payment History</h2>

      {/* Transactions Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b-2 border-b-black">
              {["Transaction ID", "Date", "User Name", "Courses", "Amount", "Payment Type", "Status"].map(
                (header) => (
                  <th key={header} className="px-4 py-2 text-gray-600">{header}</th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {currentTransactions.length > 0 ? (
              currentTransactions.map((txn, index) => (
                <tr key={index} className="border-b">
                  <td className="px-4 py-2">{txn.razorpayPaymentId}</td>
                  <td className="px-4 py-2">{new Date(txn.createdAt).toLocaleDateString()}</td>
                  <td className="px-4 py-2">{txn.userName}</td>
                  <td className="px-4 py-2">{txn.courseDetails.courseNames.join(", ")}</td>
                  <td className="px-4 py-2">{txn.totalAmount.toFixed(2)} INR</td>
                  <td className="px-4 py-2">{txn.paymentMethod}</td>
                  <td className="px-4 py-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${statusColors[txn.paymentStatus]}`}>
                      {txn.paymentStatus}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No transactions found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <p className="text-gray-500">
          {Math.min((currentPage - 1) * transactionsPerPage + 1, transactions.length)}-
          {Math.min(currentPage * transactionsPerPage, transactions.length)} of {transactions.length}
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
