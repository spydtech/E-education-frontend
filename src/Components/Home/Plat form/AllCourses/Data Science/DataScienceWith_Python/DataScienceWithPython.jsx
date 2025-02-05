import React,{useEffect} from "react";
// import Navbar from "../../../../../Navbar";
import Navbar from "../../../../../Navbar";
import Footer from "../../../../footer/Footer";
import DataScienceWithPythonHero from "./DataScienceWithPythonHero";
import DataScienceWithPythonCard from "./DataScienceWithPythonCard";
import DataScienceWithPythonNavigation from "./DataScienceWithPythonAbout/DataScienceWithPythonNavigation";
import DataScienceWithPythonFoot from "./DataScienceWithPythonFoot";
const DataScienceWithPython = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <DataScienceWithPythonHero />
      <DataScienceWithPythonCard />
      <DataScienceWithPythonNavigation />
      <DataScienceWithPythonFoot></DataScienceWithPythonFoot>
      <Footer />
    </>
  );
};

export default DataScienceWithPython;
