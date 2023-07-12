import React from 'react'
import Image from 'next/image'
import {BiSupport} from 'react-icons/bi'
import {MdSecurity, MdOutlineContactSupport, MdOutlineFormatPaint} from 'react-icons/md'
import {TbWorld} from 'react-icons/tb'
import {RxUpdate} from 'react-icons/rx'

const Services = () => {

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
        <section className='flex flex-col gap-12 sm:flex  sm:gap-12 sm:flex-col items-center justify-center'>
            {/* row one */}
            <div className='flex flex-col sm:flex-row gap-12 sm:flex sm:gap-8'>
                <div className='pl-[2.19rem] pr-[1.69rem] pt-[2.25rem] w-[17.62rem] h-[16.85rem] bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                        <BiSupport className='w-[27.42px] h-[27.57px] bg-secondary'/>
                    </div>
                    <h3 className='pt-[2.5rem] pb-4 text-lg font-bold font-inter text-primary'>Community Support</h3>
                    <p className='pt-1 max-w-xm text-primary font-satoshi '>
                        Apps keep work and information right at your fingertips—and
                        Slack keeps it all securely.
                    </p>
                </div>
                <div className='pl-[2.19rem] pr-[1.69rem] pt-[2.25rem] w-[17.62rem] h-[16.85rem] bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                     <MdSecurity className='w-[27.42px] h-[27.57px] icon__color'/>
                    </div>
                    <h3 className='pt-[2.5rem] pb-4 text-lg font-bold font-inter text-primary'>Security Firstt</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi '>
                        Connect the tools you already use to get more from them every time you work.
                    </p>
                </div>
                <div className='pl-[2.19rem] pr-[1.69rem] pt-[2.25rem] w-[17.62rem] h-[16.85rem] bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                     <MdOutlineContactSupport className='w-[27.42px] h-[27.57px] icon__color'/>
                    </div>
                    <h3 className='pt-[2.5rem] pb-4 text-lg font-bold font-inter text-primary'>24/7 Admin Support</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi '>
                        You can work with apps in channels, where they’re a seamless part of the conver.
                    </p>
                </div>
            </div>
            {/* row two */}
            <div className='flex flex-col sm:flex-row gap-12 sm:flex sm:gap-8'>
                <div className='pl-[2.19rem] pr-[1.69rem] pt-[2.25rem] w-[17.62rem] h-[16.85rem] bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                      <MdOutlineFormatPaint className='w-[27.42px] h-[27.57px] icon__color'/>
                    </div>
                    <h3 className='pt-[2.5rem] pb-4 text-lg font-bold font-inter text-primary'>100+ Themes</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi '>
                        Spend less time tracking down the people needed to get work done.
                    </p>
                </div>
                <div className='pl-[2.19rem] pr-[1.69rem] pt-[2.25rem] w-[17.62rem] h-[16.85rem] bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                      <TbWorld className='w-[27.42px] h-[27.57px] icon__color'/>
                    </div>
                    <h3 className='pt-[2.5rem] pb-4 text-lg font-bold font-inter text-primary'>Fully Integrated</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi '>
                        Skip the follow-ups and back-and -forth. Easily standardize how you collect 
                    </p>
                </div>
                <div className='pl-[2.19rem] pr-[1.69rem] pt-[2.25rem] w-[17.62rem] h-[16.85rem] bg-white border-lg shadow-sm'>
                    <div className='relative z-20 bg-gray-400 bg-opacity-25 filter drop-shadow-lg rounded-full w-12 h-12 flex items-center justify-center'>
                     <RxUpdate className='w-[27.42px] h-[27.57px] icon__color'/>
                    </div>
                    <h3 className='pt-[2.5rem] pb-4 text-lg font-bold font-inter text-primary'>Monthly Update</h3>
                    <p className='pt-2 max-w-xm text-primary font-satoshi '>
                        Take control of your work day. In a just a few minutes, create a customized workflow 
                    </p>
                </div>
            </div>

            {/* how it works */}
            <div className='sm:flex mt-28  sm:gap-32'>
                <div className=' sm:relative sm:-top-40 flex flex-col items-center justify-center gap-8'>
                    <h1 className='hero-heading  text-4xl sm:text-6xl font-semibold font-inter sm:relative sm:-left-14 md:left-0'>
                        How it works?
                    </h1>
                    <p className='max-w-lg text-left text-primary filter drop-shadow-lg lg:text-center'>
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
            className='hidden lg:flex absolute inset-x-0 down-arrow'
        />
    </>
  )
}

export default Services