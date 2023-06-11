import Link from "next/link"
import Image from "next/image"

const Nav = () => {

  return (
    <nav className="mx-5 my-9 flex justify-around items-center"> 
        <Link href='/' className="">
            <Image
                src='/assets/logo.png'
                alt="logo"
                width={120}
                height={34}
            />
        </Link>
        <div className="flex gap-11 text-primary filter drop-shadow-lg font-bold font-inter ">
            <Link href='/' className="nav-link-home">Home</Link>
            <Link href='/about' className="nav-link">About-Us</Link>
            <Link href='/services' className="nav-link">Services</Link>
            <Link href='/contact' className="nav-link">Contact-Us</Link>
        </div>
        <div>
            <button className="w-24 h-12 rounded-bg bg-red-600 text-white font-bold ">Login</button>
        </div>
    </nav>
  )
}

export default Nav