import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import AudioCard from '../components/AudioCard';
// import KeyIdeaCard from '../components/KeyIdeaCard';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get(`/summary/${id}`)
      .then(res => {
        setBook(res.data.summary);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching book details:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!book) return <div className="text-center py-10">Book not found</div>;

  return (
    <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 p-4">
          <Link to="/" className="text-[#716b80] text-base font-medium leading-normal">Home</Link>
          <span className="text-[#716b80] text-base font-medium leading-normal">/</span>
          <span className="text-[#141316] text-base font-medium leading-normal">{book.title}</span>
        </div>

        {/* Cover & title */}
        <div className="flex p-4">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl min-h-32 w-32"
                style={{ backgroundImage: `url("${book.coverImage?.path}")` }}
              ></div>
              <div className="flex flex-col items-center justify-center">
                <p className="text-[#141316] text-[22px] font-bold leading-tight text-center">{book.title}</p>
                <p className="text-[#716b80] text-base font-normal leading-normal text-center">{book.author}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="pb-3 px-4">
          <p className="text-[#141316] text-base font-normal leading-normal whitespace-pre-wrap">{book.content}</p>
        </div>

        {/* Audio */}
        {book.audio?.path && (
          <div className="px-4 py-3">
            <AudioCard
              title={book.title}
              author={book.author}
              image={book.coverImage?.path}
              audioSrc={book.audio?.path}
            />
          </div>
        )}

       

        {/* Buttons */}
        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f2f1f3] text-[#141316] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Download PDF</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f2f1f3] text-[#141316] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Download MP3</span>
            </button>
          </div>
        </div>

        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#c8bce5] text-[#141316] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Start Challenge</span>
            </button>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f2f1f3] text-[#141316] text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Add to Favorites</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
