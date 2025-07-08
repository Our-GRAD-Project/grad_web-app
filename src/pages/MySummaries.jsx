import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SummaryCard from '../components/SummaryCard';
import ProgressBar from '../components/ProgressBar';
import api from '../services/api';

const MySummaries = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    api.get('/summary')
      .then(res => {
        const summaries = res.data.summaries;
        const randomBooks = [];

        while (randomBooks.length < 5 && summaries.length > 0) {
          const randomBook = summaries[Math.floor(Math.random() * summaries.length)];
          if (!randomBooks.find(b => b._id === randomBook._id)) {
            randomBooks.push(randomBook);
          }
        }

        setBooks(randomBooks);
      })
      .catch(err => console.error('Error fetching summaries:', err));
  }, []);

  return (
    <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#131118] tracking-tight text-[32px] font-bold leading-tight min-w-72">
            My Summaries
          </p>
        </div>

        <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
          Completed
        </h3>

        {books.map((book) => (
          <div key={book._id} className="space-y-2">
            <div className="p-4">
              <SummaryCard
                id={book._id}
                title={book.title}
                author={book.author}
                image={book.coverImage?.path}
              />
            </div>

            <ProgressBar percentage={100} label="Reading" />
            <ProgressBar percentage={100} label="Listening" />
            <ProgressBar percentage={100} label="Challenges" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySummaries;
