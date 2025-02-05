/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import Img from "../../../assets/newcertificate.png";
import IMG from "../../../assets/Certfication.png";
import IMG1 from "../../../assets/Certification12.png";
// import certificate from "../../../../../../../assetss/certficate.png";
import certificate from "../../../assetss/certficate.png";

const Certificate121 = () => {
  const name = "John Doee"; // Constant data for the name
  const course = "React Development"; // Constant data for the course

  const generatePDF = () => {
    const input = document.getElementById("certificate");

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("certificate.pdf");
    });
  };

  return (
    <div className="">
      <div className="py-4 ">
        <div className=" flex justify-center items-center">
          <p className="text-center text-2xl  font-bold text-black">
            Earn <span className="text-[#f6ac14]"> Your</span> Certificate
          </p>
        </div>
        <div className=" text-center justify-center items-center flex px-2  pt-10">
          <p className="md:text-lg lg:w-[800px]   text-sm text-wrap text-[#0098f1] ">
            Complete the course and receive a personalized certificate of
            achievement.Showcase your new skills and knowledge to potential
            employers. Boost your resume with a recognized credential. Download
            and share your certificate online with ease.
          </p>
        </div>

        <div className="px-2 py-4 pt-10 flex justify-center items-center">
          <img
            src={certificate}
            className="bg-[#969ebe] w-auto h-auto lg:w-[700px] lg:h-[350px]"
            alt="Background"
          />
        </div>
        {/* <div
          id="certificate"
          className="relative    shadow-lg"
          style={styles.certificate}
        >
          <img
            src={Img}
            className="bg-[#969ebe]"
            alt="Background"
            style={styles.backgroundImage}
          />
          <div style={styles.overlay}>
            <div className="bg-[#0c4a6e] p-4 rounded-t-lg">
              <img style={styles.logo} src={Img} alt="E-education logo" />
            </div>

            <h1 style={styles.title} className="">
              Certificate of Completion
            </h1>
            <p style={styles.text}>This certificate is presented to</p>
            <h2 style={styles.name} className="font-edu-tas-beginner">
              "{name}"
            </h2>
            <p style={styles.text}>
              For successfully completing the Online E-education course On
            </p>
            <h2 style={styles.course} className="font-edu-tas-beginner">
              "{course}"
            </h2>
            <p style={styles.date}>Date: {new Date().toLocaleDateString()}</p>
            <p className="pt-10 text-xl font-bold">Signature</p>
          </div>
        </div> */}
      </div>
      {/* <button onClick={generatePDF} style={styles.button}>
        Download Certificate
      </button> */}
    </div>
  );
};

const styles = {
  certificate: {
    width: "100%",
    maxWidth: "800px",
    height: "600px",
    margin: "20px auto",
    padding: "20px",
    textAlign: "center",
    border: "10px solid #0c4a6e",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "white",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    opacity: 0.1,
    // background: 'radial-gradient(circle at center center, rgb(30, 108, 204),rgb(36, 61, 118))',
  },
  overlay: {
    position: "relative",
    zIndex: 1,
  },
  logo: {
    width: "200px",
    height: "auto",
    margin: "0 auto",
  },
  title: {
    fontSize: "36px",
    fontWeight: "bold",
    margin: "20px 0",
  },
  text: {
    fontSize: "18px",
    margin: "10px 0",
  },
  name: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  course: {
    fontSize: "22px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  date: {
    fontSize: "18px",
    margin: "20px 0",
  },
  button: {
    display: "block",
    margin: "20px auto",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#0c4a6e",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  },
};

export default Certificate121;
