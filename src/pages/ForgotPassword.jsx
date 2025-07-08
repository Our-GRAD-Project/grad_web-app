import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/send-code', { email });
      console.log('Reset code sent to:', email);
      localStorage.setItem('resetToken', response.data.resetToken);
      navigate('/check-email');
    } catch (error) {
      console.error('Error sending reset code:', error);
      alert(error.response?.data?.message || 'Something went wrong, please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-white px-4 pt-10">
      <div className="w-full max-w-[560px] flex flex-col gap-6 items-center mt-[-200px]">
        <span className="text-[24px] font-semibold leading-[1.4] text-[#282828] text-center mt-2">
          Forgot Password?
        </span>
        <span className="w-full text-[16px] font-normal leading-[1.4] text-[#808080] text-center -mt-2">
          Please enter your email to reset the password
        </span>
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-start gap-2">
          <label className="text-sm text-[#282828] font-medium">Email Address</label>
          <div className="w-full relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-[#716b80]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[48px] rounded-md border border-[#ccc] pl-10 pr-3 text-[#141316] focus:outline-none focus:ring-2 focus:ring-[#c9bde5]"
              required
            />
          </div>
          <button
            type="submit"
            className="h-[56px] w-full mt-4 flex justify-center items-center gap-2 rounded-md bg-[#c9bde5] shadow-sm"
          >
            <span className="text-[20px] font-medium leading-[1.5] text-black">
              Send Reset Code
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
