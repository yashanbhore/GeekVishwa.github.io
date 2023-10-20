import Link from 'next/link'
import React from 'react'


const nav = () => {
    return (
        <div className='flex justify-between items-center nav-wrapper lg:px-[5rem] bg-[*] md:px-[1rem]'>
            <div className=''>
                <img src="../assets/logo.png" alt="logo" width="250px" />
            </div>
            <div className='lg:text-[20px] text-white md:text-[16px]'>
                <Link href="#home" className='mx-3'>Home</Link>
                <Link href="#home"className='mx-3'>About</Link>
                <Link href="/team"className='mx-3'>Team</Link>
                <Link href="#home"className='mx-3'>Sponsors</Link>
                <Link href="#home"className='mx-3'>Contact</Link>
            </div>
            <div className='flex justify-center items-center'>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
            </div>
        </div>
    )
}

export default nav