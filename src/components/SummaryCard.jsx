import React from 'react';
import { Link } from 'react-router-dom';

const SummaryCard = ({ id, title, author, image }) => {
  return (
    <div className="flex items-stretch justify-between gap-4 rounded-xl">
      <div className="flex flex-[2_2_0px] flex-col gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[#6e6388] text-sm font-normal leading-normal">Book</p>
          <p className="text-[#131118] text-base font-bold leading-tight">{title}</p>
          <p className="text-[#6e6388] text-sm font-normal leading-normal">{author}</p>
        </div>
        <Link to={`/book/${id}`}>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 flex-row-reverse bg-[#f1f0f4] text-[#131118] text-sm font-medium leading-normal w-fit">
            <span className="truncate">View</span>
          </button>
        </Link>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
        style={{
          backgroundImage: image ? `url("${image}")` : 'url("https://via.placeholder.com/300x200?text=No+Image")',
        }}
      ></div>
    </div>
  );
};

export default SummaryCard;