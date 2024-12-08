import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div>
      <Navbar/>
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[130px] font-bold leading-tight flex justify-center items-center text-stone-500'>
            <div>
                <p data-aos="zoom-in-down">Welcome </p>
                <p data-aos="zoom-in-down">To My</p>
                <p data-aos="zoom-in-down">Portfolio</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero