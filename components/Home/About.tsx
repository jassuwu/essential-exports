import Image from 'next/image';

const About = () => {
  return (
    <section id='About'>

      {/* <Image src='/images/vector_top.svg' alt='Vector' width={1410} height={900}
        className='absolute top-16 right-0 w-[70%] invisible md:visible ' /> */}
      <div className='px-5  md:container md:mx-auto py-20 relative'>
        <h2 className=' text-2xl md:text-4xl lg:text-5xl font-anybody'>
          Who Are We?
        </h2>
        <div className="grid  grid-cols-3 gap-5 relative ">
          <div className='w-2/3 mt-[3rem]  bg-casper col-span-1 hidden md:grid rounded-xl'>
            <Image
              src='/images/truck_crop.png'
              alt='Truck'
              width={428}
              height={482}
              className='w-full h-auto object-cover drop-shadow-dark relative left-3 bottom-3  rounded-xl'
            />
          </div>
          <div className='col-span-3 md:col-span-2 text-start my-auto'>
            <p className='text-sm sm:text-base md:text-xl lg:text-2xl font-inter  font-light md:font-extralight pl-3 md:pl-0'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Mauris in aliquam sem fringilla ut morbi tincidunt augue. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus.
              Odio morbi quis commodo odio
            </p>

          </div>

          <div>
            <div style={{ background: "linear-gradient(189.49deg, #EFFFFE 0%, #A7B0B0 20%, rgba(0, 0, 0, 0)90%)" }}
              className='w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[150px] lg:h-[150px]  xl:w-[200px] xl:h-[200px]  rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[50%] blur-[5px] sm:blur-[10px] absolute right-0 -bottom-28 sm:-bottom-28  sm:right-20 lg:right-22 xl:right-72'>
            </div>
            <h2 className='text-base sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-anybody rotate-90 absolute -bottom-28 right-1 sm:-bottom-32 sm:right-16 xl:right-60'>
              OUR VISION
            </h2>
          </div>
        </div>
        <div className="flex flex-col w-[70%] mt-8">
          <div>
            <h2 className=' text-sm sm:text-lg md:text-2xl pt-[5%] font-inter font-medium'>Anean sed. Eget magna fermentum  iaculis eu non diam </h2>
          </div>
          <div>
            <p className='text-sm sm:text-base md:text-lg  lg:text-2xl font-inter font-extralight max-w-2xl ml-0 md:ml-0 lg:ml-16 mt-3 md:mt-10 pl-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. </p>
          </div>
        </div>
        {/* <Image src='/images/vector_bottom.svg' alt='Vector' width={600} height={900}
          className='absolute -bottom-10 left-0' /> */}
      </div>

    </section>
  )
}

export default About