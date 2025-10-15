import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Certificates", href: "#certificate" },
        { name: "Contact", href: "#contact" },
    ];

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <header className='
            fixed top-0 left-0 w-full z-50 
             backdrop-blur-sm 
            
            shadow-xl shadow-slate-950/70
        '>
            <div className='
                max-w-7xl mx-auto px-6 h-16 // HEIGHT FIX: h-16 (64px) final height
                flex justify-between items-center 
                text-white
            '>
                <div>
                    <h1 className='font-extrabold text-2xl md:text-3xl'>
                        Port<span className='text-cyan-400'>Folio</span>
                    </h1>
                </div>

                <nav className='hidden md:block'>
                    <ul className='flex space-x-7 text-lg font-medium'>
                        {navLinks.map((link) => (
                            <li 
                                key={link.name} 
                                className='
                                    group relative 
                                    text-gray-300 hover:text-cyan-400 
                                    transition-colors duration-300
                                '
                            >
                                <a href={link.href} className='py-2'>
                                    {link.name}
                                </a>
                                <span className='
                                    absolute bottom-0 left-0 w-0 h-[2px] 
                                    bg-cyan-400 
                                    transition-all duration-300 
                                    group-hover:w-full
                                '></span>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='md:hidden'>
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className='text-cyan-400 focus:outline-none p-1 rounded hover:bg-slate-800 transition-colors'
                    >
                        {isOpen ? <X size={26} /> : <Menu size={26} />}
                    </button>
                </div>

                <div className={`
                    fixed top-16 right-0 h-full w-64 // TOP FIX: h-16 ke hisaab se top-16
                    bg-slate-900 
                    shadow-2xl shadow-slate-950/90
                    transition-transform duration-300 ease-in-out
                    z-50
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
                    md:hidden
                `}>
                    <ul className='flex flex-col p-6 space-y-2'>
                        {navLinks.map((link) => (
                            <li 
                                key={link.name} 
                                className='border-b border-slate-800/50 last:border-b-0'
                            >
                                <a 
                                    href={link.href} 
                                    onClick={handleLinkClick}
                                    className='
                                        block py-3 
                                        text-gray-300 text-xl font-semibold 
                                        hover:text-cyan-400 hover:bg-slate-800/50 
                                        transition-colors duration-300
                                    '
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;