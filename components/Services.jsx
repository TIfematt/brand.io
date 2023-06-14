import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div>
        <section className='flex flex-col items-center justify-center gap-7'>
            <h1 className='hero-heading text-4xl sm:text-6xl font-semibold font-inter'>What we Offer?</h1>
            <p className='max-w-2xl text-center'> In virtual space through communication platforms. 
                Durable relations that extend beyond immediate 
                genealogical ties.
            </p>
        </section>
        {/* cards */}
        <section className='mt-8'>
            <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                <div className=' bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                    <div className='message-icon' />
                    {/* <Image 
                        src='/assets/messageIcon.png'
                        width={120}
                        height={120}
                        alt='logo'
                    /> */}
                </div>
                <h3 className='pt-6 text-lg font-bold font-inter'>Community Support</h3>
                <p className='pt-2 max-w-xm text-primary font-satoshi'>Apps keep work and information right at your fingertips—and 
                    Slack keeps it all securely.
                </p>
            </div>
        </section>

    </div>
  )
}

export default Services