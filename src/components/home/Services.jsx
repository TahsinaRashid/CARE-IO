import React from 'react'
import services from '@/components/data/services.json';
import ServiceCard from '../cards/ServiceCard';
import { getServices } from '@/actions/server/service';


export default async function Services() {
    const services=(await getServices()) || [];
  return (
    <div className="">
     <h2 className="text-xl lg:text-3xl font-bold text-center mb-5">Explore our services</h2>
     <div className='grid md:grid-cols-3 gap-5 px-5'>
        {
            services.map((service) => {
           const plainService = JSON.parse(JSON.stringify(service));

           return (
          <ServiceCard 
          key={plainService._id} 
          service={plainService} 
        />
      );
    })
        }
     </div>
    </div>
  )
}
