import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/signin', formData);
      console.log('Login Success:', response.data);
      localStorage.setItem('token', response.data.token);
      alert('Login Successful!');
      navigate('/');
    } catch (error) {
      console.error('Login Error:', error);
      alert(error.response?.data?.message || 'Login Failed!');
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[512px] py-5 flex-1">
            <h2 className="text-[#141316] text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">Welcome back</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141316] focus:outline-0 focus:ring-0 border-none bg-[#f2f1f3] focus:border-none h-14 placeholder:text-[#716b80] p-4 text-base font-normal leading-normal"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
                <label className="flex flex-col min-w-40 flex-1">
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#141316] focus:outline-0 focus:ring-0 border-none bg-[#f2f1f3] focus:border-none h-14 placeholder:text-[#716b80] p-4 text-base font-normal leading-normal"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <p className="text-[#716b80] text-sm font-normal leading-normal pb-3 pt-1 px-4 underline">
                <Link to="/forgot-password" className="text-[#716b80] underline">Forgot password?</Link>
              </p>
              <div className="flex px-4 py-3">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[455px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 flex-1 bg-[#c9bce5] text-[#141316] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">Log in</span>
                </button>
              </div>
            </form>
            <p className="text-[#716b80] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
              Don't have an account? <Link to="/signup" className="text-[#716b80] underline">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;