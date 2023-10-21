import Link from 'next/link'
import React from 'react'


const nav = () => {
    return (
        <div  className=' items-center nav-wrapper lg:px-[5rem] bg-[*] md:px-[1rem] flex justify-around flex  '>
            <div >
                <img src="../assets/gfg_logo.png" alt="logo" width="200px" />
            </div>
            <div className='lg:text-[20px] text-white md:text-[16px]'>
                <Link href="/" className='mx-5'>Home</Link>
                <Link href="#event-section"className='mx-5'>Events</Link>
                <Link href="/team"className='mx-5'>Team</Link>
                <Link href="#home"className='mx-5'>Sponsors</Link>
                <Link href="#home"className='mx-5'>Contact</Link>
            </div>
            <div className='flex justify-center items-center'>
            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button> */}
            </div>
        </div>
    )
}

export default nav