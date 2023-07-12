import Nav from "@components/Nav";
import Services from "@components/Services";
import Image from "next/image";
import Pricing from "@components/Pricing";
import Testimonials from "@components/Testimonials";
import CTA from "@components/CTA";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <header className="w-full -mt-6 sm:overflow-x-hidden">
        <Nav />
        <div className="relative">
          <Image 
            src='/assets/downArrow.png'
            alt='logo'
            width={163}
            height={140}
            className="header-arrow hidden sm:flex"
          />
        </div>
        <section className="hero flex flex-col md:flex-row relative sm:left-60 gap-20 lg:gap-40"> 
          <div className="flex flex-col gap-8 md:-mt-12 md:-ml-12">
            <h1 className="ml-6 mt-10 sm:-mt-12 hero-heading sm:max-w-xl text-6xl lg:text-8xl font-extrabold ">
              Tell a better brand story
            </h1>
            <p className="mx-6 sm:mt-6 text-primary sm:max-w-xl text-xl font-bold filter drop-shadow-lg">
              Warrant present garrets limited cordial in inquiry to. 
              Supported me sweetness behaviour shameless excellent so arranging.
            </p>
            <div className="flex gap-5 mx-6">
              <button className="w-44 h-12 btn rounded-lg text-white font-bold filter drop-shadow-lg">Get Started</button>
              <button className="w-44 h-12 btn-white rounded-lg font-bold border-2 filter drop-shadow-lg"></button>
            </div>
          </div>
          <div className="relative  sm:-top-40">
            <Image 
              src='/assets/HeroImage.png'
              alt="hero-image"
              width={705}
              height={605}
              className=""
            />
          </div>
        </section>
      </header>
      {/* Brands worked with */}
      <section className="-mt-12 sm:-mt-20 mx-12 sm:mx-24 md:mx-60 flex items-center justify-center flex-col gap-20">
        <Image 
          src='/assets/brands.png'
          alt="brands"
          width={1130}
          height={32}
        />
        {/* What we offer */}
        <Services />
      </section>
      <div className="rectangle-bg "/>
      {/* <div className="circle-bg "/> */}
      {/* Our plans section */}
      <Pricing />
      {/* Testimonial section */}
      <Testimonials />
      <CTA />
      <Footer />
    </>

  )
}
