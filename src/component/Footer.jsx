"use client"
import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import Link from 'next/link'
import { useEffect } from 'react'

const Footer = () => {
  // useEffect(() => {
  //   const canvas = document.getElementById('Matrix');
  //   const context = canvas.getContext('2d');

  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;

  //   const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
  //   const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  //   const nums = '0123456789';

  //   const alphabet = katakana + latin + nums;

  //   const fontSize = 10;
  //   const columns = canvas.width / fontSize;

  //   const rainDrops = [];

  //   for (let x = 0; x < columns; x++) {
  //     rainDrops[x] = 1;
  //   }

  //   const draw = () => {
  //     context.fillStyle = 'rgba(0, 0, 0, 0.05)';
  //     context.fillRect(0, 0, canvas.width, canvas.height);

  //     context.fillStyle = '#0F0';
  //     context.font = fontSize + 'px monospace';

  //     for (let i = 0; i < rainDrops.length; i++) {
  //       const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
  //       context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

  //       if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
  //         rainDrops[i] = 0;
  //       }
  //       rainDrops[i]++;
  //     }
  //   };

  //   setInterval(draw, 30);
  // }, [])

  useEffect(() => {
      function lines(){
        let width = Math.random() * 12;
        let e = document.createElement('div')
        e.setAttribute("class", "circle")
        document.body.appendChild(e)
        e.style.width=2+width+'px'
        e.style.left=Math.random()*innerWidth+'px';
        e.style.margin="20px 0"

        setTimeout(() => {
          document.body.removeChild(e)
        },5000);
      }

      setInterval(function(){
        lines()
      },500)
  }, [])

   

  return (
    <div className='footer' id='footer'>

      <div className='h-[300px] flex items-center text-white justify-around footer-inner'>
        <div className='h-[80%] footer-logo'>
          <img src="../assets/gfg_logo_small.png" alt='event_logo' className='footer-logo'></img>
        </div>
        <div className='flex flex-col footer-block'>
          <span className='underline decoration-[#104a20] decoration-[0.4rem] text-[30px] underline-offset-8 footer-title'>Documents</span>
          <div className='flex flex-col mt-[1rem] text-[20px] footer-item'>

            <a href='https://hackthespace.co/images/footer/Code%20of%20Conduct%20-%20HTS.pdf'>
              <span>Rule Book</span>
            </a>
            <a className='' href='https://devfolio.co/code-of-conduct'>
              <span>Code of conduct</span>
            </a>
          </div>

        </div>
        <div className='flex flex-col footer-block'>
          <span className='underline decoration-[#104a20] decoration-[0.4rem] text-[30px] underline-offset-8 footer-title'>Social Handles</span>
          <div className='flex items-center mt-[1rem] footer-item'>
            <Link href="https://www.instagram.com/gfg_viit/" className='px-[0.5rem] text-[40px] footer-social-icons'>
              <BsInstagram />
            </Link>
            <Link href="https://www.linkedin.com/company/geeksforgeeks-viit-student-chapter/" className='px-[0.5rem] text-[40px]'>
              <AiFillLinkedin />
            </Link>

          </div>
        </div>
        <div className='flex flex-col items-center footer-block'>
          <span className='underline decoration-[#104a20] decoration-[0.4rem] text-[30px] underline-offset-8 footer-title '>Contact Us</span>
          <a href="mailto:gfg@viit.ac.in" className='mt-[1rem] text-[20px] footer-item'>gfg@viit.ac.in</a>

        </div>
      </div>

      <div className=' flex justify-center align-center pb-[1rem] text-[18px] copyright'>
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
