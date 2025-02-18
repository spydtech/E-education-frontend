import React, { useState } from "react";
import axios from "axios";

const UserSupport = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "Sapiente asperiores ut inventore.", time: "12:00:08" },
    { id: 2, sender: "support", text: "How can I help you?" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [formData, setFormData] = useState({
    userName: "",
    emailId: "",
    contactNumber: "",
    requestTicketType: "",
    ticketBody: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Complaint
  const [status, setStatus] = useState(null); // New state to store response status
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formattedRequest = {
      ...formData,
      requestTicketType: formData.requestTicketType.toUpperCase().replace(" ", "_"),
    };
  
    try {
      const response = await axios.post(
        "http://localhost:8080/chat-support/create/chatSupport",
        formattedRequest,
        { headers: { "Content-Type": "application/json" } }
      );
  
      console.log("Success:", response.data);
      alert("Support request submitted successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to submit support request.");
    }
  };
  
  
  
  
  
  
  
  
  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage,
      time: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, userMessage]);
    setNewMessage("");

    setTimeout(() => {
      const supportReply = {
        id: messages.length + 2,
        sender: "support",
        text: "Thank you for reaching out. We will assist you shortly.",
      };
      setMessages((prevMessages) => [...prevMessages, supportReply]);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-poppins">
      {/* Chat Section */}
      <div className="w-2/3 bg-white shadow-md rounded-md flex flex-col">
        {/* Chat Header */}
        <div className="bg-blue-500 text-white p-4 flex justify-between items-center rounded-t-md">
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold">Chat Support</h3>
              <span className="text-sm">Tag</span>
            </div>
          </div>
          <button className="bg-orange-400 p-2 rounded-full">
            📞
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}>
              {msg.sender === "support" && (
                <img
                  src="https://via.placeholder.com/30"
                  alt="Support"
                  className="w-8 h-8 rounded-full mr-2"
                />
              )}
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  msg.sender === "user" ? "bg-gray-300 text-gray-900" : "bg-gray-200 text-gray-700"
                }`}
              >
                <p>{msg.text}</p>
                {msg.time && <span className="block text-xs text-gray-500">{msg.time}</span>}
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
      <div className="w-1/3 bg-white shadow-md rounded-md p-6 ml-4">
      <h2 className="text-xl font-semibold">Create Quick Complaint</h2>
      <p className="text-gray-600 mb-4">Write and address new Queries and Requests</p>

      {message && (
  <div className={`mb-3 p-2 text-white rounded-md ${status === "success" ? "bg-green-500" : "bg-red-500"}`}>
    {message}
  </div>
)}


      <form onSubmit={handleSubmit}>
      <label className="block text-gray-500">Enter Name</label>
        <input
          type="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Type name"
          className="w-full p-2 border border-gray-200 rounded-md mb-3"
          required
        />
        <label className="block text-gray-500">Enter Email ID</label>
        <input
          type="emailId"
          name="emailId"
          value={formData.emailId}
          onChange={handleChange}
          placeholder="Type Email"
          className="w-full p-2 border border-gray-200 rounded-md mb-3"
          required
        />

        <label className="block text-gray-500">Contact Number</label>
        <input
          type="text"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Type Mobile Number"
          className="w-full p-2 border border-gray-200 rounded-md mb-3"
          required
        />

        <label className="block text-gray-500">Request Ticket Type</label>
        <select
          name="requestTicketType"
          value={formData.requestTicketType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-200 rounded-md mb-3"
          required
        >
          <option value="">Choose Type</option>
          <option value="Technical Issue">Technical Issue</option>
          <option value="Payment Related">Payment Related</option>
          <option value="Course Related">Course Related</option>
          <option value="Other Service">Other Service</option>
        </select>

        <label className="block text-gray-500">Ticket Body</label>
        <textarea
          name="ticketBody"
          value={formData.ticketBody}
          onChange={handleChange}
          placeholder="Type ticket issue here..."
          className="w-full p-2 border border-gray-200 rounded-md h-24 mb-3"
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
    </div>
  );
};

export default UserSupport;
