import Nav from "@components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <header className="w-full -mt-6">
      <Nav />
      <div className="fixed">
        <Image 
          src='/assets/downArrow.png'
          alt='logo'
          width={163}
          height={140}
          className="header-arrow hidden sm:flex"
        />
      </div>
      <section className="hero flex mx-10 my-10 sm:mx-5 sm:my-12 "> 
        <div className="flex flex-col">
          <h1 className="hero-heading max-w-xl text-8xl font-extrabold ">
            Tell a better brand story
          </h1>
          <p>
            Warrant present garrets limited cordial in inquiry to. 
            Supported me sweetness behaviour shameless excellent so arranging.
          </p>
          <div>
            <button>Get Started</button>
            <button>contact Us</button>
          </div>
        </div>
        <div>
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
