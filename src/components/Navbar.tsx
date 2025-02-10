// import React from 'react'
// import { AiOutlineMenu } from "react-icons/ai";

// const Navbar = () => {
//   return (
//     <div className='container pt-8'>
//         <div className='flex justify-between items-center'>
//             <div className='text-xl font-medium'> Arbish Ali</div>
//             <ul className='gap-10 lg:gap-16  hidden md:flex'>
//                 <li className='menuLink'><a href="#home">Home</a></li>
//                 <li className='menuLink'><a href="#about">About</a></li>
//                 <li className='menuLink'><a href="#projects">Projects</a></li>
//                 <li className='menuLink'><a href="#skills">Skills</a></li>
//                 <li className='menuLink'><a href="#contact">Contact</a></li>
//             </ul>
            
//             <AiOutlineMenu className='md:hidden' size={30} />
//         </div>
      
//     </div>
//   )
// }

// export default Navbar



import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className='bg-gray-900 text-white py-4 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center px-6'>
        <div className='text-2xl font-semibold tracking-wide'>Arbish Ali</div>
        
        <nav className='hidden md:flex gap-8 text-lg'>
          <a href="#home" className='hover:text-gray-400 transition'>Home</a>
          <a href="#about" className='hover:text-gray-400 transition'>About</a>
          <a href="#projects" className='hover:text-gray-400 transition'>Projects</a>
          <a href="#skills" className='hover:text-gray-400 transition'>Skills</a>
          <a href="#contact" className='hover:text-gray-400 transition'>Contact</a>
        </nav>
        
        <AiOutlineMenu className='md:hidden cursor-pointer' size={30} />
      </div>
    </header>
  );
}

export default Navbar;
