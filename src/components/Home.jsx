import React, { useEffect, useState } from 'react'

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "A passionate Frontend Developer building responsive websites and user interfaces.";

  useEffect(() => {
    let index = 0;
    const typing = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 50);
    return () => clearInterval(typing);
  }, []);

  return (
    <div id='home' className='h-[100vh] flex justify-center items-center bg-linear-to-r from-[#0f172a] to-[#1e293b]'>
        <div className='mt-[14vh]'>
            <div className='p-2'>
                <h1 className='text-white text-3xl md:text-5xl font-semibold text-center'>Hi I'm <span className='text-[#3b82f6] font-bold'>Harsh Singh</span></h1>
            </div>
            <div className='p-2'>
                <p id='typewriter' className='text-center text-white text-2xl md:text-3xl'>{typedText}</p>
            </div>
            <div className='flex justify-center p-2'>
              <a href="#projects"><button className='bg-[#3b82f6] hover:bg-[#1567ed] px-5 py-3 md:px-7 md:py-5 text-2xl font-semibold rounded-xl'>View Project</button></a>
            </div>
        </div>
    </div>
  )
}

export default Home