import React, { useEffect } from "react";
import { FaMessage } from "react-icons/fa6";
import { useNavigate } from "react-router";

export default function Onboarding() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }, []);
  return (
    <div className="w-full flex items-center justify-center bg-blue-700 min-h-screen">
      <FaMessage className="slideInRight size-15 text-blue-900" />
    </div>
  );
}
