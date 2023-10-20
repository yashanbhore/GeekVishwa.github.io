import React from 'react'

const Hero = () => {
    return (
        <div className='hero-section flex justify-center items-center flex-col '>
            <div className='mt-[3rem]'>
                <img src="../assets/event_logo.png" alt="" />
            </div>
            <div className='flex flex-col'>
                <div className='mb-[1.5rem]'>
                <span className='text-[40px] text-white'>Register</span><span className='text-[40px] text-white'> Now</span>
                </div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button>
            </div>
        </div>
    )
}

export default Hero