import React from 'react'

const About = () => {
  return (
    <div id='about' className='bg-[#0f172a] p-4 py-10 md:py-20'>
        <div  data-aos="zoom-in">
            <div>
                <h1 className='text-[#3b82f6] text-3xl md:text-5xl font-bold text-center'>About Me</h1>
            </div>
            <div className='p-5'>
                <p className='text-center text-white text-xl md:text-2xl'>Hi, I'm <span className='font-semibold'>Harsh</span>, a passionate web developer with a love for creating clean, responsive, and user-friendly websites. I specialize in <span className='font-semibold'>HTML, CSS, Bootstrap, Tailwind, JavaScript, React, and Git-Github</span> and I enjoy turning ideas into real web applications.
                <br />
                I'm currently looking for opportunities to collaborate on meaningful projects, gain professional experience, and keep growing as a developer.</p>
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#1e293b] border-1 text-white p-3 text-xl rounded-xl text-center hover:text-black hover:bg-white'><i className="fa-brands fa-linkedin"></i> <span><a href="https://www.linkedin.com/in/harshsingh1407/" target='_blank'>Linkedin</a></span></button>
                <button className='bg-[#1e293b] mx-4 border-1 text-white p-3 text-xl rounded-xl hover:text-black hover:bg-white'><i className="fa-brands fa-github"></i> <span><a href="https://github.com/harshsingh1407" target='_blank'>Github</a></span></button>
            </div>
        </div>
    </div>
  )
}

export default About