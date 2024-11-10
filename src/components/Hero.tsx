import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="Hero" className='min-h-screen bg-no-repeat bg-cover mt-16'
    style={{backgroundSize: "30%", backgroundPosition: "left-100px top-50px",backgroundImage: "url('/main.jpg')" }}
    >
      
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block'></div>
        <div className='text-[100px] sm:text-[120px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <p>I'm</p>
            <p>Arbish Ali</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
