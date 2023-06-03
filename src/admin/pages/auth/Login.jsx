import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  document.title = "Tesla NIT Patna | Admin | Login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="login__container rounded-lg p-5 border flex flex-col bg-stone-900 space-y-8 sm:w-4/12 md:w-8/12 lg:w-4/12 ">
        <div className="my-3 p-1 py-0 flex items-center justify-center">
          <img src="/images/logo.svg" alt="logo" className="h-14 mb-2  md:w-56 lg:w-56" />
        </div>
        <div>
          <h1 className="text-center text-xl leading-normal">
            Sign in to your Tesla Account.{" "}
          </h1>
          <p className="text-center leading-normal">
            Don't have an Account ?{" "}
            <Link to="/404">
              <span className="text-violet-600 underline underline-offset-4">
                Sign up here
              </span>
            </Link>{" "}
          </p>
        </div>

        <form onSubmit={Login}>
          <div className="flex flex-col space-y-4">
            <label className="text-xl">E-mail *</label>
            <input
              className="h-11 px-4"
              type="email"
              name="email"
              placeholder="e.g. abc@tesla.co.in"
              required
              value={email}
            />
            <label className="text-xl">Password *</label>
            <input
              className="h-11 px-4"
              type="password"
              name="pass"
              placeholder="e.g. ********"
              required
              maxLength={16}
              minLength={6}
              value={password}
            />
          </div>
        </form>
        <Link to="/admin/dashboard">
          <button className="px-8 py-2 my-3 bg-violet-500 hover:bg-violet-800 rounded-full w-full  ">
            Login
          </button>
        </Link>
        <p className="text-center pb-5  ">
        <Link to="/404"> <span className="text-violet-600 underline underline-offset-4">Reset Your password !</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
