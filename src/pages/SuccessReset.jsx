import React from "react";
import { useNavigate } from "react-router-dom";

const SuccessReset = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 pt-10">
      <div className="w-full max-w-[560px] flex flex-col gap-6 items-center mt-[-150px]">
        {/* Success Icon */}
        <div className="w-[60px] h-[60px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-[#34D399] w-full h-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"
            />
          </svg>
        </div>

        {/* Title */}
        <span className="text-[24px] font-semibold leading-[1.4] text-[#282828] text-center">
          Password Reset
        </span>

        {/* Subtitle */}
        <span className="w-full text-[14px] font-normal leading-[1.4] text-[#808080] text-center">
          Your password has been successfully reset. Click below to log in magically.
        </span>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="h-[56px] w-full flex justify-center items-center gap-2 rounded-md bg-[#c9bde5] shadow-sm"
        >
          <span className="text-[20px] font-medium leading-[1.5] text-black">
            Log In
          </span>
        </button>
      </div>
    </div>
  );
};

export default SuccessReset;
