import React from 'react'
import Image from 'next/image'

const Services = () => {

    // const imageStyle = {
    //     width: '370px',
    //     height: '270px',
    //     position: 'relative',
    //     top: '6px'

    // }

  return (
    <>
        <section className='flex flex-col items-center justify-center gap-7'>
            <h1 className='hero-heading text-4xl sm:text-6xl font-semibold font-inter'>
                What we Offer?
            </h1>
            <p className='max-w-2xl text-center text-primary filter drop-shadow-lg'> 
                In virtual space through communication platforms.
                Durable relations that extend beyond immediate
                genealogical ties.
            </p>
        </section>
        {/* cards */}
        <section className='mt-16 flex flex-col gap-12 sm:flex  sm:gap-12 sm:flex-col items-center justify-center'>
            {/* row one */}
            <div className='flex flex-col sm:flex-row gap-12 sm:flex sm:gap-8'>
                <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        {/* <div className='message-icon z-30' /> */}
                        {/* <Image
                            src='/assets/messageIcon.png'
                            style={imageStyle}
                            width={180}
                            height={120}
                            alt='logo'
                        /> */}
                    </div>
                    <h3 className='pt-6 text-lg font-bold font-inter'>Community Support</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Apps keep work and information right at your fingertips—and
                        Slack keeps it all securely.
                    </p>
                </div>
                <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        {/* <div className='message-icon z-30' /> */}
                        {/* <Image
                            src='/assets/messageIcon.png'
                            style={imageStyle}
                            width={180}
                            height={120}
                            alt='logo'
                        /> */}
                    </div>
                    <h3 className='pt-6 text-lg font-bold font-inter'>Security Firstt</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Connect the tools you already use to get more from them every time you work.
                    </p>
                </div>
                <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        {/* <div className='message-icon z-30' /> */}
                        {/* <Image
                            src='/assets/messageIcon.png'
                            style={imageStyle}
                            width={180}
                            height={120}
                            alt='logo'
                        /> */}
                    </div>
                    <h3 className='pt-6 text-lg font-bold font-inter'>24/7 Admin Support</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        You can work with apps in channels, where they’re a seamless part of the conver.
                    </p>
                </div>
            </div>
            {/* row two */}
            <div className='flex flex-col sm:flex-row gap-12 sm:flex sm:gap-8'>
                <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        {/* <div className='message-icon z-30' /> */}
                        {/* <Image
                            src='/assets/messageIcon.png'
                            style={imageStyle}
                            width={180}
                            height={120}
                            alt='logo'
                        /> */}
                    </div>
                    <h3 className='pt-6 text-lg font-bold font-inter'>100+ Themes</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Spend less time tracking down the people needed to get work done.
                    </p>
                </div>
                <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        {/* <div className='message-icon z-30' /> */}
                        {/* <Image
                            src='/assets/messageIcon.png'
                            style={imageStyle}
                            width={180}
                            height={120}
                            alt='logo'
                        /> */}
                    </div>
                    <h3 className='pt-6 text-lg font-bold font-inter'>Fully Integrated</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Skip the follow-ups and back-and -forth. Easily standardize how you collect 
                    </p>
                </div>
                <div className='px-4 w-64 h-60 bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        {/* <div className='message-icon z-30' /> */}
                        {/* <Image
                            src='/assets/messageIcon.png'
                            style={imageStyle}
                            width={180}
                            height={120}
                            alt='logo'
                        /> */}
                    </div>
                    <h3 className='pt-6 text-lg font-bold font-inter'>Monthly Update</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi filter drop-shadow-lg'>
                        Take control of your work day. In a just a few minutes, create a customized workflow 
                    </p>
                </div>
            </div>

            {/* how it works */}
            <div className='sm:flex mt-28  sm:gap-32'>
                <div className=' sm:relative sm:-top-40 flex flex-col items-center justify-center gap-8'>
                    <h1 className='hero-heading  text-4xl sm:text-6xl font-semibold font-inter sm:relative sm:-left-14'>
                        How it works?
                    </h1>
                    <p className='max-w-lg text-left text-primary filter drop-shadow-lg'>
                        Resolving neglected sir tolerably but existence conveying for. Day his 
                        put off unaffected literature partiality inhabiting.
                    </p>
                    <Image 
                        src='/assets/Card01.png'
                        width={475}
                        height={580}
                    />

                </div>
                <div className='sm:flex sm:flex-col sm:gap-12'>
                    <Image 
                        src='/assets/Card02.png'
                        width={450}
                        height={500}
                    />
                    <Image 
                        src='/assets/Card03.png'
                        width={450}
                        height={500}
                    />
                </div>
            </div>
        </section>
        <Image 
            src='/assets/upArrow.png'
            width={318}
            height={274}
            className='hidden sm:flex absolute inset-x-0 down-arrow'
        />
    </>
  )
}

export default Services