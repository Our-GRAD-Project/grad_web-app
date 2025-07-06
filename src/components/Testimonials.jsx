import React from 'react';

const testimonials = [
  {
    name: 'Clara Morgan',
    date: '2023-08-15',
    rating: 5,
    comment: 'Baseera has transformed my reading habits. I can now absorb key insights from books in a fraction of the time.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMaNCxepSEhumw03DRWexwsKs0jzzVo79ZuDvzm7cPYwVNEP0f9ZYrNwgBRFmvS8Y-BlYWq9qhZdF3ydote8-_4ty2jnalmstqMVpIr8SG0JdpmzN08Vsozrz6t1JNUnVM8BQIpVcJX4Wse1Teg8Ukp-NnoTvtoG12jc4GXxnOBzFlw4ueDta5LMNtcPMp1-x6Jn51uiC-OX86bGs7DXq726inO0LgNFOEuxSjpPGOGIAVfb3n76wvFlc3pWvmRnjl7U4NMQq8Gz1E',
  },
  {
    name: 'Liam Harper',
    date: '2023-09-22',
    rating: 4,
    comment: 'The summaries are well-written and concise, but I wish there were more books in my favorite categories.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD_ty_0H_AoydenhShPm1EVoKFylH_slBxLtIJTG3MZ5kPQYFKbRmLkTe0UehLq16trv46GG-LvYPr9Iy-oxnjwGZIB4fdoCIaHAGvVZd8cQfRzcTvzj2Vnfy2-erZk1dLYDrbVVNqYQH0beoqI3GdzK7XhMqwX6XJ1Rr7sTVv95C8AkKqXv5lZ2sRLEgNJUegRfNEf0doy3ExE-xKPrDHf2A8Xgcal0n5S6K6mYqnDhIbagtmxRGn19YYERcMk0cj7TX0Q1OWgw0bk',
  },
  {
    name: 'Ava Foster',
    date: '2023-11-10',
    rating: 5,
    comment: 'I love the spaced repetition feature! It helps me retain information much better than traditional reading.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDaxG-xKlfxRPlXyOXpk0AHCFs3JaAxW_olfrEw0OhtkN0Qn_0cW5iXiqTBob3qDDsOYQmdGZ7r2YeLD_1canSHHI3Un3jrrH7Cz0TgeqcKM2CKMnQ4gHdvvdGPzl9dg2OQI2v8JL0BDhEw-ZOw7-AhmhhVkTKHv8sBPnnElOOrg3dMS05ahbXSSOobfyGSGuUXIWUBuvliro3rf_cScT-7gmiUX8pFusNpmemRq_cUvM5qbeNvmY_H0hoHOQDKdPHSFZQNqL9aHDO6',
  },
];

const Testimonials = () => {
  return (
    <>
      <h2 className="text-[#141316] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Testimonials
      </h2>
      <div className="flex flex-col gap-8 overflow-x-hidden bg-white p-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col gap-3 bg-white">
            <div className="flex items-center gap-3">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                style={{ backgroundImage: `url("${testimonial.image}")` }}
              ></div>
              <div className="flex-1">
                <p className="text-[#141316] text-base font-medium leading-normal">{testimonial.name}</p>
                <p className="text-[#716b80] text-sm font-normal leading-normal">{testimonial.date}</p>
              </div>
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={i < testimonial.rating ? 'text-[#141316]' : 'text-[#c2bfca]'}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20px"
                    height="20px"
                    fill="currentColor"
                    viewBox="0 0 256 256"
                  >
                    <path
                      d={
                        i < testimonial.rating
                          ? 'M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z'
                          : 'M239.2,97.29a16,16,0,0,0-13.81-11L166,81.17,142.72,25.81h0a15.95,15.95,0,0,0-29.44,0L90.07,81.17,30.61,86.32a16,16,0,0,0-9.11,28.06L66.61,153.8,53.09,212.34a16,16,0,0,0,23.84,17.34l51-31,51.11,31a16,16,0,0,0,23.84-17.34l-13.51-58.6,45.1-39.36A16,16,0,0,0,239.2,97.29Zm-15.22,5-45.1,39.36a16,16,0,0,0-5.08,15.71L187.35,216v0l-51.07-31a15.9,15.9,0,0,0-16.54,0l-51,31h0L82.2,157.4a16,16,0,0,0-5.08-15.71L32,102.35a.37.37,0,0,1,0-.09l59.44-5.14a16,16,0,0,0,13.35-9.75L128,32.08l23.2,55.29a16,16,0,0,0,13.35,9.75L224,102.26S224,102.32,224,102.33Z'
                      }
                    ></path>
                  </svg>
                </div>
              ))}
            </div>
            <p className="text-[#141316] text-base font-normal leading-normal">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Testimonials;