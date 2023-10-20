import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='h-[300px] footer flex items-center text-white justify-around '>
        {/* <span className='text-[30px] font-bold'>FOOOKK YOUUU</span> */}
        <div className='h-full'>
        <img src="../assets/event_logo.svg" alt='event_logo' className='footer-logo'></img>
        </div>
        <div className='flex flex-col '>
          <span>Documents</span>
          <span>Rule Book</span>
          <span>Code of conduct</span>

        </div>
        <div className='flex flex-col items-center'>
          <span>Social Handles</span>
          <div className='flex items-center'>
           <Link  href="#" className='px-[0.5rem] text-[40px]'>
            <BsInstagram />
           </Link>
           <Link href="#" className='px-[0.5rem] text-[40px]'>
             <AiFillLinkedin/>
           </Link>

          </div>
        </div>
        <div className='flex flex-col items-center'>
        <span>Contact Us</span>
        <a href="mailto:gfg@viit.ac.in">gfg@viit.ac.in</a>

        </div>
    </div>
  )
}

export default Footer