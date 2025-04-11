import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Main from "../Main";
import DataAnalyst from "./StartNew Car/DataAnalyst/DataAnalyst";
import DigitalMarketing from "./StartNew Car/DigitalMarketing/DigitalMarketing";
import ItSupport from "./StartNew Car/Itsupport/ItSupport";
import FrontEnd from "./StartNew Car/Front-End Developer/FrontEnd";
import Cybersecurity from "./StartNew Car/Cybersecurity/Cybersecurity";
import UiUx from "./StartNew Car/Ui-Ux/UiUx";
import Aurora from "./aurora/Aurora";
import Footer from "./footer/Footer";
import FinalTestimonials from "./testimonials/Testimonialss";
import Platform from "./Plat form/Platform";
import Pricing from "./Pricing/Pricing";
// import SlideInTimer from "./Timer/SlideInTimer";
import ImageHomePage from "../Home/Plat form/AllCourses/ImageHomepage";
import SingupHome from "../Home/SingUpHome/SignUpHome";

import LoginForm from "./loginForm/LoginForm";
import StartNewCarrer from "./StartNewCarrer/Carrer";
import { useSelector } from "react-redux";
import AICarousel from "./AICarousel";
function Home() {
  // const [activeTab, setActiveTab] = useState("tab1");

  // useEffect(() => {
  //   // Initialize the first tab
  //   showTab("tab1");
  // }, []);

  // function showTab(tabId) {
  //   // Update active tab
  //   setActiveTab(tabId);
  // }
  const jwt = localStorage.getItem("jwt");
   const auth = useSelector((state) => state.auth) || { user: {} };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <Main />
      <AICarousel />
      <StartNewCarrer />
      
      <Platform />
      <ImageHomePage />
      <Aurora />

      <Pricing />
      <LoginForm></LoginForm>
      {/* <SlideInTimer /> */}
      {/* {!auth.user && <SingupHome />} */}
      <FinalTestimonials />
      <Footer />
    </>
  );
}

export default Home;
