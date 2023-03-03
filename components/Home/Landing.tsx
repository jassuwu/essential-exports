import Image from 'next/image'

const Landing = () => {
  return (
    <main id="landing-container" className="h-fit lg:p-0 md:p-10 sm:p-4">
      <section className="flex flex-col lg:flex-row lg:justify-around">
      <div id="landing-top" className="lg:flex"> 
        <div id="landing-text" className="text-white w-full">
            <div id="landing-head-text" className="w-full my-6 lg:my-12">
              <span className="font-anybody flex justify-around lg:justify-starts text-5xl md:text-7xl lg:text-9xl">
                ESSENTIAL 
              </span>
              <br/> 
              <span className="font-anybody flex justify-around lg:justify-start font-extralight tracking-widests text-5xl md:text-7xl lg:text-9xl">
                exports
              </span>
            </div>
            <div id="landing-sub-text" className="text-xl text-center md:text-start sm:text-2xl md:text-3xl lg:text-4xl w-full flex justify-around lg:justify-start font-inter my-6 lg:my-12">
              Briding the distance between
              <br/>
              markets.
            </div>
            <div id="landing-call-to-action" className="flex w-full my-6 lg:my-12 justify-around lg:justify-start">
              <a
              href="#"
              className="flex items-center h-12 px-6 font-medium tracking-wide text-white transition rounded border font-inter"
              >
                Get started 
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" fill="white"><path d="m702 755-43-42 106-106H120v-60h646L660 441l42-42 178 178-178 178Z"/></svg>
              </a>
            </div>
        </div>
        <div id="landing-images" className="text-white w-full z-10 lg:relative right-28 top-14 flex justify-around lg:justify-start lg:overflow-visible overflow-hidden" >
          <Image
          src="/landing.svg"
          alt='landing'
          width={700}
          height={700}
          className="select-none"
          />
        </div>
      </div>
      </section>
      <section id="landing-bottom" className="relative hidden md:block bottom-24 xl:bottom-36 lg:flex justify-around items-center h-[15rem] select-none overflow-hidden">
        <div id="landing-bottom-text" className="xl:hidden md:block hidden  2xl:text-[24rem] xl:text-[18rem] lg:text-[14rem] text-[10rem] tracking-widest text-dark drop-shadow-white whitespace-nowrap text-center">
          EXPORT
        </div>
        <div id="landing-bottom-text" className="hidden xl:block 2xl:text-[24rem] xl:text-[18rem] lg:text-[14rem] text-[10rem] tracking-widest text-dark drop-shadow-white whitespace-nowrap text-center">
          EXP RT
        </div>
      </section>
    </main>
  )
}
export default Landing