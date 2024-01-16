import React from 'react'
// import CircularProgress from "components/charts/CircularProgress";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function About() {
  const percentage = 66;
  return (
    <div className={`  absolute bg-drk bg-no-repeat bg-cover top-[8vh] right-0 md:w-[95.81%] w-[100%] p-3 md:h-[92dvh] h-[184dvh]`}>
      <div className={`md:h-[100%] h-[50%]`}>
        <div className='flex md:flex-row flex-col h-[100%] text-mono'>
          <div className='md:w-[50%] h-[100%] w-[100%]  flex flex-col p-12 gap-2  justify-end pb-20  '>
            <div className=' '>
                <div>
                  <h1 className='text-2xl font-bold text-wToD font-mono'  >
                    Hello
                    I,m Shailendra <span className='text-yellow-500'> Niranjan </span>
                  </h1>
                  <p className='text-[18px] text-[#e9ba71] font-bold  font-mono' >frontend Devloper || Compitative coder</p>


                </div>
                <div>
                  <div className={ ` text-ellipsis text-mono h-auto text-pretty text-[#777]`}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quia voluptatibus, blanditiis nihil veniam tenetur quibusdam quam inventore, ipsum, dolor vel temporibus consequuntur. Doloribus quam et atque accusantium odio sunt est ad laudantium ipsum dicta illum voluptate consectetur eum dolorum recusandae dignissimos alias, accusamus nisi? Adipisci reprehenderit nostrum ipsam asperiores.
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus nobis dignissimos iste autem ducimus.
                    <span className='hidden md:block'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio quia voluptatibus, blanditiis nihil veniam tenetur quibusdam quam inventore, ipsum, dolor vel temporibus consequuntur. Doloribus quam et atque accusantium odio sunt est ad laudantium ipsum dicta illum voluptate consectetur eum dolorum recusandae dignissimos alias, accusamus nisi? Adipisci reprehenderit nostrum ipsam asperiores. </span>
                    
                    </div>
                </div>
                <div className=''>
                  <button className='p-2 bg-[#1b1b1b] text-white rounded-md mt-7 px-9'>Resume</button>
                </div>
              </div>
          </div>
          <div className='md:w-[50%] w-[100%] h-[100%]  flex flex-col p-12 gap-7 justify-center   '>
            <div className='flex  h-[100%] flex-col gap-7 justify-evenly' >
              <div className=' flex flex-col justify-center items-center'>
                <h1 className='font-mono border-b-4 border-[var(--txt-colr1)] pb-2 text-wToD text-3xl font-semibold'>My Skill</h1>
                
              </div>
              <div className='flex flex-col gap-4'>
                <div className='flex flex-row justify-evenly '>
                  <div className="w-[70px] items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                  <div className="w-[70px] items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                  <div className="w-[70px] items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                </div>
                <div className='flex flex-row justify-evenly'>
                <div className="w-[70px] flex items-center justify-center flex-col  gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                  <div className="w-[70px]  items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                  <div className="w-[70px]  items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                </div>
                <div className='flex flex-row justify-evenly'>
                <div className="w-[70px]  items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                  <div className="w-[70px]  items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                  <div className="w-[70px]  items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                </div>
                <div className='flex flex-row justify-evenly'>
                <div className="w-[70px]  items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                  <div className="w-[70px]  items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                  <div className="w-[70px]  items-center justify-center flex-col flex gap-3">
                    <span>CSS</span>
                    <CircularProgressbar value={70} text={`${70}%`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}
