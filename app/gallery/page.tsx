import Image from "next/image";

const Gallery = () => {
  return (
    <section className="">
      <div className="relative bg-[url('/bg.png')] bg-cover bg-center">
        <div className="absolute left-150 md:left-280 top-10 md:top-27">
          <Image src="/bg-purple.png" alt="bg purple" width={460} height={460} />
        </div>
        <div className="absolute bottom-20 md:bottom-115">
          <Image src="/bg-orange.png" alt="bg orange" width={460} height={460} />
        </div>
      
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">      
                  <div className="max-w-lg pt-35 text-left">
                    <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
                      Captured Beauty: <br /> A Glimpse into the FOCN&apos;s Journey
                    </h1>
                    <p className="text-black/80 mb-8">
                      Explore the captivating world of our beauty pageant through our
                      stunning gallery. Here, we showcase memorable moments and the
                      exceptional beauty of our queens. Lorem ipsum dolor sit amet,
                      consectetur adipiscing elit, sed do eiusmod.
                    </p>
                      <Image
                        src="/Voting/arrow.png"
                        alt="arrow"
                        width={196.09}
                        height={96.09} 
                        className="text-white w-6 h-6" />
                  </div>

                  <div className="relative hidden md:block">
                    <div className="relative w-[632px] h-[626px]">
                      <Image
                        src="/models.png"
                        alt="model"
                        fill
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
  );
}

export default Gallery