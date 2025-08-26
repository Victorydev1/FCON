"use client";

import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

type Candidate = {
  id: number
  name: string
  image: string
  votes: number
}

const candidates: Candidate[] = [
  { id: 1, name: "Jane Doe", image: "/voter.png", votes: 320 },
  { id: 2, name: "Jane Doe", image: "/voter.png", votes: 309 },
  { id: 3, name: "Jane Doe", image: "/voter.png", votes: 315 },
  { id: 4, name: "Jane Doe", image: "/voter.png", votes: 299 },
  { id: 5, name: "Jane Doe", image: "/voter.png", votes: 333 },
  { id: 6, name: "Jane Doe", image: "/voter.png", votes: 312 },
  { id: 7, name: "Jane Doe", image: "/voter.png", votes: 300 },
  { id: 8, name: "Jane Doe", image: "/voter.png", votes: 187 },
]

const Vote = () => {  

  return (
    <>
  <div className="bg-[url('/back.png')] bg-cover relative">
    <div className="px-6 sm:px-10 md:px-20 py-12 md:py-20">
      <div className="pt-12 md:pt-20 px-2 md:px-15 gap-2 sm:gap-3">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-left text-gray-900 leading-tight tracking-wide">
          Cast Your Vote for <br /> the
          <span className="text-yellow-400">
            Face of <br /> Congeniality 2023
          </span>
        </h1>
        <br />
        <div className="flex flex-col sm:flex-row gap-4">
          <Image
            src="/Voting/spiral.svg"
            alt="spiral"
            width={55.71}
            height={108.93}
            className="mx-auto sm:mx-0"
          />
          <p className="mt-2 sm:mt-4 text-gray-700 text-sm md:text-base text-left">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
            do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
            Ut enim ad <br /> minim veniam, quis.
          </p>
        </div>
        <br />
        <Image
          src="/Voting/arrow.png"
          alt="arrow"
          width={120}
          height={91.06}
          className="mx-auto md:ml-25 md:justify-center px-6 list-item"
        />
      </div>

      <Image
        src="/vote.png"
        alt="Jane Doe"
        width={623}
        height={477}
        className="hidden md:block absolute right-6 md:left-190 bottom-0 md:bottom-15"
      />
    </div>
  </div>

  <section className="py-12 text-black px-6 md:px-12 bg-white">
    <h2 className="text-center text-2xl md:text-3xl font-bold mb-4">
      Lorem Ipsum Lorem Ipsum
    </h2>
    <p className="text-center text-sm md:text-base max-w-2xl mx-auto mb-8">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna a
    </p>

    <div>
     <div className="sm:hidden"> {/* show only on mobile */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }} // auto-slide every 5s
        loop={true}
        className="w-full"
      >
        {candidates.map((c) => (
          <SwiperSlide key={c.id}>
            <div className="w-full sm:w-80 text-black border-2 border-gray-300 rounded-3xl pb-px mt-8 mx-auto">
              <Image
                src={c.image}
                alt={c.name}
                width={264.16}
                height={156.09}
                className="w-full h-72 object-cover rounded-t-3xl"
              />
              <div className="p-4 flex flex-col sm:flex-row sm:flex-wrap sm:justify-between rounded-b-3xl bg-white items-center">
                <h3 className="mt-2 sm:mt-4 text-base md:text-lg font-semibold text-center sm:text-left">
                  {c.name}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm text-center sm:text-left">
                  Lorem ipsum dolor sit amet
                </p>
                <p className="my-2 font-bold text-center bg-orange-300 rounded-md py-2 px-4 w-full sm:w-auto">
                  {c.votes} Votes
                </p>
                <button className="mt-3 sm:mt-0 bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-6 md:px-8 py-2 rounded-md shadow hover:opacity-90 transition">
                  Buy Votes
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {candidates.map((c) => (
      <div
        key={c.id}
        className="w-full sm:w-80 text-black border-2 border-gray-300 rounded-3xl pb-px mt-8 mx-auto"
      >
        <Image
          src={c.image}
          alt={c.name}
          width={264.16}
          height={156.09}
          className="w-full h-72 object-cover rounded-t-3xl"
        />
        <div className="p-4 flex sm:flex-row sm:flex-wrap sm:justify-between rounded-b-3xl bg-white items-center">
          <h3 className="mt-2 sm:mt-4 text-base md:text-lg font-semibold text-center sm:text-left">
            {c.name}
          </h3>
          <p className="text-gray-600 text-xs md:text-sm text-center sm:text-left">
            Lorem ipsum dolor sit amet
          </p>
          <p className="my-2 font-bold text-center bg-orange-300 rounded-md py-2 px-4">
            {c.votes} Votes
          </p>
          <button className="mt-3 sm:mt-0 bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-6 md:px-8 py-2 rounded-md shadow hover:opacity-90 transition">
            Buy Votes
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  </section>
</>

  )
}

export default Vote