import React from 'react';
import SummaryCard from '../components/SummaryCard';
import ProgressBar from '../components/ProgressBar';
import books from '../data/books';

const MySummaries = () => {
  const completedBooks = books.filter((book) =>
    ['the-power-of-habit', 'atomic-habits', 'sapiens'].includes(book.id)
  );

  return (
    <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#131118] tracking-tight text-[32px] font-bold leading-tight min-w-72">My Summaries</p>
        </div>
        <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Completed</h3>
        {completedBooks.map((book) => (
          <div key={book.id}>
            <div className="p-4">
              <SummaryCard id={book.id} title={book.title} author={book.author} image={book.image} />
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