// import React from 'react'

// const Skills = () => {
//   return (
//     <div id='skills' className='container pt-32'>
//       <div className='grid md:grid-cols-2 gap-20 items-center'>
//         <div>
//           <h2 className='text-4xl md:text-5xl'>My Technical Expertise</h2>
//           <p className='text-gray-500 pt-2'>
//             I'm a front-end developer with a passion for crafting engaging, intuitive, and responsive web experiences. With skills in HTML, CSS, JavaScript, and modern frameworks like React and Next.js.  My approach blends creativity with best practices to ensure that every project not only looks great but performs seamlessly across devices.
//           </p>
//         </div>


//         <div>
//           <div className='grid grid-cols-2 text-accent text-3xl sm:text-4xl'>
//             <div className="space-y-2">
//               <h2>Typescript</h2>
//               <h2>React.js</h2>
//               <h2>Next.js</h2>
//             </div>
//             <div className="space-y-2">
//               <h2>Tailwind</h2>
//               <h2>CSS</h2>
//               <h2>Node.js</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Skills

import React from 'react';

const Skills = () => {
  return (
    <div id='skills' className='container py-20'>
      <div className='grid md:grid-cols-2 gap-16 items-center'>
      
        <div>
          <h2 className='text-4xl md:text-5xl font-bold text-grey-800'>
            My Technical Expertise
          </h2>
          <p className='text-white-600 pt-4 leading-relaxed'>
            I&apos;m a front-end developer passionate about crafting engaging, intuitive, and responsive web experiences. 
            My expertise includes *HTML, CSS, JavaScript, and modern frameworks like React and Next.js*. 
            I blend creativity with best practices to ensure every project is *visually appealing* and *high-performing* across all devices.
          </p>
        </div>

        <div>
          <div className='grid grid-cols-2 text-2xl sm:text-3xl font-medium text-gray-700'>
            <div className="space-y-3">
              <h2>⚡ TypeScript</h2>
              <h2>⚡ React.js</h2>
              <h2>⚡ Next.js</h2>
            </div>
            <div className="space-y-3">
              <h2>⚡ Tailwind CSS</h2>
              <h2>⚡ CSS</h2>
              <h2>⚡ Node.js</h2>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
