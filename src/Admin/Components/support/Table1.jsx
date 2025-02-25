import { useState, useEffect } from "react";
import TicketCards from "./TicketCards";
import { Link } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const getStatusColor = (status) => {
  switch (status) {
    case "Created":
      return "bg-blue-300";
    case "Pending":
      return "bg-yellow-300";
    case "Closed":
      return "bg-green-500";
    case "Resolved":
      return "bg-green-300";
    default:
      return "bg-gray-300";
  }
};

const getPriorityColor = (priority) => {
  switch (priority) {
    case "Low":
      return "bg-yellow-300";
    case "Medium":
      return "bg-orange-500";
    case "High":
      return "bg-red-500";
    default:
      return "bg-gray-300";
  }
};

const Table1 = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    console.log("Loaded Tickets from Storage:", storedTickets);

    const updatedTickets = storedTickets.map((ticket) => ({
      ...ticket,
      issueDate: ticket.issueDate || new Date().toISOString().split("T")[0],
    }));

    setTickets(updatedTickets);
  }, []);

  const updateTicket = (index, field, value) => {
    const updatedTickets = tickets.map((ticket, i) =>
      i === index ? { ...ticket, [field]: value } : ticket
    );
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
  };

  return (
    <>
      <div className="p-4">
        <div className="flex justify-end items-end gap-2">
        <Link to="/admin/raise-tickets-table">
            <button className="bg-[#494949] text-white px-3 py-3 rounded-lg">
              {" "}
              view tickets{" "}
            </button>
          </Link>
          <Link to="/admin/supportchatbox">
            <button className="bg-[#494949] text-white px-3 py-3 rounded-lg">
              {" "}
              view chats{" "}
            </button>
          </Link>

          <Link to="">
            {" "}
            <button className="bg-[#494949] text-white px-3 py-3 rounded-lg ">
              {" "}
              view emails{" "}
            </button>
          </Link>
        </div>
        <div>
          <TicketCards />
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Ticket List</h2>
          <table className="w-full border-collapse ">
            <thead className="py-2 ">
              <tr className=" ">
                <th className=" px-4 py-3">Ticket ID</th>
                <th className=" px-4 py-3">User</th>
                <th className=" px-4 py-3">User Id</th>
                <th className=" px-4 py-3">Issue Date</th>
                <th className=" px-4 py-3">Status</th>
                <th className=" px-4 py-3">Assigned To</th>
                <th className=" px-4 py-3">Priority</th>
                <th className=" px-4 py-3">Category</th>
                <th className=" px-4 py-3">Channel</th>

                <th className=" px-4 py-3">Completion Date</th>
              </tr>
            </thead>
            <tbody>
              {tickets.length > 0 ? (
                tickets.map((ticket, index) => (
                  <tr key={index} className="text-center hover:bg-[#f2f8ff]">
                    <td className=" px-4 py-2">{ticket.ticketId}</td>
                    <td className=" px-4 py-2">{ticket.userName}</td>
                    <td className=" px-4 py-2">{ticket.userId}</td>
                    <td className=" px-4 py-2">
                      {ticket.issueDate || "N/A"}{" "}
                      {/* Ensure issueDate is displayed */}
                    </td>

                    <td className=" px-4 py-2">
                      <select
                        className={`px-2 py-2 rounded-full text-white  ${getStatusColor(
                          ticket.status
                        )}`}
                        value={ticket.status}
                        onChange={(e) =>
                          updateTicket(index, "status", e.target.value)
                        }
                      >
                        <option value="Created">Created</option>
                        <option value="Pending">Pending</option>
                        <option value="Closed">Closed</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </td>
                    <td className=" px-4 py-2">{ticket.assignedTo || "N/A"}</td>
                    <td className=" px-4 py-2">
                      <select
                        className={`px-2 py-2 rounded-full text-white ${getPriorityColor(
                          ticket.priority
                        )}`}
                        value={ticket.priority}
                        onChange={(e) =>
                          updateTicket(index, "priority", e.target.value)
                        }
                      >
                        <option value="Low">Low</option>
                        <option value="Medium">Medium</option>
                        <option value="High">High</option>
                      </select>
                    </td>
                    <td className=" px-4 py-2">{ticket.category}</td>
                    <td className="px-4 py-4 gap-x-4 text-center flex items-center ">
                      {ticket.channel}
                      <Link to="/admin/supportchatbox">
                        <FaArrowUpRightFromSquare />
                      </Link>
                    </td>

                    <td className=" px-4 py-2">
                      {ticket.completionDate || "N/A"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    No tickets available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Table1;
