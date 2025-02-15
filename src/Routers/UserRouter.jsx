import React from "react";
import { Route, Routes } from "react-router-dom";
import UserDashboard from "../Components/user/User";
// Adjust the path based on your project structure

const UserRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<UserDashboard />} />
      </Routes>
    </div>
  );
};

export default UserRouter;
