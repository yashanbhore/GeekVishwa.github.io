import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link'


const Footer = () => {
  return (
    <div className='footer'>

      <div className='h-[300px] flex items-center text-white justify-around '>
        <div className='h-full'>
          <img src="../assets/event_logo.svg" alt='event_logo' className='footer-logo'></img>
        </div>
        <div className='flex flex-col '>
          <span className='underline decoration-[#104a20] decoration-[0.4rem] text-[30px] underline-offset-8'>Documents</span>
          <div className='flex flex-col mt-[1rem] text-[20px]'>

            <a href='https://hackthespace.co/images/footer/Code%20of%20Conduct%20-%20HTS.pdf'>
              <span>Rule Book</span>
            </a>
            <a className='mt-[0.8rem]' href='https://devfolio.co/code-of-conduct'>
              <span>Code of conduct</span>
            </a>
          </div>

        </div>
        <div className='flex flex-col '>
          <span className='underline decoration-[#104a20] decoration-[0.4rem] text-[30px] underline-offset-8'>Social Handles</span>
          <div className='flex items-center mt-[1rem]'>
            <Link href="https://www.instagram.com/gfg_viit/" className='px-[0.5rem] text-[40px]'>
              <BsInstagram />
            </Link>
            <Link href="https://www.linkedin.com/company/geeksforgeeks-viit-student-chapter/" className='px-[0.5rem] text-[40px]'>
              <AiFillLinkedin />
            </Link>

          </div>
        </div>
        <div className='flex flex-col items-center'>
          <span className='underline decoration-[#104a20] decoration-[0.4rem] text-[30px] underline-offset-8 '>Contact Us</span>
          <a href="mailto:gfg@viit.ac.in" className='mt-[1rem] text-[20px]'>gfg@viit.ac.in</a>

        </div>
      </div>

      <div className=' flex justify-center align-center pb-[1rem] text-[18px]'>
        <span>Made with &nbsp;</span>
        &#10084;&#65039;
        <span>&nbsp; by <Link href="https://github.com/AryanP45/GeekVishwa.github.io">  GFG Team
        </Link>.
        </span>

      </div>

    </div>
  )
}

export default Footer
