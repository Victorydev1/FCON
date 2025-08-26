import Image from "next/image";

const Gallery = () => {
  return (
    <>
  <section className="bg-[url('/back.png')] bg-cover">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6 md:px-0">
      <div className="max-w-lg pt-20 md:pt-35 text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
          Captured Beauty: <br /> A Glimpse into the FOCN&apos;s Journey
        </h1>
        <p className="text-sm md:text-base text-black/80 mb-8">
          Explore the captivating world of our beauty pageant through our
          stunning gallery. Here, we showcase memorable moments and the
          exceptional beauty of our queens. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod.
        </p>
        <Image
          src="/Voting/arrow.png"
          alt="arrow"
          width={120}
          height={91.06}
          className="px-2 md:px-6"
        />
      </div>

      <div className="relative hidden md:block">
        <div className="relative w-full md:w-[632px] h-[400px] md:h-[626px]">
          <Image src="/models.png" alt="model" fill />
        </div>
      </div>
    </div>
  </section>

  <section className="text-black bg-white py-12 md:py-20 px-6 md:px-40">
    <h1 className="text-2xl md:text-4xl font-bold mb-6">Our Past Queens</h1>
    <p className="mb-6 text-sm md:text-base">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor <br className="hidden md:block" /> incididunt ut labore et dolore
      magna a
    </p>

    <div className="flex flex-wrap gap-4 md:gap-6 mb-10">
      <button className="bg-yellow-300 text-white px-5 py-1 rounded-4xl">
        All Classes
      </button>
      <button className="border-2 border-gray-300 px-5 py-1 rounded-4xl text-sm">
        Class of 2022
      </button>
      <button className="border-2 border-gray-300 px-5 py-1 rounded-4xl text-sm">
        Class of 2021
      </button>
      <button className="border-2 border-gray-300 px-5 py-1 rounded-4xl text-sm">
        Class of 2020
      </button>
    </div>

    <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Image
        src="/Gallery/queen1.png"
        alt="sponsor-logo"
        width={273}
        height={368}
        className="transition-transform duration-300 hover:scale-105 w-full"
      />
      <Image
        src="/Gallery/queen2.png"
        alt="sponsor-logo"
        width={273}
        height={368}
        className="transition-transform duration-300 hover:scale-105 w-full"
      />
      <Image
        src="/Gallery/queen3.png"
        alt="sponsor-logo"
        width={273}
        height={368}
        className="transition-transform duration-300 hover:scale-105 w-full"
      />
      <Image
        src="/Gallery/queen4.png"
        alt="sponsor-logo"
        width={273}
        height={368}
        className="transition-transform duration-300 hover:scale-105 w-full"
      />
    </div>

    <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Image
        src="/Gallery/queen1.png"
        alt="sponsor-logo"
        width={273}
        height={368}
        className="transition-transform duration-300 hover:scale-105 w-full"
      />
      <Image
        src="/Gallery/queen2.png"
        alt="sponsor-logo"
        width={273}
        height={368}
        className="transition-transform duration-300 hover:scale-105 w-full"
      />
      <Image
        src="/Gallery/queen3.png"
        alt="sponsor-logo"
        width={273}
        height={368}
        className="transition-transform duration-300 hover:scale-105 w-full"
      />
      <Image
        src="/Gallery/queen4.png"
        alt="sponsor-logo"
        width={273}
        height={368}
        className="transition-transform duration-300 hover:scale-105 w-full"
      />
    </div>
  </section>
</>

  );
}

export default Gallery