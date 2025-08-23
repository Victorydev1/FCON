import React from 'react'
import Image from 'next/image'
import { Target } from "lucide-react";

const About = () => {
  return (
    <>
        <section className='bg-orange-100 pt-20 px-38'>
            <div className='flex'>
                <h1 className='text-5xl font-normal text-black'>FOCN is a renowned women empowerment pageant brand</h1>
                <p className='leading-tighter tracking-wide text-lg text-black pt-15'>It was established with a primary objective to provide young women with a platform to shine, excel, and make a positive impact without compromising their values or integrity.</p>
            </div>
            <button className="bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-3 py-px relative left-148 rounded-md shadow hover:opacity-90 transition">
            Contact us
            </button>

            <Image 
            src="/about/about.png"
            alt='about'
            width={1150}
            height={384}
            className='w-[1350px] h-[384px] mt-10 object-cover rounded-4xl' />            
        </section>

        <section className='bg-gray-200'>
            <div className='flex'>
                <div>
                    <Image 
                    src="/about/woman.png"
                    alt='woman'
                    width={558}
                    height={496}
                    // className='w-[758px] h-[496px]'
                    />
                </div>
                <div className='text-black'>
                    <h1 className='text-3xl font-bold'>Founder’s Note</h1>
                    <p className='font-normal text-2xl'>It is through this celebration that we hope to inspire a generation to fearlessly pursue their dreams...</p>
                    <p>Welcome to the extraordinary world of Face of Congeniality Nigeria 2023 edition, where we embark on a transformative journey of self-discovery and the pursuit of life's purpose. Our theme for this year's pageant is "ZOE," a celebration of the boundless possibilities that lie within each of us.
                    ZOE, a Greek word meaning "life," encapsulates the essence of our pageant's purpose. It represents the vibrant energy, the hidden talents, and the untapped potential that resides within every participants. We believe that true beauty radiates from the alignment of one's passions, dreams, and sense of purpose.</p>

                    <button className="bg-gradient-to-r from-[#62061D] to-[#F89A20] text-white px-3 py-px relative left-148 rounded-md shadow hover:opacity-90 transition">
                    Read more
                    </button>
                </div>
            </div>
        </section>

        <section className='bg-white p-12'>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-orange-200 rounded-3xl shadow-lg p-8 text-black">
            <div className="mb-4 text-orange-800">
                <Target className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <div className="w-16 h-[3px] bg-red-700 mb-6"></div>
            <p className="text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quisLorem ipsum dolor sit amet, consectetur
                adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-sm leading-relaxed">
                Ipsum dolor sit amet, consectetur adipiscing elit, ipsum dolor sit
                amet, consectetur adipiscing elit.
            </p>
            </div>

            <div className="bg-orange-200 rounded-3xl shadow-lg p-8 text-black">
            <div className="mb-4 text-orange-800">
                <Target className="w-10 h-10" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <div className="w-16 h-[3px] bg-red-700 mb-6"></div>
            <p className="text-sm leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quisLorem ipsum dolor sit amet, consectetur
                adipiscing elit, ipsum dolor sit amet, consectetur adipiscing elit.
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