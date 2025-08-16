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

      <section className="flex flex-col md:flex-row w-full h-screen">
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
      </section>  

      <section className="bg-white">
        <span className="uppercase">Our Sponsors</span>
        <Image
        src="/green.png"
        alt="green"
        width={169.5}
        height={113}
        />
        <Image
        src="/nanas.png"
        alt="green"
        width={169.5}
        height={113}
        />
        <Image
        src="/green.png"
        alt="green"
        width={169.5}
        height={113}
        />
        <Image
        src="/nanas.png"
        alt="green"
        width={169.5}
        height={113}
        />
        <Image
        src="/nanas.png"
        alt="green"
        width={169.5}
        height={113}
        />
        <Image
        src="/green.png"
        alt="green"
        width={169.5}
        height={113}
        />
        <Image
        src="/nanas.png"
        alt="green"
        width={169.5}
        height={113}
        />
        <Image
        src="/green.png"
        alt="green"
        width={169.5}
        height={113}
        />
      </section>
    </div>
  );
}