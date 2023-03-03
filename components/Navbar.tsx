import { useState } from 'react';
import Image from 'next/image'

interface SVGProps {
  fill?: string;
  height?: number;
  width?: number;
}

const ExpandMoreSVG = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 96 960 960"
    {...props}
  >
    <path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z" />
  </svg>
);

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="lg:flex justify-around p-8 font-poppins">
      <div id="logo-burg" className='flex justify-between'>
      <div id="logo">
      <svg width="50" height="50" viewBox="0 0 58 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.2683 -0.000106812L27.2683 43.5461H-7.62939e-06V42.1986H20.7202H23.4145C23.4145 42.1986 21.5255 41.2369 20.9874 39.606C20.4493 37.9752 20.3314 22.6621 20.3314 22.6621L7.58303 22.6621V21.9774V21.4224L20.3314 21.4224L20.3314 1.56281H0.291588V-0.000106812H27.2683Z" fill="white"/>
<path d="M30.4556 43.5461V-6.10352e-05H57.7239V1.34746H37.0037H34.3094C34.3094 1.34746 36.1984 2.30915 36.7365 3.93999C37.2745 5.57083 37.3924 20.8839 37.3924 20.8839H50.1408V21.5686V22.1236H37.3924V41.9832H57.4323V43.5461H30.4556Z" fill="white"/>
</svg>
      </div>
      {/* Hamburger icon */}
      <div id="hamburger" className='lg:hidden'>
          <div className='flex items-center w-full h-full'>
            <button
            onClick={(e) =>{
              e.preventDefault();
              setHamburgerOpen(!hamburgerOpen);
            }}
            className='w-full h-full flex items-center justify-center'
            >
          <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 96 960 960" width="50" fill='white' ><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg>
            </button>
          </div>
      </div>
      </div>
      {/* Dropdown */}
      <div id="nav-links">
        <ul id='nav-links-ul' className={`lg:flex flex-col lg:flex-row justify-between items-end lg:items-center md:gap-12 lg:gap-16 h-full ${hamburgerOpen? `flex border border-gray-700 p-2 rounded-lg gap-8 `: `hidden `}`}>
          <li className='uppercase text-lg  md:text-xl  xl:text-2xl relative group font-normal md:font-light'><a href='#'>Home</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
          <li className='uppercase text-lg  md:text-xl  xl:text-2xl relative group font-normal md:font-light'><a href='#'>Culture</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
          <li className='uppercase text-lg  md:text-xl  xl:text-2xl relative group font-normal md:font-light'><a href='#'>Products</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
          <li className='uppercase text-lg  md:text-xl  xl:text-2xl relative group font-normal md:font-light'><a href='#'>Enquiry</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
          <li className='uppercase text-lg  md:text-xl  xl:text-2xl relative group font-normal md:font-light'><a href='#'>Contact</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
        </ul>
      </div>
      {/* Language and Dark Mode, hidden for now. */}
      <div id="language" className='flex gap-4 mt-8 lg:mt-0'>
      {/* <div id="language" className='hidden'> */}
        <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className="border border-gray-300 rounded-full px-5 h-full w-full text-xl"
        >
          <div className='flex items-center w-full h-full'>
          EN
          <ExpandMoreSVG fill="#fff" height={20} width={20}/>
          </div>
        </button>
        {/* Dropdown */}
        <div className={`w-20 ${isOpen? `absolute block top-16 mt-1`: `hidden`}`}>
          <ul className="border border-white rounded-2xl w-full text-center overflow-hidden">
            <li className='bg-dark border-b border-b-gray-400 h-full text-lg '><button onClick={(e)=> e.preventDefault()}>EN</button></li>
            <li className='bg-dark border-b border-b-gray-400 h-full text-lg '><button onClick={(e)=> e.preventDefault()}>IN</button></li>
          </ul>
        </div>
        <button
        onClick={(e) => {
          e.preventDefault();
          setDarkMode(!darkMode);
        }}
        className="border border-gray-300 rounded-full px-5 h-full w-full text-xl"
        >
          {/* Might have to change to Materical icons later. */}
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
