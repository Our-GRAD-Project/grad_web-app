import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const ProfilePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/summary')
      .then(res => {
        const randomBooks = res.data.summaries.sort(() => 0.5 - Math.random()).slice(0, 3);
        setBooks(randomBooks);
      })
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

            {/* Profile Header */}
            <div className="flex p-4">
              <div className="flex w-full flex-col gap-4 items-center">
                <div className="flex gap-4 flex-col items-center">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                    style={{
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwXSW6_-oTh_edvhqw8Xjv1Z0px-LXq4INVNPBDv1n_cjDU6tWGcBhgvkO-1VF3kPWNFBKwOT0ppVFiVHoWOvoFXr_jhu8EZbd9aiCb5cxeAKj0R2duBRx2nIEYiWjbWEBD9YdmFAhGZTyeys3f2YN7zP2wK4m0R0I19e6cmNESOK4sGFtDeQSTay9DWHj_InJKlA_avze6FHNIYhtTEKgezFvCQBxY3-H8Zvqh8Z62fa0AOVBa4ANqmw9pzxhIQ-NMtl_ujE62cby")`
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

            {/* Tabs */}
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

            {/* My Books */}
            <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">My Books</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {books.map((book) => (
                <Link to={`/book/${book._id}`} key={book._id} className="flex flex-col gap-2">
                  <div
                    className="bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${book.coverImage?.path || ''}")` }}
                  ></div>
                  <p className="text-[#141316] text-base font-bold leading-tight truncate">{book.title}</p>
                  <p className="text-[#716b80] text-sm font-normal leading-normal truncate">{book.author}</p>
                </Link>
              ))}
            </div>

            {/* Reading Goals */}
            <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Reading Goals</h3>
            <div className="flex flex-col gap-3 p-4">
              <p className="text-[#131118] text-base font-medium leading-normal">Books Read This Month</p>
              <div className="rounded bg-[#dfdce5]">
                <div className="h-2 rounded bg-[#131118]" style={{ width: '75%' }}></div>
              </div>
              <p className="text-[#6e6388] text-sm font-normal leading-normal">3 out of 4 books</p>
            </div>

            <div className="flex flex-col gap-3 p-4">
              <p className="text-[#131118] text-base font-medium leading-normal">Reading Streak</p>
              <div className="rounded bg-[#dfdce5]">
                <div className="h-2 rounded bg-[#131118]" style={{ width: '50%' }}></div>
              </div>
              <p className="text-[#6e6388] text-sm font-normal leading-normal">5 days in a row</p>
            </div>

            {/* Account Details */}
            <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Account Details</h3>
            <div className="flex flex-col gap-3 p-4">
              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
                <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12">
                  ✉️
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#131118] text-base font-medium leading-normal">Email</p>
                  <p className="text-[#6e6388] text-sm font-normal leading-normal">fatima.alzahra@email.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
                <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12">
                  🔒
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#131118] text-base font-medium leading-normal">Password</p>
                  <p className="text-[#6e6388] text-sm font-normal leading-normal">********</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white px-4 min-h-14">
                <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-10">
                  🚪
                </div>
                <p className="text-[#131118] text-base font-normal leading-normal flex-1 truncate">Logout</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
