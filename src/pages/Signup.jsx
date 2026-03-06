import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
    number: "",
  });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const { firstname, lastname, email, password, number } = formData;

    if (!firstname || !lastname || !email || !password || !number)
      return toast.warning("All fields required");
    // create localstorage
    localStorage.setItem("users", JSON.stringify([...users, formData]));
    toast.success("Account created succesfully!");
    navigate("/login");
  }

  return (
    <div className="h-screen w-full px-4 py-10">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl mb-2">Create account</h1>
        <p className="text-gray-500 text-sm">
          Join us today at scale chat and connect with your like minds
        </p>
      </div>
      <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-2 slideInRight">
          <span>First name</span>
          <input
            type="text"
            className=" border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
            name="firstname"
            value={formData.firstanme}
            onChange={handleOnChange}
          />
          <p className="text-zinc-400 text-sm">Enter your first name</p>
        </div>

        <div className="flex flex-col space-y-2 slideInRight">
          <span>Last name</span>
          <input
            type="text"
            name="lastname"
            className=" border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
            onChange={handleOnChange}
          />
          <p className="text-zinc-400 text-sm">Enter your last name</p>
        </div>

        <div className="flex flex-col space-y-2 slideInRight">
          <span>Email address</span>
          <input
            type="email"
            className=" border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
            onChange={handleOnChange}
            name="email"
          />
          <p className="text-zinc-400 text-sm">
            Enter your username or email address
          </p>
        </div>

        <div className="flex flex-col space-y-2 slideInRight">
          <span>Password</span>
          <input
            type="password"
            className=" border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
            onChange={handleOnChange}
            name="password"
          />
          <p className="text-zinc-400 text-sm">Enter your password</p>
        </div>

        <div className="flex flex-col space-y-2 slideInRight">
          <span>Mobile number</span>
          <input
            type="tel"
            className=" border w-full h-11 rounded-lg px-2 outline-none border-gray-400"
            onChange={handleOnChange}
            name="number"
          />
          <p className="text-zinc-400 text-sm">Enter your mobile number</p>
        </div>

        <button className="border w-full p-2 rounded-lg bg-blue-700 text-white">
          Create account
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
