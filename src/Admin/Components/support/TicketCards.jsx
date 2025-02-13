import React from "react";

const ticketStats = [
  { label: "Total Tickets", value: "3,056,78", bgColor: "bg-[#FFF4DE]" },
  { label: "Pending Tickets", value: "450", bgColor: "bg-[#DCFCE7]" },
  { label: "Resolved Tickets", value: "564", bgColor: "bg-[#FFE2E5]" },
  { label: "Rejected Requests", value: "250", bgColor: "bg-[#F3E8FF]" },
  { label: "New Tickets", value: "250", bgColor: "bg-[#C6E1FF]" },
];

const TicketCards = () => {
  return (
    <div className="flex w-full justify-center gap-4 p-4">
      {ticketStats.map((stat, index) => (
        <div
          key={index}
          className={`w-44 justify-center items-center flex h-40 p-4 rounded-2xl shadow-md ${stat.bgColor} text-center`}
        >
          <div>
            <p className="text-gray-700 font-medium">{stat.label}</p>
            <p className="text-xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketCards;
