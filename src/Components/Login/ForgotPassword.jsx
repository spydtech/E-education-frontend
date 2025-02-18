import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
// import IMG from '../../assets/logo/E-eLogo.png'
// import forgotpassword from "../../assets/undraw_Forgotpassword.png";
import { sendOtp, updatePassword, verifyOtp } from "../../Config/api"; // Import API functions
import "animate.css";

function ForgotPassword() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setEmail("");
    setOtp(["", "", "", "", "", ""]);
    setPassword("");
    setConfirmPassword("");

    localStorage.clear();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOTPEnter = (e, index) => {
    const value = e.target.value;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < 5 && value) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSendOtp = async () => {

    try {
      const response = await sendOtp(email);
      setMessage(response.data);
      setOtpSent(true);
      localStorage.setItem("email", email);
      setEmail("");
    } catch (error) {
      setMessage(error.response.data);
    }

  };

  const handleVerifyOtp = async () => {
    if (otp.join("").length === 6) {
      try {
        const response = await verifyOtp(otp.join(""));
        setMessage(response.data);
        setOtpVerified(true);
        localStorage.setItem("otp", otp.join(""));
        setOtp(["", "", "", "", "", ""]);
      } catch (error) {
        setMessage(error.response.data);
      }
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleUpdatePassword = async () => {
    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
    const email = localStorage.getItem("email");

    try {
      const response = await updatePassword(email, password, confirmPassword);
      setMessage(response.data);
      localStorage.setItem("password", password);
      alert("Password updated successfully!");
      setPassword("");
      setConfirmPassword("");
      navigate("/login")
    } catch (error) {
      setMessage(error.response.data);
    }


  };


  return (
    <>
      <div
        id="main"
        className="my-10 grid md:lg:xl:grid-cols-2 grid-cols-1 justify-center items-center"
      >
        {/* <div className="flex justify-center items-center" id="image">
          <img
            src={forgotpassword}
            className="w-auto mx-auto"
            alt="Forgot Password"
          />
        </div> */}
        <div className="p-5" id="forgot-password">
          <div className="text-center">
            {/* <img
              src={IMG}
              className="flex justify-center items-center w-56 mx-auto "
              alt="Logo"
            /> */}
            <div className="p-2 animate__animated animate__backInDown mb-10 text-8xl text-start font-lora font-bold text-sky-600">
              Forgot Your Password?
            </div>
            <div id="email-here">
              {!otpSent ? (
                <>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="p-4 border border-gray-400 rounded w-full mb-3"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                  <button
                    onClick={handleSendOtp}
                    className={`p-2 w-auto rounded ${email
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    disabled={!email}
                  >
                    Send OTP
                  </button>
                </>
              ) : !otpVerified ? (
                <>
                  <div className="mt-4">
                    <p>Enter OTP:</p>
                    {Array.from({ length: 6 }).map((_, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength="1"
                        className="w-12 h-12 mb-4 text-2xl border border-gray-300 rounded-md shadow-sm text-center"
                        value={otp[index] || ""}
                        onChange={(e) => handleOTPEnter(e, index)}
                        ref={(el) => (inputRefs.current[index] = el)}
                      />
                    ))}
                  </div>
                  <button
                    onClick={handleVerifyOtp}
                    className={`p-2 w-auto rounded ${otp.join("").length === 6
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                      }`}
                    disabled={otp.join("").length !== 6}
                  >
                    Verify OTP
                  </button>
                </>
              ) : (
                <>
                  <div className="mt-4">
                    <input
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="p-4 border border-gray-400 rounded w-full mb-3"
                      placeholder="Enter new password"
                    />
                    {errors.password && (
                      <p className="text-red-500">{errors.password}</p>
                    )}
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={handleConfirmPasswordChange}
                      className="p-4 border border-gray-400 rounded w-full mb-3"
                      placeholder="Confirm password"
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500">{errors.confirmPassword}</p>
                    )}
                    <button
                      onClick={handleUpdatePassword}
                      className={`p-2 w-auto rounded ${password && confirmPassword
                        ? "bg-blue-500 text-white"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      disabled={!password || !confirmPassword}
                    >
                      Update Password
                    </button>
                  </div>
                </>
              )}
              {message && <p className="text-green-500">{message}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
