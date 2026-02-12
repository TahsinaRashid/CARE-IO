import { ServiceSkeleton } from '@/components/skeleton/ServiceSkeleton'
import React from 'react'

export default function loading() {
  return (
    <div className='grid md:grid-cols-3 gap-5'>
        {[...Array(9)].map((_, index)=>(
            <ServiceSkeleton key={index}></ServiceSkeleton>
        ))}
    </div>
  )
}
