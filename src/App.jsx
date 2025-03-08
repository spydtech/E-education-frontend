import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import MyLearning from "./Components/MyLearning/MyLearningHero";
import SignUp from "./Components/Login/SignUp";
import Certificates from "./Components/Home/Professional Certificates/Certificates";
import Profile from "./Components/Profile/Profile";
import AdminRouter from "./Routers/AdminRouter";
// import WSpace from "./Components/Profile/WorkSpace1/WSpace";
// import TraineeSidebar from "./Components/trainee/TraineeDashboard/TraineeDashboard";
// import WSpace from "./Components/trainee/UserTask/WSpace";
// import Settings from "./Components/Profile/Settings";
import PostFeeds from "./Components/Home/post/PostFeeds";
import MainPost from "./Components/Home/postFeed/MainPost";
import QuestionForm from "./Components/Home/AskMe/QuestionForm";
import ForgotPassword from "./Components/Login/ForgotPassword";
import Purchases from "./Components/Profile/Purchases/Purchases";
import Payment from "./Components/Profile/Payment/PaymentHistory";
import MyCourse from "./Components/mycourse/MyCourse";
import PremiumCourses from "./Components/PremiumCourses/PremiumCourses";
import DataAnalytics from "./Components/Profile/BrowseProject/dataAnalytics/DataAnalytics";
import FullStackWebDevelopmentArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/FullStackWebDevelopmentArray";
// import DataAnalatics from "./Components/Home/Plat form/AllCourses/StudentPlatForm/DataAnalatics";
import Student from "./Components/Home/Plat form/Student";
import Professional from "./Components/Home/Plat form/perofessionals/Professionals";
import ArtsandHumanities from "./Components/Home/Plat form/AllCourses/ArtsandHumanities";
import Business from "./Components/Home/Plat form/AllCourses/Business";
import ComputerScience from "./Components/Home/Plat form/AllCourses/ComputerScience";
import DataScienceArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/DataScienceArray";
import Health from "./Components/Home/Plat form/AllCourses/Health";
// import FullStackWebDev from "./Components/Home/Plat form/perofessionals/PerofessionalsParticularPage/FullStackWebDevelopment";
import Features from "./Components/Home/FeaturesOfE-education/Features";
import PersonalDevelopment from "./Components/Home/Plat form/AllCourses/PersonalDevelopment";
import SocialScience from "./Components/Home/Plat form/AllCourses/SocialScience";
import DataAnalatics from "./Components/Home/Plat form/AllCourses/Data Science/dataAnalatics1/DataAnalatics";
import MachineLearning from "./Components/Home/Plat form/AllCourses/Data Science/MachineLearning/MachineLearning";
import Reactjs from "./Components/Home/eductionCarousel/ReactjsMastery/Reactjs";
import EthicalHacking from "./Components/Home/Plat form/AllCourses/Ethical Hacking/EthicalHacking/EthicalHacking";
import AdvanceEthicalHacking from "./Components/Home/Plat form/AllCourses/Ethical Hacking/AdvancedEthicalHacking/AdvanceEthicalHacking";
import CertifiedEthicalHacking from "./Components/Home/Plat form/AllCourses/Ethical Hacking/CertifiedEthicalHacking/certifiedEthicalHacking";
import Cybersecurity from "./Components/Home/Plat form/AllCourses/Cyber Security/Cybersecurity/cybersecurity";
import CybersecurityBiginers from "./Components/Home/Plat form/AllCourses/Cyber Security/CybersecurityBiginers/cybersecurityBiginersEssentials";
import CybersecurityEssentials from "./Components/Home/Plat form/AllCourses/Cyber Security/CybersecurityEssentials/cybersecurityEssentials";
import WishLists from "./Components/Home/Plat form/AddtoCart/WishLists";
// import Cart from "./Components/Home/Plat form/AddtoCart/Cart";
import TryADemo from "./Components/tryAdemo/TryADemo";
import Cart from "./Components/Cart/Cart";
import EthicalHackingStudentArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/EthicalHackingStudentArray";
import CyberSecurityArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/CyberSecurityArray";
import NetworkSecurityArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/NetworkSecurityArray";
import MeanStackDeveloper from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/MernStackDevelopment/Main/MeanStackDevelopment";
import FullStackWebDevelopment from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackWebDevelopmentPage/FullStackWebDevelopment";
import FullStackDevops from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackDevops_Development/FullStackDevopsDevelopment";
import FullStackPythonDevelopment from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/fullStackPython/Main/FullStackPythonDevelopment";
import FullStackJava from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackJava_Development/FullStackJavaDevelopment";
import DotnetDevelopment from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackDotNet/DotnetDevelopment";
import FullStackJavaScript from "./Components/Home/Plat form/AllCourses/Full Stack Web Development/FullStackJavaScript/FullStackJavaScript/Main/JavascriptDevelopment";
import BasicCourses from "./Components/BasicCourse/BasicCourse";
import AdvanceCourses from "./Components/AdvanceCourses/Advance_Courses";
import AboutUs from "./Components/AboutUs/AboutUs";
import SoftwareTestingArray from "./Components/Home/Plat form/AllCourses/StudentPlatForm/SoftwareTestingArray";
import DataScience from "./Components/Home/Plat form/AllCourses/Data Science/IntroductionTo_DataScience/DataScience";
import NetworkSecurity from "./Components/Home/Plat form/AllCourses/NetWork Security/NetworkSecurity_Fundamentals/NetworkSecurityFundamentals";
import BestPracticesNetworkSecurity from "./Components/Home/Plat form/AllCourses/NetWork Security/BestPracticesNetworkSecurity/BestPracticesNetworkSecurity";
import DataScienceWithPython from "./Components/Home/Plat form/AllCourses/Data Science/DataScienceWith_Python/DataScienceWithPython";
import BigDataAnalysis from "./Components/Home/Plat form/AllCourses/Data Science/BigDataAnalysis/BigData";
import Datavisualisation from "./Components/Home/Plat form/AllCourses/Data Science/Datavisualisation/Datavisualisation";
import AdvanceNetworkSecuity from "./Components/Home/Plat form/AllCourses/NetWork Security/AdvancedNetworkSecurity/AdvancedNetworkSecurity";
import PerformanceTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Performance_Testing/PerformanceTesting";
import SecurityTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Security_Testing/SecurityTesting";
import UsabilityTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Usablity_Testing/UsabilityTesting";
import UnitTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Unit_Testing/UnitTestingFundamentals";
import CompatabilityTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Compatability_Testing/CompatabilityFundamentals";
import IntigrationTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Integration_Testing/IntegrationFundamentals";
import SystemTesting from "./Components/Home/Plat form/AllCourses/Software Testing/System_Testing/SystemFundamentals";
import ManualTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Manual_Testing/ManualTesting";
import AutomationTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Automation_Testing/AutomationTesting";
import AcceptanceTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Acceptance_testing/AcceptanceTesting";
import StressTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Stress_Testing/StressTestingFundamentals";
import RegressionTesting from "./Components/Home/Plat form/AllCourses/Software Testing/Regression_Testing/RegressionTesting";

