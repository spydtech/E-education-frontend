import React, { useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { CgNotes } from "react-icons/cg";
import { FaCalendarCheck } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import Account from "./Account/Account";
import Payment from "./Payment/PaymentHistory";
import UpdatePassword from "./updatepassword/Update_Password";
import Navbar from "../Navbar";
import Footer from "../Home/footer/Footer";
import Calendar from "./Calendar Sync/Calendar ";
import Notes from "./Notes/Notes";
import Communication from "./Communication Preferences/Communication";

function Settings({ usernameFirstLetter }) {
  const [activeTab, setActiveTab] = useState("tab1");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <Navbar />
      <div className="bg-blue-100 min-h-screen ">
        <div className="w-full max-w-md mx-auto md:max-w-none md:flex md:gap-10 p-4">
          <div className="grid-fix text-black space-y-5 lg:space-y-10 md:w-1/4 p-10">
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium ${
                activeTab === "tab1" && "text-[#0098f1]"
              }`}
              onClick={() => openTab("tab1")}
            >
              <FaUserEdit className="text-xl" />
              Account
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium ${
                activeTab === "tab2" && "text-[#0098f1]"
              }`}
              onClick={() => openTab("tab2")}
            >
              <FaRegCreditCard className="text-xl" />
              Payment
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium ${
                activeTab === "tab3" && "text-[#0098f1]"
              }`}
              onClick={() => openTab("tab3")}
            >
              <TbPasswordUser className="text-xl" />
              Update Password
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium ${
                activeTab === "tab4" && "text-[#0098f1]"
              }`}
              onClick={() => openTab("tab4")}
            >
              <FaMessage className="text-xl" />
              Communication
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium ${
                activeTab === "tab5" && "text-[#0098f1]"
              }`}
              onClick={() => openTab("tab5")}
            >
              <CgNotes className="text-xl" />
              Notes & Highlights
            </button>
            <button
              className={`flex gap-x-2 hover:underline text-start font-medium ${
                activeTab === "tab6" && "text-[#0098f1]"
              }`}
              onClick={() => openTab("tab6")}
            >
              <FaCalendarCheck className="text-xl" />
              Calendar Sync
            </button>
          </div>
          <div className="md:w-3/4 bg-white h-auto lg:min-h-screen">
            <div
              id="tab1"
              className={`tabcontent py-4 md:py-0 ${
                activeTab === "tab1" ? "" : "hidden"
              }`}
            >
              <Account />
            </div>
            <div
              id="tab2"
              className={`tabcontent py-4 md:py-0 ${
                activeTab === "tab2" ? "" : "hidden"
              }`}
            >
              <Payment />
            </div>
            <div
              id="tab3"
              className={`tabcontent py-4 md:py-0 ${
                activeTab === "tab3" ? "" : "hidden"
              }`}
            >
              <UpdatePassword />
            </div>
            <div
              id="tab4"
              className={`tabcontent p-4 ${
                activeTab === "tab4" ? "" : "hidden"
              }`}
            >
              <Communication />
            </div>
            <div
              id="tab5"
              className={`tabcontent p-4 ${
                activeTab === "tab5" ? "" : "hidden"
              }`}
            >
              <Notes />
            </div>
            <div
              id="tab6"
              className={`tabcontent p-4 ${
                activeTab === "tab6" ? "" : "hidden"
              }`}
            >
              <Calendar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Settings;
