"use client"

import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { useState } from "react";
import { motion } from 'framer-motion';

const Nav = () => {

    const [toggle, setToggle] = useState(false)

  return (
    <nav className=" mx-10 my-10 flex justify-between sm:mx-5 sm:my-12 sm:justify-around sm:items-center"> 
        <Link href='/' className="">
            <Image
                src='/assets/logo.png'
                alt="logo"
                width={120}
                height={34}
            />
        </Link>
        {/* Desktop Navigation */}
        <div className="sm:flex hidden flex gap-11 text-primary filter drop-shadow-lg font-bold font-inter ">
            <Link href='/' className="nav-link-home">Home</Link>
            <Link href='/about' className="nav-link">About-Us</Link>
            <Link href='/services' className="nav-link">Services</Link>
            <Link href='/contact' className="nav-link">Contact-Us</Link>
        </div>
        <button className="sm:flex hidden btn w-24 h-12 rounded-lg text-white font-bold flex items-center justify-center">
            Login
        </button>

        {/* mobile Navigation */}
        <div className="sm:hidden flex items-center h-full ">
            <GiHamburgerMenu className="w-12 h-12" onClick={() => setToggle(true) } />
            {toggle && (
                <motion.div
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                    className="nav-mobile bg-grey-600"
                >
                    <GrClose onClick={() => setToggle(false)} className="nav-close"/>
                    <ul className="flex flex-col gap-y-7 -ml-1">
                        <li className=""><Link href='/' className="nav-link-home font-bold">Home</Link></li>
                        <li><Link href='/about' className="nav-link font-bold">About-Us</Link></li>
                        <li><Link href='/services' className="nav-link font-bold">Services</Link></li>
                        <li><Link href='/contact' className="nav-link font-bold">Contact-Us</Link></li>
                    </ul>
                    <button className="btn w-24 h-12 rounded-lg text-white font-bold flex items-center justify-center">
                        Login
                    </button>

                </motion.div>
            )}
        </div>

    </nav>
  )
}

export default Nav