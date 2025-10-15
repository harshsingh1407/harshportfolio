import React from 'react';
// Lucide Icons for professional touch
import { Send, Mail, User, MessageSquare, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Dhyan de: 'access_key' yahan hardcoded hai. Production mein isko environment variable se load karein.
    formData.append("access_key", "9315f336-b372-48a5-8223-bce27639ce17");

    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message submitted successfully! Thank you for reaching out.");
            event.target.reset();
        } else {
            console.error("Web3Forms Error:", data);
            setResult(`Submission failed: ${data.message}`);
        }
    } catch (error) {
        console.error("Fetch Error:", error);
        setResult("An error occurred. Please try again later.");
    }
  };

  return (
    // Unified Dark Background and Spacing
    <div id='contact' className='bg-slate-900 py-16 md:py-28 px-4'>
        <div data-aos="fade-up" className='max-w-4xl mx-auto'>
            
            {/* Title Section */}
            <div className='mb-16'>
                <h1 className='
                    text-cyan-400 text-4xl md:text-5xl font-extrabold 
                    text-center 
                    uppercase tracking-widest
                '>
                    Get In Touch
                    <span className='block w-20 h-1 bg-cyan-600 mx-auto mt-2 rounded-full'></span>
                </h1>
                <p className='text-gray-400 text-center mt-4 text-lg'>
                    I'm currently seeking new opportunities. Feel free to send me a message!
                </p>
            </div>

            {/* Main Contact Area */}
            <div className='flex flex-col md:flex-row gap-8'>

                {/* Left Side: Contact Info and Social Links */}
                <div className='md:w-1/3 space-y-6 p-6 md:p-0'>
                    <h2 className='text-2xl font-bold text-white'>Contact Info</h2>
                    <div className='space-y-3'>
                        {/* Email */}
                        <div className='flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors'>
                            <Mail size={20} className='text-cyan-500'/>
                            <a href="harshsingh95941@gmail.com" className='text-lg'>harshsingh95941@example.com</a> 
                        </div>

                        {/* Social Links */}
                        <div className='flex space-x-4 pt-4'>
                            <a 
                                href="https://www.linkedin.com/in/harshsingh1407/" 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className='text-gray-400 hover:text-cyan-400 transition-colors'
                            >
                                <Linkedin size={28}/>
                            </a>
                            <a 
                                href="https://github.com/harshsingh1407" 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className='text-gray-400 hover:text-cyan-400 transition-colors'
                            >
                                <Github size={28}/>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Form Card */}
                <div className='md:w-2/3'>
                    <div className='bg-slate-800 p-8 rounded-xl shadow-2xl shadow-cyan-900/50 border border-slate-700'>
                        
                        <h2 className='text-2xl font-bold text-white mb-6'>Send a Message</h2>
                        
                        <form onSubmit={onSubmit} className='space-y-4'>
                            
                            {/* Name Input */}
                            <div className='relative'>
                                <User size={20} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'/>
                                <input 
                                    className='bg-slate-700 w-full rounded-lg p-3 pl-10 border border-slate-700 focus:border-cyan-500 focus:ring-cyan-500 text-white placeholder-gray-400 transition-colors text-lg' 
                                    type="text" 
                                    name="name" 
                                    placeholder='Your Name' 
                                    required
                                />
                            </div>

                            {/* Email Input */}
                            <div className='relative'>
                                <Mail size={20} className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'/>
                                <input 
                                    className='bg-slate-700 w-full rounded-lg p-3 pl-10 border border-slate-700 focus:border-cyan-500 focus:ring-cyan-500 text-white placeholder-gray-400 transition-colors text-lg' 
                                    type="email" 
                                    name="email" 
                                    placeholder='Your Email' 
                                    required
                                />
                            </div>

                            {/* Message Textarea */}
                            <div className='relative'>
                                <MessageSquare size={20} className='absolute left-3 top-4 text-gray-400'/>
                                <textarea 
                                    className='bg-slate-700 w-full rounded-lg p-3 pl-10 border border-slate-700 focus:border-cyan-500 focus:ring-cyan-500 text-white placeholder-gray-400 transition-colors text-lg' 
                                    name="message" 
                                    placeholder='Your Message' 
                                    rows="4" 
                                    required
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className='
                                    bg-cyan-600 hover:bg-cyan-500 
                                    text-white 
                                    px-8 py-3 
                                    rounded-lg 
                                    w-full 
                                    text-xl font-semibold 
                                    shadow-lg shadow-cyan-500/30
                                    transition-all duration-300
                                    flex items-center justify-center space-x-3
                                '
                            >
                                <Send size={20}/>
                                <span>Send Message</span>
                            </button>

                        </form>
                        
                        {/* Result/Status Message */}
                        <div className='mt-4 text-center'>
                            <span className='text-lg font-semibold text-cyan-400'>{result}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}