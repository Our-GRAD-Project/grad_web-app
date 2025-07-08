import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
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
    <div className="flex flex-col min-h-screen justify-center items-center bg-white px-4">
      <h2 className="text-[#141316] text-[28px] font-bold text-center pb-3">Welcome back</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">

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

        <p className="text-[#716b80] text-sm text-center pt-1 hover:underline">
          <Link to="/forgot-password">Forgot password?</Link>
        </p>

        <button type="submit" className="w-full bg-[#c9bce5] text-[#141316] font-bold py-3 hover:shadow-lg transition">
          Log in
        </button>
      </form>

      <p className="text-sm text-center pt-3">
        Don't have an account? <Link to="/signup" className="text-[#c9bce5] font-bold hover:underline">Sign up</Link>
      </p>
    </div>
  );
};

export default Login;
