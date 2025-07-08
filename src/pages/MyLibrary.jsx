// src/pages/MyLibrary.jsx
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const MyLibrary = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchSummaries = async () => {
      try {
        const res = await api.get('/summary/');
        let summaries = res.data.summaries || [];

        const desiredCount = 14;
        let allBooks = [];
        while (allBooks.length < desiredCount && summaries.length > 0) {
          const randomBook = summaries[Math.floor(Math.random() * summaries.length)];
          allBooks.push(randomBook);
        }

        setBooks(allBooks);
      } catch (error) {
        console.error('Error fetching summaries:', error);
      }
    };

    fetchSummaries();
  }, []);

  return (
    <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#131118] tracking-tight text-[32px] font-bold leading-tight min-w-72">
            My Library
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {books.map((book, index) => (
            <Link
              to={`/book/${book._id}`}
              key={index}
              className="flex flex-col items-stretch justify-between gap-2 rounded-xl"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-xl"
                style={{
                  backgroundImage: `url("${book.coverImage?.path || 'https://via.placeholder.com/150'}")`,
                }}
              ></div>
              <div className="flex flex-col gap-1">
                <p className="text-[#141316] text-sm font-bold leading-tight">{book.title}</p>
                <p className="text-[#716b80] text-xs font-normal leading-normal">{book.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;
