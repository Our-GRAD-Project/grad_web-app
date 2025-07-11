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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/auth/signup', {
        userName: formData.fullName,
        email: formData.email,
        password: formData.password,
      });

      alert('Sign Up Successful!');

      const loginResponse = await api.post('/auth/signin', {
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem('token', loginResponse.data.token);
      
      navigate('/');
      window.scrollTo(0, 0);  
    } catch (error) {
      console.error('Sign Up/Login Error:', error);
      alert(error.response?.data?.message || 'Sign Up/Login Failed!');
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-white px-4">
      <h2 className="text-[#141316] text-[28px] font-bold text-center pb-3">Create your account</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">

        <label className="block text-[#373737] text-base font-medium">Name</label>
        <div className="flex items-center border h-12 px-3 hover:shadow-lg focus-within:shadow-lg transition rounded">
          <span className="mr-2">👤</span>
          <input
            name="fullName"
            placeholder="Full Name"
            className="flex-1 outline-none"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>

        <label className="block text-[#373737] text-base font-medium">Email</label>
        <div className="flex items-center border h-12 px-3 hover:shadow-lg focus-within:shadow-lg transition rounded">
          <span className="mr-2">📧</span>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="flex-1 outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <label className="block text-[#373737] text-base font-medium">Password</label>
        <div className="flex items-center border h-12 px-3 hover:shadow-lg focus-within:shadow-lg transition rounded">
          <span className="mr-2">🔒</span>
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="flex-1 outline-none"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="ml-2">
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>

        <label className="block text-[#373737] text-base font-medium">Confirm Password</label>
        <div className="flex items-center border h-12 px-3 hover:shadow-lg focus-within:shadow-lg transition rounded">
          <span className="mr-2">🔒</span>
          <input
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            className="flex-1 outline-none"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="ml-2">
            {showConfirmPassword ? '🙈' : '👁️'}
          </button>
        </div>

        <button type="submit" className="w-full bg-[#c9bce5] text-[#141316] font-bold py-3 hover:shadow-lg transition">Sign Up</button>
      </form>

      <p className="text-sm text-center pt-3">
        Already have an account? <Link to="/login" className="text-[#c9bce5] font-bold hover:underline">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
