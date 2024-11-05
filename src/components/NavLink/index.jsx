'use client'

import {usePathname} from "next/navigation";
import Link from "next/link";

const NavLink = ({ url, title }) => {
  const pathname = usePathname();

  return (
    <Link href={url} className={`rounded p-1 ${pathname === url && 'bg-black text-white'}`}>
      {title}
    </Link>
  )
}

export default NavLink;