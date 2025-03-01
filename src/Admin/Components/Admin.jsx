import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Box, CssBaseline, useMediaQuery, useTheme } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai";
import axios from "axios";
import { IoCloseCircle } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AdminDashBoard from "./AdminDashBoard";
import Orders from "../Views/Orders";
import PaymentDashboard from "./pymentData/MainDashBoard";
import SealsReports from "./Reports/TableforAdmin";
import CreateGroup from "../Views/FilterUsers";
import ExistingGroup from "../Views/TraineeCourses";
import AccessField from "./AccessField";
import RegisterEmployee from "./Register/RegisterEmployee";
import RegisterTrainee from "./Register/RegisterTraniee";
import Meeting from "./Meet/Meeting";
import ThemeToggle from "../../Components/trainee/TraineeDashboard/Theamtoggle";
import IMG from "../../assets/logo/E-educationlogo.png";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Dashboard as DashboardIcon,
  People as UsersIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { GrStatusGood } from "react-icons/gr";
import { TbLockAccess, TbReport } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { getUser, logout } from "../../State/Auth/Action";
import AdminSettings from "./adminsettings/AdminSettings ";
import EmployeeTable from "./Staffing/EmployeeTable";
import TraineeTable121 from "./Staffing/TraineeTable121";
// import EmployeeStatus from "./status/EmployeeStatus";
import { useLocation } from "react-router-dom";
// import TraineeStatus from "./status/TraineeStatus";
import ChatSupport from "./support/ChatSupport";
import Table1 from "./support/Table1";
import ManageUsers from "./Staffing/ManageUsers";
import StatusOfStaff from "./status/StatusOfStaff";
import VideoDashboard from "./cms/VideoDashboard";
import VideoApproval from "./cms/VideoApproval";
import TicketsTable from "./support/TicketsTable";
import { API_BASE_URL } from "../../Config/api";

const themesBackGroundColor = [
  { value: "light", colorClass: "bg-light-theme" },
  { value: "dark", colorClass: "bg-dark-theme" },
];

