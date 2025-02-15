import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaFilePdf, FaCloudDownloadAlt, FaAngleLeft   } from "react-icons/fa";

const API_BASE_URL = "http://localhost:8080/report";

const colors = ["bg-blue-100", "bg-green-100", "bg-red-100", "bg-yellow-100", "bg-purple-100", "bg-pink-100", "bg-indigo-100"];


function Notes_Highlights() {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null);
  const jwt = localStorage.getItem("jwt");// Retrieve JWT token
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 3;

  // Fetch notes when component mounts
  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/get`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (!response.ok) throw new Error("Failed to fetch notes");

      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  // Save or update a note
  const handleSave = async () => {
    if (content.trim() === "") return;

    try {
      const requestBody = JSON.stringify({
        report: content,
        reportDate: new Date().toISOString().split("T")[0], // YYYY-MM-DD
      });

      if (editingNoteId) {
        // Update note
        const response = await fetch(`${API_BASE_URL}/updateReport/${editingNoteId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: requestBody,
        });

        if (!response.ok) throw new Error("Failed to update note");

        setNotes(notes.map((note) => (note.id === editingNoteId ? { ...note, report: content } : note)));
        setEditingNoteId(null);
      } else {
        // Create new note
        const response = await fetch(`${API_BASE_URL}/createReport`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          },
          body: requestBody,
        });

        if (!response.ok) throw new Error("Failed to create note");

        const newNote = await response.json();
        newNote.bgColor = colors[Math.floor(Math.random() * colors.length)];

        setNotes([...notes, newNote]);
      }

      setIsOpen(false);
      setContent("");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  // Delete a note
  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      if (!response.ok) throw new Error("Failed to delete note");

      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  // Edit a note
  const handleEdit = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setContent(noteToEdit.report);
    setEditingNoteId(id);
    setIsOpen(true);
  };
 // Pagination Logic
 const totalPages = Math.ceil(notes.length / notesPerPage);
 const currentNotes = notes.slice((currentPage - 1) * notesPerPage, currentPage * notesPerPage);

 const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="  bg-white p-6 ">
      <h1 className="text-2xl font-semibold">Notes</h1>
      <p className="text-gray-500">{notes.length} Notes</p>

      {/* Notes List */}
      <div className="mt-4 space-y-4">
        {currentNotes.map((note, index) => (
          <div key={note.id} className={`p-4 rounded-lg shadow-md ${index % 2 === 0 ? "bg-blue-100" : "bg-orange-200"}`}>
            <div className="flex justify-between items-center border-b-black w-full border-b-2 pb-2">
              <div className=" gap-2">
                <h1 className="font-medium">Notes Headings </h1>
                <p className="text-sm text-gray-600">{note.reportDate}</p>
              </div>
              <div className="flex gap-3 text-gray-600 ">
                <FaEdit className="cursor-pointer hover:text-gray-900" onClick={() => handleEdit(note.id)} />
                <FaFilePdf className="cursor-pointer hover:text-gray-900" />
                <FaCloudDownloadAlt className="cursor-pointer hover:text-gray-900" />
                <FaTrash className="cursor-pointer hover:text-red-600" onClick={() => handleDelete(note.id)} />
              </div>
            </div>
            <div className="mt-2 text-gray-700">{note.report}</div>
          </div>
        ))}
      </div>

        {/* Pagination */}
        {notes.length > notesPerPage && (
        <div className="flex justify-between items-center mt-4">
          <p className="text-gray-500">
            {Math.min((currentPage - 1) * notesPerPage + 1, notes.length)}-
            {Math.min(currentPage * notesPerPage, notes.length)} of {notes.length}
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
      )}

      {/* Floating Action Button */}
      <button className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600" onClick={() => {
        setIsOpen(true);
        setEditingNoteId(null);
        setContent("");
      }}>
        <FaPlus size={20} />
      </button>

      {/* Notepad Modal */}
      {isOpen && (
        <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center font-poppins">
          <div className="bg-white rounded-lg  w-[850px] h-[500px] shadow-xl p-2">
            <div className="flex space-x-2 bg-[#c7e0ed] p-2 rounded-t-2xl py-2">
            <FaAngleLeft  onClick={() => setIsOpen(false)} className="text-gray-500 text-2xl" /> 
              <h2 className="text-lg ">{editingNoteId ? "Edit Note" : "Title"}</h2>
              
            </div>
            <textarea
              placeholder="Write your note..."
              className="w-full p-2 mt-4  h-[350px] border-none outline-none focus:ring-0 focus:outline-none bg-transparent  "
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            
            <div className="flex justify-end mt-4 ">
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                {editingNoteId ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes_Highlights;
