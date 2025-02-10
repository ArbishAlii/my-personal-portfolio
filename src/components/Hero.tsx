// import React from 'react'
// import Navbar from './Navbar'

// const Hero = () => {
//   return (
//     <div id="Hero" className='min-h-screen bg-no-repeat bg-cover mt-16'
//     style={{backgroundSize: "30%", backgroundPosition: "left-100px top-50px",backgroundImage: "url('/main.jpg')" }}
//     >
      
//       <Navbar />
//       <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
//         <div className='hidden lg:block'></div>
//         <div className='text-[100px] sm:text-[120px] font-bold leading-tight flex justify-center items-center'>
//           <div>
//             <p>I'm</p>
//             <p>Arbish Ali</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Hero

import React from 'react';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <div
      id="Hero"
      className="relative min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <Navbar />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center h-[calc(100vh-60px)] px-6">
        <div className="lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="/main.jpg"
            alt="Arbish Ali"
            className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg border-4 border-gray-600"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
            I&apos;m <span className="text-blue-400">Arbish Ali</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300">
            A passionate Frontend Developer crafting beautiful & functional websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