const menu = [
  {
    name: "Dashboard",
    path: "/admin",
    icon: <DashboardIcon className="w-2 h-2 mr-2" />,
  },
  {
    name: "Create Account",
    path: "/admin/accessField",
    icon: <svg 
    className ="mr-2"
    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 17C17.4167 17 17.771 16.8544 18.063 16.563C18.355 16.2717 18.5007 15.9174 18.5 15.5C18.4993 15.0827 18.3537 14.7287 18.063 14.438C17.7723 14.1474 17.418 14.0014 17 14C16.582 13.9987 16.228 14.1447 15.938 14.438C15.648 14.7314 15.502 15.0854 15.5 15.5C15.498 15.9147 15.644 16.269 15.938 16.563C16.232 16.857 16.586 17.0027 17 17ZM17 20C17.5293 20 18.0077 19.8824 18.435 19.647C18.8617 19.4117 19.215 19.094 19.495 18.694C19.115 18.4647 18.7167 18.2917 18.3 18.175C17.8833 18.0584 17.45 18 17 18C16.55 18 16.1167 18.0584 15.7 18.175C15.2833 18.2917 14.8853 18.465 14.506 18.695C14.7853 19.095 15.1387 19.4124 15.566 19.647C15.992 19.8824 16.47 20 17 20ZM12 20.962C9.99067 20.3654 8.32167 19.1484 6.993 17.311C5.66433 15.4737 5 13.4034 5 11.1V5.69203L12 3.07703L19 5.69203V11.348C18.85 11.292 18.6853 11.2417 18.506 11.197L18 11.075V6.38103L12 4.15003L6 6.38003V11.1C6 12.0887 6.146 13.0354 6.438 13.94C6.72933 14.8454 7.12667 15.678 7.63 16.438C8.13333 17.198 8.72833 17.8614 9.415 18.428C10.1017 18.9947 10.8347 19.4277 11.614 19.727L11.671 19.707C11.7517 19.907 11.8523 20.1017 11.973 20.291C12.093 20.479 12.2297 20.6557 12.383 20.821C12.315 20.847 12.251 20.8704 12.191 20.891L12 20.962ZM17 21C15.886 21 14.941 20.612 14.165 19.836C13.3883 19.0587 13 18.1134 13 17C13 15.8867 13.3883 14.9417 14.165 14.165C14.9417 13.3884 15.8867 13 17 13C18.1133 13 19.0587 13.3884 19.836 14.165C20.6133 14.9417 21.0013 15.8867 21 17C20.9987 18.1134 20.6107 19.0587 19.836 19.836C19.0613 20.6134 18.116 21.0014 17 21Z" fill="white"/>
    </svg>
    ,
  },
  {
    name: "Managing Groups",
    path: "/admin/users/create-group",
    icon: 
    <svg
    className ="mr-2"
    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22C2 19.8783 2.84285 17.8434 4.34315 16.3431C5.84344 14.8429 7.87827 14 10 14C12.1217 14 14.1566 14.8429 15.6569 16.3431C17.1571 17.8434 18 19.8783 18 22H16C16 20.4087 15.3679 18.8826 14.2426 17.7574C13.1174 16.6321 11.5913 16 10 16C8.4087 16 6.88258 16.6321 5.75736 17.7574C4.63214 18.8826 4 20.4087 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.284 14.703C19.6895 15.3357 20.8823 16.361 21.7189 17.6555C22.5555 18.95 23.0004 20.4587 23 22H21C21.0004 20.844 20.6667 19.7124 20.0392 18.7415C19.4118 17.7705 18.5172 17.0016 17.463 16.527L18.284 14.703ZM17.596 3.413C18.6035 3.8283 19.465 4.53354 20.071 5.43923C20.6771 6.34492 21.0004 7.41024 21 8.5C21.0002 9.87227 20.4874 11.195 19.5623 12.2086C18.6372 13.2221 17.3666 13.8532 16 13.978V11.965C16.7409 11.8589 17.4283 11.518 17.9613 10.9925C18.4943 10.4669 18.8447 9.78432 18.9612 9.04493C19.0776 8.30555 18.954 7.5483 18.6084 6.88435C18.2628 6.22041 17.7134 5.68475 17.041 5.356L17.596 3.413Z" fill="white"/>
    </svg>,
    // subMenu: [
    //   { name: "Create Group", path: "/admin/users/create-group" },
    //   { name: "Go to Existing Group", path: "/admin/users/existing-group" },
    // ],
  },
  {
    name: "Manage Users",
    path: "/admin/staffing",
    icon: <svg 
    className ="mr-2"
    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22C2 19.8783 2.84285 17.8434 4.34315 16.3431C5.84344 14.8429 7.87827 14 10 14C12.1217 14 14.1566 14.8429 15.6569 16.3431C17.1571 17.8434 18 19.8783 18 22H16C16 20.4087 15.3679 18.8826 14.2426 17.7574C13.1174 16.6321 11.5913 16 10 16C8.4087 16 6.88258 16.6321 5.75736 17.7574C4.63214 18.8826 4 20.4087 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.284 14.703C19.6895 15.3357 20.8823 16.361 21.7189 17.6555C22.5555 18.95 23.0004 20.4587 23 22H21C21.0004 20.844 20.6667 19.7124 20.0392 18.7415C19.4118 17.7705 18.5172 17.0016 17.463 16.527L18.284 14.703ZM17.596 3.413C18.6035 3.8283 19.465 4.53354 20.071 5.43923C20.6771 6.34492 21.0004 7.41024 21 8.5C21.0002 9.87227 20.4874 11.195 19.5623 12.2086C18.6372 13.2221 17.3666 13.8532 16 13.978V11.965C16.7409 11.8589 17.4283 11.518 17.9613 10.9925C18.4943 10.4669 18.8447 9.78432 18.9612 9.04493C19.0776 8.30555 18.954 7.5483 18.6084 6.88435C18.2628 6.22041 17.7134 5.68475 17.041 5.356L17.596 3.413Z" fill="white"/>
    </svg>
    
   
  },
  {
    name: "CMS",
    path: "/admin/videodashboard ",
    icon: <svg 
    className ="mr-2"
    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 22C2 19.8783 2.84285 17.8434 4.34315 16.3431C5.84344 14.8429 7.87827 14 10 14C12.1217 14 14.1566 14.8429 15.6569 16.3431C17.1571 17.8434 18 19.8783 18 22H16C16 20.4087 15.3679 18.8826 14.2426 17.7574C13.1174 16.6321 11.5913 16 10 16C8.4087 16 6.88258 16.6321 5.75736 17.7574C4.63214 18.8826 4 20.4087 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.284 14.703C19.6895 15.3357 20.8823 16.361 21.7189 17.6555C22.5555 18.95 23.0004 20.4587 23 22H21C21.0004 20.844 20.6667 19.7124 20.0392 18.7415C19.4118 17.7705 18.5172 17.0016 17.463 16.527L18.284 14.703ZM17.596 3.413C18.6035 3.8283 19.465 4.53354 20.071 5.43923C20.6771 6.34492 21.0004 7.41024 21 8.5C21.0002 9.87227 20.4874 11.195 19.5623 12.2086C18.6372 13.2221 17.3666 13.8532 16 13.978V11.965C16.7409 11.8589 17.4283 11.518 17.9613 10.9925C18.4943 10.4669 18.8447 9.78432 18.9612 9.04493C19.0776 8.30555 18.954 7.5483 18.6084 6.88435C18.2628 6.22041 17.7134 5.68475 17.041 5.356L17.596 3.413Z" fill="white"/>
    </svg>
    
   
  },
  {
    name: "Payment Data",
    path: "/admin/payment-data",
    icon: <svg 
    className ="mr-2"
    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.6429 14.1428C15.4724 14.1428 15.3089 14.2106 15.1883 14.3311C15.0678 14.4517 15.0001 14.6152 15.0001 14.7857C15.0001 14.9562 15.0678 15.1197 15.1883 15.2403C15.3089 15.3608 15.4724 15.4286 15.6429 15.4286H18.6429C18.8134 15.4286 18.9769 15.3608 19.0975 15.2403C19.218 15.1197 19.2858 14.9562 19.2858 14.7857C19.2858 14.6152 19.218 14.4517 19.0975 14.3311C18.9769 14.2106 18.8134 14.1428 18.6429 14.1428H15.6429ZM1.71777 7.49999C1.71777 6.64751 2.05642 5.82994 2.65922 5.22715C3.26201 4.62435 4.07958 4.28571 4.93206 4.28571H19.0715C19.924 4.28571 20.7415 4.62435 21.3443 5.22715C21.9471 5.82994 22.2858 6.64751 22.2858 7.49999V16.5C22.2858 17.3525 21.9471 18.17 21.3443 18.7728C20.7415 19.3756 19.924 19.7143 19.0715 19.7143H4.93292C4.08043 19.7143 3.26287 19.3756 2.66007 18.7728C2.05728 18.17 1.71863 17.3525 1.71863 16.5L1.71777 7.49999ZM4.93206 5.57142C4.42057 5.57142 3.93003 5.77461 3.56835 6.13629C3.20668 6.49796 3.00349 6.9885 3.00349 7.49999V8.14285H21.0001V7.49999C21.0001 6.9885 20.7969 6.49796 20.4352 6.13629C20.0735 5.77461 19.583 5.57142 19.0715 5.57142H4.93206ZM3.00349 16.5C3.00349 17.0115 3.20668 17.502 3.56835 17.8637C3.93003 18.2254 4.42057 18.4286 4.93206 18.4286H19.0715C19.583 18.4286 20.0735 18.2254 20.4352 17.8637C20.7969 17.502 21.0001 17.0115 21.0001 16.5V9.42856H3.00435L3.00349 16.5Z" fill="white"/>
    </svg>
    ,
  },
  {
    name: "Sales Report",
    path: "/admin/sales-report",
    icon: <svg 
    className ="mr-2"
    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20ZM9 13V19H7V13H9ZM15 15V19H17V15H15ZM11 11V19H13V11H11Z" fill="white"/>
    </svg>,
  },
  {
    name: "Meet",
    path: "/admin/meeting",
    icon: <svg 
    className ="mr-2"
    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.0001 5.99995C5.36358 5.99995 4.75313 6.25281 4.30304 6.7029C3.85295 7.15298 3.6001 7.76343 3.6001 8.39995V15.6C3.6001 16.2365 3.85295 16.8469 4.30304 17.297C4.75313 17.7471 5.36358 18 6.0001 18H13.2001C13.8366 18 14.4471 17.7471 14.8972 17.297C15.3472 16.8469 15.6001 16.2365 15.6001 15.6V14.3652L19.0093 16.5816C19.1451 16.6699 19.3022 16.7199 19.464 16.7264C19.6259 16.7329 19.7864 16.6956 19.9289 16.6185C20.0713 16.5413 20.1902 16.4271 20.2732 16.288C20.3561 16.1489 20.4 15.9899 20.4001 15.828V8.17315C20.4003 8.01089 20.3567 7.85158 20.2737 7.7121C20.1908 7.57262 20.0717 7.45814 19.9291 7.3808C19.7865 7.30345 19.6256 7.2661 19.4634 7.27272C19.3013 7.27933 19.144 7.32965 19.0081 7.41835L15.6001 9.63835V8.39995C15.6001 7.76343 15.3472 7.15298 14.8972 6.7029C14.4471 6.25281 13.8366 5.99995 13.2001 5.99995H6.0001ZM15.6001 11.0688L19.2001 8.72635V15.2748L15.6001 12.9348V11.0688ZM14.4001 8.39995V15.6C14.4001 15.9182 14.2737 16.2234 14.0486 16.4485C13.8236 16.6735 13.5184 16.8 13.2001 16.8H6.0001C5.68184 16.8 5.37661 16.6735 5.15157 16.4485C4.92653 16.2234 4.8001 15.9182 4.8001 15.6V8.39995C4.8001 8.08169 4.92653 7.77647 5.15157 7.55142C5.37661 7.32638 5.68184 7.19995 6.0001 7.19995H13.2001C13.5184 7.19995 13.8236 7.32638 14.0486 7.55142C14.2737 7.77647 14.4001 8.08169 14.4001 8.39995ZM8.2705 2.43595C7.92106 2.56125 7.58031 2.70958 7.2505 2.87995C7.1315 2.94241 7.01463 3.00885 6.9001 3.07915L6.8785 3.09355L6.8713 3.09835L6.8689 3.09955L6.8677 3.10075C6.73514 3.18891 6.64304 3.32612 6.61164 3.48218C6.58025 3.63825 6.61214 3.8004 6.7003 3.93295C6.78846 4.06551 6.92566 4.15761 7.08173 4.18901C7.2378 4.2204 7.39994 4.18851 7.5325 4.10035L7.5409 4.09435L7.5901 4.06435C7.6365 4.03555 7.7085 3.99555 7.8061 3.94435C8.0005 3.84235 8.2945 3.70435 8.6797 3.56395C9.74525 3.18417 10.8689 2.99331 12.0001 2.99995C13.4197 2.99995 14.5501 3.28315 15.3205 3.56395C15.7045 3.70435 15.9997 3.84235 16.1941 3.94435C16.2837 3.99156 16.3717 4.04158 16.4581 4.09435L16.4677 4.09915C16.5332 4.14558 16.6073 4.1784 16.6857 4.19567C16.7641 4.21293 16.8452 4.21429 16.9241 4.19966C17.003 4.18502 17.0782 4.1547 17.1452 4.11049C17.2122 4.06627 17.2697 4.00906 17.3142 3.94225C17.3587 3.87543 17.3893 3.80037 17.4042 3.7215C17.4192 3.64263 17.4182 3.56156 17.4012 3.48309C17.3843 3.40463 17.3518 3.33036 17.3056 3.26468C17.2595 3.19901 17.2006 3.14327 17.1325 3.10075L17.1313 3.09955L17.1289 3.09835L17.1217 3.09355L17.0989 3.07915L17.0245 3.03235C16.9338 2.97914 16.8418 2.92833 16.7485 2.87995C16.4191 2.70963 16.0787 2.5613 15.7297 2.43595C14.533 2.00856 13.2708 1.79333 12.0001 1.79995C10.7294 1.79333 9.46722 2.00856 8.2705 2.43595ZM8.2705 21.564C9.1501 21.8844 10.4185 22.2 12.0001 22.2C13.2708 22.2066 14.533 21.9913 15.7297 21.564C16.1701 21.4044 16.5133 21.2424 16.7497 21.12C16.8683 21.0575 16.9848 20.991 17.0989 20.9208L17.1217 20.9064L17.1289 20.9016L17.1313 20.9004C17.1313 20.9004 17.1325 20.8992 16.8001 20.4L17.1325 20.8992C17.2598 20.8089 17.347 20.6725 17.3754 20.5191C17.4039 20.3656 17.3714 20.2071 17.2849 20.0772C17.1984 19.9472 17.0646 19.8562 16.9121 19.8232C16.7595 19.7903 16.6001 19.8181 16.4677 19.9008L16.4581 19.9068L16.4101 19.9356C16.3391 19.9774 16.2671 20.0174 16.1941 20.0556C15.9997 20.1576 15.7057 20.2956 15.3205 20.436C14.2549 20.8157 13.1313 21.0066 12.0001 21C10.8689 21.0066 9.74525 20.8157 8.6797 20.436C8.38042 20.3286 8.08858 20.2015 7.8061 20.0556C7.71654 20.0084 7.62849 19.9583 7.5421 19.9056L7.5325 19.8996C7.46686 19.8559 7.39327 19.8256 7.31593 19.8104C7.23859 19.7952 7.159 19.7954 7.08173 19.8109C7.00445 19.8264 6.93099 19.8571 6.86555 19.901C6.8001 19.9449 6.74395 20.0013 6.7003 20.067C6.65665 20.1326 6.62635 20.2062 6.61114 20.2835C6.59593 20.3609 6.5961 20.4404 6.61164 20.5177C6.62719 20.595 6.6578 20.6685 6.70174 20.7339C6.74567 20.7994 6.80206 20.8555 6.8677 20.8992L6.8689 20.9004L6.8713 20.9016L6.8785 20.9064L6.9001 20.9208L6.9757 20.9664C7.0397 21.0064 7.1317 21.0572 7.2517 21.1188C7.4869 21.2424 7.8301 21.4056 8.2705 21.564Z" fill="white"/>
    </svg>,
  },
 
  {
    name: "Status",
    path: "/admin/status",
    icon: <GrStatusGood className="w-6 h-6 mr-2" />,
    // subMenu: [
    //   { name: "Trainee", path: "/admin/status/trainee" },
    //   { name: "Employee", path: "/admin/status/employee" },
    // ],
  },
  {
    name: "Settings",
    path: "/admin/settings",
    icon: <SettingsIcon />
    ,
  },


  {
    name: "Support",
    path: "/admin/ticketstable",
    icon: <svg 
    className="mr-2"
    width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.9999 16.2857C11.6643 16.2858 11.3361 16.1874 11.0559 16.0028C10.7757 15.8181 10.5558 15.5553 10.4236 15.2468C10.147 15.1815 9.8748 15.0991 9.60847 15L9.59389 14.9948C8.81182 14.7013 8.08997 14.2673 7.4639 13.7142C6.62509 12.9743 5.98003 12.0404 5.58496 10.9939C5.18989 9.94746 5.05682 8.82024 5.19733 7.71056C5.33785 6.60088 5.74769 5.54242 6.39113 4.62747C7.03456 3.71252 7.89205 2.96886 8.88882 2.46134C9.8856 1.95381 10.9914 1.69784 12.1098 1.71572C13.2282 1.73361 14.3252 2.02481 15.3053 2.56395C16.2853 3.10308 17.1186 3.87378 17.7324 4.80884C18.3463 5.74389 18.7221 6.81492 18.827 7.92853C18.8605 8.28253 18.5699 8.57138 18.2142 8.57138C17.8593 8.57138 17.5756 8.28253 17.5345 7.92938C17.4212 6.95506 17.0526 6.02792 16.4661 5.24169C15.8796 4.45546 15.0959 3.838 14.1943 3.45174C13.2927 3.06547 12.305 2.9241 11.3313 3.04189C10.3575 3.15969 9.43203 3.53249 8.64851 4.1226C7.86498 4.71271 7.25114 5.49922 6.86903 6.40263C6.48692 7.30603 6.35009 8.2943 6.47237 9.26754C6.59465 10.2408 6.9717 11.1645 7.56542 11.9453C8.15913 12.7261 8.94846 13.3363 9.85361 13.7142L9.8879 13.7288C10.0593 13.7991 10.2353 13.8611 10.4159 13.9148C10.581 13.5125 10.8929 13.188 11.2883 13.007C11.6837 12.826 12.1332 12.802 12.5456 12.9399C12.958 13.0779 13.3026 13.3674 13.5095 13.7499C13.7165 14.1324 13.7703 14.5793 13.6602 15C13.5651 15.368 13.3505 15.694 13.0499 15.9268C12.7494 16.1595 12.38 16.2858 11.9999 16.2857ZM5.9999 15H7.00189C6.52268 14.6264 6.0863 14.201 5.70075 13.7314C5.07479 13.8047 4.49756 14.1053 4.07866 14.5762C3.65977 15.0471 3.42839 15.6554 3.42847 16.2857V16.8985C3.42847 20.0854 7.03704 22.2857 11.9999 22.2857C16.9628 22.2857 20.5713 19.9645 20.5713 16.8985V16.2857C20.5713 15.6037 20.3004 14.9496 19.8182 14.4674C19.3359 13.9852 18.6819 13.7142 17.9999 13.7142H14.8756C14.9998 14.1309 15.032 14.5696 14.9699 15H17.9999L18.1242 15.006C18.4422 15.0368 18.7373 15.185 18.952 15.4216C19.1667 15.6582 19.2856 15.9662 19.2856 16.2857V16.8985L19.2813 17.0365C19.1613 19.1965 16.2222 21 11.9999 21C7.61904 21 4.71418 19.1905 4.71418 16.8985V16.2857L4.72018 16.1614C4.75106 15.8434 4.89923 15.5483 5.1358 15.3336C5.37238 15.1189 5.68042 15 5.9999 15ZM16.2856 8.57138C16.2857 9.34777 16.075 10.1096 15.6758 10.7755C15.2767 11.4414 14.7041 11.9864 14.0193 12.3522C13.4669 11.8497 12.7468 11.5712 11.9999 11.5714C12.3939 11.5714 12.784 11.4938 13.1479 11.343C13.5119 11.1923 13.8426 10.9713 14.1212 10.6927C14.3998 10.4141 14.6208 10.0834 14.7715 9.71943C14.9223 9.35546 14.9999 8.96535 14.9999 8.57138C14.9999 8.17742 14.9223 7.78731 14.7715 7.42333C14.6208 7.05936 14.3998 6.72864 14.1212 6.45006C13.8426 6.17149 13.5119 5.95051 13.1479 5.79975C12.784 5.64898 12.3939 5.57138 11.9999 5.57138C11.2042 5.57138 10.4412 5.88745 9.87857 6.45006C9.31597 7.01267 8.9999 7.77573 8.9999 8.57138C8.9999 9.36703 9.31597 10.1301 9.87857 10.6927C10.4412 11.2553 11.2042 11.5714 11.9999 11.5714C11.2216 11.5714 10.5136 11.868 9.98132 12.3531C9.29688 11.9875 8.72453 11.443 8.32532 10.7777C7.98544 10.2114 7.78101 9.57428 7.72801 8.91599C7.675 8.25769 7.77485 7.59606 8.01976 6.98272C8.26467 6.36938 8.64802 5.82095 9.13987 5.38022C9.63172 4.93949 10.2188 4.6184 10.8552 4.44201C11.4916 4.26561 12.1602 4.23869 12.8088 4.36334C13.4573 4.48799 14.0683 4.76084 14.594 5.16059C15.1197 5.56034 15.5459 6.07618 15.8393 6.66783C16.1328 7.25949 16.2855 7.91096 16.2856 8.57138Z" fill="white"/>
    </svg>
    ,
  },
];

