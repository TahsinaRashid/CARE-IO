import { getSingleService } from '@/actions/server/service';
import Image from 'next/image';
import React from 'react'

export default async function ServiceDetails({params}) {
    const {id}=await params;
    const service = await getSingleService(id);
    console.log(service);

    const data = JSON.parse(JSON.stringify(service));

    if (!data) {
        return <div className="text-center mt-20">Service not found!</div>;
    }

    const{
        name,
        description,
        price_hour,
        image,
        features,
    } =service;
    const discount = 15;
    const discountedPrice=price_hour-(price_hour*discount)/100;

  return (
    <div className='max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div className='rounded-xl overflow-hidden'>
            <Image
            width={600}
            height={420}
            src={image}
            alt={name}
            className='w-full h-[420px] object-cover'/>

        </div>
        <div>
            <h1 className='text-3xl font-bold mb-3'>{name}</h1>
            <div className='mb-4'>
                <span className='text-2xl font-bold text-primary'>
                ৳ {discountedPrice} / hour
                </span>
                {discount > 0 && (
                    <span className='line-through text-gray-500 ml-3'>
                       ৳ {price_hour} / hour 
                    </span>
                )}


            </div>
            <div className='mt-8 space-y-4 text-gray-700 leading-relaxed'>
                {description?.split("\n\n").map((para,idx)=>(
                    <p key={idx}>{para}</p>
                ))}
            </div>

            <div className='mt-6'>
                <h3 className='font-semibold mb-2'>Features:</h3>
                <ul className='list-disc list-inside space-y-1'>
                    {features.map((item,i)=>(
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <button className='btn btn-primary mt-8 w-full md:w-auto px-10 text-white'>
                    Book This Service
                </button>
        </div>

    </div>
  )
}
