import React from "react";
import { FaMessage } from "react-icons/fa6";
import { Link } from "react-router";

export default function Signup() {
  return (
    <div className="h-screen w-full p-4 ">
      <div className="space-y-4">
        <header className="mb-6">
          <span>Create account</span>
        </header>

        <div className="flex flex-col space-y-2">
          <span>First name</span>
          <input className="border rounded outline-0 p-2" type="text" />
          <p className="text-zinc-400 ">Enter your first name</p>
        </div>

        <div className="flex flex-col space-y-2">
          <span>Last name</span>
          <input className="border rounded outline-0 p-2" type="text" />
          <p className="text-zinc-400 ">Enter your last name</p>
        </div>

        <div className="flex flex-col space-y-2">
          <span>Username or email address</span>
          <input className="border rounded outline-0 p-2" type="text" />
          <p className="text-zinc-400 ">Enter your username or email address</p>
        </div>

        <div className="flex flex-col space-y-2">
          <span>Password</span>
          <input className="border rounded outline-0 p-2" type="text" />
          <p className="text-zinc-400 ">Enter your password</p>
        </div>

        <Link className="text-blue-500" to="/forgot-password">Forgot password?</Link>
      </div>
    </div>
  );
}
