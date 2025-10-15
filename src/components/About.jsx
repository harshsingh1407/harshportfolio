import React from 'react'
// Agar aapne lucide-react ya koi icon library install ki hai, toh aap in icons ka upyog kar sakte hain:
// import { Linkedin, Github } from 'lucide-react'; 
// (Agar aapne Font Awesome use kiya hai, toh woh theek hai.)

const About = () => {
  return (
    // Background ko Home page ke dark theme se match kiya gaya hai
    <div id='about' className='bg-slate-900 py-16 md:py-28 px-4'>
        
        {/* Main Content Container - Centered and max-width for better readability */}
        <div 
            data-aos="zoom-in" 
            className='max-w-4xl mx-auto'
        >
            
            {/* Title Section */}
            <div className='mb-12'>
                <h1 className='
                    text-cyan-400 text-4xl md:text-5xl font-extrabold 
                    text-center 
                    uppercase tracking-widest
                    relative
                '>
                    About Me
                    {/* Subtle underline effect */}
                    <span className='block w-20 h-1 bg-cyan-600 mx-auto mt-2 rounded-full'></span>
                </h1>
            </div>

            {/* Content Card */}
            <div className='
                bg-slate-800 
                p-8 md:p-12 
                rounded-xl 
                shadow-2xl shadow-cyan-900/50 
                border-t-4 border-cyan-500
            '>
                
                {/* Paragraph Section */}
                <div className='mb-8'>
                    <p className='
                        text-gray-300 text-lg md:text-xl 
                        leading-relaxed // Line spacing for readability
                        text-left // Text ko center se left align kiya gaya hai, jo zyada professional lagta hai
                    '>
                        Hi, I'm <strong className='text-white font-bold'>Harsh</strong>, a passionate web developer focused on crafting clean, **responsive**, and user-friendly digital experiences. I specialize in the modern web stack, including <strong className='text-cyan-400'>HTML, CSS, Tailwind, JavaScript, and React</strong>, and I thrive on turning innovative ideas into robust web applications.
                        
                        <br /><br />
                        
                        My toolkit includes hands-on experience with **Bootstrap** and proficient use of **Git/GitHub** for version control. I'm actively seeking opportunities to collaborate on meaningful projects, gain professional experience, and continuously **grow** as a developer in a challenging environment.
                    </p>
                </div>

                {/* Social Buttons Section */}
                <div className='flex justify-start pt-4 border-t border-slate-700/50'>
                    
                    {/* LinkedIn Button */}
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
                    
                    {/* GitHub Button */}
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