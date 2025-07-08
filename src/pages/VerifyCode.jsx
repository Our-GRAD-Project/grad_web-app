import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import Header from '../components/Header';

const VerifyCode = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullCode = code.join('');
    const resetToken = localStorage.getItem('resetToken');

    if (!resetToken) {
      setError('Reset token not found. Please try again.');
      return;
    }

    try {
      const res = await api.post('/auth/verify-code', {
        resetToken,
        resetCode: fullCode,
      });

      console.log('Verification successful:', res.data);

      navigate('/reset-password');
    } catch (err) {
      console.error('Verification failed:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Invalid code. Please try again.');
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* <Header /> */}

      <div className="w-full flex flex-col items-center justify-center flex-grow px-4 pt-10">
        <div className="w-full max-w-[560px] flex flex-col gap-6 items-center mt-[-150px]">
          <h2 className="text-[24px] font-semibold text-[#282828] text-center">
            Enter Verification Code
          </h2>

          <p className="w-full text-[16px] font-normal text-[#808080] text-center">
            We sent a verification code to your email. Please enter it below.
          </p>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <form onSubmit={handleSubmit} className="flex justify-center gap-4">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="flex h-14 w-12 text-center border-0 border-b border-[#ADD1EB] focus:outline-none focus:border-[#ADD1EB] text-base font-normal text-[#282828]"
              />
            ))}
          </form>

          <button
            onClick={handleSubmit}
            className="h-10 px-4 rounded-full bg-[#c9bde5] text-[#131118] text-sm font-bold leading-normal tracking-[0.015em] flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256">
              <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z" />
            </svg>
            <span>Submit</span>
          </button>
         
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
