// import React from 'react'

// const About = () => {
//   return (
//     <div id='about' className='container pt-32'>
//       <h2 className='text-4xl md:text-5xl'>About Me</h2>
//       <p className='text-gray-500 pt-4'>I'm currently pursuing a BS in Computer Science while building my expertise in front-end web development through specialized courses. My focus is on creating intuitive and responsive user interfaces using modern technologies.</p>
//     </div>
//   )
// }

// export default About

import React from 'react';

const About = () => {
  return (
    <div id='about' className='container pt-32 px-6 md:px-12 flex flex-col items-center text-center'>
      <h2 className='text-5xl font-bold text-accent mb-6'>About Me</h2>
      <div className='max-w-3xl bg-gradient-to-r from-gray-100 to-gray-200 shadow-xl rounded-xl p-8 flex flex-col gap-4'>
        <p className='text-gray-700 text-lg leading-relaxed'>
          I'm currently pursuing a <span className='font-semibold text-accent'>BS in Computer Science</span>, specializing in front-end web development. Through dedicated learning, I focus on crafting modern, responsive, and user-friendly web interfaces.
        </p>
        <p className='text-gray-700 text-lg leading-relaxed'>
          Passionate about <span className='font-semibold text-accent'>design and interactivity</span>, I continuously explore new technologies and frameworks to bring ideas to life with a seamless user experience.
        </p>
      </div>
    </div>
  );
};

export default About;
