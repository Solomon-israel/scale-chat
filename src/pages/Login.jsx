import React from "react";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router";

export default function Login() {
  return (
    <div className="h-screen w-full p-4 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <div className="flex flex-col items-center w-full mb-8">
          <FaMessage className="message-icon size-15 text-blue-500 mb-3" />
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-xs text-gray-500">
            Sign in to Scale Chart to connect with people
          </p>
        </div>
        <div className="w-full">
          <form className="space-y-4 mb-6">
            <input
              type="text"
              className="slideInRight border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
              placeholder="Username or email address"
            />
            <input
              type="password"
              className="slideInRight border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
              placeholder="Password"
            />

            <button className="bg-blue-500 text-white w-full h-11 rounded-lg hover:bg-blue-800">
              Login
            </button>
          </form>
          <Link
            to="/register"
            className="inline-flex w-full justify-center items-center bg-neutral-200 text-sm h-11 rounded-lg mb-4"
          >
            Create a new account
          </Link>

          <Link
            to="/forgot-password"
            className="block text-center text-blue-500 text-sm"
          >
            Forgot password?
          </Link>
        </div>
      </div>
    </div>
  );
}
