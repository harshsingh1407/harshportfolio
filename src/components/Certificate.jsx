import React from 'react';
import { Award, ExternalLink } from 'lucide-react'; 


import htmlcertificate from '../assets/html.jpeg';
import csscertificate from '../assets/css.jpeg';
import javascriptcertificate from '../assets/javascript.jpg';
import reactcertificate from '../assets/reactcertificate.jpg';

const Certificate = () => {
    const certificates = [
        {
            cname: "HTML Fundamentals",
            image: htmlcertificate,
            publisher: "Great Learning",
            viewLink: "#" 
        },
        {
            cname: "CSS Essentials",
            image: csscertificate,
            publisher: "Great Learning",
            viewLink: "#"
        },
        {
            cname: "JavaScript Intermediate",
            image: javascriptcertificate,
            publisher: "Cisco",
            viewLink: "#"
        },
        {
            cname: "React Developer Skill",
            image: reactcertificate,
            publisher: "HackerRank",
            viewLink: "#"
        },
    ];

    return (
        <div id='certificate' className='bg-slate-950 py-16 md:py-28 px-4 font-inter'>
            <div data-aos="fade-up" className='max-w-7xl mx-auto'>
                
                <div className='mb-16'>
                    <h1 className='
                        text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 
                        text-4xl md:text-6xl font-black 
                        text-center 
                        uppercase tracking-widest
                    '>
                        Certifications
                        <span className='block w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-500 mx-auto mt-4 rounded-full shadow-lg shadow-cyan-500/50'></span>
                    </h1>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {certificates.map((cert, index) => (
                        <div 
                            key={index}
                            className='
                                group relative block 
                                bg-slate-900 
                                rounded-2xl overflow-hidden 
                                border border-slate-700
                                shadow-xl shadow-slate-900/70
                                transform transition-all duration-500 ease-in-out
                                hover:scale-[1.02] hover:border-cyan-500/70 // Lift effect
                                hover:shadow-cyan-500/40 // Glow effect
                                perspective-1000 // Enable 3D effects
                            '
                        >
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={cert.image} 
                                    alt={cert.cname} 
                                    className='
                                        w-full h-auto 
                                        aspect-video object-cover // Adjusted aspect ratio for better display
                                        transition-all duration-500 ease-in-out
                                        group-hover:scale-110 // Zoom
                                        group-hover:rotate-1 // Subtle tilt 
                                        p-4
                                    '
                                />
                            </div>
                            
                            <div className='p-5 border-t border-slate-800'>
                                <h3 className='text-xl font-bold text-gray-100 mb-1 leading-tight'>{cert.cname}</h3>
                                <p className='text-sm text-cyan-400 font-semibold flex items-center space-x-2 mt-2'>
                                    <Award size={18} className="text-teal-500"/>
                                    <span>{cert.publisher}</span>
                                </p>
                            </div>

                            <a 
                                href={cert.viewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='
                                    absolute inset-0 
                                bg-gradient-to-br from-slate-900/70 via-slate-800/70 to-cyan-900/60 // Multi-directional gradient overlay
                                backdrop-filter backdrop-blur-sm // Glassmorphism effect
                                flex flex-col justify-center items-center text-white 
                                opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500
                                transform group-hover:translate-z-20 // 3D effect
                                '
                            >
                                <div className='p-6 text-center'>
                                    <h3 className="text-3xl font-black text-cyan-400 mb-4 tracking-wide">{cert.cname}</h3>
                                    
                                    <button 
                                        className='
                                            bg-cyan-600 hover:bg-cyan-500 
                                            text-white 
                                            px-8 py-3 
                                            text-lg font-semibold 
                                            rounded-full 
                                            shadow-lg shadow-cyan-500/40
                                            transition-all duration-300
                                            flex items-center space-x-2 mx-auto
                                        '
                                    >
                                        <ExternalLink size={20} />
                                        <span>View Certificate</span>
                                    </button>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certificate;
