import React, { useState, useEffect } from "react";
import { FaPlus, FaEdit, FaTrash, FaFilePdf, FaCloudDownloadAlt, FaAngleLeft } from "react-icons/fa";
import { API_BASE_URL } from "../../../Config/api";
import axios from "axios";

const colors = ["bg-blue-100", "bg-green-100", "bg-red-100", "bg-yellow-100", "bg-purple-100", "bg-pink-100", "bg-indigo-100"];

function Notes_Highlights() {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");
  const [editingNoteId, setEditingNoteId] = useState(null);
  const jwt = localStorage.getItem("jwt");
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 3;

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/report/get`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwt}` },
      });

      if (!response.ok) throw new Error("Failed to fetch notes");

      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error.message);
    }
  };

  const handleSave = async () => {
    if (content.trim() === "") return;

    try {
      const requestBody = JSON.stringify({ report: content, reportDate: new Date().toISOString().split("T")[0] });

      if (editingNoteId) {
        const response = await fetch(`${API_BASE_URL}/report/updateReport/${editingNoteId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwt}` },
          body: requestBody,
        });

        if (!response.ok) throw new Error("Failed to update note");

        setNotes(notes.map((note) => (note.id === editingNoteId ? { ...note, report: content } : note)));
        setEditingNoteId(null);
      } else {
        const response = await fetch(`${API_BASE_URL}/report/createReport`, {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${jwt}` },
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

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/report/delete/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${jwt}` },
      });

      if (!response.ok) throw new Error("Failed to delete note");

      setNotes(notes.filter((note) => note.id !== id));
    } catch (error) {
      console.error("Error deleting note:", error.message);
    }
  };

  const handleEdit = (id) => {
    const noteToEdit = notes.find((note) => note.id === id);
    setContent(noteToEdit.report);
    setEditingNoteId(id);
    setIsOpen(true);
  };

  const totalPages = Math.ceil(notes.length / notesPerPage);
  const currentNotes = notes.slice((currentPage - 1) * notesPerPage, currentPage * notesPerPage);

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-2xl font-semibold">Notes</h1>
      <p className="text-gray-500">{notes.length} Notes</p>

      {/* Notes List */}
      <div className="mt-4 grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        {currentNotes.map((note, index) => (
          <div key={note.id} className={`p-4 rounded-lg shadow-md ${index % 2 === 0 ? "bg-blue-100" : "bg-orange-200"}`}>
            <div className="flex justify-between items-center border-b-2 pb-2 border-black">
              <div>
                <h1 className="font-medium">Notes Headings</h1>
                <p className="text-sm text-gray-600">{note.reportDate}</p>
              </div>
              <div className="flex gap-3 text-gray-600">
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

      {/* Floating Action Button */}
      <button
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
        onClick={() => {
          setIsOpen(true);
          setEditingNoteId(null);
          setContent("");
        }}
      >
        <FaPlus size={20} />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-lg p-4 w-full max-w-lg">
            <div className="flex justify-between items-center border-b pb-2">
              <FaAngleLeft onClick={() => setIsOpen(false)} className="text-gray-500 text-2xl cursor-pointer" />
              <h2 className="text-lg">{editingNoteId ? "Edit Note" : "New Note"}</h2>
            </div>
            <textarea
              placeholder="Write your note..."
              className="w-full p-2 mt-4 h-40 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
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
