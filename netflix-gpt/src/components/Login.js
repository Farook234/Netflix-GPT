import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {
  const [issigninform, setissigninform] = useState();

  const togglesignform = () => {
    setissigninform(!issigninform);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-white font-bold text-3xl py-4">
          {issigninform ? "Sign In" : "Sign Up"}
        </h1>
        {!issigninform && (
          <input
            className="text-white"
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          className="text-white"
          type="text"
          placeholder="Email address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          className="text-white"
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 w-full bg-red-700 text-white font-bold rounded-lg">
          {issigninform ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togglesignform}>
          {issigninform
            ? "New to Netflix? Sign Up"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
