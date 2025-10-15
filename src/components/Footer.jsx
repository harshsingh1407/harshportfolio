import React from 'react';
// import { Heart } from 'lucide-react'; 

const Footer = () => {
  return (
    // 'bg-transparent' (या केवल 'bg-black/50' जैसा कुछ) जोड़ें 
    // और 'relative' जोड़कर इसे z-index की क्षमता दें
    <footer className='
        relative 
        bg-transparent 
        border-t // Subtle separator line
        border-gray-800 // बॉर्डर को भी कणों के रंग से मेल खाने दें
        text-gray-400 
        py-6 
        z-10 // z-index को कणों (-1) से ऊपर रखें।
        backdrop-blur-sm 
            
            shadow-xl shadow-slate-950/70
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