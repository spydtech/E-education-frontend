import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import moment from "moment";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const initialChats = [
  {
    id: 1,
    name: "Gary Bashirian",
    userId: "001",
    initials: "GB",
    color: "bg-red-500",
    unreadCount: 1,
    messages: [
      {
        text: "Hello, how can I help?",
        sender: "agent",
        timestamp: moment().subtract(2, "hours").toISOString(),
      },
    ],
  },
  {
    id: 2,
    name: "Wendell Murphy",
    userId: "002",
    initials: "WM",
    color: "bg-purple-500",
    unreadCount: 1,
    messages: [
      {
        text: "Do you have any updates?",
        sender: "agent",
        timestamp: moment().subtract(1, "day").toISOString(),
      },
    ],
  },
  {
    id: 3,
    name: "Grace Lindgren",
    initials: "GL",
    userId: "003",
    color: "bg-orange-500",
    unreadCount: 1,
    messages: [
      {
        text: "Thank you for the support!",
        sender: "agent",
        timestamp: moment().subtract(3, "days").toISOString(),
      },
    ],
  },
];

const ChatSupport = () => {
  const [chats, setChats] = useState(initialChats);
  const [activeChat, setActiveChat] = useState(null);
  const [input, setInput] = useState("");
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

  const openChat = (chat) => {
    setActiveChat(chat);
    setChats((prevChats) =>
      prevChats.map((c) => (c.id === chat.id ? { ...c, unreadCount: 0 } : c))
    );
  };

  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chats"));
    if (storedChats) setChats(storedChats);
  }, []);

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessage = {
      text: input,
      sender: "user",
      timestamp: moment().toISOString(),
    };

    const updatedChats = chats.map((chat) =>
      chat.id === activeChat.id
        ? { ...chat, messages: [...chat.messages, newMessage] }
        : chat
    );

    const sortedChats = updatedChats.sort(
      (a, b) =>
        moment(b.messages[b.messages.length - 1].timestamp).valueOf() -
        moment(a.messages[a.messages.length - 1].timestamp).valueOf()
    );

    setChats(sortedChats);
    setActiveChat(sortedChats.find((chat) => chat.id === activeChat.id));
    setInput("");
  };
  const openTicketForm = () => {
    const ticketId = `TKT-${Math.floor(10000 + Math.random() * 90000)}`;
    const newTicket = {
      ticketId,
      userName: activeChat.name,
      userId: activeChat.userId,
      status: "Created",
      assignedTo: "",
      priority: "",
      category: "",
      channel: "",
      issueDate: new Date().toISOString().split("T")[0],
      completionDate: "",
    };

    console.log("New Ticket Created:", newTicket);
    setTicketData(newTicket);
    setIsTicketOpen(true);
  };

  const submitTicket = () => {
    const newTickets = [...tickets, ticketData];
    console.log("Saving Tickets:", newTickets);
    setTickets(newTickets);
    setIsTicketOpen(false);

    setTicketData({
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
  };

  // Load tickets from local storage on component mount
  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets"));
    if (storedTickets) {
      setTickets(storedTickets);
    }
  }, []);

  // Update local storage whenever tickets change
  useEffect(() => {
    localStorage.setItem("tickets", JSON.stringify(tickets));
  }, [tickets]);

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-[#494949] border-r border-gray-200 p-4 text-white flex flex-col">
        <div className="justify-start mb-4 pl-2 space-x-6 flex">
          <button>
            <MdOutlineKeyboardArrowLeft className="w-6 h-6" />
          </button>
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>

        <AnimatePresence>
          {chats.map((chat) => {
            const lastMessage = chat.messages[chat.messages.length - 1];
            return (
              <motion.div
                key={chat.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                className="relative flex items-center  p-3 h-20    hover:bg-[#3c3c3c] rounded-lg border-b border-gray-100 border-opacity-20 mb-2 cursor-pointer"
                onClick={() => openChat(chat)}
              >
                <div
                  className={`w-10 h-10 flex items-center justify-center text-white rounded-full ${chat.color} mr-3`}
                >
                  {chat.initials}
                </div>
                <div className="flex items-center flex-grow">
                  <div className="text flex-grow">
                    <h4 className="font-medium">{chat.name}</h4>
                    <p className="text-sm text-gray-300">
                      {lastMessage ? lastMessage.text.slice(0, 20) + "..." : ""}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">
                      {lastMessage
                        ? moment(lastMessage.timestamp).format("MMM D, hh:mm A")
                        : ""}
                    </p>
                  </div>
                </div>

                {chat.unreadCount > 0 && (
                  <div className="absolute right-2 top-3 bg-green-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {chat.unreadCount}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="w-3/4 flex flex-col">
        {activeChat ? (
          <>
            <div className="bg-[#494949] text-white p-4 flex justify-between">
              <h3> {activeChat.name}</h3>
              <button
                onClick={openTicketForm}
                className="bg-[#ff9b26] px-4 py-2 rounded"
              >
                Raise Ticket
              </button>
            </div>
            {/* Messages */}
            <div className="flex-1  p-4 overflow-y-auto">
              {activeChat.messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex  ${
                    msg.sender === "user"
                      ? "justify-start items-end"
                      : "justify-end items-end"
                  } mb-4`}
                >
                  {msg.sender === "user" && (
                    <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full mr-2">
                      U
                    </div>
                  )}
                  <div className="">
                    <div
                      className={`p-3 max-w-sm ${
                        msg.sender === "user"
                          ? "bg-[#9FC5FF] rounded-2xl rounded-bl-none"
                          : "bg-[#FFEDC3] rounded-2xl  rounded-br-none"
                      }`}
                    >
                      <p className="font-normal">{msg.text}</p>
                    </div>
                    <div
                      className={` ${
                        msg.sender === "user"
                          ? "flex justify-start"
                          : " flex justify-end"
                      }`}
                    >
                      <p className="text-xs   text-gray-500 mt-1">
                        {moment(msg.timestamp).format("MMM D, hh:mm A")}
                      </p>
                    </div>
                  </div>

                  {msg.sender === "agent" && (
                    <div className="w-10 h-10  bg-red-500 text-white flex items-center justify-center rounded-full ml-2">
                      {activeChat.initials}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input Field */}
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
              <button
                onClick={sendMessage}
                className="ml-2 bg-orange-500 text-white p-3 rounded-full"
              >
                <FaPaperPlane />
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            Select a chat
          </div>
        )}
      </div>
      {isTicketOpen && (
        <div className="fixed inset-0 bg-gray-100 bg-opacity-5 flex items-center justify-center">
          <div className="bg-[#494949] rounded-2xl w-[800px] shadow-lg">
            <div className="text-white p-5 rounded-t-lg flex justify-between">
              <span className="text-lg font-semibold">
                {ticketData.ticketId}
              </span>
              <div>
                <label className="text-white pr-2">Status</label>
                <select
                  required
                  className="bg-[#494949] text-white p-2 rounded"
                  value={ticketData.status}
                  onChange={(e) =>
                    setTicketData({ ...ticketData, status: e.target.value })
                  }
                >
                  <option value="">Select Status</option>
                  <option>Created</option>
                  <option>Pending</option>
                  <option>Closed</option>
                  <option>Resolved</option>
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
                      value={ticketData.userName}
                      readOnly
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">User ID</label>
                    <input
                      type="text"
                      value={ticketData.userId}
                      readOnly
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Issue Raised On</label>
                    <input
                      required
                      type="date"
                      value={ticketData.issueDate}
                      className="border p-2 w-full rounded"
                      onChange={(e) =>
                        setTicketData({
                          ...ticketData,
                          issueDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Completion Date</label>
                    <input
                      required
                      type="date"
                      value={ticketData.completionDate}
                      className="border p-2 w-full rounded"
                      onChange={(e) =>
                        setTicketData({
                          ...ticketData,
                          completionDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div>
                    <label className="text-gray-600">Assigned To</label>
                    <select
                      required
                      className="border p-2 w-full rounded"
                      onChange={(e) =>
                        setTicketData({
                          ...ticketData,
                          assignedTo: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Staff</option>
                      <option>John Doe</option>
                      <option>Jane Smith</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-600">Priority</label>
                    <select
                      required
                      className="border p-2 w-full rounded"
                      onChange={(e) =>
                        setTicketData({
                          ...ticketData,
                          priority: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Priority</option>
                      <option>Low</option>
                      <option>Medium</option>
                      <option>High</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-600">Category</label>
                    <select
                      required
                      className="border p-2 w-full rounded"
                      onChange={(e) =>
                        setTicketData({
                          ...ticketData,
                          category: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Category</option>
                      <option>Billing</option>
                      <option>Technical</option>
                      <option>General</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-gray-600">Channel</label>
                    <select
                      required
                      className="border p-2 rounded w-full"
                      onChange={(e) =>
                        setTicketData({
                          ...ticketData,
                          channel: e.target.value,
                        })
                      }
                    >
                      <option value="">Select Channel</option>
                      <option>Chat</option>
                      <option>Email</option>
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

export default ChatSupport;
