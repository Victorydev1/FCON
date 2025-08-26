"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image"
import { Slider } from "@heroui/slider"

const products = [
  { id: 1, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
  { id: 2, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
  { id: 3, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
  { id: 4, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
  { id: 5, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
  { id: 6, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
]

const arrivals = [
  { id: 1, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
  { id: 2, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
  { id: 3, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
  { id: 4, name: "Joggers", price: 5000, image: "/Shop/joggers.png", rating: 5 },
]

export default function Shop() {
   
  return (
    <section>
      <div className="bg-[url('/Shop/bg.png')] bg-cover">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            <div className="hidden md:grid grid-cols-2 gap-4">
              <Image 
                src="/Shop/bag.png" 
                alt="fashion" 
                width={258} 
                height={277} 
                className="rounded-2xl object-cover max-w-6xl max-h-52 relative top-6 md:top-10"
              />
              <Image 
                src="/Shop/woman.png" 
                alt="fashion" 
                width={258} 
                height={277} 
                className="rounded-2xl object-cover w-11/12 h-4/5 relative top-24 md:top-48"
              />
              <Image 
                src="/Shop/cloth.png" 
                alt="fashion" 
                width={258} 
                height={277} 
                className="rounded-2xl object-cover w-full h-full relative bottom-4 md:bottom-6"
              />
              <Image 
                src="/Shop/cap.png" 
                alt="fashion" 
                width={258} 
                height={146} 
                className="rounded-2xl object-cover w-full max-h-xl relative top-20 md:top-36"
              />
            </div>

            <div className="text-center md:text-left px-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl md:relative right-56 font-bold text-black leading-snug">
                Discover Exclusive <br/>
                <span className="text-yellow-500">Fashion Collections</span><br/>
                for Every Style
              </h1>

              <p className="mt-6 text-black text-sm sm:text-base max-w-xl mx-auto md:mx-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <div className="mt-8 flex border-b border-black/50 max-w-full sm:max-w-sm mx-auto md:mx-0">
                <span className="mr-2">🔍</span>
                <input 
                  placeholder="Search for your favourite" 
                  className="w-full bg-transparent py-2 focus:outline-none text-black"
                />
              </div>
            </div>

          </div>
      </div>
      
      <div className="relative bg-white text-black px-6 sm:px-12 md:px-20 lg:px-40 pt-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-0">New Arrivals</h1>
          <div className="flex gap-2 md:gap-4">
            <button className="border-2 w-8 h-8 rounded-full">←</button>
            <button className="border-2 bg-yellow-400 text-white w-8 h-8 rounded-full">→</button>
          </div>
        </div>
        <div className="flex gap-6 overflow-x-auto md:overflow-visible mt-6">
          {arrivals.map(a=>(
            <div key={a.id} className="min-w-[250px] w-72 bg-white text-black rounded-t-3xl overflow-hidden flex-none">
              <Image
               src={a.image}
               alt={a.name} 
               width={300} 
               height={300} 
               className="w-full h-72 object-cover"/>
              <div className="p-4 flex justify-between rounded-t-3xl relative bottom-6 bg-white items-center">
                <div>
                  <h3 className="font-semibold">{a.name}</h3>
                  <p className="text-orange-500 font-bold">₦{a.price}</p>
                </div>
                <button className="bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-5 py-2 rounded-md shadow hover:opacity-90 transition"> + </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="px-6 sm:px-10 md:px-20 lg:px-38 py-10">
        <div>
          <h1 className="text-black text-2xl sm:text-3xl font-bold mb-4 text-center">Lorem Ipsum Lorem ipsum</h1>
          <p className="text-black text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna a</p>
          <div className="text-black relative top-40 invisible md:visible">
            <h1 className="font-semibold text-xl">Price</h1>
            <Slider
              className="max-w-md"
              defaultValue={[100, 500]}
              formatOptions={{style: "currency", currency: "USD"}}
              maxValue={1000}
              minValue={0}
              step={50}
            />
            <div>
              <h1 className="font-semibold text-xl">Catergory</h1>
                <input type="checkbox"/>
                <label>Catergory 1</label>
                <br />
                <input type="checkbox"/>
                <label>Catergory 2</label>
                <br />
                <input type="checkbox"/>
                <label>Catergory 3</label>
                <br />
                <input type="checkbox"/>
                <label>Catergory 4</label>
                <br />
                <input type="checkbox"/>
                <label>Catergory 5</label>
            </div>

            <div className="text-black">
              <h1 className="font-semibold text-xl">Product Tags</h1>
              <div className="flex gap-6">
                <span className="border-2 border-black-300 rounded-lg px-2">Tag 1</span>
                <span className="border-2 border-black-300 rounded-lg px-2">Tag 2</span>
                <span className="border-2 border-black-300 rounded-lg px-2">Tag 3</span>
              </div>
              <br />
              <span className="border-2 border-black-300 rounded-lg p-1 mt-4">Tag 4</span>
              <span className="border-2 border-black-300 rounded-lg p-1 mt-10 ml-6">Tag 5</span>
            </div>
          </div>
          
          <div className="relative bottom-46 mt-8 md:mt-px">
            <div className="flex justify-end mb-4">
              <div className="bg-gray-300 px-2 py-1 text-black rounded">Sort by:</div>
            </div>
            <div>
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
          {products.map((p) => (
            <SwiperSlide key={p.id}>
              <div className="w-72 text-black border-2 border-gray-300 rounded-3xl pb-px mx-auto mt-8">
                <Image
                  src={p.image}
                  alt={p.name}
                  width={300}
                  height={300}
                  className="w-full h-72 object-cover rounded-t-3xl"
                />
                <div className="p-4 flex-col sm:flex-row sm:justify-between rounded-b-3xl bg-white items-start sm:items-center">
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-orange-500 font-bold">₦{p.price}</p>
                  </div>
                  <button className="mt-3 sm:mt-0 bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-6 py-2 rounded-md shadow hover:opacity-90 transition">
                    Add to cart
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:ml-60">
        {products.map((p) => (
          <div
            key={p.id}
            className="w-72 text-black border-2 border-gray-300 rounded-3xl pb-px mt-8"
          >
            <Image
              src={p.image}
              alt={p.name}
              width={300}
              height={300}
              className="w-full h-72 object-cover rounded-t-3xl"
            />
            <div className="p-4 flex-col sm:flex-row sm:justify-between rounded-b-3xl bg-white items-start sm:items-center">
              <div>
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-orange-500 font-bold">₦{p.price}</p>
              </div>
              <button className="mt-3 sm:mt-0 bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-6 py-2 rounded-md shadow hover:opacity-90 transition">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
      
            <div className="flex justify-center md:justify-start md:ml-180 mt-8 gap-3">
              {[1, 2, 3].map((n) => (
                <button
                  key={n}
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition
                    ${n === 1 
                      ? "bg-orange-500 text-white" 
                      : "text-black border-2 border-gray-600 hover:bg-gray-200"}`}
                >
                  {n}
                </button>
              ))}
            </div>

          </div>
        </div>
      </main>
    </section>
  )
}
