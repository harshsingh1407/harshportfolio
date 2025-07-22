import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='bg-[#0f172a] p-4 py-10 md:py-20'>
        <div data-aos="fade-up">
            <div>
                <h1 className='text-[#3b82f6] text-3xl md:text-5xl font-bold text-center'>Skills</h1>
            </div>
            <div className='flex flex-wrap justify-center py-10'>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#ff5733] hover:text-[#ff5733]'>HTML</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#264de4] hover:text-[#264de4]'>CSS</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#563d7c] hover:text-[#563d7c]'>Bootstrap</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#06b6d4] hover:text-[#06b6d4]'>Tailwind</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#f7df1e] hover:text-[#f7df1e]'>JavaScript</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#61DAFB] hover:text-[#61DAFB]'>ReactJS</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#3c873a] hover:text-[#3c873a]'>NodeJS</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#333333] hover:text-[#333333]'>ExpressJS</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#47A248] hover:text-[#47A248]'>MongoDB</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#F1502F] hover:text-[#F1502F]'>Git</button>
                <button className='bg-[#1e293b] w-[180px] border-1 text-white text-2xl p-3 font-semibold m-2 rounded-xl hover:scale-105 hover:border-[#4078c0] hover:text-[#4078c0]'>Github</button>
            </div>
        </div>
    </div>
  )
}

export default Skills