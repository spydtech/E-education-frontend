import { FaFilePdf, FaDownload } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const AssignmentDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const assignment = location.state; // Retrieve passed data
  
    if (!assignment) {
      return <div className="p-6 text-red-500">No assignment selected.</div>;
    }
  return (
    <div className="p-6 ">
      <h2 className="text-2xl font-semibold mb-4 flex spaace-x-2">
      <svg onClick={() => navigate("/user/assignment")}
      width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 20.5L12.5 15.5L17.5 10.5" stroke="black" stroke-width="1.875" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

         My Assignments</h2>

      <div className="mb-4">
        <label className="block font-medium">Assignment Description</label>
        <textarea
          className="w-full p-3 border rounded-lg bg-gray-100"
          readOnly
          value={assignment.description}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 mb-4">
        <div>
          <label className="block font-medium">Assignment Date</label>
          <input type="text" className="w-full p-3 border rounded-lg bg-gray-100" readOnly value={assignment.assignedDate} />
        </div>
        <div>
          <label className="block font-medium">Due Date</label>
          <input type="text" className="w-full p-3 border rounded-lg bg-gray-100" readOnly value={assignment.dueDate} />
        </div>
      </div>

      <div className="mb-4">
        <label className="block font-medium">Assigned By</label>
        <input type="text" className="w-full p-3 border rounded-lg bg-gray-100" readOnly value={assignment.assignedBy} />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Attached Documents</label>
        <div className="flex items-center gap-3 p-3 border rounded-lg bg-gray-100">
          <FaFilePdf className="text-red-500 text-2xl" />
          <span className="flex-1 text-sm">{assignment.file}</span>
          <span className="text-xs text-gray-500">313 KB . 31 Aug, 2024</span>
          <FaDownload className="text-gray-500 hover:text-black cursor-pointer" />
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="mb-4">
        <label className="block font-medium">
          My Answer <span className="text-gray-500 text-sm">(Optional)</span>
        </label>
        <textarea className="w-full p-3 border rounded-lg bg-white" placeholder="Write your answer here..." />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Attach Documents</label>
        <div className="flex flex-col items-center justify-center p-6 border-2 border-gray-300 border-dashed rounded-lg text-gray-500 text-center">
          <span className="text-xl">📂</span>
          <p>Select a file or drag and drop here</p>
          <p className="text-xs text-gray-500">JPG, PNG or PDF, file size no more than 10MB</p>
          <button className="mt-3 px-4 py-2 bg-gray-300 rounded-lg text-gray-700">Select file</button>
        </div>
      </div>

      <div className="text-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">Submit Assignment</button>
      </div>
    </div>
  );
};

export default AssignmentDetails;
