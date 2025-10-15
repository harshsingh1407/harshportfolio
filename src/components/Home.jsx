import React, { useEffect, useState } from 'react';
import { Download, TerminalSquare } from 'lucide-react'; // TerminalSquare icon projects ke liye use kiya gaya hai
import profileImage from '../assets/profile_pic.png'
import resume from '../assets/Harsh_Resume.pdf';

const Home = () => {
    const [typedText, setTypedText] = useState("");
    // Full-Stack प्रोफ़ाइल के लिए टेक्स्ट को अपडेट किया गया
    const fullText = "A passionate Full-Stack Developer building robust, scalable, and user-centric web applications.";

    useEffect(() => {
        let index = 0;
        const typing = setInterval(() => {
            if (index < fullText.length) {
                setTypedText((prev) => prev + fullText.charAt(index));
                index++;
            } else {
                clearInterval(typing);
            }
        }, 45); // Typing speed

        return () => clearInterval(typing);
    }, [fullText]);

    // आपको यह सुनिश्चित करना होगा कि आपके 'Projects' कॉम्पोनेंट का id 'projects' है।
    const PROJECTS_SECTION_ID = "#projects"; 
    
    // Resume Link: 'resume' import ho chuka hai
    
    // Function to scroll to the Projects section
    const scrollToProjects = () => {
        document.querySelector(PROJECTS_SECTION_ID)?.scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        // Animated Gradient Background और full-screen height
        // Home कॉम्पोनेंट से भी कोई ठोस bg-color हटा दें, ताकि particles दिखें
        <div 
            id='home' 
            className='min-h-screen flex justify-center items-center 
                        relative overflow-hidden
                        // ये classes particles background के पीछे काम नहीं करेंगी, 
                        // इसलिए बेहतर है कि इन्हें हटा दें अगर आप particles use कर रहे हैं:
                        // bg-[length:400%_400%] 
                        // animate-gradient-background
                        font-inter
            '
        >
            {/* Main Content Container */}
            <div className='z-10 px-6 py-20 max-w-7xl w-full mx-auto md:py-32'> 
                <div className='flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20'>

                    {/* =========== Left Column: Text & Buttons =========== */}
                    <div className='w-full md:w-1/2 text-center md:text-left pt-10 md:pt-0'> 
                        
                        {/* Heading Section */}
                        <div className='mb-4 md:mb-6'>
                            <h1 className='text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-200'>
                                Hi, I'm <span className='
                                    text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 
                                    font-black
                                '>Harsh Singh</span>
                            </h1>
                        </div>

                        {/* Typewriter Text Section */}
                        <div className='mb-8 h-20 md:h-20 flex items-center justify-center md:justify-start px-2'>
                            <p 
                                id='typewriter' 
                                className='
                                    text-center md:text-left text-gray-400 text-xl md:text-3xl font-medium tracking-wide 
                                    min-h-[3rem] 
                                '
                            >
                                {typedText}
                            </p>
                        </div>

                        {/* Action Button Section (Two Buttons) */}
                        <div className='flex flex-col sm:flex-row justify-center md:justify-start mt-8 gap-4 md:gap-6'>
                            
                            {/* 1. Resume Download Button (Primary CTA) */}
                            <a 
                                href={resume} 
                                download="Harsh_Singh_Resume.pdf"
                                className="w-full sm:w-auto"
                            >
                                <button 
                                    className='
                                        w-full
                                        // Primary Button Style (Bright Gradient)
                                        bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500
                                        text-white 
                                        px-8 py-4 
                                        text-lg md:text-xl font-bold 
                                        rounded-full 
                                        shadow-xl shadow-cyan-600/40 
                                        transition-all duration-300 
                                        hover:scale-[1.03] 
                                        flex items-center justify-center space-x-3
                                    '
                                >
                                    <Download size={22} />
                                    <span>Download Resume</span>
                                </button>
                            </a>
                            
                            {/* 2. View Projects Button (Secondary CTA - Replaced LinkedIn) */}
                            <button 
                                onClick={scrollToProjects} // Projects सेक्शन पर स्क्रॉल करने के लिए
                                className='
                                    w-full sm:w-auto
                                    // Secondary Button Style (Subtle Dark)
                                    bg-slate-700 hover:bg-slate-600 
                                    text-gray-200 
                                    px-8 py-4
                                    text-lg md:text-xl font-semibold 
                                    rounded-full 
                                    border-2 border-slate-600
                                    shadow-lg shadow-slate-900/50 
                                    transition-all duration-300 
                                    hover:scale-[1.03] hover:text-white
                                    flex items-center justify-center space-x-3
                                '
                            >
                                <TerminalSquare size={22} />
                                <span>View Projects</span>
                            </button>

                        </div>
                    </div>

                    {/* =========== Right Column: Profile Image =========== */}
                    <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
                        <div className='
                            w-64 h-64 md:w-96 md:h-96 
                            rounded-full overflow-hidden 
                            border-4 border-cyan-500 
                            shadow-2xl shadow-cyan-500/50 
                            transition-all duration-700
                            hover:shadow-teal-500/50 hover:border-teal-400
                            transform hover:scale-105
                            mt-8 md:mt-0
                        '>
                            <img 
                                src={profileImage} 
                                alt="Harsh Singh Profile" 
                                className='w-full h-full object-cover transition-all duration-500'
                                // Fallback/Error handling for image
                                onError={(e) => {
                                    e.target.onerror = null; // prevents infinite loop
                                    e.target.src = 'https://placehold.co/400x400/1e293b/a5f3fc?text=Image+Not+Found'; 
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Home;