// import Java from "./Components/BasicCourse/BasicAllCourses/Basic_Java/BasicJava";
import Wordpress from "./Components/BasicCourse/BasicAllCourses/Wordpress/Wordpress";
import Php from "./Components/BasicCourse/BasicAllCourses/Basic_Php/BasicPhp";
import JavaScript from "./Components/BasicCourse/BasicAllCourses/Basic_JavaScript/BasicJavaScript";
import C_Cplus from "./Components/BasicCourse/BasicAllCourses/Basic_C&C++/BasicC_Cplus";
// import GoogleCalender from "./Components/Profile/Calendar Sync/GoogleCalendar";
import DataBase from "./Components/Home/Plat form/perofessionals/professionalsCouses/DB Manegement/DB";
import CloudTesting from "./Components/Home/Plat form/perofessionals/professionalsCouses/Cloud Computing/Cloud";
import CourseDetails from "./Components/CourseDetails/CourseDetails";
import GoogleCalendar from "./Components/Profile/Calendar Sync/GoogleCalendar";
import AdvancePhp from "./Components/AdvanceCourses/Advance-courses/Advance PHP1/AdvancephpFundamentals";
import BlockChain from "./Components/AdvanceCourses/Advance-courses/BlockChain/BlockChain";
import CloudComputing from "./Components/AdvanceCourses/Advance-courses/CloudComputing/CloudComputing";
import UiUx from "./Components/BasicCourse/BasicAllCourses/UI_UX/Ui_Ux";
import FullStackMobileApp from "./Components/PremiumCourses/Premium-Courses/Fullstackmobileapp/mobileappFundamentals";
import PreAdvancePhp from "./Components/PremiumCourses/Premium-Courses/pre-AdvancePhp/AdvancePhp";
import PreWordPress from "./Components/PremiumCourses/Premium-Courses/pre-Wordpress/AdvancewordpressFundamentals";
import Pricing2 from "./Components/Home/Pricing/Pricing2";
import Java from "./Components/BasicCourse/BasicAllCourses/Basic_Java/BasicJava";
import PowerBi from "./Components/AdvanceCourses/Advance-courses/PowerBI/PowerBi";
import ERP from "./Components/AdvanceCourses/Advance-courses/ERP Developement/ERP";
import Options from "./Components/optionsPages/Options";
import AdminLogin from "./Admin/Components/AdminLogin";
// import Trainee from "./Components/trainee/Trainee";
// import TraineeDashboard from "./Components/trainee/TraineeDashboard/TraineeDashboard";

