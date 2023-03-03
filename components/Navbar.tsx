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
)

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <nav className="lg:flex justify-around p-8 font-poppins">
      <div id="logo">
        <Image
        src="/EE.svg"
        alt="logo"
        width={50}
        height={50}
        />
      </div>
      <div id="nav-links">
        <ul id='nav-links-ul' className='flex md:flex-col lg:flex-row justify-between items-center gap-16 h-full'>
          <li className='uppercase text-xl  xl:text-2xl relative group font-light'><a href='#'>Home</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
          <li className='uppercase text-xl  xl:text-2xl relative group font-light'><a href='#'>Culture</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
          <li className='uppercase text-xl  xl:text-2xl relative group font-light'><a href='#'>Products</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
          <li className='uppercase text-xl  xl:text-2xl relative group font-light'><a href='#'>Enquiry</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
          <li className='uppercase text-xl  xl:text-2xl relative group font-light'><a href='#'>Contact</a>
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-gray-200 group-hover:w-1/2 duration-500 group-hover:transition-all"></span>
          </li>
        </ul>
      </div>
      <div id="language" className='flex gap-4'>
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
