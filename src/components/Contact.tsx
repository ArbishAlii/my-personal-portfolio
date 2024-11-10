import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div id='contact' className='container pt-32'>
        <div className="grid md:grid-cols-2 gap-10">
            <div className='space-y-8'>
                <h2 className="text-5xl">Connect with Me</h2>
                <p className='text-gray-600 text-[18px] pt-2'>Start a Conversation with the help of Form.</p>
                <div className="flex gap-3 items-center">
                    <AiOutlineMail size = {30} />arbishali2002@gmail.com</div>
            </div>
                <div className="flex gap-3 items-center">
                    <IoCallOutline  size = {30} />+92-3343875368</div>
                    <div className="space-y-8">
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="name">Name</label>
                            <input type="text" className='h-[40px] bg-transparent border border-accent' id='name'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="email">E-mail</label>
                            <input type="text" className='h-[40px] bg-transparent border border-accent' id='email'/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <label htmlFor="msg">Message</label>
                            <textarea className='bg-transparent border border-accent' id='msg' rows={8}/>
                        </div>
                        <button className='bg-accent p-2 px-6'></button>
                    </div>
            </div>
        </div>
      
  
  )
}

export default Contact
