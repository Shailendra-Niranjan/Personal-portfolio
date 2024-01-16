import React from 'react'
import { IoIosArrowBack ,IoIosArrowForward} from "react-icons/io";

export default function Project() {
  return (
    <div className=' flex flex-col justify-center items-center bg-drk bg-no-repeat bg-cover  absolute top-[8vh] right-0 p-4 md:w-[95.81%] w-[100%] md:h-[92vh] h-[184vh]'>
        <h1 className='font-mono border-b-4 border-[var(--txt-colr1)] text-3xl pb-2 text-wToD font-semibold'>My Project</h1>
        <div className={` w-[95.81%] md:h-[72%] h-[100%] flex flex-row justify-center items-center `}>
            <div className='flex flex-row w-[88%] md:h-[68%] h-[90%]'> 
            <div className='md:flex hidden justify-center items-center'>

            <IoIosArrowBack className='text-wToD' size={27} />
            </div>
              <div className='flex md:flex-row  flex-col w-[100%] justify-around gap-2'>
                  <div className={`flex justify-center h-[100%] w-[100%] rounded-3xl   items-center`}>
                    <div className=' bg-no-repeat md:h-[89%] h-[100%] w-[100%] md:w-[80%] shadow-5xl rounded-3xl bg-cover bg-[url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600)]'>

                    </div>
                  </div>
                  <div className={`flex justify-center items-center rounded-3xl shadow-5xl w-[100%] h-[100%]`}>
                    <div className=' bg-no-repeat h-[100%] w-[100%]  rounded-3xl bg-cover  bg-[url(https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600)]'>

                    </div>
                  </div>
                  <div  className={`flex justify-center h-[100%] items-center  w-[100%]`}>
                    <div className=' bg-no-repeat  shadow-5xl md:h-[89%] md:w-[89%] w-[100%] h-[100%] rounded-3xl bg-cover bg-[url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600)]'>

                    </div>
                  </div>
              </div>
              <div className='md:flex hidden  justify-center items-center'>
              <IoIosArrowForward   className='text-wToD' size={27}/>
              </div>
            </div>
      </div>
    </div>
  )
}
