import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-footer-dark mt-16'>
      <div className='md:flex-row flex flex-col justify-evenly mx-auto text-base md:text-xl'>
        <div className='mt-8 mx-auto'>
          <Image src='/images/logo_white.png' alt='logo' width={50} height={50} className='w-8 h-7'></Image>
        </div>
        <div className='mt-8 font-inter text-center mx-auto'>
          <h4 className='md:text-xl mb-3 font-bold'>Overview</h4>
          <p>Home</p>
          <p>Culture</p>
          <p>Products</p>
          <p>Enquiry</p>
          <p>Contact</p>
        </div>
        <div className='mt-8 font-inter text-center mx-auto'>
            <h4 className='md:text-xl mb-3 font-bold'>Responsibility</h4>
            <p>Community</p>
            <p>Ethical Sourcing</p>
            <p>Environment</p>
            <p>Diversity</p>
        </div>
        <div className='mt-8 font-inter md:w-40 text-center w-60 mx-auto'>
          <h4 className='md:text-xl mb-3 text-center font-bold'>Social Media</h4>
          <div className='flex justify-evenly'>
            <a href="#" className='inline-block w-10 h-10'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className='inline-block w-6 h-6'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className='inline-block w-10 h-10'><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
      <div className='p-6 flex justify-center'>
        <hr className='w-4/5'></hr>
      </div>
    </div>
  )
}

export default Footer