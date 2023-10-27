"use client"
import Link from 'next/link'
import React from 'react'

const SideNav = () => {

  const handleOnClick= ()=>{
    console.log("clicked")
    document.getElementById("side-nav").style.left="-70%"
  }

  return (
    <div id='side-nav' className='text-white absolute w-[70%] left-[-70%] flex flex-col items-center justify-center'>
       <a onClick={handleOnClick} href="/" className='sidebar-nav-link'> Home</a>
       <a onClick={handleOnClick} href="/#event-section" className='sidebar-nav-link'>Event</a>
       <a onClick={handleOnClick} href="/team" className='sidebar-nav-link'>Team</a>
       <a onClick={handleOnClick} href="/#sponsors"  className='sidebar-nav-link'>Sponsors</a>
       <a onClick={handleOnClick} href="#footer" className='sidebar-nav-link'>Contact Us</a>
    </div>
  )
}

export default SideNav