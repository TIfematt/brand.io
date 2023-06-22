import React from 'react';
import Image from "next/image";

const Testimonials = () => {
    const testimonialCard = (props) => {
        return (
            <div className=''>

            </div>
        )
    }

  return (
    <section className='flex flex-col items-center justify-center mt-32'>
        <h1 className='hero-heading text-4xl sm:text-6xl font-semibold font-inter max-w-3xl text-center'>
            What Our Clients Say <span>About Us</span>
        </h1>
        <p className='max-w-lg text-center text-primary filter drop-shadow-lg mt-4'>
            Community development is often linked with community work 
            or community planning, and may involve stakeholders, foundations,
        </p>
        <div className='absolute left-0 '> 
            <Image 
            src='/assets/Ellipse.png'
            width={727}
            height={727}
        />
        </div>
        <div className=''>

        </div>
    </section>
  )
}

export default Testimonials