import React, { useState } from "react";

const pendingData = [
  {
    fullName: "Alice Johnson",
    userId: "125",
    transactionId: "rzp_3",
    totalAmount: "300",
    status: "Pending",
    Date: "24/june/2024",
    email: "alice.johnson@example.com",
    paymentMethod: "Bank Transfer",
  },
  // Add more sample data if needed
];

const PendingPaymentsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = pendingData.filter((item) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      item.fullName.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.userId.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.transactionId.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.email.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.Date.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.paymentMethod.toLowerCase().includes(lowerCaseSearchTerm) ||
      item.status.toLowerCase().includes(lowerCaseSearchTerm)
    );
  });

  return (
    <div className="overflow-x-auto">
      <div className="flex w-[250px] rounded-lg  items-center mb-4 bg-[#f6ac14]">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 border w-[250px] bg-[#153243] text-[15px] text-white placeholder:text-white outline-none focus:outline-none focus:ring-0 focus:border-transparent border-none rounded-lg"
          placeholder="Search Here...."
        />
      </div>
      <table className="min-w-full">
        <thead className="bg-[#153243] text-nowrap text-white">
          <tr className="h-12">
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">UserId</th>
            <th className="px-4 py-2 text-left">FullName</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Course Purchase</th>
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
              className="hover:bg-[#153243] hover:bg-opacity-10 text-[#153243]"
            >
              <td className="px-4 py-2">{item.Date}</td>
              <td className="px-4 py-2">{item.userId}</td>
              <td className="px-4 text-nowrap py-2">{item.fullName}</td>
              <td className="px-4 py-2">{item.email}</td>
              <td className="px-4 py-2">{item.courseDetails}</td>
              <td className="px-4 py-2">{item.paymentMethod}</td>
              <td className="px-4 py-2">{item.transactionId}</td>
              <td className="px-4 py-2">{item.totalAmount}</td>
              <td className="px-4 py-2 text-orange-400">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingPaymentsTable;