const Admin = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [sideBarVisible, setSideBarVisible] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  // const [adminName, setAdminName] = useState("Admin Name");
  const [profilePic, setProfilePic] = useState(null);

  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const drawerWidth = 235;
  const themes = localStorage.getItem("theme");
  const jwt = localStorage.getItem("jwt");
  const auth = useSelector((state) => state.auth);
  

  const dispatch = useDispatch();
  const location = useLocation();
  ///////////////////////////////////////////
  const [themeBg, setThemeBg] = useState(() => {
    // Get the theme from localStorage or default to 'light'
    return localStorage.getItem("theme") || "light";
  });
  //////////////////////////////////////////////
  // Fetch admin name and image
  useEffect(() => {
      const storedJwt = localStorage.getItem("jwt");
    
      if (storedJwt) {
        dispatch(getUser(storedJwt)); // Fetch user info
      }
    }, [dispatch]);
    
    useEffect(() => {
      if (auth.user && auth.user.role === "ADMIN") {
        getUser(auth.user.id);
      }
    }, [auth.user]);




// Function to get the current page name based on the path
const getCurrentPageName = () => {
  const currentPath = location.pathname;
  const menuItem = menu.find((item) => item.path === currentPath);
  if (menuItem) {
    return menuItem.name;
  }

  // Check submenus
  for (const item of menu) {
    if (item.subMenu) {
      const subMenuItem = item.subMenu.find((subItem) => subItem.path === currentPath);
      if (subMenuItem) {
        return subMenuItem.name;
      }
    }
  }

  return "Dashboard"; // Default fallback
};



