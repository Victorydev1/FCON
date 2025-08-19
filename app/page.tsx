"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Voting", href: "#" },
    { name: "Shop", href: "#" },
  ];

  return (
    <div className="font-sans text-gray-900">
      <nav className="w-full px-6 sm:px-35 py-4 flex bg-white items-center justify-between sticky top-0 z-50 shadow-md">
        <Image
          src="/logo.png"
          alt="logo"
          width={130}
          height={50}
          priority
        />
        <ul className="hidden md:flex gap-8 items-center font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-orange-500 transition">
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-5 py-2 rounded-md shadow hover:opacity-90 transition">
            CONTACT US
          </button>
        </ul>

        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setIsOpen(true)}
        >
          ☰
        </button>

        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              className="text-2xl text-red-600"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <ul className="flex flex-col gap-6 p-6 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-orange-500 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <button
              className="bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-5 py-2 rounded-md shadow hover:opacity-90 transition"
              onClick={() => setIsOpen(false)}
            >
              CONTACT US
            </button>
          </ul>
        </div>
      </nav>

      <section className="bg-white">
        <div className="flex flex-col md:flex-row w-full h-screen">
          <div className="flex flex-col justify-center items-start bg-white px-6 sm:px-10 md:px-20 lg:px-36 md:w-1/2 py-10 md:py-0">
            <span className="bg-orange-200 text-yellow-900 font-semibold px-4 py-2 rounded-md mb-4 sm:mb-6 text-xs sm:text-sm tracking-wide">
            FACE OF CONGENIALITY NIGERIA</span>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <h1 className="font-poppins text-black text-4xl md:text-5xl font-bold mb-8">Lorem</h1>
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-orange-400 mb-8">
                Ipsum Dolor
              </h1>
            </div>
            <h1 className="font-poppins text-black text-4xl md:text-5xl font-bold mb-8">Lorem Ipsum</h1>
            <p className="flex-wrap font-poppins font-normal text-base tracking-normal">Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> 
            <br />
            <button className="mt-8 inline-flex items-center gap-2 px-5 py-3 text-white text-sm sm:text-base font-medium 
              rounded-md bg-gradient-to-r from-[#62061D] to-[#F89A20] hover:opacity-90 transition shadow-md">Learn more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">    
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
          <div  className="relative w-full md:w-1/2 h-64 sm:h-[400px] md:h-screen">
            <Image 
            className="w-full h-full object-cover"
            src="/hero.png"
            alt="hero" 
            width={720}
            height={768}
            />
          </div>
        </div>
        <section className="bg-white pt-100 sm:py-14 md:py-20">
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-800 mb-8">
              OUR SPONSORS
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-10 place-items-center">
              {[...Array(8)].map((_, i) => (
                <Image
                  key={i}
                  src={i % 2 === 0 ? "/green.png" : "/nanas.png"}
                  alt="sponsor-logo"
                  width={170}
                  height={113}
                  className="transition-transform duration-300 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-orange-100 mt-16 md:mt-24 px-6 sm:px-12 md:px-20 py-12 rounded-2xl shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1 md:ml-16">
              <span className="text-yellow-900 font-semibold tracking-wide uppercase">About Fcon</span>
              <div className="flex gap-3 mt-2">
                <h3 className="font-poppins text-black text-3xl sm:text-4xl md:text-5xl font-bold">Lorem</h3>
                <h3 className="font-poppins text-black text-3xl sm:text-4xl md:text-5xl font-bold">Ipsum</h3>
              </div>
              <h3 className="font-poppins text-black text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-6">Lorem</h3>
              <button className="mt-6 inline-flex items-center gap-2 px-5 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-[#62061D] to-[#F89A20] hover:opacity-90 transition shadow-md">
                Sponsor Us
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">    
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>

            <p className="flex-1 text-black font-poppins text-sm sm:text-base md:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
            <Image 
              src="/sponsor1.png"
              alt="sponsor-img"
              width={350} height={300} 
              className="rounded-lg shadow-md" 
              />
            <Image src="/sponsor2.png"
             alt="sponsor-img" 
             width={440} height={1000} 
             className="rounded-lg shadow-md md:translate-y-4" 
             />
            <Image
              src="/sponsor3.png" 
              alt="sponsor-img" 
              width={260} height={270} 
              className="rounded-lg shadow-md md:-translate-y-6" 
            />
          </div>
        </section>

        <section className="bg-gray-200 pt-20 px-6 sm:px-12 md:px-24 text-center">
          <div className="flex sm:flex-row justify-center items-center gap-4">
            <Image 
              src="/ellipse1.png" 
              alt="ellipse"
              width={104} height={77} />
            <h1 className="font-poppins text-black font-semibold text-xl sm:text-4xl md:text-5xl">What Inspired</h1>
            <div className="flex items-center gap-4">
              <h1 className="font-poppins text-black font-semibold text-xl sm:text-4xl md:text-5xl">FCON</h1>
              <Image 
               src="/ellipse2.png"
               alt="ellipse"
               width={104} height={77} />
            </div>
          </div>

          <p className="mt-6 text-black font-poppins text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <button className="mt-8 mb-10 inline-flex items-center gap-2 px-4 py-2 text-white text-sm sm:text-base rounded-lg bg-gradient-to-r from-[#62061D] to-[#F89A20] hover:opacity-90 transition shadow-md">
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">    
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </section>
      </section> 

      <section className="bg-white py-12 px-4 sm:px-8 md:px-20">

        <div className="flex flex-col md:flex-row md:items-center md:gap-6">
          <h1 className="font-poppins text-black font-bold text-2xl sm:text-3xl md:text-4xl">Hear from our Queens</h1>
          <Image
            src="/line.png"
            alt="line"
            width={5}
            height={0}
            className="hidden md:block"
          />
          <p className="text-black font-poppins text-sm sm:text-base md:text-lg leading-relaxed md:ml-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex </p>
        </div>
        <div className="flex justify-center md:justify-start mt-6">
          <button className="px-5 py-2 text-white text-sm sm:text-base rounded-md bg-gradient-to-r from-[#62061D] to-[#F89A20] hover:opacity-90 transition shadow-md">
            See Our Gallery
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <div className="border-2 border-gray-300 rounded-3xl p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/review.png"
                alt="review"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h1 className="font-semibold text-base">Jane Doe</h1>
                <span className="text-xs font-semibold text-gray-500">FOCN 2022</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
          </div>

          <div className="border-2 border-gray-300 rounded-3xl p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/review.png"
                alt="review"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h1 className="font-semibold text-base">Jane Doe</h1>
                <span className="text-xs font-semibold text-gray-500">FOCN 2022</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
          </div>

          <div className="border-2 border-gray-300 rounded-3xl p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/review.png"
                alt="review"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h1 className="font-semibold text-base">Jane Doe</h1>
                <span className="text-xs font-semibold text-gray-500">FOCN 2022</span>
              </div>
            </div>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
          </div>
        </div>

        {/* <div className="border-8 bg-gradient-to-r from-[#000D54] to-[#62061D] mx-40">
          <h1>Subscribe to Our newsletter</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doLorem ipsum dolor sit amet, consectetur a</p>
          <input className="bg-white rounded-2xl w-20 text-sm p-2 pl-5" type="text" placeholder="Your name" required/>
          <input className="bg-white rounded-3xl p-2 pl-5" type="email" placeholder="Your email" required />
        </div> */}
      </section>
    </div>
  );
};