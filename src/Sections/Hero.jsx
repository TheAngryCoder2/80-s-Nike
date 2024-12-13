import React from 'react'

const Hero = () => {
  return (
    <section id='home'
    className='w-full flex xl-flex-row border-2 flex-col 
    justify-center min-h-screen gap-10 max-container'>
      <div className='relative xl:w-2/5 flex flex-col 
      justify-center items-start w-full max-xl:padding-x
      pt-28'>
        <span className=''>
          <p className='text-xl pl-72 font-semibold '>Coming in 2025</p></span>
        <h1 className='spicy-rice-regular text-8xl
        max-sm:text-[72px] max-sm:leading-[82]'>Nike x Air Jordan</h1>
      </div>
      
    </section>
  )
}

export default Hero