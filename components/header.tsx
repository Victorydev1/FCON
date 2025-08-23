"use client";
import React from 'react'
import { useState } from 'react';
import Image from "next/image"
import Link from 'next/link';


const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
    
      const navLinks = [
        { name: "About", href: "/about" },
        { name: "Gallery", href: "/gallery" },
        { name: "Voting", href: "/vote" },
        { name: "Shop", href: "/shop" },
      ];
  return (
    <nav className="w-full px-6 sm:px-35 py-4 flex bg-white items-center justify-between sticky top-0 z-50 shadow-md">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="logo"
          width={130}
          height={50}
          priority
        />
            </Link>
            <ul className="hidden md:flex gap-8 items-center font-medium text-black">
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
  )
}

export default Header