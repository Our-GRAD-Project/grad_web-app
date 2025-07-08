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

      <p className="text-[#716b80] text-sm text-center py-3">Or continue with</p>

      <div className="flex justify-center gap-6 mb-6">
        <button onClick={() => window.location.href = 'https://graduationprojectapi-production-e29d.up.railway.app/api/v1/auth/google'} className="w-16 h-16 bg-[#f2f1f3] flex items-center justify-center hover:shadow-lg transition rounded">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google" className="w-8 h-8" />
        </button>
        <button onClick={() => window.location.href = 'https://graduationprojectapi-production-e29d.up.railway.app/api/v1/auth/facebook'} className="w-16 h-16 bg-[#f2f1f3] flex items-center justify-center hover:shadow-lg transition rounded">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="Facebook" className="w-8 h-8" />
        </button>
      </div>

      <p className="text-sm text-center">
        Already have an account? <Link to="/login" className="text-[#c9bce5] font-bold hover:underline">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
