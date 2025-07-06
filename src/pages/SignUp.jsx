import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/auth/signup', {
        userName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });
      console.log('Sign Up Success:', response.data);
      alert('Sign Up Successful!');
      navigate('/login');
    } catch (error) {
      console.error('Sign Up Error:', error);
      alert(error.response?.data?.message || 'Sign Up Failed!');
    }
  };

  const handleGoogleSignIn = () => {
    window.location.href = 'https://graduationprojectapi-production-e29d.up.railway.app/api/v1/auth/google';
  };

  const handleFacebookSignIn = () => {
    window.location.href = 'https://graduationprojectapi-production-e29d.up.railway.app/api/v1/auth/facebook';
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-full max-w-[512px] py-5 flex-1">
            <h2 className="text-[#141316] text-[28px] font-bold text-center pb-3 pt-5">Create your account</h2>

            <form onSubmit={handleSubmit}>
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 ml-auto mr-4">
                <input
                  name="fullName"
                  placeholder="Full Name"
                  className="form-input flex w-full rounded-xl bg-[#f2f1f3] h-14 p-4 text-base"
                  value={formData.fullName}
                  onChange={handleChange}
                />
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 ml-auto mr-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="form-input flex w-full rounded-xl bg-[#f2f1f3] h-14 p-4 text-base"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 ml-auto mr-4">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="form-input flex w-full rounded-xl bg-[#f2f1f3] h-14 p-4 text-base"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3 ml-auto mr-4">
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="form-input flex w-full rounded-xl bg-[#f2f1f3] h-14 p-4 text-base"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>

              <div className="flex max-w-[480px] px-4 py-3 ml-auto mr-4">
                <button
                  type="submit"
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-full h-12 px-5 flex-1 bg-[#c9bce5] text-[#141316] text-base font-bold"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <p className="text-[#716b80] text-sm text-center py-3">Or continue with</p>

            <div className="flex justify-center px-4 py-3">
              <div className="flex flex-row gap-3 max-w-[480px]">
                <button
                  className="flex items-center justify-center rounded-full h-10 px-4 bg-[#f2f1f3] text-[#141316] text-sm font-bold"
                  onClick={handleGoogleSignIn}
                >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.25v2.84C3.36 20.02 7.31 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.25C1.04 9.26.5 11.6.5 14s.54 4.74 1.75 6.93l3.59-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.31 1 3.36 3.98 2.25 7.07l3.59 2.84c.82-2.46 3.05-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google
                </button>

                <button
                  className="flex items-center justify-center rounded-full h-10 px-4 bg-[#f2f1f3] text-[#141316] text-sm font-bold"
                  onClick={handleFacebookSignIn}
                >
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.98h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.77l-.44 2.9h-2.33v6.98C18.34 21.13 22 16.99 22 12z"
                      fill="#3B5998"
                    />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>

            <p className="text-[#716b80] text-sm text-center underline py-3">
              Already have an account? <Link to="/login" className="text-[#716b80] underline">Log in</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
