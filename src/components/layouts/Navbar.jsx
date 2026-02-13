import Link from 'next/link'
import React from 'react'
import NavLink from '../buttons/NavLink'

export default function Navbar() {
    const nav = (<>
    <li className='flex justify-between items-center gap-5'>
        <NavLink href={"/"}>Home</NavLink>
        <NavLink href={"/services"}>Services</NavLink>
        <NavLink href={"/about"}>About Us</NavLink>
        <NavLink href={"/contact"}>Contact</NavLink>
    </li>
    </>
    );
  return (
    <div>
        <div className="navbar bg-orange-50 shadow-lg">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
    <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-200 z-1 mt-3 w-52 p-2 shadow">
        {nav}
      </ul>
    </div>
    <Link href={"/"} className="btn btn-ghost text-xl">Care.IO</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
   {nav}
  </div>
  <div className="navbar-end">
    <Link href={"/login"} className="btn btn-primary">Login</Link>
  </div>
</div>
    </div>
  )
}
