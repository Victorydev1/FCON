"use client"
import Image from "next/image"
import { useRef } from "react"
import ProductCard from "./productCard"

const products = [
  { id: 1, name: "Joggers", price: 5000, image: "/joggers.png", rating: 5 },
  { id: 2, name: "Joggers", price: 5000, image: "/joggers.png", rating: 5 },
  { id: 3, name: "Joggers", price: 5000, image: "/joggers.png", rating: 5 },
  { id: 4, name: "Joggers", price: 5000, image: "/joggers.png", rating: 5 },
  { id: 5, name: "Joggers", price: 5000, image: "/joggers.png", rating: 5 },
  { id: 6, name: "Joggers", price: 5000, image: "/joggers.png", rating: 5 },
]

export default function Shop() {
  const slider = useRef<HTMLDivElement>(null)

  const move = (dir: "left" | "right") => {
    if (!slider.current) return
    const amount = slider.current.clientWidth
    slider.current.scrollBy({ 
      left: dir === "left" ? -amount : amount, 
      behavior: "smooth" 
    })
  }

  return (
    <section>
      <div className="w-full bg-gradient-to-br from-[#F89A201A] to-orange-700 px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {["/bag.png","/woman.png","/cloth.png","/cap.png"].map((img,i)=>(
              <Image key={i} src={img} alt="fashion" width={300} height={300} className="rounded-2xl object-cover w-full h-full"/>
            ))}
          </div>
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Discover Exclusive <br/>
              <span className="text-black/30">Fashion Collections</span><br/>for Every Style
            </h1>
            <p className="mt-6 text-black/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            <div className="mt-8 flex border-b border-black/50 max-w-sm">
              <span className="mr-2">🔍</span>
              <input placeholder="Search for your favourite" className="w-full bg-transparent py-2 focus:outline-none"/>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-white text-black px-40 pt-20">
        <h1 className="text-3xl font-bold ">New Arrivals</h1>
        <button onClick={()=>move("left")} className="-translate-y-1/2 bg-orange-500 w-10 rounded-full">←</button>
        <button onClick={()=>move("right")} className="-translate-y-1/2 bg-orange-500 w-10 rounded-full">→</button>
        <div ref={slider} className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide">
          {products.map(p=>(
            <div key={p.id} className="w-72 bg-white text-black rounded-xl overflow-hidden flex-none">
              <Image
               src={p.image}
               alt={p.name} 
               width={300} 
               height={300} 
               className="w-full h-72 object-cover"/>
              <div className="p-4 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-orange-500 font-bold">₦{p.price}</p>
                </div>
                <button className="w-8 h-8 bg-orange-400 rounded-md text-white">+</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <main className="px-6 py-10">
        <div className="flex justify-end mb-4">
          <div className="bg-gray-200 px-2 py-1 rounded">Sort by:</div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map(p=><ProductCard key={p.id} {...p} />)}
        </div>
        <div className="flex justify-center mt-8 gap-2">
          {[1,2,3].map(n=>(
            <button key={n} className={`w-8 h-8 rounded-full ${n===1?"bg-orange-500 text-white":"bg-white border"}`}>{n}</button>
          ))}
        </div>
      </main>
    </section>
  )
}
