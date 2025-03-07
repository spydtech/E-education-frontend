import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUser } from "../../../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../../../Config/api";

const UserSupport = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    emailId: "",
    contactNumber: "",
    requestTicketType: "",
    ticketBody: "",
  });

  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const userEmail = auth?.user?.email || localStorage.getItem("email") || "email";
  const adminEmail = "pa1velagana@gmail.com";

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  // Fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/chat/getAllUserMessages/email?email=${userEmail}`,
          { headers: { Authorization: `Bearer ${jwt}` } }
        );
        setMessages(response.data.messages || []);
      } catch (error) {
        console.error("Error fetching messages:", error.message);
      }
    };
    fetchMessages();
  }, [userEmail, jwt]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE_URL}/api/chat-support/create/chatSupport`, formData, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwt}` },
      });
      alert("Support request submitted successfully!");
    } catch (error) {
      alert("Failed to submit support request.");
    }
  };

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      senderEmail: userEmail,
      receiverEmail: adminEmail,
      message: newMessage,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await axios.post(`${API_BASE_URL}/api/chat/sendMessage`, userMessage, {
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwt}` },
      });

      setMessages((prevMessages) => [...prevMessages, response.data]);
      setNewMessage("");
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 font-poppins p-2 space-y-4 lg:space-y-0 lg:space-x-6">
      {/* Chat Section */}
      <div className="w-full lg:w-2/3 bg-white md:h-auto h-[500px] shadow-md rounded-md flex flex-col">
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-md">
          <h3 className="text-lg font-semibold">Chat Support</h3>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto h-[500px] md:h-auto space-y-3">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.email === userEmail ? "justify-end" : "justify-start"}`}>
              {msg.email !== userEmail && (
                <img src="https://via.placeholder.com/30" alt="Support" className="w-8 h-8 rounded-full mr-2" />
              )}
              <div className={`p-3 rounded-lg max-w-xs ${msg.email === userEmail ? "bg-blue-300 text-white" : "bg-gray-200 text-gray-900"}`}>
                <p>{msg.message}</p>
                <span className="block text-xs text-gray-500">{new Date(msg.timestamp).toLocaleString()}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="bg-gray-200 p-3 flex items-center rounded-b-md">
          <input
            type="text"
            className="flex-1 p-2 rounded-md border border-gray-300 focus:outline-none"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
            ➤
          </button>
        </div>
      </div>

      {/* Complaint Box */}
      <div className="w-full lg:w-1/3 bg-white shadow-md rounded-md p-6">
        <h2 className="text-xl font-semibold">Create Quick Complaint</h2>
        <p className="text-gray-600 mb-4">Write and address new Queries and Requests</p>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-gray-500">Enter Name</label>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Type name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-500">Enter Email ID</label>
            <input
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Type email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-500">Contact Number</label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Type mobile number"
              required
            />
          </div>

          <div>
            <label className="block text-gray-500">Request Ticket Type</label>
            <select
              name="requestTicketType"
              value={formData.requestTicketType}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Choose Type</option>
              <option value="Technical Issue">Technical Issue</option>
              <option value="Payment Related">Payment Related</option>
              <option value="Course Related">Course Related</option>
              <option value="Other Service">Other Service</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-500">Ticket Body</label>
            <textarea
              name="ticketBody"
              value={formData.ticketBody}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md h-24"
              placeholder="Type ticket issue here..."
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserSupport;
