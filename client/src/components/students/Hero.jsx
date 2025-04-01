import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'
import bg2 from '../../assets/bg2.png'



const Hero = () => {
  return (
    <div className='flex flex-col items-center  justify-center w-full md:pt-30 pt-9
    px-7 md:px-0 space-y-5 text-center bg-gradient-to-b from-cyan-100/70'>

      <div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 py-12">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            The Best Online <br />
            <span className="text-green-600">Education Platform</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam est sem,
            faucibus non purus non, placerat tempor dolor.
          </p>

        </div>

        {/* Right Side - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          <img src={bg2} alt="Students Learning" className="w-full max-w-lg" />
        </div>
      </div>





      <div className="h-11"></div>
      <SearchBar />
    </div>



  )
}

export default Hero
