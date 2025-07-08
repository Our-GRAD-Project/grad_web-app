import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';
import { BookOpen, Headphones } from 'lucide-react';

const FeaturedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/summary')
      .then(res => {
        const summaries = res.data.summaries.slice(0, 5);
        setBooks(summaries);
      })
      .catch(err => console.error('Error fetching featured books:', err));
  }, []);

  const getRandomAction = () => {
    return Math.random() < 0.5
      ? { action: 'Read', icon: <BookOpen className="w-5 h-5 text-[#c8bce5]" /> }
      : { action: 'Listen', icon: <Headphones className="w-5 h-5 text-[#c8bce5]" /> };
  };

  return (
    <>
      <h2 className="text-[#141316] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Featured Books
      </h2>

      <div className="p-4 space-y-6">
        {books.map((book, index) => {
          const randomAction = getRandomAction();

          return (
            <Link
              to={`/book/${book._id}`}
              key={index}
              className="flex flex-col sm:flex-row items-stretch justify-between gap-4 rounded-xl"
            >
              <div className="flex flex-[2_2_0px] flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-[#141316] text-base font-bold leading-tight">{book.title}</p>
                  <p className="text-[#716b80] text-sm font-normal leading-normal">{book.description}</p>
                  <div className="pt-2 flex items-center gap-2">
                    {randomAction.icon}
                    <span className="text-[#716b80] text-sm">{randomAction.action}</span>
                  </div>
                </div>
              </div>

              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
                style={{ backgroundImage: `url("${book.coverImage?.path || ''}")` }}
              ></div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default FeaturedBooks;
