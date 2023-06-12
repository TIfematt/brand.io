import Nav from "@components/Nav";
import Image from "next/image";

export default function Home() {
  return (
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
      <section className="hero flex flex-col sm:flex-row relative sm:left-60 gap-20 lg:gap-40"> 
        <div className="flex flex-col gap-8">
          <h1 className="-mt-12 hero-heading max-w-xl text-8xl font-extrabold ">
            Tell a better brand story
          </h1>
          <p className="mt-6 text-primary max-w-xl text-xl font-bold filter drop-shadow-lg">
            Warrant present garrets limited cordial in inquiry to. 
            Supported me sweetness behaviour shameless excellent so arranging.
          </p>
          <div className="flex gap-5">
            <button className="w-44 h-12 btn rounded-lg text-white font-bold filter drop-shadow-lg">Get Started</button>
            <button className="w-44 h-12 btn-white rounded-lg font-bold border-2 filter drop-shadow-lg"></button>
          </div>
        </div>
        <div className="relative -top-40">
          <Image 
            src='/assets/HeroImage.png'
            alt="hero-image"
            width={705}
            height={605}
            className=""
          />
        </div>
      </section>
      <div />
    </header>
  )
}
