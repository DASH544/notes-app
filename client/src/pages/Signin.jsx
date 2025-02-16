import React, { useState } from "react";
import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const [passwordShown, isPasswordShown] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      setData(response.data);
      setError(response.data.issues)
      console.log(response);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-white mb-4 text-center">
            Sign In
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                  autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-300 text-sm font-medium mb-2"
              >
                Password
              </label>
              <div className="flex items-center justify-center  relative">
                <input
                  type={passwordShown ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  autoComplete="off"
                  placeholder="Enter your password"
                  required
                />
                <div onClick={(e)=>(isPasswordShown((prev)=>!prev))} className="absolute right-2">
                {passwordShown ? (
                  <FaRegEye size={22} className="cursor-pointer text-white" />
                ) : (
                  <FaRegEyeSlash size={22} className="cursor-pointer text-white " />
                )}
                </div>
              </div>
            </div>
            {data && (
          <div className="mt-4 p-4 bg-gray-700 rounded-lg text-white">
            <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
            {/* Pretty-printed JSON */}
          </div>
        )}
            <div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-300 cursor-pointer"
              >
                Sign In
              </button>
            </div>
            <div className="text-center text-gray-400">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
