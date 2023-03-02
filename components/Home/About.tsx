import Image from 'next/image';

const About = () => {
  return (
    <section id='About'>
      
      <div className='container-fluid mx-auto px-[8rem] py-20 relative'>
        <Image src='/images/vector_top.svg' alt='Vector' width={1410} height={900}
        className='absolute -top-[10%] right-0 w-[75%] ' />
        <h2 className='text-6xl font-anybody'>
          Who Are We?
        </h2>
        <div className="grid  grid-cols-3 gap-[5%] relative">
          <div className='mt-[8rem] w-[75%] bg-casper col-span-1'>
            <Image
              src='/images/truck.jpg'
              alt='Truck'
              width={428}
              height={482}
              className='h-[28rem] object-cover drop-shadow-dark relative left-10 bottom-5'
            />
          </div>
          <div className='col-span-2 text-start my-auto'>
            <p className='text-2xl font-inter  font-extralight '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Mauris in aliquam sem fringilla ut morbi tincidunt augue. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. 
              Odio morbi quis commodo odio 
            </p>
            
          </div>
          <div>
            {/* linear-gradient(180deg, rgba(239,255,254,1) 1%, rgba(167,176,176,1) 30%, rgba(0,0,0,0) 65%) */}
            <div style={{background: "linear-gradient(189.49deg, #EFFFFE -43.98%, #A7B0B0 -9.06%, rgba(0, 0, 0, 0) 92.84%)"}} 
          className='w-[240px] h-[200px] rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[50%] blur-[2px] absolute bottom-0 right-0'>
            </div>
            <h2 className='text-5xl font-anybody rotate-90 absolute -bottom-10 -right-10 '>
              OUR VISION
            </h2>
          </div>
        </div>
        <div className="grid grid-rows-2">
          <div>
            <h2 className=' pl-5 text-4xl pt-[5%] font-inter font-medium'>Anean sed. Eget magna fermentum <br /> iaculis eu non diam </h2>
          </div>
          <div>
            <p className='text-2xl font-inter font-extralight max-w-2xl ml-[20rem]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris in aliquam sem fringilla ut morbi tincidunt augue. </p>
          </div>
        </div>
        <Image src='/images/vector_bottom.svg' alt='Vector' width={600} height={900}
        className='absolute -bottom-10 left-0' />

        
      </div>
                    
    </section>
  )
}

export default About