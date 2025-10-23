import React from 'react';

const SKILLS_DATA = [
    { name: 'HTML5', color: 'orange-500' },
    { name: 'CSS3', color: 'blue-500' },
    { name: 'Tailwind CSS', color: 'cyan-400' },
    { name: 'Bootstrap', color: 'purple-500' },
    { name: 'JavaScript', color: 'yellow-400' },
    { name: 'ReactJS', color: 'cyan-300' },
    { name: 'NodeJS', color: 'green-500' },
    { name: 'ExpressJS', color: 'gray-300' },
    { name: 'MongoDB', color: 'green-400' },
    { name: 'Next.js', color: 'gray-200' },
    { name: 'Git', color: 'red-600' },
    { name: 'GitHub', color: 'gray-400' },
];

const Skills = () => {

    return (
        <div id='skills' className='px-6 py-20 md:py-32'> 
            <div className='max-w-7xl mx-auto'>
                
                <div data-aos="fade-up" className="mb-12">
                    <h2 className='
                        text-4xl md:text-5xl font-extrabold text-center
                        text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400
                        mb-4
                    '>
                        Technical Skills
                    </h2>
                    <p className='text-slate-400 text-center text-lg max-w-2xl mx-auto'>
                        A comprehensive overview of the technologies and tools I specialize in.
                    </p>
                </div>
                
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                    className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 py-8'
                >
                    {SKILLS_DATA.map((skill, index) => {
                        const brandColorVar = `var(--color-${skill.color.replace('-', '-')})`;

                        return (
                            <div 
                                key={index} 
                                className={`
                                    group flex items-center justify-center
                                    bg-slate-800/50 backdrop-blur-sm
                                    text-slate-300 text-lg font-semibold 
                                    p-4 rounded-xl shadow-2xl
                                    cursor-pointer
                                    transition-all duration-300 ease-in-out
                                    transform hover:scale-[1.05] 
                                `}
                                style={{
                                    '--color-orange-500': '#f97316',
                                    '--color-blue-500': '#3b82f6',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = brandColorVar;
                                    e.currentTarget.style.boxShadow = `
                                        0 0 5px 1px ${brandColorVar}C0,
                                        0 0 15px 3px ${brandColorVar}80
                                    `; 
                                    e.currentTarget.style.backgroundColor = '#1e293b'; 
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#cbd5e1';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.5)';
                                }}
                            >
                                <span className={`transition-colors duration-300`}>
                                    {skill.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
                
            </div>
        </div>
    )
}

export default Skills;