import Link from 'next/link'
import React from 'react'

export default function Banner() {
  return (
    <div className='flex lg:flex-row justify-between items-center px-5 bg-orange-100  '>
        <div className=' flex-1 space-y-5 justify-center items-center text-center'>
            <h2 className='text-4xl font-extrabold'>
                We care for you.
            </h2>
            <p className='font-semibold text-primary my-3'>
                Buy our service with up to 15% discount!
            </p>
           <Link href={"/services"} className="btn btn-primary btn-outline mb-2">Get Started</Link>
        </div>
        <div className="flex-1 hidden md:flex justify-end">
            <div className="relative group">
                <img 
                    src={"/assets/sick.png"} 
                    className="w-full max-w-[550px] h-auto object-cover rounded-2xl shadow-2xl transition-transform duration-300 group-hover:scale-105"
                    alt="Sick People Care" 
                />
            </div>
        </div>
    </div>
  )
}