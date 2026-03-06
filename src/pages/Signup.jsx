import React from "react";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router";

export default function Signup() {
  return (
    <div className="h-screen w-full px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl mb-2">Create account</h1>
        <p className="text-gray-500 text-sm">
          Join us today at scale chat and connect with your like minds
        </p>
      </div>
      <form className="space-y-4 mb-6">
        <div className="flex flex-col space-y-2">
          <span>First name</span>
          <input
            type="text"
            className="slideInRight border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
          />
          <p className="text-zinc-400 text-sm">Enter your first name</p>
        </div>

        <div className="flex flex-col space-y-2">
          <span>Last name</span>
          <input
            type="text"
            className="slideInRight border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
          />
          <p className="text-zinc-400 text-sm">Enter your last name</p>
        </div>

        <div className="flex flex-col space-y-2">
          <span>Username or email address</span>
          <input
            type="text"
            className="slideInRight border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
          />
          <p className="text-zinc-400 text-sm">
            Enter your username or email address
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <span>Password</span>
          <input
            type="text"
            className="slideInRight border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
          />
          <p className="text-zinc-400 text-sm">Enter your password</p>
        </div>

        <div className="flex flex-col space-y-2">
          <span>Mobile number</span>
          <input
            type="text"
            className="slideInRight border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
          />
          <p className="text-zinc-400 text-sm">Enter your mobile number</p>
        </div>

        <button className="border w-full p-2 rounded-lg bg-blue-700 text-white">
          Login
        </button>
      </form>
      <p className="text-sm text-center font-normal">
        Already have an account?
        <Link className="text-blue-700 ml-2 font-semibold" to="/login">
          Signin
        </Link>
      </p>
    </div>
  );
}
