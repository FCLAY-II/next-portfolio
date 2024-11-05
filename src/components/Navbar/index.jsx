'use client'

import Link from "next/link";
import {links, socialLinks} from "@/components/Navbar/constants";
import {useState} from "react";
import Image from "next/image";
import NavLink from "@/components/NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-10 lg:px-14 xl:px-36 text-xl">
      {/*Desktop MenuList*/}
      <div className='hidden md:flex gap-4 w-1/3 whitespace-nowrap'>
        {links.map(({url, title}) => (
          <NavLink url={url} title={title} key={title}  />
        ))}
      </div>

      {/*Logo*/}
      <div className='lg:hidden xl:flex w-1/3 justify-center min-w-min'>
        <Link href='/' className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
          <span className='text-white mr-1'>Kiryusha</span>
          <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
        </Link>
      </div>
      
      {/*SocialLinks*/}
      <div className='hidden md:flex gap-4 w-1/3 justify-center'>
        {socialLinks.map(({href, src, width, height, alt}) => (
          <Link key={alt} href={href} target="_blank">
            <Image src={src} alt={alt} width={width} height={height}/>
          </Link>
        ))}
      </div>

      {/*Menu*/}
      <div className='md:hidden'>
        {/*MenuButton*/}
        <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={() => setOpen(!open)}>
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
          <div className='w-10 h-1 bg-black rounded'></div>
        </button>

        {/*MenuList*/}
        {open && <div
          className='absolute top-0 left-0 h-screen w-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl'>
          {links.map(({url, title}) => (
            <Link key={title} href={url}>{title}</Link>
          ))}
        </div>}
      </div>
    </div>
  )
}

export default Navbar;