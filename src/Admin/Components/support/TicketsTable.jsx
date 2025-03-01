import React, { useState, useEffect } from "react";
import { BiLinkExternal } from "react-icons/bi";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getUser } from "../../../State/Auth/Action";

const TicketsTable = () => {
 
  const [isTicketOpen, setIsTicketOpen] = useState(false);
  const [ticketData, setTicketData] = useState({
    userName: "",
    userId: "",
    status: "Created",
    assignedTo: "",
    priority: "",
    category: "",
    channel: "",
    issueDate: "",
    completionDate: "",
  });
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [ticket, setTicket] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();


   useEffect(() => {
        const storedJwt = localStorage.getItem("jwt");
      
        if (storedJwt) {
          dispatch(getUser(storedJwt)); // Fetch user info
        }
      }, [dispatch]);
      
      useEffect(() => {
        if (auth.user && auth.user.role === "ADMIN") {
          getUser(auth.user.id);
        }
      }, [auth.user]);

  useEffect(() => {
    const fetchTickets = async () => {
      const jwt = localStorage.getItem("jwt");

      if (!jwt) {
        setError("Unauthorized: No token found");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/api/chat-support/getAll`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        setTickets(response.data); // ✅ FIXED: Using correct state update
      } catch (err) {
        setError("Failed to fetch tickets. Please try again.");
        console.error("Error fetching tickets:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  const openTicketForm = (tickets) => {
    setTicket(tickets);
    setIsTicketOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicketData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitTicket = async () => {
    if (!ticket) {
      console.error("No ticket selected for update.");
      return;
    }

    const jwt = localStorage.getItem("jwt");
    if (!jwt) {
      setError("Unauthorized: No token found");
      return;
    }

    if (!ticket.ticketNo) {
      console.error("Error: Ticket Number is undefined!");
      return;
    }

    const updatedTicket = {
      assignedTo: ticket.assignedTo,
      status: ticket.status,
      priority: ticket.priority,
      channel: ticket.channel,
      completionDate: ticket.completionDate,
    };

    console.log("Updating Ticket:", updatedTicket); // ✅ Debugging log

    try {
      const response = await axios.put(
        `${API_BASE_URL}/api/chat-support/update/${ticket.ticketNo}`,
        updatedTicket,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Ticket updated successfully:", response.data);

      setTickets((prevTickets) =>
        prevTickets.map((t) =>
          t.ticketNo === ticket.ticketNo ? { ...t, ...updatedTicket } : t
        )
      );

      setIsTicketOpen(false);
    } catch (error) {
      console.error("Error updating ticket:", error);
      setError("Failed to update ticket. Please try again.");
    }
  };

  

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">New Tickets</h1>
        <button
          className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
          // onClick={addTicket}
        >
          Raise Tickets
        </button>
      </div>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left text-gray-600">
            {[
              "Ticket No",
              "Email ID",
              "Contact Number",
              "Request Ticket Type",
              "Ticket raised on",
              "Ticket Body",
              "Priority",
              "Status",
              "Assigned to",
              "Actions",
            ].map((heading) => (
              <th key={heading} className="p-3 border border-gray-200">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id} className="border border-gray-200">
              <td className="p-3">{ticket.ticketNo}</td>
              <td className="p-3">{ticket.emailId}</td>
              <td className="p-3">{ticket.contactNumber}</td>
              <td className="p-3">{ticket.requestTicketType}</td>
              <td className="p-3">{ticket.ticketRaisedOn}</td>
              <td className="p-3">{ticket.ticketBody}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-md text-white text-sm ${
                    ticket.priority === "Low"
                      ? "bg-yellow-200 text-yellow-700"
                      : ticket.priority === "High"
                      ? "bg-red-500"
                      : "bg-gray-400"
                  }`}
                >
                  {ticket.priority}
                </span>
              </td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded-md text-white text-sm ${
                    ticket.status === "Closed"
                      ? "bg-blue-400"
                      : ticket.status === "Resolved"
                      ? "bg-green-400"
                      : "bg-gray-400"
                  }`}
                >
                  {ticket.status}
                </span>
              </td>
              <td className="p-3">{ticket.assignedTo}</td>
              <td className="p-3 text-center">
                <button 
                  onClick={() => openTicketForm(ticket)}
                className="text-gray-600 hover:text-gray-900">
                  <BiLinkExternal size={18} 
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>



      {isTicketOpen && ticket && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-5 flex items-center justify-center">
          <div className="bg-[#494949] rounded-2xl w-[800px] shadow-lg">
            <div className="text-white p-5 rounded-t-lg flex justify-between">
              <span className="text-lg font-semibold">
                {ticket.ticketNo}
              </span>
              <div>
                <label className="text-white pr-2">Status</label>
                <select
                  required
                  className="bg-[#494949] text-white p-2 rounded"
                  value={ticket.status}
                  onChange={(e) =>
                    setTicket({ ...ticket, status: e.target.value })
                  }
                >
                  <option value="">Select Status</option>
                  <option>CREATED</option>
                  <option>PENDING</option>
                  <option>CLOSED</option>
                  <option>RESOLVED</option>
                </select>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                submitTicket();
              }}
            >
              <div className="bg-white rounded-b-2xl p-4">
                <div className="p-4 grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-600">User Name</label>
                    <input
                      type="text"
                      value={ticket.userName}
                      readOnly
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">User ID</label>
                    <input
                      type="text"
                      value={ticket.userId}
                      readOnly
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Issue Raised On</label>
                    <input
                      required
                      type="ticketRaisedOn"
                      value={ticket.ticketRaisedOn}
                      className="border-2  p-2 w-full rounded"
                     
                      
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Completion Date</label>
                    <input
                      required
                      type="date"
                      value={ticket.completionDate}
                      className="border p-2 w-full rounded"
                      onChange={(e) =>
                        setTicket({
                          ...ticket,
                          completionDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Assigned To</label>
                    <select required className="border p-2 w-full rounded" 
  onChange={(e) =>
    setTicket({
      ...ticket,
      assignedTo: e.target.value,
    })
  }
>
  <option value="">Select Staff</option>
  {auth.user ? (
    <option value={`${auth.user.firstName} ${auth.user.lastName}`}>
      {auth.user.firstName} {auth.user.lastName}
    </option>
  ) : (
    <option disabled>Loading...</option>
  )}
</select>

                  </div>
                  <div>
                    <label className="text-gray-600">Priority</label>
                    <select
                      required
                      className="border p-2 w-full rounded"
                      onChange={(e) =>
                        setTicket({
                          ...ticket,
                          priority: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Priority</option>
                      <option>LOW</option>
                      <option>MEDIUM</option>
                      <option>HIGH</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-600">Category</label>
                    <input
                      required
                      className="border p-2 w-full rounded"
                      type="text"
                      value={ticket.requestTicketType}
                      readOnly
                      />
                      
                   
                  </div>
                  <div>
                    <label className="text-gray-600">Channel</label>
                    <select
                      required
                      className="border p-2 rounded w-full"
                      onChange={(e) =>
                        setTicket({
                          ...ticket,
                          channel: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Channel</option>
                      <option>CHAT</option>
                      <option>EMAIL</option>
                    </select>
                  </div>
                </div>
                <div className="p-4 flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#494949] px-6 py-2 text-white rounded mr-2"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsTicketOpen(false)}
                    className="bg-red-500 px-6 py-2 text-white rounded"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketsTable;

