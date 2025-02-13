import React from "react";

const TaskModal = ({ task, onClose }) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-1/2 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Assignment Details</h2>

        {/* Assignment Description */}
        <div className="mb-4">
          <label className="block font-semibold">Assignment Description</label>
          <textarea
            className="w-full p-2 border border-gray-30
            0 rounded-md"
            readOnly
            value={task.description}
          />
        </div>

        {/* Assignment Dates */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-semibold">Assignment Date</label>
            <input
              type="text"
              className="w-full p-2 border border-[#989898] rounded-md"
              readOnly
              value={task.assignedDate}
            />
          </div>
          <div>
            <label className="block font-semibold">Due Date</label>
            <input
              type="text"
              className="w-full p-2 border border-[#989898] rounded-md"
              readOnly
              value={task.dueDate}
            />
          </div>
        </div>

        {/* Selected Group and Members */}
        <div className="mb-4">
          <h3 className="font-semibold">Selected Group and Members</h3>
          <p className="font-medium text-gray-700">{task.group}</p>
          <table className="w-full mt-2 border-collapse border border-[#989898]">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-[#989898] p-2">User ID</th>
                <th className="border border-[#989898] p-2">Name</th>
                <th className="border border-[#989898] p-2">Email</th>
              </tr>
            </thead>
            <tbody>
              {task.participants.map((participant, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                >
                  <td className="border border-[#989898] p-2">
                    {participant.id}
                  </td>
                  <td className="border border-[#989898] p-2">
                    {participant.name}
                  </td>
                  <td className="border border-[#989898] p-2">
                    {participant.email}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Attached Documents */}
        <div className="mb-4">
          <h3 className="font-semibold">Attached Documents</h3>
          {task.documents && task.documents.length > 0 ? (
            <ul className="list-disc pl-4">
              {task.documents.map((doc, index) => (
                <li key={index} className="text-blue-500 underline cursor-pointer">
                  {doc}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No attached documents</p>
          )}
        </div>

        {/* Close Button */}
        <div className="text-right">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;



