"use client"
import Link from 'next/link';
import React from 'react'
import { BiSolidError } from "react-icons/bi";


export default function Error() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
        <BiSolidError size={100} className='text-primary'/>
        <h2 className='text-4xl font-bold mb-4'>Opps! Something went wrong</h2>
        <Link href={"/"} className="btn btn-primary btn-outline">Back To Home</Link>
    </div>
  )
}
