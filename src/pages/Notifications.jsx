import React from 'react';

const Notifications = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#131118] tracking-tight text-[32px] font-bold leading-tight min-w-72">Notifications</p>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-14 justify-between">
              <p className="text-[#131118] text-base font-normal leading-normal flex-1 truncate">Mark all as read</p>
              <div className="shrink-0">
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 px-4 bg-[#f2f0f4] text-[#131118] text-sm font-medium leading-normal w-fit">
                  <span className="truncate">Mark all</span>
                </button>
              </div>
            </div>
            <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Today</h3>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12" data-icon="BookOpen" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">Continue your progress on 'The Silent Observer'</p>
                <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">10:30 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12" data-icon="FileText" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">Daily Insight: 'The Silent Observer' - Chapter 3 Summary</p>
                <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">9:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12" data-icon="Quotes" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">
                  Motivational Quote: "The more that you read, the more things you will know. The more that you learn, the more places you'll go."
                </p>
                <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">8:00 AM</p>
              </div>
            </div>
            <h3 className="text-[#131118] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Yesterday</h3>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12" data-icon="Trophy" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M232,64H208V56a16,16,0,0,0-16-16H64A16,16,0,0,0,48,56v8H24A16,16,0,0,0,8,80V96a40,40,0,0,0,40,40h3.65A80.13,80.13,0,0,0,120,191.61V216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V191.58c31.94-3.23,58.44-25.64,68.08-55.58H208a40,40,0,0,0,40-40V80A16,16,0,0,0,232,64ZM48,120A24,24,0,0,1,24,96V80H48v32q0,4,.39,8Zm144-8.9c0,35.52-28.49,64.64-63.51,64.9H128a64,64,0,0,1-64-64V56H192ZM232,96a24,24,0,0,1-24,24h-.5a81.81,81.81,0,0,0,.5-8.9V80h24Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">You've completed the summary of 'The Silent Observer'! Well done!</p>
                <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">6:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12" data-icon="BookOpen" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">Reminder: Continue your progress on 'The Silent Observer'</p>
                <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">2:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12" data-icon="FileText" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">Daily Insight: 'The Silent Observer' - Chapter 2 Summary</p>
                <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">10:00 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2">
              <div className="text-[#131118] flex items-center justify-center rounded-lg bg-[#f2f0f4] shrink-0 size-12" data-icon="Quotes" data-size="24px" data-weight="regular">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M100,56H40A16,16,0,0,0,24,72v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,100,56Zm0,80H40V72h60ZM216,56H156a16,16,0,0,0-16,16v64a16,16,0,0,0,16,16h60v8a32,32,0,0,1-32,32,8,8,0,0,0,0,16,48.05,48.05,0,0,0,48-48V72A16,16,0,0,0,216,56Zm0,80H156V72h60Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-[#131118] text-base font-medium leading-normal line-clamp-1">Motivational Quote: "Reading is a discount ticket to everywhere."</p>
                <p className="text-[#6e6388] text-sm font-normal leading-normal line-clamp-2">8:00 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;