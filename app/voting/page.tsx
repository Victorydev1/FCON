import React from 'react'
import Image from 'next/image'

const Vote = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from[#F89A201A] to-orange-700 text-black px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/bag.png"
                  alt="Red Bag"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/woman.png"
                  alt="Fashion Model"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/cloth.png"
                  alt="Joggers"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/cap.png"
                  alt="White Cap"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
    
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-snug">
                Discover Exclusive <br />
                <span className="text-black/20">Fashion Collections</span> <br />
                for Every Style
              </h1>
              <p className="mt-6 text-base md:text-lg text-black max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>
    
              <div className="mt-8 flex items-center border-b border-black/50 max-w-sm">
                <span className="text-xl mr-2">🔍</span>
                <input
                  type="text"
                  placeholder="Search for your favourite"
                  className="w-full bg-transparent focus:outline-none py-2 text-black placeholder-black/70"
                />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Vote