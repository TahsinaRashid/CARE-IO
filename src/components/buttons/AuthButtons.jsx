"use client";
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link';
import React from 'react'

export default function AuthButtons() {
    const session=useSession();
  return (
    <div>
        {
            session.status=="authenticated" ?( 
            <>
            <button onClick={()=>signOut()} className="btn btn-primary btn-outline">Logout</button></> 
            ) : (
            <>
            <Link href={"/login"} className="btn btn-primary btn-outline">Login</Link>
            </>
       ) }
    </div>
  )
}
