"use client"
import React from 'react'
import { useEffect } from 'react';
import Typewriter from "typewriter-effect";

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
            <div className=''>
                <img src="../assets/loader.gif" alt="" />
            </div>

            <div className='flex flex-col items-center'>
                <div className="App flex mb-[2rem]">
                    <Typewriter

                        options={{
                            autoStart: true,
                            delay: 75,
                            loop: true,
                        }}

                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Learn, Practice, and Excel !")
                                .pauseFor(100)
                                .deleteAll()
                                .start()
                        }}
                    />
                </div>
                <div className='mb-[1.5rem] flex-center justify-center'>
                    <span className='text-[40px] text-6xl font-bold gfg-gradient '>Register Now !!!</span>
                </div>

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