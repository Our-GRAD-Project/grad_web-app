import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';
import books from '../data/books';

const ProfilePage = () => {
  const recentlyReadBooks = books.filter((book) =>
    ['the-power-of-habit', 'atomic-habits', 'sapiens'].includes(book.id)
  );

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex p-4 @container">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwXSW6_-oTh_edvhqw8Xjv1Z0px-LXq4INVNPBDv1n_cjDU6tWGcBhgvkO-1VF3kPWNFBKwOT0ppVFiVHoWOvoFXr_jhu8EZbd9aiCb5cxeAKj0R2duBRx2nIEYiWjbWEBD9YdmFAhGZTyeys3f2YN7zP2wK4m0R0I19e6cmNESOK4sGFtDeQSTay9DWHj_InJKlA_avze6FHNIYhtTEKgezFvCQBxY3-H8Zvqh8Z62fa0AOVBa4ANqmw9pzxhIQ-NMtl_ujE62cby")`,
                    }}
                  ></div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[#131118] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Fatima Al-Zahra</p>
                    <p className="text-[#6e6388] text-base font-normal leading-normal text-center">Joined in 2021</p>
                    <p className="text-[#6e6388] text-base font-normal leading-normal text-center">120 followers · 80 following</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#dfdce5] px-4 gap-8">
                <Link to="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-[#131118] text-[#131118] pb-[13px] pt-4">
                  <p className="text-[#131118] text-sm font-bold leading-normal tracking-[0.015em]">Reading History</p>
                </Link>
                <Link to="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#6e6388] pb-[13px] pt-4">
                  <p className="text-[#6e6388] text-sm font-bold leading-normal tracking-[0.015em]">Favorites</p>
                </Link>
                <Link to="#" className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#6e6388] pb-[13px] pt-4">
                  <p className="text-[#6e6388] text-sm font-bold leading-normal tracking-[0.015em]">Account</p>
                </Link>
              </div>
            </div>
            <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Recently Read</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
              {recentlyReadBooks.map((book) => (
                <BookCard key={book.id} title={book.title} author={book.author} image={book.image || 'https://via.placeholder.com/300x400?text=No+Image'} />
              ))}
            </div>
            <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Reading Goals</h3>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-[#131118] text-base font-medium leading-normal">Books Read This Month</p>
              </div>
              <div className="rounded bg-[#dfdce5]">
                <div className="h-2 rounded bg-[#131118]" style={{ width: '75%' }}></div>
              </div>
              <p className="text-[#6e6388] text-sm font-normal leading-normal">3 out of 4 books</p>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex gap-6 justify-between">
                <p className="text-[#131118] text-base font-medium leading-normal">Reading Streak</p>
              </div>
              <div className="rounded bg-[#dfdce5]">
                <div className="h-2 rounded bg-[#131118]" style={{ width: '50%' }}></div>
              </div>
              <p className="text-[#6e6388] text-sm font-normal leading-normal">5 days in a row</p>
            </div>
            <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Account Details</h3>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12" data-icon="Envelope">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">Email</p>
                <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">fatima.alzahra@email.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12" data-icon="Lock">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">Password</p>
                <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">********</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-10" data-icon="SignOut">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L196.69,120H104a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,221.66,122.34Z"
                  ></path>
                </svg>
              </div>
              <p className="text-[#131118] text-base font-normal leading-normal flex-1 truncate">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;