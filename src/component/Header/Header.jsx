import React ,{useState} from 'react';
import {Link} from "react-router-dom";
import './Header.css';
import Logo from './logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoSunny } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import Modal from 'react-modal'
import { RxCross1 } from "react-icons/rx";


function Header(props) {
    const [toggle ,setToggle ]= useState(true);
    const [show , setshow] = useState(false);
    const isshow = ()=>{
        setshow(!show);
    }
    const customStyles = {
        content: {
          top: '7%',
          left: '0%',
          right: '0%',
          bottom: '0%',
          
          
        },
      };

    function mode(){
        setToggle(!toggle);
        if(toggle){
            document.querySelector("body").setAttribute("data-theme" , "dark")
        }
        else{
            document.querySelector("body").setAttribute("data-theme" , "light")

        }
    }
    return (
        <>
        <div className=' bg-color2 shadow-lg shadow-gray-300 z-10  h-[8vh]'>
            <header className={'  flex flex-row justify-between  h-[8vh]'}>
                <div className={` text-yellow-500 text-2xl font-sans flex flex-row  items-center h-[8vh] pl-3 md:pl-12`}> 
                    <div className='w-[50vw] h-[3.5vh] bg-logo bg-cover bg-no-repeat'  > </div>
                </div>
                <div className=' flex flex-row gap-2'>  
                    <div className='flex flex-row justify-around'>
                        <ul className={` text-black hidden text-wToD  font-sans md:flex flex-row justify-center items-center h-[8vh] pr-5`}>
                            <li className={`px-4`}>
                                <Link  to="/">Home</Link>
                            </li> 
                            <li className='px-4'>
                                <Link to="/about">About</Link>
                            </li>
                            <li className='px-4'>
                                <Link to="/project">Project</Link>
                            </li> 
                            <li className='px-4'>
                                <Link to="/contact">Contact</Link>
                            </li>
                            
                        </ul>
                        <div className='flex justify-center items-center p-3 pb-2 '>
                                    <div  onClick={mode} className=' transition-all block  duration-500 ease-in-out rounded-[50%] bg-color1 shadow-lg p-1'>
                                        <IoSunny size={30} className={` ${toggle ?'':'hidden'}  transition-all  duration-500 ease-in-out`}/>
                                        <LuMoon size={30}  className={` ${toggle?'hidden':''} transition-all  duration-500 ease-in-out`}/>

                                    </div>  
                        </div>
                    </div>                   

                    <div className={`md:hidden p-3  flex justify-center items-center  `}>
                        <GiHamburgerMenu onClick={isshow} className='' size={40}/>
                    </div>
                </div>
                
            </header>
          
        </div>
        <Modal isOpen={show} onRequestClose={isshow} style={customStyles}>
            <div>
            <ul className={` text-black font-sans flex flex-row  h-[100%] `}>
                    <div className='flex w-[90%] flex-col gap-2'>
                        <li  className={`px-4  flex justify-center items-center p-3`}>
                            <Link onClick={isshow} to="/">Home</Link>
                        </li> 
                        <li className='px-4   flex justify-center items-center p-3'>
                            <Link onClick={isshow} to="/about">About</Link>
                        </li>
                        <li className='px-4  flex justify-center items-center p-3'>
                            <Link onClick={isshow} to="/project">Project</Link>
                        </li> 
                        <li className='px-4  flex justify-center items-center p-3'>
                            <Link onClick={isshow} to="/contact">Contact</Link>
                        </li>
                    </div>
                    <div className='w-[10%] flex justify-start items-start'>
                        <RxCross1 size={25}   onClick={isshow} />
                       
                    </div>
            </ul>
            </div>
            
        </Modal>
        </>
    );

}

export default Header;