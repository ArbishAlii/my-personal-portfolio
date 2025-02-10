// import React from 'react'
// import { AiOutlineMail } from "react-icons/ai";
// import { IoCallOutline } from "react-icons/io5";

// const Contact = () => {
//   return (
//     <div id='contact' className='container pt-32'>
//         <div className="grid md:grid-cols-2 gap-10">
//             <div className='space-y-8'>
//                 <h2 className="text-5xl">Connect with Me</h2>
//                 <p className='text-gray-600 text-[18px] pt-2'>Start a Conversation with the help of Form.</p>
//                 <div className="flex gap-3 items-center">
//                     <AiOutlineMail size = {30} />arbishali2002@gmail.com</div>
//             </div>
//                 <div className="flex gap-3 items-center">
//                     <IoCallOutline  size = {30} />+92-3343875368</div>
//                     <div className="space-y-8">
//                         <div className='flex flex-col gap-1'>
//                             <label htmlFor="name">Name</label>
//                             <input type="text" className='h-[40px] bg-transparent border border-accent' id='name'/>
//                         </div>
//                         <div className='flex flex-col gap-1'>
//                             <label htmlFor="email">E-mail</label>
//                             <input type="text" className='h-[40px] bg-transparent border border-accent' id='email'/>
//                         </div>
//                         <div className='flex flex-col gap-1'>
//                             <label htmlFor="msg">Message</label>
//                             <textarea className='bg-transparent border border-accent' id='msg' rows={8}/>
//                         </div>
//                         <button className='bg-accent p-2 px-6'>Send</button>
//                     </div>
//             </div>
//         </div>
      
  
//   )
// }

// export default Contact





import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32 px-6 md:px-12'>
      <div className="grid md:grid-cols-2 gap-10">
        <div className='space-y-8'>
          <h2 className="text-5xl font-semibold">Connect with Me</h2>
          <p className='text-gray-600 text-lg'>Start a conversation using the form below.</p>
          <div className="flex gap-3 items-center text-lg">
            <AiOutlineMail size={30} className='text-accent' />
            <span>arbishali2002@gmail.com</span>
          </div>
          <div className="flex gap-3 items-center text-lg">
            <IoCallOutline size={30} className='text-accent' />
            <span>+92-3343875368</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className='flex flex-col gap-2'>
            <label htmlFor="name" className='text-lg font-medium'>Name</label>
            <input type="text" className='h-12 px-4 bg-transparent border border-gray-400 rounded-md focus:border-accent outline-none' id='name'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-lg font-medium'>E-mail</label>
            <input type="email" className='h-12 px-4 bg-transparent border border-gray-400 rounded-md focus:border-accent outline-none' id='email'/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="msg" className='text-lg font-medium'>Message</label>
            <textarea className='p-4 bg-transparent border border-gray-400 rounded-md focus:border-accent outline-none' id='msg' rows={6}/>
          </div>
          <button className='bg-accent text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition'>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
