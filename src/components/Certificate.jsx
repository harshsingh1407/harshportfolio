import React from 'react'
import htmlcertificate from '../assets/html.jpeg'
import csscertificate from '../assets/css.jpeg'
import javascriptcertificate from '../assets/javascript.jpg'
import reactcertificate from '../assets/reactcertificate.jpg'

const Certificate = () => {
    const certificates = [
        {
            cname: "HTML",
            image: htmlcertificate,
            publisher: "Great Learning",
        },
        {
            cname: "CSS",
            image: csscertificate,
            publisher: "Great Learning",
        },
        {
            cname: "JavaScript",
            image: javascriptcertificate,
            publisher: "Cisco"
        },
        {
            cname: "React",
            image: reactcertificate,
            publisher: "HackerRank"
        },
    ]
  return (
    <div id='certificate' className='bg-[#0f172a] py-10'>
        <div data-aos="fade-up">
            <div className='p-10'>
            <h1 className='text-[#3b82f6] text-3xl md:text-5xl font-bold text-center'>Certificate</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5'>
        <div className='w-full bg-[#1e293b] rounded-xl flex justify-center items-center'>
            <img src={htmlcertificate} alt="" className='aspect-3/2  rounded-xl p-5'/>
        </div>
        <div className='w-full bg-[#1e293b] rounded-xl flex justify-center items-center'>
            <img src={csscertificate} alt="" className='aspect-3/2 rounded-xl p-5'/>
        </div>
        <div className='w-full bg-[#1e293b] rounded-xl flex justify-center items-center'>
            <img src={javascriptcertificate} alt="" className='aspect-3/2 rounded-xl p-5'/>
        </div>
        <div className='w-full bg-[#1e293b]   rounded-xl flex justify-center items-center'>
            <img src={reactcertificate} alt="" className='aspect-3/2 rounded-xl p-5'/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Certificate