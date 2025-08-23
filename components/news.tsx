import React from 'react'
import Image from 'next/image'

const News = () => {
  return (
    <section className="bg-gradient-to-r from-[#1b1a55] to-[#62061D] rounded-4xl my-10 sm:my-16 md:my-20 mx-4 sm:mx-10 md:mx-20 lg:mx-38 px-6 sm:px-10 md:px-16 py-8 flex flex-col md:flex-row items-center gap-10">
  <div className="flex-1 text-center md:text-left">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
      Subscribe to <br /> our <span className="text-[#F89A20]">newsletter</span>
    </h2>
    <p className="text-gray-200 mt-4 text-sm sm:text-base md:pr-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>

    <form className="mt-6 flex flex-col sm:flex-row items-center gap-3">
      <input
        type="text"
        placeholder="Your name"
        className="px-4 py-3 rounded-full text-black text-sm sm:text-base flex-1 w-full outline-none border border-gray-300 bg-white"
      />
      <input
        type="email"
        placeholder="Your email"
        className="px-4 py-3 rounded-full text-sm text-black sm:text-base flex-1 w-full outline-none border border-gray-300 bg-white"
      />
      <button
        type="submit"
        className="bg-[#F89A20] p-3 sm:p-4 rounded-full flex items-center justify-center hover:opacity-90 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954 8.955c.44.439 1.2.127 1.2-.488V15.75h7.596a.75.75 0 00.75-.75V9a.75.75 0 00-.75-.75H12.404V3.533c0-.615-.76-.927-1.2-.488L2.25 12z"
          />
        </svg>
      </button>
    </form>
  </div>

  <div className="flex-1 flex justify-center md:justify-end">
    <Image
      src="/newletter.png" 
      alt="Newsletter"
      width={400}
      height={400}
      className="object-contain hidden md:block"
    />
  </div>
</section>

  )
}

export default News