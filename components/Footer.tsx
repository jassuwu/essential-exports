import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='bg-footer-dark mt-16 h-80'>
      <div className='flex justify-evenly mx-auto'>
        <div className='mt-8'>
          <Image src='/images/logo_white.png' alt='logo' width={50} height={50}></Image>
        </div>
        <div className='mt-8 font-inter'>
          <h4 className='text-xl mb-3'>Overview</h4>
          <p>Home</p>
          <p>Culture</p>
          <p>Products</p>
          <p>Enquiry</p>
          <p>Contact</p>
        </div>
        <div className='mt-8 font-inter'>
            <h4 className='text-xl mb-3'>Responsibility</h4>
            <p>Community</p>
            <p>Ethical Sourcing</p>
            <p>Environment</p>
            <p>Diversity</p>
        </div>
        <div className='mt-8 font-inter'>
          <h4 className='text-xl mb-3'>SOCIAL MEDIA</h4>
          <div className='flex justify-evenly'>
            <a href="#" className='inline-block w-10 h-10'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#" className='inline-block w-6 h-6'><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className='inline-block w-10 h-10'><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-20'>
        <hr className='w-4/5'></hr>
      </div>
    </div>
  )
}

export default Footer