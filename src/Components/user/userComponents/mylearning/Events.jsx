import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
const Events = () => {
  return (
    <div className="p-4 space-y-3 w-80 mx-auto">
      {/* Upcoming Meeting */}
      <div className="bg-[#f2f8ff] p-4 rounded-2xl shadow flex flex-col space-y-2 relative">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold">Upcoming Meeting</h3>
          <Bell className="w-5 h-5 text-gray-600" />
        </div>
        <p className="text-gray-500 text-sm">dD/MM/YYYY HH:MM:SS</p>
        <p className="text-gray-500 text-sm">
          Starts in <span className="text-red-500 font-medium">30min</span>
        </p>
        <a href="#" className="text-blue-500 font-medium">
          Click here to join
        </a>
      </div>

      {/* Assignment */}
      <div className="bg-[#f2f8ff] p-4 rounded-2xl shadow flex flex-col space-y-1 relative">
        <h3 className="font-semibold">Assignment</h3>
        <p className="text-gray-500 text-sm">
          Due in <span className="text-red-500 font-medium">5 days</span>
        </p>
        <p className="text-gray-500 text-sm">Submission date DD/MM/YYY</p>
      </div>

      {/* Post Queries */}
      <div className="bg-[#f2f8ff] p-4 rounded-2xl shadow flex justify-between items-center cursor-pointer">
        <h3 className="font-semibold">Post Queries</h3>
        <span>&rarr;</span>
      </div>

      {/* View Notes */}

      <div className="bg-[#f2f8ff] p-4 rounded-2xl shadow flex justify-between items-center cursor-pointer">
        <h3 className="font-semibold">View Notes</h3>
        <Link to="/user/notes/highlights">
          <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default Events;
