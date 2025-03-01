import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUser, logout } from "../../../State/Auth/Action";
import { Disclosure } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { API_BASE_URL } from "../../../Config/api";

const UserSupport = () => {
  const [messages, setMessages] = useState([
  
  ]);
  const [newMessage, setNewMessage] = useState("");
  
 
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    
  const userEmail = auth?.user?.email || localStorage.getItem("email") || "email";
  const adminEmail = "pa1velagana@gmail.com"


  
   useEffect(() => {
     if (jwt) {
       dispatch(getUser(jwt));
     }
   }, [jwt, dispatch]);
 
  

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
        `${API_BASE_URL}/api/chat-support/create/chatSupport`,
        formattedRequest,
        { headers: 
          { "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`
           } }
      );
  
      console.log("Success:", response.data);
      alert("Support request submitted successfully!");
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to submit support request.");
    }
  };
  
  
  // ✅ Fetch chat messages when component mounts
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/api/chat/getAllUserMessages/email?email=${adminEmail}`,
          { headers: { Authorization: `Bearer ${jwt}` } }
        );

        console.log("Fetched Messages:", response.data); // Debugging
        setMessages(response.data.messages || []); // Ensure it's always an array
      } catch (error) {
        console.error("Error fetching messages:", error.response?.data || error.message);
        setError("Failed to fetch messages");
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [adminEmail, jwt]);
  
  
  
  
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString(); // Example: "2/25/2025, 4:30 PM"
};

   // Send message
   const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    const userMessage = {
        senderEmail: userEmail,
        receiverEmail: adminEmail,
        message: newMessage,
        timestamp: new Date().toISOString(),
    };

    console.log("Sending message:", userMessage); // Debugging

    try {
        const response = await axios.post(
            `${API_BASE_URL}/api/chat/sendMessage`,
            userMessage,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt}`, // Include JWT if needed
                },
            }
        );

        console.log("Message Sent Response:", response.data); // Debugging

        setMessages((prevMessages) => [...prevMessages, response.data]);
        setNewMessage(""); // Clear input after sending
    } catch (error) {
        console.error("Error sending message:", error.response?.data || error.message);
        alert("Failed to send message. Please try again.");
    }
};


  return (
    <div className="flex min-h-screen bg-gray-100 font-poppins">
      {/* Chat Section */}
      <div className="w-2/3 bg-white shadow-md rounded-md flex flex-col ">
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
        <div className="flex-1 p-4 overflow-y-auto h-[400px]">
  {messages.map((msg, index) => (
    <div
      key={index}
      className={`flex mb-2 ${msg.email === userEmail ? "justify-end" : "justify-start"}`}
    >
      {msg.email !== userEmail && (
        <img
          src="https://via.placeholder.com/30"
          alt="Support"
          className="w-8 h-8 rounded-full mr-2"
        />
      )}
      <div
        className={`p-3 rounded-lg max-w-xs ${
          msg.email === userEmail
            ? "bg-blue-300 text-white"
            : "bg-gray-200 text-gray-900"
        }`}
      >
        <p>{msg.message}</p>
        <span className="block text-xs text-gray-500">
          {new Date(msg.timestamp).toLocaleString()}
        </span>
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
      <div className="w-1/3 bg-white shadow-md rounded-md p-6 ml-4 overflow-hidden">
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
