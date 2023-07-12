import React from 'react';
import Image from "next/image";

const Testimonials = () => {
    const testimonialCard = (props) => {
        return (
            <div className='w-96 h-72 m-16 p-8 flex flex-col items-center bg-white rounded-bg shadow gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="101" height="17" viewBox="0 0 101 17" fill="none">
                    <path d="M9.18206 0L11.2436 5.87336L17.9147 5.87336L12.5176 9.50329L14.5791 15.3766L9.18206 11.7467L3.78498 15.3766L5.84648 9.50329L0.449402 5.87336L7.12056 5.87336L9.18206 0Z" fill="#FBB040"/>
                    <path d="M29.8412 0L31.9027 5.87336L38.5739 5.87336L33.1768 9.50329L35.2383 15.3766L29.8412 11.7467L24.4442 15.3766L26.5057 9.50329L21.1086 5.87336L27.7797 5.87336L29.8412 0Z" fill="#FBB040"/>
                    <path d="M50.5024 0L52.5639 5.87336L59.235 5.87336L53.838 9.50329L55.8995 15.3766L50.5024 11.7467L45.1053 15.3766L47.1668 9.50329L41.7697 5.87336L48.4409 5.87336L50.5024 0Z" fill="#FBB040"/>
                    <path d="M71.1586 0L73.2201 5.87336L79.8913 5.87336L74.4942 9.50329L76.5557 15.3766L71.1586 11.7467L65.7615 15.3766L67.823 9.50329L62.426 5.87336L69.0971 5.87336L71.1586 0Z" fill="#FBB040"/>
                    <path d="M91.8198 0L93.8813 5.87336L100.552 5.87336L95.1553 9.50329L97.2168 15.3766L91.8198 11.7467L86.4227 15.3766L88.4842 9.50329L83.0871 5.87336L89.7583 5.87336L91.8198 0Z" fill="#FBB040"/>
                </svg>
                <div className='text-center font-4 text-primary leading-7'>
                    {props.desc}
                </div>
                <div className='flex flex-col items-center gap-[5px]'>
                    <h3 className='text-primary text-center font-inter text-sm font-semibold'>
                        {props.name}
                    </h3>
                    <p className='text-primary text-center font-inter text-sm font-normal'>
                        Client from {props.location}
                    </p>
                </div>
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
        <div className='sm:flex sm:flex-wrap'>
            {testimonialCard({
                desc:"Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.",
                name:"Chris Evans",
                location: "USA"
            })}
            {testimonialCard({
                desc:"Certainty say suffering his him collected intention promotion. Hill sold ham men made lose case. Views abode law heard jokes too.",
                name:"Andrew Chris",
                location: "Uganda"
            })}
            {testimonialCard({
                desc:"Up maids me an ample stood given. Certainty say suffering his him collected intention promotion.",
                name:"Andrew Chris",
                location: "Uganda"
            })}
        </div>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="127" height="81" viewBox="0 0 127 81" fill="none">
                <g filter="url(#filter0_i_36_20513)">
                    <rect width="120" height="66" rx="33" fill="white"/>
                </g>
                <g filter="url(#filter1_d_36_20513)">
                    <rect x="62" y="8" width="50" height="50" rx="25" fill="url(#paint0_linear_36_20513)"/>
                    <rect x="62" y="8" width="50" height="50" rx="25" fill="url(#paint1_linear_36_20513)"/>
                </g>
                <path d="M97 32.9998L91.9713 28.833L91.9713 32.1664L77 32.1664L77 33.8331L91.9713 33.8331L91.9713 37.1665L97 32.9998Z" fill="white"/>
                <path d="M20 33.1667L25.0287 37.3335L25.0287 34.0001L40 34.0001L40 32.3334L25.0287 32.3334L25.0287 29L20 33.1667Z" fill="url(#paint2_linear_36_20513)"/>
                <defs>
                    <filter id="filter0_i_36_20513" x="0" y="0" width="120" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="1"/>
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_36_20513"/>
                    </filter>
                    <filter id="filter1_d_36_20513" x="47" y="1" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dy="8"/>
                    <feGaussianBlur stdDeviation="7.5"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.282118 0 0 0 0 0.282118 0 0 0 0 0.541667 0 0 0 0.08 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_36_20513"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_36_20513" result="shape"/>
                    </filter>
                    <linearGradient id="paint0_linear_36_20513" x1="62" y1="8" x2="121.513" y2="25.3271" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#4EF0F0"/>
                    <stop offset="1" stop-color="#05C580"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_36_20513" x1="62.8958" y1="11.8889" x2="114.687" y2="11.859" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#AE67FA"/>
                    <stop offset="0.973958" stop-color="#F49867"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_36_20513" x1="20" y1="29" x2="21.2864" y2="39.6037" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#AE68FA"/>
                    <stop offset="1" stop-color="#F1966E"/>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </section>
  )
}

export default Testimonials