// import Meeting from "./Components/Meeting/Meeting";
import Tabs from "./Components/trainee/TraineAdmin/TraineComplateCourses/Tabs";
import UserAccounts from "./Components/trainee/UsersSection/usernavigation/navigation";
import TraineUpload from "./Components/trainee/UserTask/NewTaskForm";
import TraineeCourses from "./Admin/Views/TraineeCourses";
import Traine_Login from "./Components/trainee/TraineLogin/Traine_Login";
import Traine_Home from "./Components/trainee/home/Home";
import CountOfSeals from "./Admin/Components/sealsRepotes2/countofsales";
import CountOfProduct from "./Admin/Components/sealsRepotes2/rendaringfile";
import CountOfCustomers from "./Admin/Components/sealsRepotes2/countofcustomers";
import StatusPage from "./Components/trainee/UserTask/StatusPage";
import Sam from "./Admin/Components/Reports/Sample";
import BarGraph from "./Admin/Components/Reports/BarGraph";
import LineGraph from "./Admin/Components/Reports/LineGraph";
import SalesLineGraph from "./Admin/Components/Reports/SalesLineGraph";
import CustomerCount from "./Admin/Components/Reports/CustomerCount";
import TableforAdmin from "./Admin/Components/Reports/TableforAdmin";
import ProductsCount from "./Admin/Components/Reports/CountofProducts";
import Todo from "./Components/trainee/SheduledReports/Todo";
import Dashboard from "./Admin/Components/pymentData/MainDashBoard";
import TraineeDashboard from "./Components/trainee/TraineeDashboard/TraineeDashboard";
import ThemeToggle from "./Components/trainee/TraineeDashboard/Theamtoggle";
import ScrollToTop from "./ScrollToTop ";
import UserRouter from "./Routers/UserRouter";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import ReportsAndMasters from "./Components/Meeting/hospita/reports";
// import Sarvices from "./Components/Meeting/hospita/sarvices";
function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <>
      <div>
        <BrowserRouter
          future={{
            v7_startTransition: true, // Opt into React.startTransition behavior
            v7_relativeSplatPath: true, // Opt into new relative path resolution
          }}
        >
          <ScrollToTop />
          <ToastContainer />
          <Routes>
            {/* <Route path="" element={<SidebarMain/>} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/theme" element={<ThemeToggle />} />

            <Route path="/admin_login" element={<AdminLogin />} />
            <Route path="/about_us" element={<AboutUs />} />
            <Route path="/options" element={<Options />} />
            <Route path="/pricing" element={<Pricing2 />} />
            <Route path="/try-a-demo" element={<TryADemo />} />
            <Route path="/PostFeeds" element={<MainPost />} />
            {/* <Route path="/reports-masters" element={<ReportsAndMasters />} /> */}
            {/* <Route path="/sarvices" element={<Sarvices />} /> */}

            {/* Graph  */}
            <Route path="/table" element={<Sam />} />
            <Route path="/bargraph" element={<BarGraph />} />
            <Route path="/linegraph" element={<LineGraph />} />
            <Route path="/saleslinegraph" element={<SalesLineGraph />} />
            <Route path="/customercount" element={<CustomerCount />} />
            <Route path="/productscount" element={<ProductsCount />} />
            <Route path="/tableforadmin" element={<TableforAdmin />} />

            {/* traine Login */}
            <Route path="/trainelogin" element={<Traine_Login />} />

            <Route
              path="/traineedashbord/*"
              element={<TraineeDashboard />}
            ></Route>
            {/* <Route path="/traineedashbord#/report" element={<StatusPage />} /> */}
            {/* <Route path="/traineedashbord/assignmentoverview" element={<AssignmentOverview />} /> */}
            {/* <Route path="/trainee" element={<Trainee />} /> */}
            {/* <Route path="/traineedashboard" element={<TraineeSidebar />} /> */}
            {/* <Route path="/meeting" element={<Meeting />} /> */}
            <Route path="/traine-home" element={<Traine_Home />} />
            {/* <Route path="/tabs" element={<Tabs />} /> */}
            {/* <Route path="/user-accounts" element={<UserAccounts />} /> */}
            {/* <Route path="/traine-upload" element={<TraineUpload />} /> */}
            <Route path="/status-page" element={<StatusPage />} />

            <Route path="/todo" element={<Todo />} />

            {/* admin */}
            <Route path="/admin/*" element={<AdminRouter />} />
            <Route path="/trainee-courses" element={<TraineeCourses />} />
            <Route path="/linechart" element={<CountOfSeals />} />
            <Route path="/countofproducts" element={<CountOfProduct />} />
            <Route path="/countofcustomers" element={<CountOfCustomers />} />

            {/* user */}
            <Route path="/user/*" element={<UserRouter />} />
            {/* WSpace */}
            {/* <Route path="/WSpace" element={<WSpace />} />
            <Route path="/googleCalender" element={<GoogleCalendar />} />
            <Route path="/mylearning" element={<MyLearning />} /> */}
            <Route path="/Certificates" element={<Certificates />} />
            <Route path="/features" element={<Features />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/signUp" element={<SignUp />} />
            {/*  */}
            {/* <Route path="/Profile" element={<Profile />} /> */}
            {/* <Route path="/PostFeeds" element={<PostFeeds />} /> */}
            <Route path="/QuestionForm" element={<QuestionForm />} />
            {/* <Route path="/Settings" element={<Settings />} /> */}
            {/*  */}
            <Route path="/Payment" element={<Payment />} />
            <Route path="/Purchases" element={<Purchases />} />
            <Route path="/mycourse" element={<MyCourse />} />
            <Route path="/student" element={<Student />} />
            {/* <Route path="/googlecalender" element={<GoogleCalender />} /> */}
            {/*  */}
            <Route path="/artsandHumanities" element={<ArtsandHumanities />} />
            <Route path="/business" element={<Business />} />
            <Route path="/computerscience" element={<ComputerScience />} />
            <Route path="/professional" element={<Professional />} />
            {/*  */}
            <Route path="/reactjs" element={<Reactjs />} />
            <Route path="/health" element={<Health />} />
            <Route path="/database" element={<DataBase />} />
            <Route path="/course-details" element={<CourseDetails />} />

            {/* Data Science */}
            <Route path="/data_Science" element={<DataScienceArray />} />
            <Route path="/course/Data Science" element={<DataAnalytics />} />
            <Route
              path="/data_Science/data-Analatics"
              element={<DataAnalatics />}
            />
            <Route
              path="/data_Science/machine-Learning"
              element={<MachineLearning />}
            />
            <Route
              path="/data_Science/introduction-to-data-science"
              element={<DataScience />}
            />
            <Route
              path="/data_Science/data-science-with-python"
              element={<DataScienceWithPython />}
            />
            <Route
              path="/data_Science/big-data-analysis"
              element={<BigDataAnalysis />}
            />

            <Route
              path="/data_Science/data-visualization"
              element={<Datavisualisation />}
            />
            {/* done */}
            {/* Cyber Security */}
            <Route path="/cyber_security" element={<CyberSecurityArray />} />
            <Route
              path="/Cybersecurity/Cybersecurity_fundamentals"
              element={<Cybersecurity />}
            />
            <Route
              path="/Cybersecurity/cybersecurity_beginners"
              element={<CybersecurityBiginers />}
            />
            <Route
              path="/Cybersecurity/cybersecurity_essentials"
              element={<CybersecurityEssentials />}
            />

            {/* Network Security */}
            <Route
              path="/network_security"
              element={<NetworkSecurityArray />}
            />
            <Route
              path="/network_security/network-security-fundamentals"
              element={<NetworkSecurity />}
            />
            <Route
              path="/network_security/advance-network-secuity"
              element={<AdvanceNetworkSecuity />}
            />

            <Route
              path="/network_security/network-security-best-practices"
              element={<BestPracticesNetworkSecurity />}
            />
            {/* BestPracticesNetworkSecurity */}
            {/* /student/student_network_security/network-security-best-practices */}

            {/* Software Testing */}
            <Route
              path="/software_testing"
              element={<SoftwareTestingArray />}
            />

            <Route
              path="/software-testing/performance-testing"
              element={<PerformanceTesting />}
            />

            <Route
              path="/software-testing/security-testing"
              element={<SecurityTesting />}
            />
            <Route
              path="/software-testing/usability-testing"
              element={<UsabilityTesting />}
            />

            <Route
              path="/software-testing/unit-testing"
              element={<UnitTesting />}
            />

            <Route
              path="/software-testing/compatibility-testing"
              element={<CompatabilityTesting />}
            />

            <Route
              path="/software-testing/acceptance-testing"
              element={<AcceptanceTesting />}
            />

            <Route
              path="/software-testing/stress-testing"
              element={<StressTesting />}
            />
            {/* IntigrationTesting */}
            <Route
              path="/software-testing/integration-testing"
              element={<IntigrationTesting />}
            />

            <Route
              path="/software-testing/system-testing"
              element={<SystemTesting />}
            />

            <Route
              path="/software-testing/manual-testing"
              element={<ManualTesting />}
            />

            <Route
              path="/software-testing/automation-testing"
              element={<AutomationTesting />}
            />
            <Route
              path="/software-testing/regression-testing"
              element={<RegressionTesting />}
            />

            <Route path="/cloud-testing" element={<CloudTesting />} />

            {/* Ethical Hacking */}
            <Route
              path="/ethical_Hacking"
              element={<EthicalHackingStudentArray />}
            />
            <Route
              path="/Ethical_Hacking/basic_ethical_Hacking"
              element={<EthicalHacking />}
            />
            <Route
              path="/Ethical_Hacking/advance_Ethical_Hacking"
              element={<AdvanceEthicalHacking />}
            />
            <Route
              path="/Ethical-Hacking/certified_Ethical_Hacking"
              element={<CertifiedEthicalHacking />}
            />
            {/*  */}
            {/* Full Stack */}
            <Route
              path="/fullStack_WebDevelopment/mean-Stack-Developer"
              element={<MeanStackDeveloper />}
            />
            <Route
              path="/fullStack_WebDevelopment"
              element={<FullStackWebDevelopmentArray />}
            />
            <Route
              path="/fullStack_WebDevelopment/fullStack-Devops"
              element={<FullStackDevops />}
            />
            <Route
              path="/fullStack_WebDevelopment/fullStack-Web-Development"
              element={<FullStackWebDevelopment />}
            />
            <Route
              path="/fullStack_WebDevelopment/fullStack-Python-Development"
              element={<FullStackPythonDevelopment />}
            />
            <Route
              path="/fullStack_WebDevelopment/fullStack-Java-Development"
              element={<FullStackJava />}
            />
            <Route
              path="/fullStack_WebDevelopment/full-stack-javascript"
              element={<FullStackJavaScript />}
            />
            <Route
              path="/fullStack_WebDevelopment/dot-net-development"
              element={<DotnetDevelopment />}
            />
            {/* DotnetDevelopment */}
            {/* /student/student_fullStack_WebDevelopment/fullStack-DotNet */}

            {/* WishList/ Cart */}
            <Route path="/wishLists" element={<WishLists />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="/personaldevelopment"
              element={<PersonalDevelopment />}
            />
            <Route path="/socialscience" element={<SocialScience />} />

            {/* Basic Advance Preminum Cousrses here */}
            {/* Basic Courses */}
            <Route path="/basic-courses" element={<BasicCourses />} />
            <Route path="/java" element={<Java />} />
            <Route path="/wordpress" element={<Wordpress />} />
            <Route path="/php" element={<Php />} />
            <Route path="/javaScript" element={<JavaScript />} />
            <Route path="/c_c++" element={<C_Cplus />} />

            <Route path="/ui_ux_design" element={<UiUx />} />
            <Route path="/javaScript" element={<JavaScript />} />
            <Route path="/c_c++" element={<C_Cplus />} />
            {/* Advance courses */}

            <Route path="/premium-courses" element={<PremiumCourses />} />

            <Route path="/advance-courses" element={<AdvanceCourses />} />
            <Route path="/advance-php" element={<AdvancePhp />} />
            <Route path="/blockchain" element={<BlockChain />} />
            <Route path="/cloud-computing" element={<CloudComputing />} />
            <Route path="/power-bi" element={<PowerBi />} />
            <Route path="/erp" element={<ERP />} />
            {/* Premium Courses */}
            <Route path="/premium-courses" element={<PremiumCourses />} />
            <Route
              path="/fullStackMobileAppDevelopment"
              element={<FullStackMobileApp />}
            />
            <Route path="/advancedPhpProgramming" element={<PreAdvancePhp />} />
            <Route
              path="/masteringWordPressDevelopment"
              element={<PreWordPress />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
