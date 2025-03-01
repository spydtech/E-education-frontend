import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import moment from "moment";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { getUser } from "../../../State/Auth/Action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../../Config/api";

const ChatSupport = () => {
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");

  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const adminEmail = auth?.user?.email || localStorage.getItem("email") || "email";

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt, dispatch]);

  // Fetch Chats from Backend
  const fetchChats = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/chat/getAll`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      const formattedChats = response.data.map((chat) => ({
        ...chat,
        lastMessageTimestamp: chat.lastMessageTimestamp
          ? moment(chat.lastMessageTimestamp).toISOString()
          : null,
        messages: [],
      }));

      setChats(formattedChats);
    } catch (error) {
      console.error("Error fetching chats:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const openChat = async (chat) => {
    setActiveChat(chat);

    if (!chat.email && !chat.username) {
      console.error("Chat user email or username not found");
      return;
    }

    const userEmail = chat.email || chat.username;

    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/chat/getAllUserMessages/email?email=${userEmail}`,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );

       // Extracting messages from API response
    const messages = response.data.messages || [];
    const formattedMessages = messages.map((msg) => ({
      message: msg.message,
      timestamp: moment(msg.timestamp).toISOString(),
      senderEmail: msg.email, // Use email as sender identifier
    }));


      setActiveChat((prev) => ({
        ...prev,
        messages: formattedMessages,
      }));
    } catch (error) {
      console.error("Error fetching messages:", error.response?.data || error.message);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || !activeChat) return;

    const newMessage = {
      senderEmail: adminEmail,
      receiverEmail: activeChat.email || activeChat.username,
      message: input,
      timestamp: new Date().toISOString(),
    };

    try {
      await axios.post(`${API_BASE_URL}/api/chat/sendMessage`, newMessage, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      setActiveChat((prevChat) => ({
        ...prevChat,
        messages: [...(prevChat.messages || []), newMessage],
      }));

      setInput("");
    } catch (error) {
      console.error("Error sending message:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-[#494949] border-r border-gray-200 p-4 text-white flex flex-col">
        <div className="justify-start mb-4 pl-2 space-x-6 flex">
          <Link to="/admin/ticketstable">
            <button>
              <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>

        <AnimatePresence>
          {chats.map((chat) => (
            <motion.div
              key={chat.userId}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="relative flex items-center p-3 h-20 hover:bg-[#3c3c3c] rounded-lg border-b border-gray-100 border-opacity-20 mb-2 cursor-pointer"
              onClick={() => openChat(chat)}
            >
              <div className="w-10 h-10 flex items-center justify-center text-white rounded-full bg-gray-500 mr-3">
                {chat.username?.charAt(0).toUpperCase() || "U"}
              </div>
              <div className="flex items-center flex-grow">
                <div className="text flex-grow">
                  <h4 className="font-medium">{chat.username}</h4>
                  <p className="text-sm text-gray-300">
                    {chat.lastMessage ? chat.lastMessage.slice(0, 20) + "..." : ""}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">
                    {chat.lastMessageTimestamp
                      ? moment(chat.lastMessageTimestamp).format("MMM D, hh:mm A")
                      : ""}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <div className="w-3/4 flex flex-col">
        {activeChat ? (
          <>
            <div className="flex-1 p-4 overflow-y-auto">
            {activeChat.messages?.map((msg, index) => (
  <div
    key={index}
    className={`flex ${msg.senderEmail === adminEmail ? "justify-end" : "justify-start"} mb-4`}
  >
    {msg.senderEmail !== adminEmail && (
     <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-2">
     {activeChat?.username
       ? activeChat.username
           .split(" ") // Split name by space
           .map((word) => word.charAt(0)) // Get first letter of each word
           .join("")
           .toUpperCase() // Convert to uppercase
       : "U"}
   </div>
   
    )}
    <div>
      <div
        className={`p-3 max-w-sm ${
          msg.senderEmail === adminEmail
            ? "bg-[#FFEDC3] rounded-2xl rounded-br-none"
            : "bg-[#9FC5FF] rounded-2xl rounded-bl-none"
        }`}
      >
        <p className="font-normal">{msg.message}</p>
      </div>
      <div className={`${msg.senderEmail === adminEmail ? "flex justify-end" : "flex justify-start"}`}>
        <p className="text-xs text-gray-500 mt-1">
          {moment(msg.timestamp).format("MMM D, hh:mm A")}
        </p>
      </div>
    </div>
  </div>
))}

            </div>

            <div className="p-4 flex items-center border-t">
              <input
                type="text"
                className="flex-1 border rounded-full p-3 outline-none"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") sendMessage();
                }}
              />
              <button onClick={sendMessage} className="ml-2 bg-orange-500 text-white p-3 rounded-full">
                <FaPaperPlane />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">Select a chat</div>
        )}
      </div>
    </div>
  );
};

export default ChatSupport;
