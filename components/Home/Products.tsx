import React from 'react'
import Slideshow from './Slideshow'

const Products = () => {
  return (
    <div className=' md:mt-20 relative'>
      <div className='absolute w-24 h-24 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 filter blur-3xl transform -rotate-146.62'></div>
      <h1 className='text-center font-anybody text-2xl md:text-4xl lg:text-5xl'>PRODUCTS</h1>
      <div className='md:w-1/3 lg:w-1/3 xl:w-1/4 w-1/2 h-3 sm:h-5 flex mx-auto m-2 border-2 border-grey mb-12'></div>
      <div className='absolute w-24 h-24 bg-gradient-to-br from-neutral-400 via-neutral-500 to-neutral-600 filter blur-3xl transform -rotate-61.75 bottom-0 right-0'></div>
      <Slideshow />
    </div>
  )
}

export default Products