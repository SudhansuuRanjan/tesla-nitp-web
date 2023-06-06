import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  document.title = "Tesla NIT Patna | AdminLogin";
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  const Login = (e) => {
    e.preventDefault();
    navigate('/admin/dashboard');
  }

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="rounded-3xl lg:w-fit md:w-fit w-[90%] lg:px-16 md:px-12 px-6 py-7 border border-gray-700 flex flex-col bg-[#131313] space-y-8">
        <div className="flex items-center justify-center">
          <img src="/images/logo.svg" alt="logo" className="h-14 mt-1 w-auto" />
        </div>
        <div>
          <h1 className="text-center text-xl font-semibold leading-normal">
            Welcome! Tesla Admin.{" "}
          </h1>
        </div>

        <form onSubmit={Login}>
          <div className="flex lg:w-[18rem] md:w-[18rem] w-[100%] flex-col space-y-4">
            <label className="text-lg">E-mail <span className="text-red-500">*</span></label>
            <input
              className="h-11 px-4 rounded-xl"
              type="email"
              name="email"
              placeholder="abc@tesla.co.in"
              required
              onChange={handleChange}
              value={formData.email}
            />
            <label className="text-lg">Password <span className="text-red-500">*</span></label>
            <input
              className="h-11 px-4 rounded-xl"
              type="password"
              name="password"
              placeholder="Enter Password"
              required
              maxLength={16}
              minLength={8}
              onChange={handleChange}
              value={formData.password}
            />
          </div>

          <button type="submit" className="px-8 py-3 mt-10 mb-5 bg-sky-500 font-medium text-black hover:bg-sky-600 rounded-full w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