useEffect(() => {
  // Apply the theme on mount
  const selectedTheme = themesBackGroundColor.find((t) => t.value === theme);
  if (selectedTheme) {
    document.body.className = selectedTheme.colorClass;
  }
}, [themeBg]);
 
 const [formData, setFormData] = useState({});
 useEffect(() => {
   const fetchUserProfile = async () => {
     try {
       const profilePhotoResponse = await axios.get(`${API_BASE_URL}/api/users/${auth.user?.email}/profile-photo`, {
         responseType: 'arraybuffer',  // Ensures we get the binary data for the image
         headers: {
           Authorization: `Bearer ${jwt}`,
         },
       });

       const profilePhotoBlob = new Blob([profilePhotoResponse.data], { type: 'image/jpeg' });
       const profilePhotoUrl = URL.createObjectURL(profilePhotoBlob);
       setProfilePic(profilePhotoUrl); // Directly set the image URL
     } catch (error) {
       console.error("Error fetching user profile data:", error);
     }
   };

   fetchUserProfile();
 }, [jwt, auth.user?.email]);



  // bg theme /////////////////////////////////
  useEffect(() => {
    // Apply the theme on mount
    const selectedTheme = themesBackGroundColor.find((t) => t.value === theme);
    if (selectedTheme) {
      document.body.className = selectedTheme.colorClass;
    }
  }, [themeBg]);

  ///////////////////////////////////////
  console.log("User Data:", auth.user);

  const toggleSubMenu = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const handleDrawerToggle = () => {
    setSideBarVisible(!sideBarVisible);
  };

  const closeSidebar = () => {
    setSideBarVisible(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/admin_login");
  };

  const drawer = (
    <Box
      sx={{
        overflow: "hidden",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        width: drawerWidth,
      }}
      // className={` ${
      //   themes === "dark"
      //     ? "bg-black text-white"
      //     : "text-white bg-gradient-to-b from-[#001510] to-[#00BF8F]"
      // } max-w-46 lg:block border-r-2 border-black  `}
      className={`${
        themesBackGroundColor.find((t) => t.value === theme)?.colorClass || ""
      }   max-w-46 lg:block  bg-[#494949]  text-white justify-center items-center font-poppins` }
    >
      {/* Sidebar Logo */}
      <div className="py-4 flex relative">
        <div className="pl-2">
          <img className="h-[78px] w-auto" src={IMG} alt="Logo" />
        </div>
       
      </div>

      {/* Sidebar Admin Info */}
      {/* <div className="p-2">
        <div className="flex items-center justify-center mb-4">
        <div className="w-[60px] h-[60px] rounded-full bg-white shadow-lg cursor-pointer">
        {profilePic ? (
              <img
                className="w-[60px] h-[60px] rounded-full object-cover"
                src={profilePic} // Directly using profilePic state
                alt="Profile"
              />
            ) : (
              <p>No Photo</p> // Fallback if no photo is available
            )}
      </div>
          <h1 className="pl-2">
            {auth.user
              ? `${auth.user.firstName} ${auth.user.lastName}`
              : "Loading..."}
          </h1>
        </div>
      </div> */}

      <div className="flex-grow justify-center items-center text-center">
        <ul>
          {menu.map((item, index) => (
            <li key={item.name} className="relative">
              <button
                onClick={() => {
                  if (item.subMenu) {
                    toggleSubMenu(index);
                  } else {
                    navigate(item.path);
                  }
                }}
                className="flex items-center px-4 py-3 hover:bg-[#FF9B26] hover:text-white rounded hover:bg-opacity-80  w-[200px]  border-transparent  transition-all duration-300 "
              >
                <span className="text-base">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
                {item.subMenu && (
                  <span className="ml-auto">
                    {openSubMenu === index ? <ExpandLess /> : <ExpandMore />}
                  </span>
                )}
              </button>
              {item.subMenu && openSubMenu === index && (
                <ul>
                  {item.subMenu.map((subItem) => (
                    <li key={subItem.name} className="relative">
                      <button
                        onClick={() => navigate(subItem.path)}
                        className="flex items-center space-x-2 px-4 py-3 hover:bg-white hover:text-black hover:bg-opacity-80  border-l-8 border-transparent hover:border-[#001510] transition-all duration-300 "
                      >
                        <span className="text-sm pl-8">{subItem.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Logout Button */}
      {/* <div className="px-4 py-4">
        <button
          onClick={handleLogout}
          className="px-4 py-2 w-full bg-blue-500 transition-all duration-300 rounded-md"
        >
          Logout
        </button>
      </div> */}
    </Box>
  );

  return (
    <div className="flex h-screen relative font-poppins">
     
      {(isSmallScreen ? sideBarVisible : true) && (
        <div
          className={`fixed inset-0 z-40 ${
            sideBarVisible || !isSmallScreen ? "block" : "hidden"
          } md:static md:block`}
          style={{ width: drawerWidth }}
        >
          {drawer}
        </div>
      )}

      <div className="flex-grow h-screen overflow-auto ">
        <Box
          component="header"
          className={` p-2 flex items-center justify-center bg-[#494949] text-white space-x-[60%]`}
          
        >
 <h1 className=" ">{getCurrentPageName()}</h1>

          {!isSmallScreen && (
            <div className="flex     items-center  justify-center px-4 space-x-4  ">
             
              <div className="flex items-center justify-end  space-x-10 ml-auto  ">


              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7521 1.914C14.1918 2.68512 13.852 3.59423 13.7692 4.5438C13.6864 5.49337 13.8636 6.44758 14.282 7.30406C14.7003 8.16054 15.3439 8.88697 16.1437 9.40543C16.9436 9.92389 17.8695 10.2148 18.8221 10.247V10.258C18.8371 10.456 18.8521 10.659 18.8721 10.855C19.1091 13.102 19.6491 14.645 20.1681 15.658C20.5131 16.333 20.8521 16.781 21.0921 17.052C21.1974 17.1715 21.311 17.2834 21.4321 17.387L21.4421 17.393C21.5704 17.4861 21.6659 17.6175 21.7149 17.7683C21.7639 17.9191 21.7638 18.0815 21.7147 18.2323C21.6656 18.383 21.57 18.5143 21.4416 18.6074C21.3132 18.7004 21.1586 18.7503 21.0001 18.75H3.00009C2.84189 18.7498 2.6878 18.6996 2.55986 18.6066C2.43192 18.5135 2.33667 18.3824 2.28775 18.232C2.23882 18.0815 2.23872 17.9195 2.28745 17.769C2.33619 17.6184 2.43127 17.4872 2.55909 17.394L2.56709 17.387L2.63109 17.333C2.69109 17.279 2.78809 17.188 2.90809 17.052C3.14809 16.782 3.48709 16.334 3.83209 15.659C4.52209 14.31 5.25009 12.03 5.25009 8.4C5.25009 6.519 5.95009 4.706 7.21009 3.362C8.47209 2.016 10.1941 1.25 12.0001 1.25C12.3828 1.25 12.7604 1.28367 13.1331 1.351C13.3711 1.394 14.1511 1.637 14.7521 1.914Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.25 5C15.25 4.00544 15.6451 3.05161 16.3484 2.34835C17.0516 1.64509 18.0055 1.25 19 1.25C19.9946 1.25 20.9484 1.64509 21.6517 2.34835C22.3549 3.05161 22.75 4.00544 22.75 5C22.75 5.99456 22.3549 6.94839 21.6517 7.65165C20.9484 8.35491 19.9946 8.75 19 8.75C18.0055 8.75 17.0516 8.35491 16.3484 7.65165C15.6451 6.94839 15.25 5.99456 15.25 5ZM9.89404 20.351C9.97926 20.3016 10.0734 20.2695 10.171 20.2565C10.2687 20.2435 10.3679 20.2498 10.4631 20.2752C10.5583 20.3005 10.6475 20.3444 10.7258 20.4042C10.804 20.4641 10.8697 20.5388 10.919 20.624C11.0289 20.8133 11.1867 20.9704 11.3764 21.0796C11.5661 21.1889 11.7811 21.2464 12 21.2464C12.2189 21.2464 12.434 21.1889 12.6237 21.0796C12.8134 20.9704 12.9711 20.8133 13.081 20.624C13.1305 20.5388 13.1962 20.4641 13.2745 20.4043C13.3528 20.3445 13.4421 20.3007 13.5373 20.2754C13.6326 20.2501 13.7319 20.2438 13.8295 20.2568C13.9272 20.2699 14.0213 20.3021 14.1065 20.3515C14.1918 20.4009 14.2664 20.4667 14.3262 20.545C14.3861 20.6233 14.4299 20.7126 14.4552 20.8078C14.4805 20.903 14.4868 21.0023 14.4737 21.1C14.4607 21.1976 14.4285 21.2918 14.379 21.377C14.1373 21.7938 13.7903 22.1399 13.3728 22.3804C12.9553 22.6209 12.4819 22.7476 12 22.7476C11.5182 22.7476 11.0448 22.6209 10.6273 22.3804C10.2097 22.1399 9.86274 21.7938 9.62104 21.377C9.5715 21.2917 9.53926 21.1975 9.52617 21.0998C9.51308 21.002 9.51939 20.9027 9.54475 20.8074C9.57011 20.7121 9.61401 20.6227 9.67394 20.5444C9.73388 20.4661 9.80867 20.4004 9.89404 20.351Z" fill="white"/>
<circle cx="19" cy="5" r="4" fill="#E00606"/>
</svg>

<div className="flex items-center justify-end space-x-2">


              


{profilePic ? (
  <img
    className="w-[60px] h-[60px] rounded-full object-cover"
    src={profilePic} // Directly use profilePic
    alt="Profile"
  />
) : (
  <p>No Photo</p> // Fallback text or you can provide a default image URL here
)}


              <h3>
                {auth.user
                  ? `${auth.user.firstName} ${auth.user.lastName}`
                  : "Loading..."}
              </h3>
</div>
            
              </div>
              <div className="items-end justify-end">
                {/* <ThemeToggle /> */}
              </div>
            </div>
          )}
        </Box>

        <Routes>
          <Route path="/" element={<AdminDashBoard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment-data" element={<PaymentDashboard />} />
          <Route path="/sales-report" element={<SealsReports />} />
          <Route path="/users/create-group" element={<CreateGroup />} />
          {/* <Route path="/users/existing-group" element={<ExistingGroup />} /> */}
          <Route path="/accessField" element={<AccessField />} />
          <Route path="/register-employee" element={<RegisterEmployee />} />
          <Route path="/register-trainee" element={<RegisterTrainee />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/employee-table" element={<EmployeeTable />} />
          <Route path="/trainee-table" element={<TraineeTable121 />} />
          {/* <Route path="/status/employee" element={<EmployeeStatus />} />
          <Route path="/status/trainee" element={<TraineeStatus />} /> */}
          <Route path="/settings" element={<AdminSettings />} />
          <Route path="/supportchatbox" element={<ChatSupport />} />
          <Route path="/ticketstable" element={<Table1 />} />
          <Route path="/raise-tickets-table" element={<TicketsTable />} />
          <Route path="/staffing" element={<ManageUsers />} />
          <Route path="/status" element={<StatusOfStaff />} />
          <Route path="/videodashboard" element={<VideoDashboard />} />
          <Route path="/video-approval/:id" element={<VideoApproval />} />

          
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
