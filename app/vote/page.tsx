import React from 'react'
import Image from 'next/image'

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
    <div>
      <div className="flex flex-col md:flex-row w-full bg-gradient-to-r from-orange-200 to-pink-200 p-6 md:p-12 text-center">
        <div className="flex flex-col sm:px-10 md:px-20 md:w-1/2 py-10 md:py-0">
          <div className="pt-20 flex flex-wrap gap-2 sm:gap-3">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tighter tracking-wide">
              Cast Your Vote for <br />
              <span className="text-orange-600">the Face of Congeniality 2023</span>
            </h1>
            <p className="mt-4 text-gray-700 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis.
            </p>
            <br />
            <Image 
              src="/arrow.png"
              alt='arrow'
              width={91.06}
              height={91.06}
              className='ml-25 md:justify-center px-6 py-3 list-item md:hidden' />
          </div>
          <div className="md:flex-row items-center">
            <div className="relative left-190 bottom-96 w-[623px] h-[477px]">
              <Image
                src="/vote.png"
                alt="Jane Doe"
                width={950}
                height={560}
                className="w-full h-full hidden md:list-item object-cover"
              />
            </div>
          </div>
        </div>
      </div>


      <section className="w-full py-12 px-6 md:px-12">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Lorem Ipsum Lorem Ipsum
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {candidates.map((c) => (
            <div
              key={c.id}
              className="bg-white shadow-md rounded-xl p-4 flex flex-col items-center"
            >
              <Image
                src={c.image}
                alt={c.name}
                width={264.16}
                height={156.09}
                className="rounded-lg w-full h-48 object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
              <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet</p>
              <p className="mt-2 font-bold">{c.votes} Votes</p>
              <button className="mt-4 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition">
                Buy Votes
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Vote