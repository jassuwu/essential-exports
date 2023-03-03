import Image from 'next/image'
import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css';

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
            <Image src='/images/left.svg' alt='left' width={10} height={10}></Image>
        </div>
    ),
    nextArrow: (
        <div className='mr-5'>
            <Image src='/images/right.svg' alt='left' width={10} height={10}></Image>
        </div>
    )
};
 
const Slideshow = () => {
  const slides = [];
  const len = images.length
  
  for (let i = 0; i < len; i++) {
    let slideImages = []

    slideImages[0] = images[i];
    slideImages[1] = images[(i+1)%len];
    slideImages[2] = images[(i+2)%len];
    // slideImages[3] = images[(i+3)%len];

    slides.push(
      <div className="flex justify-evenly items-center" key={i} id="slides">
        {slideImages.map((location, index) => (
          <Image src={location} alt={`Image ${index}`} key={i + index} width={250} height={350} className='md:p-3 md:w-1/5 w-1/4 object-cover'/>
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

