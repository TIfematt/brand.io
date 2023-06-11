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
        <div className="flex gap-11 text-primary">
            <Link href='/' className="">Home</Link>
            <Link href='/about'>About-Us</Link>
            <Link href='/services'>Services</Link>
            <Link href='/contact'>Contact-Us</Link>
        </div>
        <div>
            <button>Login</button>
        </div>
    </nav>
  )
}

export default Nav