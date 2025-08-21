import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A1451] text-white pt-12 px-6 sm:px-12 md:px-20 rounded-t-3xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="FOCN Logo"
              width={50}
              height={50}
            />
            <h2 className="text-lg font-bold">FOCN</h2>
          </div>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
          </p>
          <button className="mt-5 px-5 py-2 text-sm rounded-md bg-gradient-to-r from-[#62061D] to-[#F89A20] hover:opacity-90 transition shadow-md">
            Sponsor us →
          </button>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">QUICK LINKS</h3>
          <div className="flex flex-wrap gap-3">
            <a href="#" className="px-4 py-2 border border-gray-400 rounded-md text-sm hover:bg-white hover:text-[#0A1451] transition">About us</a>
            <a href="#" className="px-4 py-2 border border-gray-400 rounded-md text-sm hover:bg-white hover:text-[#0A1451] transition">Gallery</a>
            <Link href="#" className="px-4 py-2 border border-gray-400 rounded-md text-sm hover:bg-white hover:text-[#0A1451] transition">Voting</Link>
            <Link href="/shop" className="px-4 py-2 border border-gray-400 rounded-md text-sm hover:bg-white hover:text-[#0A1451] transition">Shop</Link>
            <a href="#" className="px-4 py-2 border border-gray-400 rounded-md text-sm hover:bg-white hover:text-[#0A1451] transition">Contact us</a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">GET IN TOUCH</h3>
          <div className="flex gap-4 mb-5">
            <a href="#" className="bg-[#F89A20] p-3 rounded-full hover:opacity-80 transition">
              <FaPhoneAlt className="text-white" />
            </a>
            <a href="#" className="bg-[#F89A20] p-3 rounded-full hover:opacity-80 transition">
              <FaEnvelope className="text-white" />
            </a>
            <a href="#" className="bg-[#F89A20] p-3 rounded-full hover:opacity-80 transition">
              <FaInstagram className="text-white" />
            </a>
          </div>
          <button className="px-5 py-2 text-sm rounded-md bg-gradient-to-r from-[#62061D] to-[#F89A20] hover:opacity-90 transition shadow-md">
            Join our community
          </button>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-3">
        <p>© 2023 Face of Congeniality Nigeria | 
          <a href="#" className="hover:text-white ml-1">Privacy Policy</a> | 
          <a href="#" className="hover:text-white ml-1">Cookie Policy</a> | 
          <a href="#" className="hover:text-white ml-1">Sitemap</a>
        </p>
        <p>
          Developed with ❤️ by 
          <a href="#" className="ml-1 text-white font-semibold">Talku Talku</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer