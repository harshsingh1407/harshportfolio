import React from 'react'

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9315f336-b372-48a5-8223-bce27639ce17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id='contact' className='bg-[#0f172a] p-10'>
        <div data-aos="fade-up">
          <div className='p-10'>
            <h1 className='text-[#3b82f6] text-3xl md:text-5xl font-bold text-center'>Contact</h1>
        </div>
        <div className=' text-white flex justify-center'>
     <div className='border-1 md:w-[40vw] md:p-10 p-5 rounded-xl'>
         <form onSubmit={onSubmit}>
        <input className='bg-[#1e293b] w-full border-1 rounded-xl p-2 placeholder:text-white text-xl' type="text" name="name" placeholder='Name' required/>
        <input className='bg-[#1e293b] w-full border-1 rounded-xl p-2 my-3 placeholder:text-white text-xl' type="email" name="email" placeholder='Email' required/>
        <textarea className='bg-[#1e293b] w-full border-1 rounded-xl p-2 placeholder:text-white text-xl' name="message" placeholder='Message' required></textarea>

        <button type="submit" className='bg-[#1e293b] px-8 py-4 border-1 rounded-xl w-full hover:bg-white hover:text-black text-xl my-2'>Submit Form</button>

      </form>
      <span className='text-xl font-semibold'>{result}</span>
     </div>

    </div>
        </div>
    </div>
  );
}