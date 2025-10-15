import React from 'react';
// Zap icon का अब कोई उपयोग नहीं है, इसलिए इसे हटा दिया गया है

// --- Skill Data ---
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
    { name: 'Git', color: 'red-600' },
    { name: 'GitHub', color: 'gray-400' },
    { name: 'Next.js', color: 'gray-200' },
];

const Skills = () => {
    // कणों का एनीमेशन आपके पूरे बैकग्राउंड पर दिखना चाहिए, 
    // इसलिए यहाँ से 'bg-slate-950' हटा दें।
    return (
        // 'bg-slate-950' यहाँ से हटा दिया गया है
        <div id='skills' className='px-6 py-20 md:py-32'> 
            <div className='max-w-7xl mx-auto'>
                
                {/* Section Header */}
                <div data-aos="fade-up" className="mb-12">
                    <h2 className='
                        text-4xl md:text-5xl font-extrabold text-center 
                        // कलर ग्रेडिएंट को थोड़ा और गहरा और कंट्रास्ट वाला बनाया
                        text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-400
                        mb-4
                    '>
                        Technical Skills
                    </h2>
                    <p className='text-slate-400 text-center text-lg max-w-2xl mx-auto'>
                        A comprehensive overview of the technologies and tools I specialize in.
                    </p>
                </div>
                
                {/* Skills Grid */}
                <div 
                    data-aos="fade-up" 
                    data-aos-delay="200"
                    className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 py-8' // गैप 4 से 6 किया
                >
                    {SKILLS_DATA.map((skill, index) => {
                        const brandColorVar = `var(--color-${skill.color.replace('-', '-')})`;

                        return (
                            <div 
                                key={index} 
                                className={`
                                    group flex items-center justify-center
                                    // Base Card Look: थोड़ा हल्का काला बैकग्राउंड, बिना बॉर्डर
                                    bg-slate-800/50 backdrop-blur-sm // हल्का ब्लर इफ़ेक्ट
                                    text-slate-300 text-lg font-semibold 
                                    p-4 rounded-xl shadow-2xl // बड़ी शैडो
                                    cursor-pointer
                                    transition-all duration-300 ease-in-out
                                    transform hover:scale-[1.05] 
                                `}
                                style={{
                                    // यहाँ CSS वेरिएबल्स हैं। आप इन्हें index.css में भी डाल सकते हैं।
                                    '--color-orange-500': '#f97316',
                                    '--color-blue-500': '#3b82f6',
                                    // ... बाकी सभी कलर वेरिएबल्स ...
                                }}
                                // HOVER EFFECTS:
                                onMouseEnter={(e) => {
                                    // 1. टेक्स्ट को ब्रांड कलर दें
                                    e.currentTarget.style.color = brandColorVar;
                                    // 2. सॉफ्ट ग्लो/शेडो इफ़ेक्ट (सबसे बड़ा सुधार)
                                    e.currentTarget.style.boxShadow = `
                                        0 0 5px 1px ${brandColorVar}C0, /* हल्का इनर ग्लो */
                                        0 0 15px 3px ${brandColorVar}80  /* बड़ा आउटर ग्लो */
                                    `; 
                                    // 3. बैकग्राउंड को थोड़ा डार्क करें
                                    e.currentTarget.style.backgroundColor = '#1e293b'; // slate-800
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = '#cbd5e1'; // Revert to slate-300
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.backgroundColor = 'rgba(30, 41, 59, 0.5)'; // Revert to slate-800/50
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