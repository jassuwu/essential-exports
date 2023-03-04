import Image from 'next/image'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';
import { useEffect, useState } from 'react';

const images = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png"
  ]

const props = {
    indicators: false,
    scale: 1.2,
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    pauseOnHover: false,
    prevArrow: (
        <div className='ml-5'>
            <Image src='/images/left.svg' alt='left' width={10} height={10} className="w-auto h-auto"></Image>
        </div>
    ),
    nextArrow: (
        <div className='mr-5'>
            <Image src='/images/right.svg' alt='left' width={10} height={10}  className="w-auto h-auto"></Image>
        </div>
    )
};
 

const Slideshow = () => {
  const slides:any = [];
  const len = images.length
  
  const [count, setCount] = useState(4)
  
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth<640) {
        setCount(1)
      }
      else if(window.innerWidth<768) {
        setCount(2)
      }
      else if(window.innerWidth<1024) {
        setCount(3)
      }
      else {
        setCount(4)
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },[]);

  for (let i = 0; i < len; i++) {
    let slideImages = []
    for (let j = 0; j < count; j++) {
        slideImages.push(images[(i + j)%len])  
    }
    
    slides.push(
      <div className="flex justify-evenly items-center" key={i} id="slides">
        {slideImages.map((location, index) => (
          <Image src={location} alt={`Image ${index}`} key={i + index} width={250} height={350} className='md:p-3 w-[60%] sm:w-1/3 md:w-1/4 lg:w-1/5 h-auto object-cover'/>
        ))}
      </div>
    );
  }

  return (
    <div className=''>
      <Fade {...props}>
        {slides}
      </Fade>
    </div>
  )
}

export default Slideshow

