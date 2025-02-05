import React, { useState } from "react";
import image from "../../../assetss/loginform.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let emailError = "";
    let passwordError = "";

    if (!formData.email) {
      emailError = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      emailError = "Invalid email address";
    }

    if (!formData.password) {
      passwordError = "Password is required";
    } else if (formData.password.length < 6) {
      passwordError = "Password must be at least 6 characters";
    }

    setErrors({
      email: emailError,
      password: passwordError,
    });

    return !emailError && !passwordError;
  };

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("loginData", JSON.stringify(formData));
      alert("Login data saved to local storage!");
    }
  };

  return (
    <div className="bg-[#ff9b26] bg-opacity-30  flex items-center justify-center ">
      <div className="bg-white lg:my-6 my-4  md:flex-row flex-col-reverse rounded-lg w-full max-w-4xl grid grid-cols-1  md:grid-cols-2 mx-2">
        <div className="px-4 items-center flex justify-center py-10  ">
          <div className="">
            <h2 className="text-2xl font-bold mb-4">Hello! Welcome Back</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-700"
                >
                  Email Or Mobile Number
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.email ? "border-red-500" : "border-[#0098F1]"
                  } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-3 py-2 border ${
                    errors.password ? "border-red-500" : "border-[#0098F1]"
                  } rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary focus:ring-primary shadow-md border-[#0098F1] rounded"
                  />
                  <label
                    htmlFor="rememberMe"
                    className="ml-2 block text-sm text-zinc-900"
                  >
                    Remember Me
                  </label>
                </div>
                <div className="text-sm">
                  <Link
                    to="/forgotpassword"
                    className="font-medium text-primary hover:text-primary-foreground text-[#0098F1]"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-[#0098F1]"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mt-6 text-center">
              <span className="text-sm text-zinc-600">
                Don't Have An Account?{" "}
                <Link
                  to="/signup"
                  className="font-medium text-primary hover:text-primary-foreground text-[#0098F1]"
                >
                  Create Account
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="p-8  flex  items-center justify-center ">
          <img
            src={image}
            alt="Illustration of education and technology"
            className="hidden sm:block w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
