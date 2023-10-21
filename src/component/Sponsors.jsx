import React from 'react'
import SponserCard from './SponserCard'

const Sponsors = ({type,data}) => {
    return (
        <section>
            <div className='flex justify-center items-center mb-[3rem]'>
                <div className='dash mx-[2rem] ' />
                <span className='text-[30px] text-white'>
                    {type}
                </span>
                <div className='dash mx-[2rem] '>

                </div>
            </div>
            <div className='flex justify-around mb-[5rem]'>
            {data.map((card) => (
                <SponserCard img={card.img} alt={card.alt}/>
            ))}

            </div>
        </section>
    )
}

export default Sponsors