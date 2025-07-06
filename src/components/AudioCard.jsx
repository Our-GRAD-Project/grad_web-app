import React, { useRef } from 'react';

const AudioCard = ({ title, author, image, audioSrc }) => {
  const audioRef = useRef(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="flex flex-col gap-3 rounded-xl bg-[#f2f1f3] px-4 py-3">
      <div className="flex items-center gap-4 overflow-hidden">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14 shrink-0"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <div className="flex-1">
          <p className="text-[#141316] text-base font-bold leading-tight truncate">{title}</p>
          <p className="text-[#716b80] text-sm font-normal leading-normal truncate">{author}</p>
        </div>
        <button
          onClick={handlePlay}
          className="flex shrink-0 items-center justify-center rounded-full size-10 bg-[#c8bce5] text-[#141316]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
          </svg>
        </button>
        <audio ref={audioRef} src={audioSrc}></audio>
      </div>
    </div>
  );
};

export default AudioCard;
