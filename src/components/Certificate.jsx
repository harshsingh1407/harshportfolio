import React from 'react';
// Zaroori: Ensure you have lucide-react installed for the icon
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
            viewLink: "#" // Replace with actual verification link
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
        // Unified Dark Background and Spacing
        <div id='certificate' className='bg-slate-900 py-16 md:py-28 px-4'>
            <div data-aos="fade-up" className='max-w-6xl mx-auto'>
                
                {/* Title Section */}
                <div className='mb-16'>
                    <h1 className='
                        text-cyan-400 text-4xl md:text-5xl font-extrabold 
                        text-center 
                        uppercase tracking-widest
                    '>
                        Certifications
                        <span className='block w-20 h-1 bg-cyan-600 mx-auto mt-2 rounded-full'></span>
                    </h1>
                </div>

                {/* Certificate Grid Container */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {certificates.map((cert, index) => (
                        <div // Used div as wrapper for better styling control
                            key={index}
                            className='
                                group relative block 
                                bg-slate-800 
                                rounded-xl overflow-hidden 
                                border-2 border-slate-700
                                shadow-xl shadow-slate-900/50
                                transform transition-all duration-300
                                hover:scale-[1.03] hover:shadow-cyan-500/50 // Lift and glow effect
                            '
                        >
                            {/* Certificate Image & Hover Overlay */}
                            <div className='relative overflow-hidden'>
                                <img 
                                    src={cert.image} 
                                    alt={cert.cname} 
                                    className='
                                        w-full h-auto 
                                        aspect-[4/3] object-cover 
                                        transition-all duration-300 
                                        group-hover:scale-110 
                                        blur-none group-hover:blur-sm // FIX: Initial blur-none ensures sharpness
                                        p-4
                                    '
                                />
                                
                                {/* Overlay */}
                                <a 
                                    href={cert.viewLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='
                                        absolute inset-0 
                                        bg-slate-900/70 
                                        opacity-0 group-hover:opacity-100 
                                        transition-opacity duration-300
                                        flex justify-center items-center
                                        flex-col space-y-3
                                    '
                                >
                                    <span className='text-white text-xl font-bold tracking-wider'>View Certificate</span>
                                    <ExternalLink size={24} className="text-cyan-400"/>
                                </a>
                            </div>
                            
                            {/* Certificate Info (Always Visible) */}
                            <div className='p-4 border-t border-slate-700'>
                                <h3 className='text-xl font-bold text-gray-100 mb-1'>{cert.cname}</h3>
                                <p className='text-sm text-cyan-400 font-medium flex items-center space-x-2'>
                                    <Award size={16} className="text-cyan-500"/>
                                    <span>{cert.publisher}</span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Certificate;