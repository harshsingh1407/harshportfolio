import React from 'react';
import { ExternalLink, Github } from 'lucide-react'; 

import weather from '../assets/weather.png';
import quickcart from '../assets/quickcart.png';
import haldiram from '../assets/haldiram.png';
import myflix from '../assets/myflix.jpg';
import cello from '../assets/cello.png';
import rockpaperscissor from '../assets/rockpaperscissor.png';
import scenestream from '../assets/scenestream.png';
import tictactoe from '../assets/tictactoe.png';
import utube from '../assets/utube.png';
import interviewedge from '../assets/interviewedge.jpg';

const projectsData = [
    {
        name: "InterviewEdge",
        tech: "MERN Stack & Tailwind",
        image: interviewedge,
        liveLink: "https://interviewedge.netlify.app/",
        githubLink: "https://github.com/harshsingh1407/INTERVIEWPREP",
        category: "MERN Apps",
    },
    {
        name: "UTube (React Clone)",
        tech: "HTML, Tailwind, JS & React",
        image: utube,
        liveLink: "https://utube14.netlify.app/",
        githubLink: "https://github.com/harshsingh1407/UTube",
        category: "React Apps",
    },
    {
        name: "SceneStream (Movie App)",
        tech: "HTML, Tailwind, JS & React",
        image: scenestream,
        liveLink: "https://scenestream.netlify.app/",
        githubLink: "https://github.com/harshsingh1407/SceneStream",
        category: "React Apps",
    },
    {
        name: "QuickCart (E-commerce)",
        tech: "HTML, Bootstrap, JS & Firebase",
        image: quickcart,
        liveLink: "https://quickcart14.netlify.app/",
        githubLink: "https://github.com/harshsingh1407/QuickCart",
        category: "Web Apps",
    },
    {
        name: "Weather App (API)",
        tech: "HTML, CSS, JS & API",
        image: weather,
        liveLink: "https://weatherapp-14.netlify.app/",
        githubLink: "https://github.com/harshsingh1407/WeatherApp",
        category: "Web Apps",
    },
    {
        name: "Tic-Tac-Toe Game",
        tech: "HTML, CSS, Bootstrap & JS",
        image: tictactoe,
        liveLink: "https://tictac14.netlify.app/",
        githubLink: "https://github.com/harshsingh1407/Tic-Tac-Toe",
        category: "Games",
    },
    {
        name: "Rock-Paper-Scissor",
        tech: "HTML, CSS, Bootstrap & JS",
        image: rockpaperscissor,
        liveLink: "https://rockpaper14.netlify.app/",
        githubLink: "https://github.com/harshsingh1407/Rock-Paper-Scissor",
        category: "Games",
    },
    {
        name: "MyFlix - NetFlix Clone",
        tech: "HTML, CSS, Bootstrap & JS",
        image: myflix,
        liveLink: "https://myflix1407.netlify.app/",
        githubLink: "https://github.com/harshsingh1407/myflix",
        category: "Clones",
    },
    {
        name: "Haldiram's (Website Clone)",
        tech: "HTML, CSS, Bootstrap & JS",
        image: haldiram,
        liveLink: "https://haldiram14.netlify.app/",
        githubLink: "https://github.com/harshsingh1407/Haldiram",
        category: "Clones",
    },
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = React.useState('All');

    const filteredProjects = projectsData.filter(project => 
        selectedCategory === 'All' ? true : project.category === selectedCategory
    );

    const categories = ['All', ...new Set(projectsData.map(p => p.category))];

    return (
        <div id='projects' className='bg-slate-900 py-16 md:py-28 px-4'>
            <div data-aos="fade-up" className='max-w-7xl mx-auto'>
                
                <div className='mb-16'>
                    <h1 className='
                        text-cyan-400 text-4xl md:text-5xl font-extrabold 
                        text-center 
                        uppercase tracking-widest
                    '>
                        My Projects
                        <span className='block w-20 h-1 bg-cyan-600 mx-auto mt-2 rounded-full'></span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-0">
                    {filteredProjects.map((project, index) => (
                        <div 
                            key={index}
                            className="
                                group relative 
                                rounded-xl overflow-hidden 
                                bg-slate-800 
                                border border-slate-700 
                                shadow-xl shadow-slate-900/50
                                transform transition-all duration-500 
                                hover:scale-[1.02] hover:shadow-cyan-500/50 
                                perspective-1000 // For 3D tilt effect
                            "
                        >
                            <img
                                src={project.image}
                                alt={project.name}
                                className="
                                    w-full h-56 object-contain 
                                    transition-transform duration-500 
                                    group-hover:scale-110 
                                    group-hover:rotate-1
                                "
                            />
                            
                            <div className="p-5">
                                <h3 className="text-2xl font-bold text-gray-100 mb-2">{project.name}</h3>
                                <p className="text-base text-gray-400 font-medium">{project.tech}</p>
                            </div>

                            <div className="
                                absolute inset-0 
                                bg-gradient-to-br from-slate-900/70 via-slate-800/70 to-cyan-900/60 // Multi-directional gradient overlay
                                backdrop-filter backdrop-blur-sm // Glassmorphism effect
                                flex flex-col justify-center items-center text-white 
                                opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500
                                transform group-hover:translate-z-20 // 3D effect
                            ">
                                <h3 className="text-3xl font-black text-cyan-400 mb-3 tracking-wide text-center px-4">{project.name}</h3>
                                <p className="text-md text-gray-300 mb-5 px-4 text-center">{project.tech}</p>
                                
                                <div className="flex gap-4">
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className='
                                            bg-cyan-600 hover:bg-cyan-500 
                                            text-white 
                                            px-6 py-3 
                                            text-lg font-semibold 
                                            rounded-full 
                                            shadow-md shadow-cyan-500/30
                                            transition-all duration-300
                                            flex items-center space-x-2
                                        '
                                    >
                                        <ExternalLink size={20} />
                                        <span>Live</span>
                                    </a>
                                    {project.githubLink && (
                                        <a 
                                            href={project.githubLink} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className='
                                                bg-slate-700 hover:bg-slate-600 
                                                text-white 
                                                px-6 py-3 
                                                text-lg font-semibold 
                                                rounded-full 
                                                shadow-md shadow-slate-700/30
                                                transition-all duration-300
                                                flex items-center space-x-2
                                            '
                                        >
                                            <Github size={20} />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects;