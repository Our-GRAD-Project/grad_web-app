import React, { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';
import jsPDF from 'jspdf';

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    const marginLeft = 10;
    const marginTop = 20;
    const lineHeight = 8;
    const maxLineWidth = 180;
  
    doc.setFontSize(16);
    doc.text(book.title || 'Book Summary', marginLeft, marginTop);
  
    doc.setFontSize(12);
    const lines = doc.splitTextToSize(book.content || '', maxLineWidth);
  
    let currentY = marginTop + 10;
    lines.forEach(line => {
      if (currentY > 280) {  
        doc.addPage();
        currentY = marginTop;
      }
      doc.text(line, marginLeft, currentY);
      currentY += lineHeight;
    });
  
    doc.save(`${book.title || 'summary'}.pdf`);
  };
  
  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!book) return <div className="text-center py-10">Book not found</div>;

  return (
    <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">

        {/* Breadcrumb */}
        <div className="flex flex-wrap gap-2 p-4">
          <Link to="/" className="text-[#716b80] text-base font-medium">Home</Link>
          <span className="text-[#716b80] text-base font-medium">/</span>
          <span className="text-[#141316] text-base font-medium">{book.title}</span>
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
                <p className="text-[#141316] text-[22px] font-bold text-center">{book.title}</p>
                <p className="text-[#716b80] text-base text-center">{book.author}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="pb-3 px-4">
          <p className="text-[#141316] text-base leading-normal whitespace-pre-wrap">{book.content}</p>
        </div>

        {/* Nice quote */}
        <div className="text-center text-[#6e6388] italic py-3 animate-pulse">
          “A book is a dream you hold in your hands.” 🌟
        </div>

        {/* Audio */}
        {book.audio?.path && (
  <div className="p-4">
    <div className="flex flex-col gap-3 rounded-xl bg-[#f2f1f3] px-4 py-3">
      <div className="flex items-center gap-4 overflow-hidden">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
          style={{ backgroundImage: `url("${book.coverImage?.path}")` }}
        ></div>

        <div className="flex-1">
          <p className="text-[#141316] text-base font-bold leading-tight truncate">{book.title}</p>
          <p className="text-[#716b80] text-sm font-normal leading-normal truncate">{book.author}</p>
        </div>

        <button
          onClick={toggleAudio}
          className="flex shrink-0 items-center justify-center rounded-full size-10 bg-[#c8bce5] text-[#141316]"
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
            </svg>
          )}
        </button>

        <audio ref={audioRef} src={book.audio.path} />
      </div>
    </div>
  </div>
)}


        {/* Buttons */}
        <div className="flex justify-center">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center justify-center rounded-full bg-[#c8bce5] px-4 py-2 text-[#141316] font-bold"
          >
            Download PDF 📄
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
