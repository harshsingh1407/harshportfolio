import React, { useEffect, useState } from 'react';

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "A passionate Frontend Developer building seamless, responsive, and user-centric web experiences.";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 45); 

    return () => clearInterval(typing);
  }, [fullText]);

  return (
    // Animated Gradient Background Classes
    <div 
      id='home' 
      className='min-h-screen flex justify-center items-center 
                 relative overflow-hidden
                 // Gradient colors and size set for animation
                 bg-gradient-to-r from-slate-900 via-gray-950 to-indigo-950 
                 bg-[length:400%_400%] 
                 // Custom animation class from tailwind.config.js
                 animate-gradient-background
                '
    >
        {/* Main Content Div */}
        <div className='z-10 p-4 max-w-4xl w-full text-center'>
            
            {/* Heading Section */}
            <div className='mb-6'>
                <h1 className='text-gray-200 text-4xl md:text-6xl font-extrabold tracking-tight'>
                    Hi, I'm <span className='text-cyan-400 font-black'>Harsh Singh</span>
                </h1>
            </div>

            {/* Typewriter Text Section */}
            <div className='mb-8 h-20 md:h-16 flex items-center justify-center'>
                <p 
                    id='typewriter' 
                    className='text-center text-gray-400 text-xl md:text-3xl font-medium tracking-wide shadow-text'
                >
                    {typedText}
                </p>
            </div>

            {/* Action Button Section */}
            <div className='flex justify-center mt-10'>
              <a href="#projects">
                <button 
                  className='
                    bg-cyan-600 hover:bg-cyan-500 
                    text-white 
                    px-8 py-4 md:px-10 md:py-5 
                    text-lg md:text-xl font-semibold 
                    rounded-full 
                    shadow-lg shadow-cyan-500/50 
                    transition-all duration-300 
                    hover:scale-105 hover:shadow-xl
                    flex items-center space-x-2
                  '
                >
                  <span>View Projects</span>
                </button>
              </a>
            </div>
            
        </div>
    </div>
  )
}

export default Home;