import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa'


const Footer = () => {
  return (
    <footer className='pt-8 md:pt-0 flex flex-col items-center justify-center sm:h-[40rem]  md:h-[80rem] lg:h-[40rem] md:pb-[400px] lg:pb-0'>
      <h1 className='hero-heading text-4xl sm:text-6xl font-semibold max-w-[25rem] sm:max-w-[50rem] text-center'>
        Social Media Its Ways Of Our Excellence.
      </h1>
      <form className='mt-8 pl-[1.5rem]'>
        <input 
          className='h-[4.56rem] w-[27.8rem] bg-tertiaryInput text-white pl-4 rounded-lg' 
          placeholder='Enter Your Email' 
          type='text'
        />
        <button 
          className='flex btn h-[4.4rem] w-[12.312rem] text-white rounded-lg relative -top-[4.5rem] p-[1.5rem] left-[15.5rem]'
          >
            Get Started
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="50" 
            height="50" 
            viewBox="0 0 50 54" 
            fill="none" 
            className='relative left-[1.8rem] -top-[1.4rem]'
            >
              <rect opacity="0.5" width="50" height="54" rx="6" fill="white"/>
              <path d="M29.5831 22.2613C29.2787 22.6086 29.2799 23.1703 29.5857 23.5159L32.3264 26.6129L15.7812 26.6129C15.3498 26.6129 15 27.0101 15 27.5C15 27.9899 15.3498 28.3871 15.7812 28.3871L32.3265 28.3871L29.5857 31.4841C29.2799 31.8297 29.2787 32.3914 29.5831 32.7387C29.8875 33.086 30.3821 33.0872 30.688 32.7417L34.7701 28.1288C34.7704 28.1285 34.7706 28.1282 34.7708 28.1279C35.0759 27.7823 35.0769 27.2188 34.7709 26.8721C34.7706 26.8718 34.7704 26.8715 34.7702 26.8712L30.688 22.2583C30.3822 21.9128 29.8875 21.914 29.5831 22.2613Z" fill="white"/>
          </svg>
        </button>
      </form>
      <div className='flex items-center gap-4'>
        <Image 
          src='/assets/avatar.png'
          width={59}
          height={59}
        />
        <a href='#' className='underline'>Watch Our Video</a>
      </div>
      <div className='flex flex-col lg:flex-row lg:justify-center lg:relative lg:gap-[9.94rem] lg:top-[3rem] items-center '>
        <div className='flex flex-col sm:flex-row sm:gap-8 lg:gap-[17rem] items-center justify-center pt-12'>
          <Link href='/' className="">
              <Image
                  src='/assets/logo.png'
                  alt="logo"
                  width={120}
                  height={34}
              />
          </Link>
          <div className="flex gap-11 text-primary font-bold font-inter sm:relative sm:-top-[2px]">
              <Link href='/' className="nav-link-home">Home</Link>
              <Link href='/about' className="nav-link">About-Us</Link>
              <Link href='/services' className="nav-link">Services</Link>
              <Link href='/contact' className="nav-link">Contact-Us</Link>
          </div>
        </div>
        <div className='flex gap-8 text-primary py-8 lg:py-0 lg:relative lg:top-[15px]'>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedinIn />
        </div>
      </div>
      <div className='hidden sm:flex w-[70rem] h-[0.0625rem] bg-primary lg:mt-[3.81rem]'/>
      <p className='text-copyright lg:pt-[2.12rem] lg:pb-[1.88rem]'>
        Copyright &copy; Brands.io Developed by Boluwatife
      </p>
      <div className='hidden lg:flex absolute right-0'>
        <Image 
          src='/assets/decorator.png'
          width={318}
          height={274}
        />
      </div>
    </footer>
  )
}

export default Footer