import React from 'react'

const Hero = () => {
  return (
    <div className='p-4'>
        <div className='relative max-h-[500px]' >
            <div className='absolute flex flex-col justify-center max-h-[500px] h-full p-4  bg-black/40 w-full '>
                <h1 className='text-3xl md:text-6xl lg:text7xl text-white font-bold '>The <span className='text-orange-500' >Best</span></h1>
                <h1 className='text-3xl md:text-6xl lg:text7xl text-white font-bold '><span className='text-orange-500'>Foods</span> Delivered </h1>
            </div>
            <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" className='object-cover bg-center md:w-full w-[600px] max-h-[500px] bg-black/40 '/>
        </div>
    </div>
  )
}
export default Hero