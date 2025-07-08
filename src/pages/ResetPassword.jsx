// src/pages/ResetPassword.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleReset = async () => {
    const resetToken = localStorage.getItem("resetToken");
    const password = document.getElementById("password").value;

    if (!resetToken) {
      alert("No reset token found. Please try again.");
      return;
    }

    if (!password || password.length < 6) {
      alert("Please enter a valid password with at least 6 characters.");
      return;
    }

    try {
      const res = await api.post("/auth/reset-password/confirm", {
        resetToken,
        password,
      });

      console.log("Password reset successful:", res.data);
      navigate("/reset-success");
    } catch (err) {
      console.error("Password reset failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 pt-10">
      <div className="w-full max-w-[560px] flex flex-col gap-6 items-center mt-[-200px]">
        <span className="text-[24px] font-semibold leading-[1.4] text-[#282828] text-center mb-1">
          Set New Password
        </span>

        <span className="w-full text-[16px] font-normal leading-[1.4] text-[#808080] text-center mb-3">
          Your New Password Must be Different to Previously Used Password
        </span>

        {/* Email Field */}
        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label className="text-sm text-[#373737] font-medium">Email Address</label>
          <div className="w-full relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-[48px] rounded-md border border-[#ccc] p-3 pl-10 text-[#141316] focus:outline-none focus:ring-2 focus:ring-[#c9bde5]"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#808080]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.5l8 5 8-5V4H4zm0 2v14h16V6l-8 5-8-5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Password Field */}
        <div className="w-full flex flex-col justify-center items-start gap-2">
          <label className="text-sm text-[#373737] font-medium">Password</label>
          <div className="w-full relative">
            <input
              id="password"
              type="password"
              placeholder="Enter new password"
              className="w-full h-[48px] rounded-md border border-[#ccc] p-3 pl-10 text-[#141316] focus:outline-none focus:ring-2 focus:ring-[#c9bde5]"
            />
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#808080]">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1a4 4 0 0 1 4 4v3h1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V5a4 4 0 0 1 4-4zm-2 7h4V5a2 2 0 1 0-4 0v3z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="h-[56px] w-full flex justify-center items-center gap-2 rounded-md bg-[#c9bde5] shadow-sm"
        >
          <span className="text-[20px] font-medium leading-[1.5] text-black">
            Reset Password
          </span>
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
