import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#f2f0f4] px-10 py-3">
      <div className="flex items-center gap-4 text-[#131118]">
        <Link to="/" className="flex items-center gap-4">
          <div className="size-4">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M44 11.2727C44 14.0109 39.8386 16.3957 33.69 17.6364C39.8386 18.877 44 21.2618 44 24C44 26.7382 39.8386 29.123 33.69 30.3636C39.8386 31.6043 44 33.9891 44 36.7273C44 40.7439 35.0457 44 24 44C12.9543 44 4 40.7439 4 36.7273C4 33.9891 8.16144 31.6043 14.31 30.3636C8.16144 29.123 4 26.7382 4 24C4 21.2618 8.16144 18.877 14.31 17.6364C8.16144 16.3957 4 14.0109 4 11.2727C4 7.25611 12.9543 4 24 4C35.0457 4 44 7.25611 44 11.2727Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <h2 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em]">Baseera</h2>
        </Link>
        <nav className="flex items-center gap-6 ml-6">
          <Link to="/" className="text-[#131118] text-sm font-medium leading-normal hover:text-[#c9bce5] transition-colors">Home</Link>
          <Link to="/my-library" className="text-[#131118] text-sm font-medium leading-normal hover:text-[#c9bce5] transition-colors">My Library</Link>
          <Link to="/my-summaries" className="text-[#131118] text-sm font-medium leading-normal hover:text-[#c9bce5] transition-colors">My Summaries</Link>
        </nav>
      </div>
      <div className="flex items-center gap-8">
        <Link to="/notifications">
          <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 bg-[#f2f0f4] text-[#131118] gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5">
            <div className="text-[#131118]" data-icon="Bell" data-size="20px" data-weight="regular">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
                ></path>
              </svg>
            </div>
          </button>
        </Link>
        <Link to="/profile">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
            style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZaauNVvnlDizQra6lwyJyKoaLnODOlqatYRLvbgo_mmg46N-JlQE7eKPshoMardBSMXpajAoW_NT2oEVclLHzB5LIa4eC8laap-cGwfBv_8otFGJhvk89xieQLwj5lLyZ37uvK1cepOffpEY5fQ20lfz9FfFp4cuUAlyqd0HI-TEhKKXVdDEJC8nw6l3OCEobDRfqvRgWijr9fCCkR6XQDVFz7fbNlcLqQEugj3f_RfxPPrNA9M3943NQ31RdZccd_8Reeb0OFF6M")' }}
          ></div>
        </Link>
      </div>
    </header>
  );
};

export default Header;