import React from 'react'
import Slideshow from './Slideshow'

const Products = () => {
  return (
    <div className='mt-20'>
      <div className='absolute w-24 h-24 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 filter blur-3xl transform -rotate-146.62'></div>
      <h1 className='text-center font-anybody md:text-4xl text-2xl'>PRODUCTS</h1>
      <div className='md:w-1/4 w-1/2 h-3 flex mx-auto m-2 border-2 border-grey mb-12'></div>
      {/* <div className='relative w-24 h-24 bg-gradient-to-br from-neutral-400 via-neutral-500 to-neutral-600 filter blur-3xl transform -rotate-61.75'></div> */}
      <Slideshow />
    </div>
  )
}

export default Products