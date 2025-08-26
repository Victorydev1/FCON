"use client";

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Image from 'next/image'
import { Target } from "lucide-react";

const About = () => {
  return (
    <>
  <section className="bg-orange-100 py-20 px-6 md:px-38">
    <div className="flex flex-col md:flex-row">
      <h1 className="text-3xl md:text-5xl font-normal text-black">
        FOCN is a renowned women empowerment pageant brand
      </h1>
      <p className="leading-tight tracking-wide text-base md:text-lg text-black pt-6 md:pt-15">
        It was established with a primary objective to provide young women with
        a platform to shine, excel, and make a positive impact without
        compromising their values or integrity.
      </p>
    </div>
    <button className="bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-4 py-2 relative md:left-148 left-0 mt-6 md:mt-0 rounded-md shadow hover:opacity-90 transition">
      Contact us
    </button>

    <Image
      src="/about/about.png"
      alt="about"
      width={1150}
      height={384}
      className="w-full md:w-[1350px] h-[220px] md:h-[384px] mt-10 object-cover rounded-2xl md:rounded-4xl"
    />
  </section>

  <section>
    <div className="text-black bg-white px-6 md:px-40 pt-10">
      <div className="flex flex-col md:flex-row">
        <h1 className="text-2xl md:text-4xl font-bold">
          FOCN believes in promoting beauty <br className="hidden md:block" />
          that goes beyond physical <br className="hidden md:block" />
          appearance, emphasizing qualities <br className="hidden md:block" />
          such as{" "}
          <span className="text-orange-400">
            kindness, intelligence, talent, <br className="hidden md:block" /> and
            inner beauty.
          </span>
        </h1>
        <Image
          src="/about/arrow-up.png"
          alt="arrow"
          width={160}
          height={150}
          className="relative md:left-50 md:top-20 w-[120px] h-[100px] md:w-[160px] md:h-[140px] mt-6 md:mt-0"
        />
      </div>
      <div className="flex flex-col md:flex-row pb-20 md:pb-56">
        <p className="pl-0 md:pl-10 mt-6 text-sm md:text-base">
          We aim to redefine the standards of beauty pageants by <br />
          creating an inclusive and empowering environment for <br />
          participants. <br /> <br /> Through its pageant events, Face of
          Congeniality Nigeria offers <br /> young women the opportunity to
          showcase their unique talents, <br /> skills, and personalities. It
          encourages contestants to embrace <br /> their individuality,
          celebrate diversity, and contribute positively to <br /> society.
        </p>
        <p className="relative md:left-35 md:top-15 mt-6 md:mt-0 text-sm md:text-base">
          One of the core values of Face of Congeniality is to prioritize the{" "}
          <br />
          overall well-being and personal growth of its contestants. The <br />
          brand provides mentorship programs, workshops, and <br /> resources to
          help participants develop essential life skills, self- <br />
          confidence, and leadership abilities. <br /> <br /> Our aim is at the
          end of the experience, a participant who <br /> successfully went
          through all stages of our platform would be <br /> equipped with the
          right arsenals to continue on a journey of <br /> consistency, growth
          and purpose.
        </p>
      </div>
    </div>

     <div className="bg-red-200 h-auto md:h-[268px]">
      <div className="md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          className="w-full"
        >
          {["/about/look1.png", "/about/look2.png", "/about/look3.png"].map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image src={img} alt={`about-${idx}`} width={362} height={306} className="mx-auto" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:flex flex-row justify-center gap-6 relative bottom-20">
        <Image src="/about/look1.png" alt="about" width={362} height={306} />
        <Image src="/about/look2.png" alt="about" width={362} height={306} />
        <Image src="/about/look3.png" alt="about" width={362} height={306} />
      </div>
    </div>
  </section>

  <section className="bg-gray-200">
    <div className="flex flex-col md:flex-row px-6 md:px-56 py-10 md:py-20">
      <Image
        src="/about/woman.png"
        alt="woman"
        width={558}
        height={496}
        className="w-full md:w-[558px] h-[300px] md:h-[496px] object-cover"
      />
      <div className="text-black pt-6 md:pt-10 md:px-15">
        <h1 className="text-2xl md:text-4xl font-bold pb-4 md:pb-6">
          {`Founder’s Note`}
        </h1>
        <p className="font-bold text-xs md:text-sm pb-4">
          It is through this celebration that we hope to inspire a <br />{" "}
          generation to fearlessly pursue their dreams...
        </p>
        <p className="text-xs md:text-sm">
          {`Welcome to the extraordinary world of Face of Congeniality Nigeria 2023 edition, where we embark on a transformative journey of self-discovery and the pursuit of life's purpose. Our theme for this year's pageant is "ZOE," a celebration of the boundless possibilities that lie within each of us.
          ZOE, a Greek word meaning "life," encapsulates the essence of our pageant's purpose. It represents the vibrant energy, the hidden talents, and the untapped potential that resides within every participants. We believe that true beauty radiates from the alignment of one's passions, dreams, and sense of purpose.`}
        </p>

        <button className="bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-4 py-2 relative md:left-2 mt-6 md:mt-10 rounded-md shadow hover:opacity-90 transition">
          Read more
        </button>
      </div>
    </div>
  </section>

  <section className="bg-white p-6 md:p-12 pt-10 md:pt-20">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-orange-200 rounded-3xl shadow-lg p-6 md:p-8 text-black">
        <div className="mb-4 text-orange-800">
          <Target className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-2">Our Mission</h2>
        <div className="w-16 h-[3px] bg-red-700 mb-6"></div>
        <p className="text-sm leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing
          elit, ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-sm leading-relaxed">
          Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="bg-orange-200 rounded-3xl shadow-lg p-6 md:p-8 text-black">
        <div className="mb-4 text-orange-800">
          <Target className="w-8 h-8 md:w-10 md:h-10" />
        </div>
        <h2 className="text-xl md:text-2xl font-bold mb-2">Our Vision</h2>
        <div className="w-16 h-[3px] bg-red-700 mb-6"></div>
        <p className="text-sm leading-relaxed mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quisLorem ipsum dolor sit amet, consectetur adipiscing
          elit, ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className="text-sm leading-relaxed">
          Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
          amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  </section>
</>

  )
}

export default About