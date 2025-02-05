
import React, { useState, useEffect } from "react";
import forgotpassword from "../../../../assets/forgotpassword1.png";
import "animate.css";

function TraineForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setEmail("");
    localStorage.clear();
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendEmail = () => {
    if (validateEmail()) {
      alert("Mail sent successfully!");
      setEmail("");
    }
  };

  const validateEmail = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Invalid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <>
      <div className="bg-white">
        <div
          id="main"
          className="grid md:lg:xl:grid-cols-2 grid-cols-1 justify-center items-center"
        >
          
          <div className="p-5" id="forgot-password">
            <div className="text-center">
              <div className="p-2 animate__animated animate__backInDown mb-10 text-4xl text-center font font-bold text-white">
                Forgot Your Password?
              </div>
              <div id="email-here">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="p-4 border border-gray-400 rounded w-full mb-3"
                  placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
                <div className="mt-4">
                  <button
                    onClick={handleSendEmail}
                    className={`p-3 w-[200px] rounded-lg text-white font-semibold shadow-lg transition-transform transform hover:scale-105 ${
                      email
                        ? "bg-blue-600 hover:bg-blue-700"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                    disabled={!email}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TraineForgotPassword;
