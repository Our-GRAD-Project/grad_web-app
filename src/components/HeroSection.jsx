import React from 'react';
import { Link } from 'react-router-dom';
import header from '../assets/header.png';

const HeroSection = () => {
  return (
    <div className="@container">
      <div className="@[480px]:p-4">
        <div className="relative flex min-h-[320px] sm:min-h-[480px] flex-col gap-6 @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4 overflow-hidden">
          <img
            src={header}
            alt="Hero Background"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)',
            }}
          ></div>
          <div className="relative z-10 flex flex-col gap-2 text-center">
            <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
              Read Less, Remember More with Baseera
            </h1>
            <p className="text-white text-sm font-normal leading-normal @[480px]:text-base">
              Summarized books + smart recall tools = knowledge that sticks
            </p>
          </div>
          <div className="relative z-10 flex-wrap gap-3 flex justify-center">
            <Link to="/my-library">
              <div className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#c5b8e4] text-[#141316] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base">
                <span className="truncate">Explore Books</span>
              </div>
            </Link>
            <Link to="/signup">
              <div className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#f2f1f3] text-[#141316] text-sm font-bold leading-normal tracking-[0.015em] h-10 px-4 @[480px]:h-12 @[480px]:px-5 @[480px]:text-base">
                <span className="truncate">Sign Up Free</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;