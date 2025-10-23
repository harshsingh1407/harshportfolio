import React from 'react';
const Footer = () => {
  return (

    <footer className='
        relative 
        bg-transparent 
        border-t
        border-gray-800
        text-gray-400 
        py-6 
        z-10
        backdrop-blur-sm 
        shadow-xl shadow-slate-950/70
    '>
        <div className='max-w-7xl mx-auto px-6 text-center text-sm md:text-base'>
            
            <p className='font-normal'>
                © {new Date().getFullYear()} <strong className='text-gray-200'>Harsh Singh</strong>. All rights reserved.
            </p>
            
        </div>
    </footer>
  )
}

export default Footer;