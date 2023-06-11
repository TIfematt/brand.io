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
    <nav className=" mx-10 my-5 flex sm:mx-5 sm:my-9 sm:justify-around sm:items-center"> 
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
        <div className="sm:hidden flex">
            <GiHamburgerMenu  onClick={() => setToggle(true) } />
            {toggle && (
                <motion.div
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut' }}
                >
                    <GrClose onClick={() => setToggle(false)} />
                    <ul >
                        <li><Link href='/' className="nav-link-home">Home</Link></li>
                        <li><Link href='/about' className="nav-link">About-Us</Link></li>
                        <li><Link href='/services' className="nav-link">Services</Link></li>
                        <li><Link href='/contact' className="nav-link">Contact-Us</Link></li>
                    </ul>

                </motion.div>
            )}
        </div>

    </nav>
  )
}

export default Nav