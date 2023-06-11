import Nav from "@components/Nav";
import Image from "next/image";

export default function Home() {
  return (
    <header className="w-full h-3/4 bg-black-600">
      <nav className="nav">
          <Nav />
      </nav>
      <div>
        <Image 
          src='/assets/downArrow.png'
          alt='logo'
          width={163}
          height={140}
          className="header-arrow"
        />
      </div>
      <section className="hero"> 

      </section>
    </header>
  )
}
