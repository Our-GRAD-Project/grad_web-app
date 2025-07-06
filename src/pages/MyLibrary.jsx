import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../components/BookCard';

const books = [
  {
    id: 'the-power-of-habit',
    title: 'The Power of Habit',
    author: 'Charles Duhigg',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCF6hXB_JM_P_sdatonbAqKsLz-dBXBzpNFKEPdVAEvUW0tCvn_Fu3E6pXDZPg-2FIj-DPWnkm02bJ9ZlGhilrfcaizX_oZG8boEMMVmyWoqoGtcRUD9dae-jNsLTr-cdl3At9IJbg-kbaNQ5NS22moiBiWPVf9LPKsPnZy_vrHIwrwDwbSkjsCvI_aEJuOj3N4VikJqHdxuQxhvnBOISuWJGWPADFAh_8RtU4tCPXkmEOZAAtRTSIJH3gzK_aSSngCEQhxJpX8j89v',
  },
  {
    id: 'atomic-habits',
    title: 'Atomic Habits',
    author: 'James Clear',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBPmbKL1_FV7oTi5o-OyWZE4lXT2SEaUOpSRofI2mMHIjOifYsNPaRiAtx9DWxWnG0q4lcmTMsLCwpLg9DR2gjHfoC0X07FBM-vYpvnyYpI4AEpsDSUl2vqNonEMLRhonxr79Bmt_dgRI0_-Hl4ko5Yo8MddokDCvcvJwA-DqvnzX5DJ-OU3rSj9ZtyFPjk089nzq_ooSOoanE5ITyAW4riZgy9wbBf9Hs9P3Ad2_09oa-VIdwhPaFs_8gnfbulvL8hUXyHNSFgPyyi',
  },
  {
    id: 'the-7-habits',
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen Covey',
    image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD2BUgeyvfYqOBA0traIG1aYrHFdRVu3IUx5Or49XZY07_78yruVbZdqsu3AisIir7LcS_4a7U04k9kUkvzpdtVewrhzCoYb6I0dfq3_4Ctj0cXKIlkqdncoJXC87H7HvcXv8f6sqDOOc3b52IaXADOAD9oRyxGNZ_pbKFs6esYgvetsgyhlBgqvFLsBc11GmL6o3fVIS9tvB7_e89CgzZ411qtx-woQdXjNqSRXx9ep4P-BfjTcML4_o7OQClFV-E9qQishnK5Pe6O',  },
  {
    id: 'mindset',
    title: 'Mindset',
    author: 'Carol Dweck',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCDcA_75X2TepCZXh7_b6ZcEW5GGB7zWTfpCzaz9OBS31Gmeh2E2mYqaKfkL3KQO5YAZnDZnv0elfQBSqh1dyLq7cZiDpsV_LQRbNKbVxyEJAPP2ADhiU3e2H-3dxIziC-0mwUb9fIR9m7M1A3AkVrZbGoQ2WqdDxPWNRAB0o8-WqFk03BVugxQuc3670xiSEmYpdNoJ8LiFdbyaFZC0QuY2voDbPBSx-t_-E7Y16rmWM6fkj8tv9H8OeLujF8g-zI3mpQT_8__eFe9',
  },
  {
    id: 'thinking-fast-and-slow',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7EN6Njfw_cadGmhZeOdKWywJAh9KxybXAJU9Ir0s53dH2-DWsqm_dzPQPBXvNLsymxsdOnea12M-gtMOF_KtwpFwzfYvDpyaOO-S-b-ogme33c1NXtOD47Kk_OANd1nOSZKNrCibEIuDL8CyWLBzphJ2MmKqey5kOhxoUS75asevPU1flpMRX0oA-ltepNlcoqws9-3R57YJy4HugxdJyLtdfy9TlKYFf7_g5psaixq1Eh18qjbROO8HBcK4Ml_RDa_okzOmgynr4',
  },
  {
    id: 'sapiens',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBx9_0yiWqqFe0RRdDoGDyxXRw4TaRH8uofDzvjCwXA2eURv1f5b1OXI23yp5Qy-QXs7j5QL6ahD3U9UzjRdImJwOtL9Lj2g8bcychOn65OofzjBlndGJMCYXMQwyUg2jZH8ezRY1Y1GhIYVboSqbiuSUSdqeqo8yxsye12eRFl2WNSoZtgGELgAWaPpPRsJiGWetwS2C6X0MEHbX_xUlOUseqCdZ7fwhddocq0-lILw8WEjDHFZ9Ibi-KQXWwQZU5CFyYU7De2S1-Y',
  },
  {
    id: 'the-lean-startup',
    title: 'The Lean Startup',
    author: 'Eric Ries',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAcIpvJov0kk_oJ0K7p3mg6ya-P5EF4rxXoQh1y88ze9dAmGKwjCE8gcbVIvDEQm8_Udk2MKcot3NnRqxoP1T6JaKY78ft9FLEdEG3n-C-pgrNXprPh8N9ISue5ia7KdgQ1kFTfX4M1TiCN4RxB8mGD4pwZYCD88NyfTcMNSyAgNZEUyVV5eUH4vLoAbDxd7MS50lkQ5nex5lntNFvSDE-FT4hqRyB41HhLmf9jQfxpKLrKhxk0vpY5Uu-Mb05juYhGY0Scjl1iuuZb',
  },
  {
    id: 'zero-to-one',
    title: 'Zero to One',
    author: 'Peter Thiel',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDodwUEyg06gtvJggRF-X15WptLzCenIGdOrcYFPKW8qz_eLLfD1Xv8VEYvMptVSWRml10uWgWVcSKH6XPfVJbmr-XVGN3nPz_IMChUQRCd6WgWWKQR5pbJqSIVivG8KJlvVKlhM__rrOXJe9A88moDmjlzUepUVf3RTKBlJ6X20scylx-eAC-Ubqarrhngi469MNjYIVFc544gUkp9z1QMUy9_lZrl5ICgM-ois9oN52K802D8N8cc9_GIjZilXO-ATFbr7f1q1sX8',
  },
  {
    id: 'good-to-great',
    title: 'Good to Great',
    author: 'Jim Collins',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9btxtnvu8W64so5j758EO3aLm4971DMYFqVuWyWYXXgG4tvYxskB4sNcQ6cMD6HLOlAtIIYfknQmw-cCCxt67v5ppddLYbA0ufak1cfECOnRZAleAkgHV0SWF-CH1dNX3Lsxrzkxso8fpon--7R-7y-nxEoWdpOc3ctaFSq37Vpd_t-2s63iyIWCt0V3cdxpZPX1ZCHoOv6eo3cZknhQJMgCJVYnd331sj5vKQoaMqrn9mk-BVabhWRaXqxmNMeo6dZCQZOjKnKmb',
  },
  {
    id: 'the-innovators-dilemma',
    title: 'The Innovator’s Dilemma',
    author: 'Clayton Christensen',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDquv3DK4Imljqy-bejRO0Bv9ENRolDN43d2HsGYyYI0Oti8Gx31pClcq5IXtRMVydK9p0_-9Smf32-KJ4SQT57yYSD3pADNNdYuqS1oLSVgHuxhQXCQp5eiILhd2SC7-DZKiqQtlh9WbLgadGRlVMZljH87Ui5Tqhblt6hx-TdhtZu6KBtzCSq4nWXoW_9lsH9KX9JAfdtUpmvUzb6HgmIloCkZVjvakh_NwQhpsS7EQikdKKiwgN0x3Ygao6foGCbC7OyomS8rWfS',
  },
  {
    id: 'the-hard-thing',
    title: 'The Hard Thing About Hard Things',
    author: 'Ben Horowitz',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCgapvyuoz-TcfA8JhhC7uw2ZXdFoowoUxlHQJHIFoR_xyKq2qMG9w4_2apxLGQztdNG-Fb7Xa5rvzugePl_mdIAHlr9fXovGDnZsbr8UO5bS0N7OmtlVU7j_1ZjBp47d9Wbqfg6pVeBViU4idXW2ljzoR79tsSR2pR52Bh_aTUUmkT0cmOLOkCBHOVdw525R3Gi6D0n29OrrVmCJNUZD8KAt2pQfIrXdmwW6qjFkbvx7TeQ4-7zVKC8yC8sBJt5U4I019VNG9JTiyc',
  },
  {
    id: 'measure-what-matters',
    title: 'Measure What Matters',
    author: 'John Doerr',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCL5bM8OuGROp3EbnzIe9-griW0BVivw9mgwaFFPPUMDG-odtTriLbtf_ARLalXdRgqWXworeRjJ7VKLwjWo__vQOi7s77jIh6veMfe71OtMCrwgsprDaxSm63mBDdpY5nKUkIOZI3wGcGrBVwgTDbSZYIBYS891fE7iCUs0VcRl1txdwkrxgcBmpvwXIo8ujpSpdUcI-9d1FWS4hkZpbE5Wf504FSR3nETbTUFmSVzyLK00AVwiNK3Cw1cG8TkLjfKWDsUhx66Dqfo',
  },
];

const MyLibrary = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap justify-between gap-3 p-4">
          <p className="text-[#131118] tracking-tight text-[32px] font-bold leading-tight min-w-72">My Library</p>
        </div>
        <div className="px-4 py-3">
          <label className="flex flex-col min-w-40 h-12 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
              <div className="text-[#6e6388] flex border-none bg-[#f1f0f4] items-center justify-center pl-4 rounded-l-xl border-r-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                  ></path>
                </svg>
              </div>
              <input
                placeholder="Search for books"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131118] focus:outline-0 focus:ring-0 border-none bg-[#f1f0f4] focus:border-none h-full placeholder:text-[#6e6388] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              />
            </div>
          </label>
        </div>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {['Category', 'Length', 'Difficulty'].map((filter, index) => (
            <button key={index} className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-[#f1f0f4] pl-4 pr-2">
              <p className="text-[#131118] text-sm font-medium leading-normal">{filter}</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {books.map((book) => (
            <Link to={`/book/${book.id}`} key={book.id}>
              <BookCard title={book.title} author={book.author} image={book.image} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyLibrary;