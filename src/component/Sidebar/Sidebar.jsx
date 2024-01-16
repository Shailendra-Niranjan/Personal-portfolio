import React from 'react'
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Sidebar() {
  return ( 
    <div className={`  hidden md:flex flex-col w-16 h-[92vh] justify-center items-center bg-drk  gap-4`}>
<IoLogoTwitter className='text-wToD'  size={27}/>
<FaLinkedinIn  className='text-wToD'  size={27}/>
<SiLeetcode  className='text-wToD'  size={27}/>
<FaLink  className='text-wToD' size={27} />

    </div>
  )
}
