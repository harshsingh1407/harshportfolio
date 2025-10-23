import React from 'react';

const About = () => {
  return (
    <div id='about' className='py-16 md:py-28 px-4'>
        <div 
            data-aos="zoom-in" 
            className='max-w-4xl mx-auto'
        >
            <div className='mb-12'>
                <h1 className='
                    text-cyan-400 text-4xl md:text-5xl font-extrabold 
                    text-center 
                    uppercase tracking-widest
                    relative
                '>
                    About Me
                    <span className='block w-20 h-1 bg-cyan-600 mx-auto mt-2 rounded-full'></span>
                </h1>
            </div>

            <div className='
                bg-slate-800/80 backdrop-blur-sm
                p-8 md:p-12 
                rounded-xl 
                shadow-2xl shadow-cyan-900/50 
                border-t-4 border-cyan-500
            '>
                <div className='mb-8'>
                    <p className='
                        text-gray-300 text-lg md:text-xl 
                        leading-relaxed 
                        text-left 
                    '>
                        Hi, I'm <strong className='text-white font-bold'>Harsh Singh</strong> — a passionate <strong className='text-cyan-400'>Full-Stack Web Developer</strong> focused on crafting clean, responsive, and user-friendly digital experiences. I specialize in the modern web stack, including <strong className='text-cyan-400'>HTML, CSS, Tailwind CSS, JavaScript, React, Next.js, Node.js, Express and MongoDB</strong>.
                        
                        <br /><br />
                        
                        I enjoy turning creative ideas into robust, scalable web applications that deliver seamless performance and great user experiences. My toolkit also includes proficient use of <strong className='text-cyan-400'> Git/GitHub </strong> for version control and collaboration.
                        
                        <br /><br />
                        
                        I’m always eager to learn new technologies, collaborate on meaningful projects, and grow as a developer in a challenging, fast-paced environment.
                    </p>
                </div>

                <div className='flex justify-start pt-4 border-t border-slate-700/50'>
                    
                    <a 
                        href="https://www.linkedin.com/in/harshsingh1407/" 
                        target='_blank' 
                        rel="noopener noreferrer"
                    >
                        <button className='
                            bg-cyan-600 hover:bg-cyan-500 
                            text-white 
                            p-3 md:p-4 text-lg font-semibold 
                            rounded-lg 
                            transition-colors duration-300
                            flex items-center space-x-2
                        '>
                            <i className="fa-brands fa-linkedin text-xl"></i>
                            <span>LinkedIn</span>
                        </button>
                    </a>
                    <a 
                        href="https://github.com/harshsingh1407" 
                        target='_blank' 
                        rel="noopener noreferrer"
                    >
                        <button className='
                            bg-slate-700 hover:bg-slate-600 
                            text-white 
                            mx-4 
                            p-3 md:p-4 text-lg font-semibold 
                            rounded-lg 
                            transition-colors duration-300
                            flex items-center space-x-2
                        '>
                            <i className="fa-brands fa-github text-xl"></i>
                            <span>GitHub</span>
                        </button>
                    </a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default About;