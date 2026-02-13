import Link from 'next/link';
import React from 'react'
import { TbFaceIdError } from "react-icons/tb";

export const metadata = {
  title: "404",
  description: "Baby Sitting & Elderly Care Service Platform",
};

export default function NotFound() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
        <TbFaceIdError size={100} className='text-primary'/>
        <h2 className='text-4xl font-bold mb-4'>Opps! Page Not Found</h2>
        <Link href={"/"} className="btn btn-primary btn-outline">Back To Home</Link>
    </div>
  )
}
