import React, { useEffect } from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

function SuperQuality() {

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
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          Geek
          <span className='text-[#43a047]'> Vishwa </span>
          {/* <span className='text-coral-red'> Quality </span> Shoes */}
        </h2>
        <p className='mt-5 lg:max-w-lg info-text'>
      GeekVishwa Hackathon is planned to be one of the largest hybrid (Offline-Online) hackathons in Pune, Organized by GeeksForGeeks Student Chapter VIIT.
        </p>
        <p className='mt-5 lg:max-w-lg info-text'>
          It is event of unprecedented scale, opportunity, and rewards, where we intent to attract and showcase the brightest talents across the plethora of engineering colleges in Pune.
        </p>
        <div className='mt-12'>
          <Button label='View Details' />
        </div>
        <div
          className="apply-button"
          alt ="DEVFOLIO LOGO"
          data-hackathon-slug="YOUR-HACKATHON-SLUG"
          data-button-theme="light"
          // style={"height": "44px", "width": "312px"}
          style={{height:"44px",width:"312px"}}
        ></div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt="products details"
          width={570}
          height={522}
          className='object-contain'
          style={{borderRadius:"50%"}}
        />
      </div>
    </section>
  )
}

export default SuperQuality