"use client"
import React from 'react'
import { useEffect } from 'react';

const Hero = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (
        <div className='hero-section flex justify-center items-center flex-col '>
            <div className='mt-[3rem]'>
                <img src="../assets/loader.gif" alt="" />
            </div>
            <div className='flex flex-col items-center'>
                <div className='mb-[1.5rem] flex-center justify-center'>
                    <span className='text-[40px] text-6xl font-bold gfg-gradient '>Register Now !!!</span>
                </div>

                {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Register</button> */}

                <div
                    className="apply-button"
                    data-hackathon-slug="geekvishwa"
                    data-button-theme="light"
                    style={{ height: "44px", width: "312px" }}
                ></div>

            </div>
        </div>
    )
}

export default Hero