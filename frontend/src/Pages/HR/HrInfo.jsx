import React from 'react'
import Page from '../Page'
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { CiChat1 } from "react-icons/ci";

const HrInfo = () => {
  const skills = ['ss','vv' ,'sad','asdsd']
  return (
    <Page>
      <div className='bg-white pl-[300px] p-10'>
          <div className='flex flex-row mb-16'>
             <div className='mr-[220px]'>
                <img src="public\images\titlelogo.png" className='w-[40px] rounded-full'/>
                <p className='mt-6 text-4xl font-normal text-black'>Peter Parker</p>
                <p className='text-md font-light text-gray-700'>Rating: 4.6</p>
                <p className='text-lg font-light text-gray-700 mt-2'>4+ Years of Experience</p>
             </div>
             <div className=''>
                <video className='w-[280px] h-[200px] rounded-lg bg-slate-800' controls src='public\images\vid.mp4'/>
                <div className='mt-4 flex flex-row justify-around'>
                   <button className='text-red-400 text-2xl'><IoMailOutline /></button>
                   <button className='text-green-500 text-2xl'><IoCallOutline /></button>
                   <button className='text-indigo-500 text-2xl'><CiBookmark /></button>
                   <button className='text-black text-2xl'><CiChat1 /></button>
                </div>
             </div>
          </div>
          
          <div>
            <div>
               <p className='mt-6 text-2xl font-normal text-black'>About</p>
               <p>adsjnjsdnjasndjasnjkdnkdjnaskjndjknkasjdnskajndkjasndkjsndkjasnkdjnasjkndsadasdasdsadasdsasadsaasd</p>

               <p className='mt-6 text-2xl font-normal text-black'>Work Experience</p>
               <p>adsjnjsdnjasndjasnjkdnkdjnaskjndjknkasjdnskajndkjasndkjsndkjasnkdjnasjkndsadasdasdsadasdsasadsaasd</p>
               
               <p className='mt-6 text-2xl font-normal text-black'>Skills</p>
               <div className='flex flex-row gap-4 mt-4'>
                 {skills.map((skill, index) => (
                  <div key={index} className='bg-pink-200 px-4 py-1 rounded-xl'><h className='text-black'>{skill}</h></div>
                  ))}
              </div>
            </div>
          </div>
      </div>
    </Page>
  )
}

  


export default HrInfo