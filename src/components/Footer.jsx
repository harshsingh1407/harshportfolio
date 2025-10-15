import React from 'react';
// Agar aapke paas lucide-react installed hai, toh aap Heart icon use kar sakte hain
// import { Heart } from 'lucide-react'; 

const Footer = () => {
  return (
    // Footer Wrapper - Unified Dark Theme and Minimal Height
    <footer className='
        bg-slate-900 
        border-t border-slate-700 // Subtle separator line
        text-gray-400 
        py-6 // Minimal vertical padding for compact look
    '>
        <div className='max-w-7xl mx-auto px-6 text-center text-sm md:text-base'>
            
            {/* Copyright Text */}
            <p className='font-normal'>
                © {new Date().getFullYear()} <strong className='text-gray-200'>Harsh Singh</strong>. All rights reserved.
            </p>
            
            
        </div>
    </footer>
  )
}

export default Footer;