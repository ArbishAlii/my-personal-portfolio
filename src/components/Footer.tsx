import React from 'react'

// const Footer = () => {
//   return (
//     <div className='mt-16 py-16 text-center bg-accent'>
//       &copy; Arbish Ali | All rights reserved
//     </div>
//   )
// }

// export default Footer



const Footer = () => {
  return (
    <footer className='mt-16 py-6 text-center bg-accent text-white text-lg font-medium shadow-inner'>
      &copy; {new Date().getFullYear()} Arbish Ali | All rights reserved
    </footer>
  );
};

export default Footer
