import React, { useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from 'react-icons/io5';
import { FaStar } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { VscOrganization } from "react-icons/vsc";

const Card = () => {
  const [isExpanded,readMore] = useState(false);
  const maxLength = 40;
  const text = "asdddddddddddd ddddddddd dddddddddasdas dsdasdasdadsasasa sdasdasdadadasasaddasd";
  const slicedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
  
  function handleClick(){
    readMore(!isExpanded);
  }
  return (
      <div className='max-w-80 h-fit px-3 pt-12 py-6 bg-white m-3 shadow-lg border border-1 text-black  rounded-lg hover:scale-105 overflow-hidden'>
         <div className='flex flex-row justify-between'>
            <div>
               <h1 className='text-2xl font-semibold'>Sam Billings</h1>
               <div className='mt-4 flex items-center gap-2'>
                  <FaStar className='text-yellow-400 text-lg' />
                  <p>4.8</p>
               </div>
               
               <div className='flex items-center gap-2'>
                  <VscOrganization className='text-lg' />
                  <p>Tapebook</p>
               </div>

               <div className='flex items-center gap-2'>
                  <CiCalendarDate className='text-lg' />
                  <p>Hr since 2000</p>
               </div>
              
               <div className='flex items-center gap-2'>
                  <IoMailOutline className='text-red-400 text-lg' />
                  <p> sam@gmail.com </p>
               </div>
               
               <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                  <div className='flex items-center gap-2'>
                     <FaLinkedin className='text-blue-700'></FaLinkedin>
                     <p className='hover:text-blue-800'>Visit LinkedIn</p>
                  </div>
               </a>

            </div>
            <img src="images/titleasdlogo.png" alt="image" className='w-20 h-20 rounded-full object-cover ml-auto mr-1'/>
         </div>
         <div className='mt-6'>
             <p className='break-words'>
                {isExpanded ? text : slicedText}
             
               {text.length > maxLength && (
                 <span> <button onClick={handleClick} className='text-blue-700 hover:underline'>
                           {isExpanded ? 'read Less' : 'read More'}
                        </button>
                 </span>
               )}
            </p>
         </div> 
         <div className='mt-8 flex flex-col items-center'>
            
             <button className='border  px-12 py-1 rounded-2xl w-auto hover:bg-rose-400  bg-rose-300 text-white'>Subscribe</button>
         </div>
      </div>
  )
}

export default Card