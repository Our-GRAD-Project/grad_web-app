import React from 'react';

const ProgressBar = ({ percentage, label }) => {
  return (
    <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2 justify-between">
      <div className="flex flex-col justify-center">
        <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">{percentage}%</p>
        <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">{label}</p>
      </div>
      <div className="shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-[88px] overflow-hidden rounded-sm bg-[#dedce5]">
            <div className="h-1 rounded-full bg-[#131118]" style={{ width: `${percentage}%` }}></div>
          </div>
          <p className="text-[#131118] text-sm font-medium leading-normal">{percentage}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;