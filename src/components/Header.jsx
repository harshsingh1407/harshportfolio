import React, { useState } from 'react'

const Header = () => {

    const [isopen, setisopen] = useState(false)

  return (
    <div>
        <div className='bg-[#0f172a] h-[14vh] text-white text-2xl flex justify-around items-center fixed top-0 left-0 w-full z-20'>
            <div>
                <h1 className='font-bold text-3xl'>Port<span className='text-[#3b82f6]'>Folio</span></h1>
            </div>
            <div className={`bg-[#0f172a] absolute md:static top-17 w-full md:w-auto text-center transition-all duration-300 ease-in-out opacity-0 ${isopen ? 'block opacity-400' : 'hidden'} md:block md:opacity-100`}>
                <ul className='md:flex'>
                    <li className='px-3 md:py-0 py-3'><a href="#home">Home</a></li>
                    <li className='px-3 md:py-0 py-3'><a href="#about">About</a></li>
                    <li className='px-3 md:py-0 py-3'><a href="#skills">Skills</a></li>
                    <li className='px-3 md:py-0 py-3'><a href="#projects">Projects</a></li>
                    <li className='px-3 md:py-0 py-3'><a href="#certificate">Certificate</a></li>
                    <li className='px-3 md:py-0 py-3'><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className='md:hidden' onClick={()=> {
                setisopen(!isopen)
            }}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </div>
    </div>
  )
}

export default Header