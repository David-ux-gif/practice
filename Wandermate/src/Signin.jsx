import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [formdata, setformdata] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted", formdata);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  return (
    <>
        <form onSubmit={handleSubmit}>
          <div className="h-350 w-96 ml-14 mt-14 p-4 border-4">
            <div className="flex flex-col space-y-4">
              <h1 className="text-3xl font-bold mb-6">Sign in</h1>
              <input
                type="email"
                name="username"
                onChange={handleChange}
                value={formdata.username}
                id="email"
                placeholder="Enter email"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Email"
              />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formdata.password}
                id="password"
                placeholder="Enter password"
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Password"
              />
              <div className="flex items-center text-sm">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="mr-2"
                  aria-label="Remember me"
                />
                <label htmlFor="remember" className="text-gray-500">
                  Remember me
                </label>
              </div>
              <label
                htmlFor="fotgot"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot your password ?
              </label>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign in
              </button>
              <div className="text-sm">
                <span>New here?</span>
                <Link to="/signup" className="text-blue-500 ml-2">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </form>
    </>
  );
}

export default Signin;
