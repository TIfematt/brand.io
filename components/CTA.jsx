import React from 'react'

const CTA = () => {
  return (
    <section className='bg-tertiary w-screen h-screen pt-4 lg:h-152 lg:py-[5.75rem] lg:px-[17.31rem] md:pt-[8rem] md:h-[40rem] flex flex-col items-center lg:justify-center'>
      <div className='flex flex-col flex-wrap gap-[4rem] sm:gap-[12.81rem] sm:flex-row'>
        <div className='flex flex-col gap-[1.88rem] items-center justify-center'>
          <span className='text-3xl sm:text-5xl font-semibold hero-heading'>
            25,356
          </span>
          <p className='text-primary font-inter text-[1.25rem] font-normal'>
            Projects Done
          </p>
        </div>
        <div className='flex flex-col gap-[1.88rem] items-center justify-center'>
          <span className='text-3xl sm:text-5xl font-semibold hero-heading'>
            1M+
          </span>
          <p className='text-primary font-inter text-[1.25rem] font-normal'>
            Projects Done
          </p>
        </div>
        <div className='flex flex-col gap-[1.88rem] items-center justify-center'>
          <span className='text-3xl sm:text-5xl font-semibold hero-heading'>
            95%
          </span>
          <p className='text-primary font-inter text-[1.25rem] font-normal'>
            Happy Customers
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-[1.38rem] mt-20 items-center justify-center'>
        <h1 className='hero-heading text-4xl sm:text-6xl font-semibold max-w-[25rem] text-center sm:max-w-full'>Want to start a Project With us?</h1>
        <p className='max-w-[25rem] sm:max-w-[41.25rem] text-primary text-[1.25rem] font-normal font-inter text-center'>
          Warrant present garrets limited cordial in inquiry to. 
          Supported me sweetness behaviour shameless excellent so arranging.
        </p>
      </div>
      <button className='btn text-white w-48 h-12 mt-[1.87rem]'>Get Started</button>
    </section>
  )
}

export default CTA