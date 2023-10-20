import React from 'react'

const SponserCard = ({img,alt}) => {
  return (
    <div className='flex justify-center items-center px-[1rem] w-[350px] h-[200px] border card rounded-[30px]'>
        <img src = {img} alt={alt}className='h-full w-full object-contain'/>
    </div>
    )
}

export default SponserCard