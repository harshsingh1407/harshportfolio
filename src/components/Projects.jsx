import React from 'react'
import weather from '../assets/weather.png'
import quickcart from '../assets/quickcart.png'
import haldiram from '../assets/haldiram.png'
import cello from '../assets/cello.png'
import rockpaperscissor from '../assets/rockpaperscissor.png'
import scenestream from '../assets/scenestream.png'
import tictactoe from '../assets/tictactoe.png'
import utube from '../assets/utube.png'

const Projects = () => {
    const projects = [
    {
      name: "UTube",
      tech: "HTML, CSS, Tailwind, JavaScript & React",
      image: utube,
      link: "https://utube14.netlify.app/",
    },
    {
      name: "SceneStream",
      tech: "HTML, CSS, Tailwind, JavaScript & React",
      image: scenestream,
      link: "https://scenestream.netlify.app/",
    },
    {
      name: "QuickCart",
      tech: "HTML, CSS, Bootstrap, JavaScript & Firebase",
      image: quickcart,
      link: "https://quickcart14.netlify.app/",
    },
    {
      name: "Weather App",
      tech: "HTML, CSS, JavaScript & API",
      image: weather,
      link: "https://weatherapp-14.netlify.app/",
    },
    {
      name: "Tic-Tac-Toe",
      tech: "HTML, CSS, Bootstrap & JavaScript",
      image: tictactoe,
      link: "https://tictac14.netlify.app/",
    },
    {
      name: "Rock-Paper-Scissor",
      tech: "HTML, CSS, Bootstrap & JavaScript",
      image: rockpaperscissor,
      link: "https://rockpaper14.netlify.app/",
    },
    {
      name: "Cello",
      tech: "HTML, CSS, Bootstrap & JavaScript",
      image: cello,
      link: "https://cello14.netlify.app/",
    },
    {
      name: "Haldiram's",
      tech: "HTML, CSS, Bootstrap & JavaScript",
      image: haldiram,
      link: "https://haldiram14.netlify.app/",
    },
    // Add more projects here...
  ];
  return (
    <div id='projects' className='bg-[#0f172a] py-5'>
      <div data-aos="fade-up">
          <div className='p-15'>
            <h1 className='text-[#3b82f6] text-3xl md:text-5xl font-bold text-center'>Projects</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects.map((project, index) => (
        <a
          href={project.link}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-[#1e293b] bg-opacity-60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition duration-300">
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="text-sm mt-2">{project.tech}</p>
          </div>
        </a>
      ))}
    </div>
      </div>
    </div>
  )
}

export default Projects