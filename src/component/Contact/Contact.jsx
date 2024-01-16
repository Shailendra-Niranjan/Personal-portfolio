import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { RiMessage2Fill } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const form = useRef();
 const email = "shailendraniranjan771@gmail.ocm"
  const openGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/u/0/#inbox?compose=new&to=${email}`;
    window.location.href = gmailUrl;
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7sahghy', 'template_lnj6v1g', form.current, 'TyAkiiGiWW5hr1Hb2')
      .then((result) => {
          console.log(result.text);
          toast .success("Message send!", {
            position: "top-center",
            autoClose: 5004,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"})
            
            
      }, (error) => {
          console.log(error.text);
          toast .error("Message send!", {
            position: "top-center",
            autoClose: 5004,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"})
      });

  };
  return (
    <div className={` bg-green-100  absolute top-[8vh] right-0 md:w-[95.81%] w-[100%] bg-drk bg-no-repeat bg-cover  h-[100vh] md:h-[92vh]`}>
      <div className={` flex md:flex-row flex-col h-[92vh]`}>
        <div className={`w-[47%] hidden md:block h-[100%] p-16   `} >
          <div className=' h-[100%] gap-12 justify-evenly p-8 flex flex-col  items-center'>
            <div className='flex flex-col gap-3'>
              <div className='font-mono font-bold space-x-2 text-[40px]'>
                <h1 className='text-wToD'>Open for conversations, ideas, <br /> and <span className='text-yellow-500'>connections</span></h1>
              </div>
              <div className='font-mono font-bold text-[#777]'>
                <p>Let's Create Something Together 🤞</p>
              </div>
            </div>
            <div>
              <div>
                <div className='inline-flex px-4 shadow-5xl rounded-3xl p-1 flex-row justify-center gap-4   items-center'>
                  <div className='p-2 bg-slate-300  rounded-md'>
                    <RiMessage2Fill />
                  </div>
                  <div className='flext flex-col justify-center  items-center'>
                    <p className='font-mono text-wToD'>Mail me at </p>
                    <p className='font-mono text-blue-800 '>shailendraniranjan771@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`md:w-[53%]  w-[100%] h-[100%] md:float-row  justify-evenly flex-col flex md:justify-center items-center`}>
          <div className={`md:w-[56%] w-[70%] shadow-5xl  rounded-3xl`}>
            <div className='border-2 rounded-3xl p-5'>
              <form action="" method='' ref={form} onSubmit={sendEmail} className='flex flex-col font-mono font-bold text-xl gap-3'>
                <h1 className='text-wToD'>Send us Message 🚀</h1>
                <input name='from_name' className='p-1.5 font-mono text-[15px] rounded-md' type="text" required autoComplete='no'  placeholder='full name'/>
                <input name='to_name' className='p-1.5 font-mono text-[15px] rounded-md' type="email"  required autoComplete='no' placeholder='Email'/>
                <p className='text-sm text-[#777777]'>Let's Connect and Innovate Together!</p>
                <textarea name='message' className='resize-none p-2 rounded-md font-mono text-[15px]' required name="message" id="" cols="20" placeholder='write a message'  rows="7"></textarea>
                <input type='submit' name='Send Message' className='p-4 bg-[#1b1b1b] font-mono text-white rounded-md' />
              </form>
            </div>
          </div>
          <div className=' md:hidden   block' >
                <div className='flex px-4 shadow-5xl rounded-sm flex-row justify-center gap-4   items-center'>
                  <div className='p-2 bg-slate-300  rounded-md'>
                    <RiMessage2Fill />
                  </div>
                  <div className='flext flex-col justify-center items-center'>
                    <p className='font-mono text-black'>Mail me at </p>
                    <button onClick={openGmail} className='font-mono text-blue-800 '>shailendraniranjan771@gmail.com</button>
                  </div>
                </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
  </div>
  )
}
