import React from 'react'
import Slideshow from './Slideshow'

const Products = () => {
  return (
    <div className='mt-20'>
      <div className='absolute w-24 h-24 left-121.58 top-2649.38 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 filter blur-3xl transform -rotate-146.62'></div>
      <h1 className='text-center font-anybody text-4xl'>PRODUCTS</h1>
      <div className='w-96 h-4 flex mx-auto m-2 border-2 border-grey mb-12'></div>
      <div className='absolute w-24 h-24 right-0 bottom-16 bg-gradient-to-br from-neutral-400 via-neutral-500 to-neutral-600 filter blur-3xl transform -rotate-61.75'></div>
      <Slideshow />
    </div>
  )
}

export default Products