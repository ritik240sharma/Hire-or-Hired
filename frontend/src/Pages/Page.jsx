import React from 'react'
import NavBar from "./sidebar/NavBar"
import Footer from "./sidebar/Footer"
function Page({children}) {
  return (
    <div className="min-h-screen w-full flex flex-col ">
    <NavBar />
    <div className='flex flex-col flex-grow'>
    <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
           <h1 className="text-3xl font-bold tracking-tight text-gray-900"><imag src="" alt="C:\Users\HP\Desktop\Hire\frontend\public\images\logo.png" /></h1>
        </div>
    </header>
    <main>
       <div className="w-full h-full ">{children}</div>
    </main>
    </div>
    <Footer style={{backgroundColor:'purple'}} />
  </div>
  )
}

export default Page