import React from 'react';
import './Home.css'
import Pic from './Layer2.png'
import px2vw from '../Util/Px2vw';

export default function Home() {
  console.log(px2vw(43));
  return (
    <div className={` absolute top-[8vh] right-0 md:p-2 p-4  md:w-[95.81%] w-[100%] md:h-[92vh] h-[184vh] justify-evenly flex flex-col md:flex-row bg-drk bg-no-repeat bg-cover`}>
      <div className={`md:w-[55%] md:h-[100%] h-[100%] flex w-[100%]  justify-center md:justify-normal flex-row items-center  `}>
        
          <div className=' md:pl-[131PX] md:Pt-[61px]'>
              <h2 className={`text-[43px] text-wToD  font-bold font-mono`}>Hello</h2>
              <h2 className='text-3xl font-bold text-wToD font-mono'>I,m Shailendra <span className='text-yellow-500'>Niranjan </span></h2>
              <p className='text-[#777777]'>Lorem ipsum dolor, sit amet consectetur.
              <br /> adipisicing elit. A, asperiores.</p>
              <button className='p-3 bg-[#1b1b1b] text-white rounded-md mt-7'>Download CV</button>
          </div>
      </div>  
      <div className='md:w-[45%] w-[100%] md:h-[100%] h-[100%] flex justify-center items-center   '>
          <div  className={`md:w-[60%]  md:h-[60%] w-[80%] h-[80%] bg-drk bg-no-repeat bg-cover rounded-[50%] shadow-5xl flex justify-center items-center `}>

              <div className={`md:w-[70%] md:h-[80%]  w-[80%] h-[80%] flex justify-center items-center bg-drk bg-no-repeat  rounded-[50%] shadow-5xl`}>
                <div className='logo w-[81%] h-[93%] rounded-[50%] flex justify-center items-center p-2'>
                <img className='w-[90%]' src={Pic} alt="" />
                </div>

              </div>
          </div> 
      </div>
    </div>  
  )
}
