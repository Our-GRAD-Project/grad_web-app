import React from 'react';
import { useNavigate } from 'react-router-dom';

const CheckEmail = () => {
  const navigate = useNavigate();

  const handleOpenEmail = () => {
    navigate('/verify-code');
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* <Header /> */}

      <div className="w-full flex flex-col items-center justify-center flex-grow px-4 pt-10">
        <div className="w-full max-w-[560px] flex flex-col gap-6 items-center mt-[-150px]">
          
          <span className="text-[24px] font-semibold leading-[1.4] text-[#282828] text-center">
            Check Your Email
          </span>

          <span className="w-full text-[16px] font-normal leading-[1.4] text-[#808080] text-center mb-3">
            We sent a password reset link to your email.
          </span>

          <button
            onClick={handleOpenEmail}
            className="h-[56px] w-full flex justify-center items-center gap-2 rounded-md bg-[#c9bde5] shadow-sm"
          >
            <span className="text-[20px] font-medium leading-[1.5] text-black">
              Open Email App
            </span>
          </button>

          <span className="w-full text-[18px] font-medium text-center text-[#282828]">
            Didn't receive the email?{' '}
            <span className="text-[#9b7be1] cursor-pointer hover:underline">
              Click to resend
            </span>
          </span>

        </div>
      </div>
    </div>
  );
};

export default CheckEmail;
