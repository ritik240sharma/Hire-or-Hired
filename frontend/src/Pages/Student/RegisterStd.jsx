import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import Page from '../Page';
import axios from 'axios';

const RegisterHr = () => {
  const [videoSrc, setVideo] = useState(null);
  const [imgSrc, setImg] = useState(null);
   
  const handleChange = async(e,type) => {
		const file = e.target.files[0];
     console.log(file);
		if (file) {
			const reader = new FileReader();
			reader.onload = () => {
				if(type==='video') setVideo(reader.result);
        else 
           setImg(reader.result);
			};
			reader.readAsDataURL(file);

      // const formData = new FormData();
      // formData.append('userVideo', file);
      // formData.append('fullname', 'John Cena'); // Include other fields if necessary
      // formData.append('username', 'johncena');

    //   // Send file to backend
    //   try {
    //     const response = await axios.post('http://localhost:4000/api/hr/upload-video', formData, {
    //       headers: {
    //         'Content-Type': 'multipart/form-data',
    //       },
    //     });
    //     console.log('Upload successful:', response.data);
    //   } catch (error) {
    //     console.error('Error uploading file:', error);
    //   }
		}
	};

  const handleSubmit = async() => {
    try {
      const response = await axios.post('http://localhost:4000/api/hr/upload-video', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Upload successful:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  }


  const [skills, setSkills] = useState(['']); // Initialize with one empty skill

  // Handle change in skill input
  const handleSkillChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index] = event.target.value;
    setSkills(newSkills);
  };

  // Add a new skill input
  const addSkill = () => {
    setSkills([...skills, '']);
  };

  // Remove a skill input
  const removeSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };


  return (
    <Page >
  <div className='bg-white p-10'>
    <form className='xl:ml-[400px] md:ml-[300px]' onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">Register Here!</h2>
          

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">            
            
            <div className="sm:col-span-4">
              <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    id="fullname"
                    name="fullname"
                    type="text"
                    placeholder="Enter fullname"
                    autoComplete="fullname"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Add your email"
                    autoComplete="email"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    id="username"
                    name="username"
                    type="username"
                    placeholder="Add your username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
               Set Password
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    autoComplete="password"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="linkedIn" className="block text-sm font-medium leading-6 text-gray-900">
               LinkedIn
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    id="linkedIn"
                    name="linkedIn"
                    type="linkedIn"
                    placeholder="Add LinkedIn profile"
                    autoComplete="linkedIn"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              
              <label htmlFor="exp" className="block text-sm font-medium leading-6 text-gray-900">
                Experience Duration
              </label>
              
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    id="expr"
                    name="expr"
                    type="number"
                    min={0}
                    placeholder="In Years"
                    autoComplete="expr"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            
            <div className="sm:col-span-4">
              <label htmlFor="org" className="block text-sm font-medium leading-6 text-gray-900">
                Current Organization
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <input
                    id="org"
                    name="org"
                    type="text"
                    placeholder="Name of Organization"
                    autoComplete="org"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            
            
            {/* <div className='sm:col-span-4'>
                <label htmlFor="skills" className="block text-sm font-medium leading-6 text-gray-900">
                   Add skills
                </label>
                {skills.map((skill, index) => (
                <div key={index} className="skill-input flex flex-row gap-3 ">
                  <input
                    id='skills'
                    type="text"
                    value={skill}
                    onChange={(e) => handleSkillChange(index, e)}
                    placeholder="Enter a skill"
                    className='flex mt-4 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md'
                  />
                  <button type="button" onClick={() => removeSkill(index)} className='text-red-300'>Remove</button>
                </div>
               ))}
              <button type="button" onClick={addSkill} className='text-3xl text-green-500'>+</button>
            </div> */}

            <div className="sm:col-span-4">
              <label htmlFor="work-exp" className="block text-sm font-medium leading-6 text-gray-900">
                Work Experience Details
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                  <textarea
                      id="work-exp"
                      name="work-exp"
                      placeholder=""
                      rows="4"
                      cols="50"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
               Profile Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
              { imgSrc!==null ? <img src={imgSrc} className='w-20 h-20 rounded-full object-cover'/> :
                <UserCircleIcon aria-hidden="true" className="h-12 w-12 text-gray-300" />}
                <label
                      htmlFor="file-upload-img"
                      className="relative ml-2 cursor-pointer rounded-md bg-white font-semibold text-purple-600 hover:text-purple-800">
              
                <input onChange={(e) => handleChange(e,"img")} id="file-upload-img" accept="image/*" name="file-upload-img" type="file" className="sr-only" />
                  Upload
                </label>
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="video" className="block text-sm font-medium leading-6 text-gray-900">
                Introduction video
              </label>
              <div className="mt-2  rounded-lg border border-dashed border-gray-900/25 pl-12 mr-[450px] py-10">
                <div className="text-center">
                  <div>
                  { videoSrc!==null ?<video controls muted src={videoSrc} className='w-[300px] h-[280px]'/> :
                  <PhotoIcon aria-hidden="true" className=" h-12 w-12 text-gray-300" />}
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload-vid"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-purple-600 hover:text-purple-800"
                    >
                      <span>Upload video</span>
                      
                      <input onChange={(e) => handleChange(e,'video')} id="file-upload-vid" accept="video/*" name="file-upload-vid" type="file" className="sr-only" />
                    </label>
                  
                  </div>
                  </div>
              
                </div>
                {/* { videoSrc!==null ?<video controls muted src={videoSrc} /> : null} */}
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Describe Yourself
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-purple-600 sm:max-w-md">
                  {/* <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">workcation.com/</span> */}
                  <textarea
                      id="description"
                      name="description"
                      placeholder="Enter your description here"
                      rows="4"
                      cols="50"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  ></textarea>
                </div>
              </div>
            </div>

          </div>
        </div>

        
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-purple-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
        >
          Save
        </button>
      </div>
    </form>
    </div>
    </Page>
  )
}

export default RegisterHr